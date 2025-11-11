import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row gap-8 justify-between items-start">
        <div>
          <h3 className="text-white text-xl font-semibold">Studio</h3>
          <p className="mt-2 text-sm text-gray-400">123 Design Street, Creative City</p>
          <p className="text-sm text-gray-400">hello@studio.com · +1 234 567 890</p>
        </div>
        <div className="flex gap-6">
          {[{Icon:Instagram, href:'#'},{Icon:Facebook, href:'#'},{Icon:Linkedin, href:'#'}].map(({Icon, href}) => (
            <a key={href} href={href} className="hover:text-white transition" aria-label="social">
              <Icon />
            </a>
          ))}
        </div>
        <nav className="flex gap-6 text-sm">
          {['Home','About','Portfolio','Services','Contact'].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white transition">{n}</a>
          ))}
        </nav>
      </div>
      <div className="relative container mx-auto px-6 mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Studio. All rights reserved.</div>
    </footer>
  )
}
