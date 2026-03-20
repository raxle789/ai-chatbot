// scripts/check-chroma.mjs
import { ChromaClient } from "chromadb"

const client = new ChromaClient({ path: "http://localhost:8000" })

// Lihat semua collection
const collections = await client.listCollections()
console.log("Collections:", collections)

const collectionNames = ["ecommerce_rag", "design_books"]

// Lihat isi collection
const collection = await client.getCollection({ name: collectionNames[1] })
const data = await collection.get()

console.log("Total documents:", data.ids.length)
console.log("IDs:", data.ids)
console.log("Documents:", data.documents)
