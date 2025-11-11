import { motion } from 'framer-motion'
import { Lightbulb, LayoutGrid, PenTool, Hammer, Truck } from 'lucide-react'

const steps = [
  { icon: Lightbulb, title: 'Consultation', desc: 'Understanding your vision, lifestyle, and constraints.' },
  { icon: LayoutGrid, title: 'Concept', desc: 'Moodboards, references, material palettes.' },
  { icon: PenTool, title: 'Design', desc: 'Detailed drawings, 3D visualizations, and specs.' },
  { icon: Hammer, title: 'Build', desc: 'On-site coordination and artisan craftsmanship.' },
  { icon: Truck, title: 'Deliver', desc: 'Styling, handover, and post-project care.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Design Process</h2>
        <p className="mt-2 text-gray-600">A clear, collaborative journey from idea to reality.</p>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <s.icon className="w-8 h-8 text-gray-800" />
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
