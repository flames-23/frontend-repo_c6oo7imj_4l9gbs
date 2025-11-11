import { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const handleCTAClick = (section) => {
    const id = section === 'portfolio' ? 'portfolio' : 'contact'
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero onCTAClick={handleCTAClick} />
      <About />
      <Services />
      <Portfolio ref={portfolioRef} />
      <Process />
      <Testimonials />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
