import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ["All", "Home", "Office", "Furniture", "Decor"]

export default function Portfolio() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/projects`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  const filtered = useMemo(() => {
    if (active === 'All') return items
    return items.filter(i => i.category === active)
  }, [items, active])

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Portfolio</h2>
            <p className="mt-2 text-gray-600">Selected projects and bespoke builds.</p>
          </div>
          <div className="flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full border ${active===c? 'bg-gray-900 text-white border-gray-900':'bg-white text-gray-700 border-gray-200'} transition`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (idx%6)*0.05 }} className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow border border-gray-100 group cursor-pointer" onClick={() => setLightbox({ item, index: 0 })}>
              <div className="relative">
                <img src={item.images?.[0]} alt={item.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img src={lightbox.item.images[lightbox.index]} alt="" className="w-full max-h-[70vh] object-contain bg-black" />
                <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1">Close</button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{lightbox.item.title}</h3>
                <p className="text-gray-600 mt-1">{lightbox.item.description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {lightbox.item.images.map((img, i) => (
                    <button key={i} onClick={() => setLightbox({ ...lightbox, index: i })} className={`h-16 w-24 overflow-hidden rounded border ${lightbox.index===i?'border-gray-900':'border-gray-200'}`}>
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="px-4 py-2 rounded-full bg-gray-900 text-white">Request Similar Design</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
