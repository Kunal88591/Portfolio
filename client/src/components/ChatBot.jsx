import React, { useState } from 'react'

export default function ChatBot() {
  const [messages, setMessages] = useState([{ from: 'bot', text: "Hi, I'm a portfolio assistant — ask me about projects, skills, or experience." }])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    if (!text) return
    const userMsg = { from: 'user', text }
    setMessages((m) => [...m, userMsg])
    setText('')
    setLoading(true)
    try {
      const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: text }) })
      const data = await r.json()
      setMessages((m) => [...m, { from: 'bot', text: data.response || "Sorry, I couldn't process that." }])
    } catch (err) {
      setMessages((m) => [...m, { from: 'bot', text: 'Error contacting chat service.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-xl mt-6">
      <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800 shadow">
        <div className="h-48 overflow-auto space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`p-2 rounded ${m.from === 'bot' ? 'bg-slate-100 dark:bg-slate-700' : 'bg-violet-50 dark:bg-violet-900/30'}`}>
              <div className="text-sm">{m.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="mt-3 flex gap-3">
          <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded border px-3 py-2" placeholder="Ask about my projects or skills" />
          <button className="rounded bg-violet-600 text-white px-4 py-2" disabled={loading}>{loading ? '...' : 'Send'}</button>
        </form>
      </div>
    </div>
  )
}
