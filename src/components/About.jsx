import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" alt="Designer portrait" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold text-gray-900">
            About The Designer
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-gray-600 leading-relaxed">
            I design interiors and craft furniture that feel personal, warm, and timeless. My work blends modern forms with natural materials to create spaces that breathe.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-3 text-gray-600 leading-relaxed">
            Areas of expertise: Interior Design, Custom Furniture, Space Planning, Renovation & Styling.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-8">
            <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmV8ZW58MHwwfHx8MTc2Mjg3Njc5Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Signature" className="h-12 opacity-80" />
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
