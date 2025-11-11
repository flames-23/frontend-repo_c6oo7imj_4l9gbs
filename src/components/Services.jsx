import { motion } from 'framer-motion'
import { Sofa, Ruler, Home, Wrench } from 'lucide-react'

const services = [
  { icon: Home, title: 'Interior Design', desc: 'Holistic concepts from moodboards to material selection.' },
  { icon: Sofa, title: 'Custom Furniture', desc: 'Bespoke pieces crafted to fit your space and story.' },
  { icon: Ruler, title: 'Space Planning', desc: 'Functional layouts, circulation, and ergonomic detailing.' },
  { icon: Wrench, title: 'Renovation & Styling', desc: 'On-site execution, sourcing, and final styling.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600">Transparent, thoughtful, tailored to you.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-lg border border-gray-100">
              <s.icon className="w-8 h-8 text-gray-800" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                {["Basic", "Premium", "Bespoke"].map((t) => (
                  <button key={t} className="rounded-full border border-gray-200 px-3 py-1.5 hover:scale-105 transition bg-gray-50">{t}</button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
