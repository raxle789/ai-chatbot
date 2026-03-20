"use client"

import { useEffect, useState, useRef } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Content() {
  const bottomRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState("")
  const { messages, sendMessage, status, stop, error } = useChat()
  const isLoading = status === "submitted" || status === "streaming"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    sendMessage({ text })
    setInput("")
  }

  useEffect(() => {
    if (error) console.warn("Chat error:", error)
  }, [error])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <main className="mx-auto flex w-2xl flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold">AI Chatbot</h1>

      {/* Area pesan */}
      <div className="flex max-h-[calc(100dvh-200px)] flex-1 flex-col gap-3 overflow-y-auto rounded-2xl border p-4">
        {messages.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Mulai percakapan di bawah...
          </p>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? "ml-auto max-w-[80%] rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground"
                : "mr-auto max-w-[80%] rounded-2xl bg-muted px-4 py-2 text-sm whitespace-pre-wrap"
            }
          >
            {message.parts.map((part, i) =>
              part.type === "text" ? (
                <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>
                  {part.text}
                </ReactMarkdown>
              ) : null
            )}
          </div>
        ))}

        {isLoading && (
          <p className="animate-pulse text-sm text-muted-foreground">
            AI sedang mengetik...
          </p>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="h-9 flex-1 rounded-xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan..."
          disabled={isLoading}
        />

        {isLoading ? (
          <Button type="button" variant="outline" onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button type="submit" disabled={!input.trim()}>
            Kirim
          </Button>
        )}
      </form>
    </main>
  )
}
