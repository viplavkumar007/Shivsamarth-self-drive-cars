import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { fleet, fleetCategories, buildWhatsAppUrl, buildCallUrl, contact } from '../../data/siteContent'
import VehicleCard from '../ui/VehicleCard'
import ScrollReveal from '../ui/ScrollReveal'

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? fleet
      : fleet.filter((v) => v.category === activeCategory)

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="section-label">Our Fleet</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Choose Your Perfect Drive
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              18+ well-maintained vehicles — from budget hatchbacks to premium SUVs and spacious family cars.
              Browse our transparent daily rental prices and book your preferred car directly on WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {fleetCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-display font-600 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy ${
                  activeCategory === cat
                    ? 'bg-navy text-white border-navy shadow-md'
                    : 'bg-white text-text-muted border-border hover:border-navy hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Vehicle grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}

            {/* Help card — always at end */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border-2 border-dashed border-navy/30 bg-white flex flex-col items-center justify-center text-center p-8 gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-orange-brand/10 flex items-center justify-center">
                <MessageCircle size={26} className="text-orange-brand" />
              </div>
              <div>
                <h3 className="font-display font-800 text-navy-dark text-xl mb-2">Need Help Choosing?</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Contact our team and we'll help you select the perfect self-drive car for your journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={buildCallUrl(contact.phone1)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-navy text-white font-display font-700 text-sm px-4 py-2.5 rounded-xl hover:bg-navy-dark transition-all focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-brand text-white font-display font-700 text-sm px-4 py-2.5 rounded-xl hover:bg-orange-hover transition-all focus:outline-none focus:ring-2 focus:ring-orange-brand"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Count indicator */}
        <div className="text-center mt-8 text-sm text-text-muted">
          Showing <span className="font-display font-700 text-navy">{filtered.length}</span> vehicle{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </div>
      </div>
    </section>
  )
}
