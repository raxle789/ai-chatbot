// scripts/seed-rag.mjs
import { OllamaEmbeddings } from "@langchain/ollama"
import { Chroma } from "@langchain/community/vectorstores/chroma"
import { documents } from "../docs/rag_dataset.js"

async function runIngest() {
  console.log("Mulai proses embedding...")

  // 1. Inisialisasi model embedding nomic-embed-text via Ollama
  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434", // Sesuaikan jika port Ollama berbeda
  })

  // 2. Format dataset ke struktur Document tipe LangChain
  const formattedDocs = documents.map((item) => {
    // Rangkai metadata menjadi teks tambahan agar ikut di-embed!
    let enrichedContent = item.document

    // Khusus untuk item yang merupakan produk, gabungkan informasi penting
    if (item.metadata && item.metadata.category && item.metadata.price) {
      enrichedContent += `\nSpesifikasi tambahan:
      - Harga: Rp${item.metadata.price.toLocaleString("id-ID")}
      - Brand: ${item.metadata.brand}
      - Kategori: ${item.metadata.category}
      - Stok: ${item.metadata.stock}
      - Rating: ${item.metadata.rating}/5
      - Garansi: ${item.metadata.warranty_years} Tahun
      - Tags: ${item.metadata.tags}
      `
    }

    // Untuk Tipe Review / Guide / dll juga bisa ditambahkan agar konteksnya kuat
    if (item.metadata && item.metadata.type === "review") {
      enrichedContent += `\nReview untuk produk ${item.metadata.product_id} dengan rating ${item.metadata.rating}.`
    }

    return {
      pageContent: enrichedContent,
      metadata: { ...item.metadata, original_id: item.id },
    }
  })

  // 3. Masukkan ke ChromaDB
  // Ini akan secara otomatis menghitung embedding setiap dokumen sebelum disimpan
  await Chroma.fromDocuments(formattedDocs, embeddings, {
    collectionName: "ecommerce_rag",
    url: "http://localhost:8000",
  })

  console.log(
    `✅ Berhasil menyimpan ${formattedDocs.length} dokumen RAG ke Chroma DB!`
  )
}

runIngest().catch(console.error)
