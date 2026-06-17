import { Car, FileText, CheckCircle, Navigation } from 'lucide-react'
import { howItWorks } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

const iconMap = { Car, FileText, CheckCircle, Navigation }

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">How It Works</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Book in 4 Simple Steps
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Getting behind the wheel of your perfect self-drive car is easier than you think.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5"
            style={{ background: 'linear-gradient(to right, #E5E7EB, #F97316, #123C73, #E5E7EB)' }}
          />

          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon] || Car
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step icon circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-border shadow-card flex items-center justify-center relative z-10">
                    <Icon size={28} className="text-navy" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-brand text-white text-xs font-display font-800 flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-700 text-navy-dark text-lg mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
