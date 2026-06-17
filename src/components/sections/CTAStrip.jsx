import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { buildWhatsAppUrl, buildCallUrl, contact } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTAStrip() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy" />

      {/* Subtle animated glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-orange-brand font-display font-700 text-sm uppercase tracking-widest mb-4">
            Ready to Drive?
          </p>
          <h2 className="font-display font-900 text-white text-3xl lg:text-5xl leading-tight mb-4">
            Ready For Your Next Journey?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Book your self-drive car today and enjoy a smooth, comfortable, and hassle-free ride across Nashik and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-display font-700 px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-brand focus:ring-offset-2 focus:ring-offset-navy-dark"
            >
              <MessageCircle size={20} />
              Book On WhatsApp
            </a>
            <a
              href={buildCallUrl(contact.phone1)}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-display font-700 px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white hover:text-navy-dark active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
