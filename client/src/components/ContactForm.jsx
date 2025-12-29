import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-6 space-y-4" id="contact-form">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" rows={5} required />
      </div>

      <div>
        <button type="submit" className="inline-flex items-center rounded bg-violet-600 text-white px-4 py-2 hover:bg-violet-700">
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && <span className="ml-3 text-green-600">Message sent — thank you!</span>}
        {status === 'error' && <span className="ml-3 text-red-600">Something went wrong.</span>}
      </div>
    </form>
  )
}
