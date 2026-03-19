import { groq } from "@ai-sdk/groq"
import {
  convertToModelMessages,
  streamText,
  generateText,
  type UIMessage,
} from "ai"
import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] | any } = await req.json()
  // const userQuestion = messages[messages.length - 1]?.content
  const lastMessage = messages[messages.length - 1]
  const userQuestion =
    typeof lastMessage?.content === "string"
      ? lastMessage.content
      : (lastMessage?.parts?.[0] as any)?.text || ""

  const llmOptions = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"]

  // Ekstrak esensi pertanyaan untuk dicarikan ke Chroma
  const { text: searchKeyword } = await generateText({
    model: groq(llmOptions[1]),
    system: `Anda adalah mesin pencari. Ubah pertanyaan user menjadi bentuk kata kunci pencarian yang sangat ringkas untuk mencari produk di database. Abaikan sapaan atau kata taya. Contoh: "apakah kamu tau harga laptop axiom 15?" -> "Laptop Axiom 15". "Berapa stok headphone studio x7?" -> "Headphone Studio X7 stok". HANYA output kata kunci, jangan tambah kata lain.`,
    prompt: userQuestion,
  })

  console.log(`🔑 Keyword pencarian Chroma DB: ${searchKeyword}`)

  // 1. Embedding pertanyaan user pakai Ollama
  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
  })

  // 2. Load ChromaDB collection
  const vectorStore = await Chroma.fromExistingCollection(embeddings, {
    collectionName: "ecommerce_rag",
    url: "http://localhost:8000",
  })

  // 3. Cari dokumen relevan
  const retriever = vectorStore.asRetriever(6)
  const relevantDocs = await retriever.invoke(userQuestion)
  // const context = relevantDocs.map((doc) => doc.pageContent).join("\n\n")
  const context = relevantDocs
    .map((doc) => {
      let docContext = doc.pageContent

      if (doc.metadata) {
        if (doc.metadata.price) docContext += `\nHarga: Rp${doc.metadata.price}`
        if (doc.metadata.stock) docContext += `\nStok: ${doc.metadata.stock}`
        if (doc.metadata.category)
          docContext += `\nKategori: ${doc.metadata.category}`
      }

      return docContext
    })
    .join("\n\n---\n\n")
  console.log({ userQuestion, context })

  // 4. Stream jawaban dari Groq dengan context RAG
  const result = streamText({
    model: groq(llmOptions[0]),
    system: `You are a helpful assistant. Answer based on the context below.
    If the answer is not in the context, say you don't know.
    
    Context:
    ${context}`,
    // system:
    //   "Anda adalah asisten AI yang membantu. Jawab dengan jelas dan ringkas.",
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
