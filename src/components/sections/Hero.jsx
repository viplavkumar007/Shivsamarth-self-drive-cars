import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, CheckCircle } from 'lucide-react'
import { hero, brand, buildWhatsAppUrl } from '../../data/siteContent'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const handleViewFleet = () => {
    const el = document.getElementById('fleet')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background images — desktop and mobile */}
      <picture>
        <source media="(min-width: 768px)" srcSet={brand.heroDesktop} />
        <img
          src={brand.heroMobile}
          alt="Shivsamarth fleet on highway at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Gradient overlay — dark navy at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,35,66,0.65) 0%, rgba(10,35,66,0.55) 40%, rgba(10,35,66,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-orange-brand/20 backdrop-blur-sm border border-orange-brand/40 text-orange-brand text-xs font-display font-700 uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-brand animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-900 text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            {hero.heading1}
            <br />
            <span className="text-orange-brand">{hero.heading2}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
          >
            {hero.subheading}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-display font-700 px-7 py-3.5 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-orange-brand focus:ring-offset-2"
            >
              <MessageCircle size={18} />
              Book On WhatsApp
            </a>
            <button
              onClick={handleViewFleet}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/70 text-white font-display font-600 px-7 py-3.5 rounded-xl text-base transition-all duration-200 hover:bg-white hover:text-navy-dark active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Fleet
              <ChevronDown size={16} className="mt-0.5" />
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {hero.trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-display font-600 px-3 py-1.5 rounded-full"
              >
                <CheckCircle size={12} className="text-green-400 shrink-0" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center"
            >
              <div className="font-display font-900 text-orange-brand text-2xl leading-none">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleViewFleet}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
