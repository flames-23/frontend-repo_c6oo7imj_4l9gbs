import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      setStatus(data.status === 'ok' || data.status === 'received' ? 'Thanks! I\'ll get back to you shortly.' : 'Something went wrong.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Could not send. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-10 w-80 h-80 bg-emerald-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/40 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 relative">
        <div className="hidden md:block">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_60%)] p-10 flex items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Let’s bring your dream space to life.</h3>
              <p className="mt-4 text-gray-600">Share a bit about your project and I’ll reach out with next steps.</p>
            </div>
          </motion.div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Start a Conversation</h2>
          <p className="mt-2 text-gray-600">I typically respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input name="name" placeholder="Name" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="email" type="email" placeholder="Email" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              <input name="phone" placeholder="Phone" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            </div>
            <input name="project_type" placeholder="Project Type (Home, Office, Furniture...)" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <textarea name="message" placeholder="Tell me about your space" rows="4" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />

            <div className="flex items-center gap-4 mt-2">
              <button type="submit" className="px-6 py-3 rounded-full bg-gray-900 text-white hover:opacity-90 transition">Send Inquiry</button>
              <a href="https://wa.me/" target="_blank" className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center gap-2"><MessageCircle size={18}/> WhatsApp</a>
              <a href="tel:+1" className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center gap-2"><Phone size={18}/> Call</a>
            </div>

            {status && <p className="mt-3 text-emerald-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
