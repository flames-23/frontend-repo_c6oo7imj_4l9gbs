import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-white pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight drop-shadow-md">
              Designing Spaces That Tell Your Story
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Custom interiors, furniture, and spatial design crafted with warmth and precision.
            </p>
            <div className="mt-8 flex gap-4">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onCTAClick('portfolio')} className="bg-white/90 text-gray-900 backdrop-blur px-6 py-3 rounded-full font-medium shadow hover:bg-white">
                View Portfolio
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onCTAClick('contact')} className="bg-transparent border border-white/60 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10">
                Get a Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="text-white/80 text-sm animate-bounce">Scroll</div>
      </motion.div>
    </section>
  )
}
