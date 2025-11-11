import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const run = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/testimonials`)
        setItems(await res.json())
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">What Clients Say</h2>
        <p className="mt-2 text-gray-600">Kind words from recent collaborations.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i * 0.05 }} className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: t.rating || 5 }).map((_, idx) => <Star key={idx} size={16} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">— {t.client_name} · {t.project_type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
