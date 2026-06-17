import {
  Car, IndianRupee, Sparkles, Zap, Calendar, Headphones, FileText, MapPin,
} from 'lucide-react'
import { whyChooseUs } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

const iconMap = { Car, IndianRupee, Sparkles, Zap, Calendar, Headphones, FileText, MapPin }

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              The Shivsamarth Difference
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-base">
              We've built our reputation on trust, reliability, and a genuinely customer-first approach.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Car
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group bg-bg-light hover:bg-navy rounded-2xl p-6 border border-border hover:border-navy transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-orange-brand flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                  <Icon size={22} className="text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-700 text-navy-dark group-hover:text-white text-base mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-muted group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
