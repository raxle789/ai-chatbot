import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"

async function ingestPDF() {
  console.log("1. Membaca file PDF...")
  // Load file PDF dari folder docs
  const loader = new PDFLoader("./docs/refactoring_ui_compress.pdf")
  const rawDocs = await loader.load()

  console.log("2. Memotong dokumen menjadi paragraf kecil (Chunking)...")
  // Potong teks otomatis agar tidak kepanjangan
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, // Maksimal 1000 karakter per potongan
    chunkOverlap: 200, // Sisakan 200 karakter overlap agar konteks antarpotongan tidak terputus
  })
  const chunkedDocs = await textSplitter.splitDocuments(rawDocs)
  const enrichedDocs = chunkedDocs.map((doc) => {
    // PDFLoader biasanya menyimpan info di doc.metadata.loc.pageNumber
    const pageNum = doc.metadata?.loc?.pageNumber || "Tidak diketahui"
    const cleanMetadata = {
      source: doc.metadata.source, // Nama/path asal file, ini dimaafkan karena String
      page_number: pageNum, // Nomor halaman (Number)
    }

    return {
      // Sisipkan info ke bagian paling atas dari setiap chunk
      pageContent: `[Sumber Dokumen: Halaman ${pageNum}]\n${doc.pageContent}`,
      metadata: cleanMetadata,
    }
  })

  console.log(`Berhasil dipotong menjadi ${enrichedDocs.length} bagian.`)

  console.log("3. Memasukkan ke Chroma DB...")
  const embeddings = new OllamaEmbeddings({
    model: "bge-m3",
    baseUrl: "http://localhost:11434",
  })

  await Chroma.fromDocuments(enrichedDocs, embeddings, {
    collectionName: "design_books", // Masukkan ke koleksi yang sama atau koleksi baru
    url: "http://localhost:8000",
  })

  console.log("✅ Dokumen berhasil ditambahkan ke otak AI!")
}

ingestPDF().catch(console.error)
