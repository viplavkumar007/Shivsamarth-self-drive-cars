import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, MapPin, MessageCircle } from 'lucide-react'
import { about, buildWhatsAppUrl } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Shield, CheckCircle, Clock, MapPin }

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual side */}
          <ScrollReveal>
            <div className="relative">
              {/* Main image block */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                style={{ background: 'linear-gradient(135deg, #123C73 0%, #0A2342 100%)' }}
              >
                <img
                  src="/assets/hero-desktop.png"
                  alt="Shivsamarth fleet"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-brand flex items-center justify-center shrink-0">
                    <CheckCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-800 text-navy-dark text-xl">500+</div>
                    <div className="text-text-muted text-sm font-body">Happy customers served in Nashik</div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-5 -right-5 bg-navy rounded-xl p-4 text-white text-center w-28 shadow-xl"
              >
                <div className="font-display font-900 text-orange-brand text-3xl leading-none">18+</div>
                <div className="text-white/80 text-xs mt-1">Premium Vehicles</div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div>
            <ScrollReveal>
              <p className="section-label">{about.sectionLabel}</p>
              <h2 className="section-title text-3xl lg:text-4xl mb-6">{about.heading}</h2>
            </ScrollReveal>

            {about.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-text-muted leading-relaxed mb-4 text-base">{p}</p>
              </ScrollReveal>
            ))}

            {/* Highlights grid */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-3 mt-6 mb-8">
                {about.highlights.map(({ icon, label }) => {
                  const Icon = iconMap[icon] || CheckCircle
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-3 bg-bg-light rounded-xl px-4 py-3 border border-border"
                    >
                      <Icon size={18} className="text-orange-brand shrink-0" />
                      <span className="text-sm font-display font-600 text-navy-dark">{label}</span>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                {about.ctaLabel}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
