import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"

async function ingestSOP() {
  console.log("1. Membaca file PDF SOP Perusahaan...")
  // Load file PDF dari folder docs
  const loader = new PDFLoader("../docs/sop_perusahaan.pdf")
  const rawDocs = await loader.load()

  console.log("2. Memotong dokumen menjadi paragraf kecil (Chunking)...")
  // Potong teks otomatis agar tidak kepanjangan
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, // Maksimal 1000 karakter per potongan
    chunkOverlap: 200, // Sisakan 200 karakter overlap agar konteks antarpotongan tidak terputus
  })
  const chunkedDocs = await textSplitter.splitDocuments(rawDocs)

  console.log(`Berhasil dipotong menjadi ${chunkedDocs.length} bagian.`)

  console.log("3. Memasukkan ke Chroma DB...")
  const embeddings = new OllamaEmbeddings({
    model: "bge-m3",
    baseUrl: "http://localhost:11434",
  })

  await Chroma.fromDocuments(chunkedDocs, embeddings, {
    collectionName: "ecommerce_rag", // Masukkan ke koleksi yang sama atau koleksi baru
    url: "http://localhost:8000",
  })

  console.log("✅ SOP Perusahaan berhasil ditambahkan ke otak AI!")
}

ingestSOP().catch(console.error)
