// scripts/reset-db.mjs
import { ChromaClient } from "chromadb"

async function deleteCollection() {
  const collectionName = "ecommerce_rag"
  const client = new ChromaClient({ path: "http://localhost:8000" })

  try {
    console.log(`Mencoba menghapus collection: '${collectionName}'...`)

    await client.deleteCollection({
      name: collectionName,
    })

    console.log(
      `✅ Collection '${collectionName}' berhasil dihapus dari Chroma DB!`
    )
  } catch (error) {
    console.error(`❌ Gagal menghapus collection: ${error.message}`)
  }
}

deleteCollection()
