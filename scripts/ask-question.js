import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"
// Gunakan LLM sesuai preferensi (Ollama, OpenAI, Groq, dll)
import { ChatOllama } from "@langchain/ollama"
import { PromptTemplate } from "@langchain/core/prompts"

async function askQuestion(question) {
  // 1. Inisialisasi koneksi ke DB yang sama dengan Embeddings yang sama
  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
  })

  const vectorStore = new Chroma(embeddings, {
    collectionName: "ecommerce_rag",
    url: "http://localhost:8000",
  })

  // 2. Cari dokumen relevan berdasarkan pertanyaan (Retrieval)
  // Mencari 3 dokumen paling mirip
  const results = await vectorStore.similaritySearch(question, 3)

  // Gabungkan teks dari hasil pencarian menjadi satu string konteks
  const contextText = results.map((doc) => doc.pageContent).join("\n\n")

  // 3. Gabungkan Konteks ke Prompt LLM
  const promptTemplate = PromptTemplate.fromTemplate(`
    Anda adalah asisten toko elektronik yang membantu pelanggan.
    Gunakan konteks berikut untuk menjawab pertanyaan pengguna. 
    Jika Anda tidak tahu jawabannya berdasarkan konteks, katakan bahwa Anda tidak tahu.

    Konteks:
    {context}

    Pertanyaan Pengguna: {question}
    
    Jawaban:
  `)

  const prompt = await promptTemplate.format({
    context: contextText,
    question: question,
  })

  // 4. Minta LLM untuk menjawab (Generation)
  const llm = new ChatOllama({
    model: "llama3", // Gunakan model LLM yang Anda punya
    baseUrl: "http://localhost:11434",
  })

  const response = await llm.invoke(prompt)
  console.log(response.content)
}

// Coba test sistem RAG-nya
askQuestion(
  "Berapa harga laptop Axiom Budget 14 dan apa cocok untuk mahasiswa?"
)
