// scripts/ingest.mjs
import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"
// import { TextLoader } from "langchain/document_loaders/fs/text"
import { TextLoader } from "@langchain/community/document_loaders/fs/text"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"

const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
  baseUrl: "http://localhost:11434",
})

const loader = new TextLoader("./docs/data.txt")
const docs = await loader.load()

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 50,
})
const chunks = await splitter.splitDocuments(docs)

await Chroma.fromDocuments(chunks, embeddings, {
  collectionName: "my-collection",
  url: "http://localhost:8000",
})

console.log(`✅ Berhasil ingest ${chunks.length} chunks!`)
