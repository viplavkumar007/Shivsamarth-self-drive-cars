import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Fleet from './components/sections/Fleet'
import WhyChooseUs from './components/sections/WhyChooseUs'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import Toast from './components/ui/Toast'

export default function App() {
  const [toast, setToast] = useState(null)

  return (
    <div className="font-body antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Fleet />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTAStrip />
        <Contact onToast={setToast} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  )
}
