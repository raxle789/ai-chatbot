import { groq } from "@ai-sdk/groq"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const llmOptions = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"]

  const result = streamText({
    model: groq(llmOptions[0]),
    system:
      "Anda adalah asisten AI yang membantu. Jawab dengan jelas dan ringkas.",
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
