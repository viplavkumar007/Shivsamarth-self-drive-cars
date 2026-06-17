import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, brand, buildWhatsAppUrl } from '../../data/siteContent'
import { useScrolled } from '../../hooks/useScrolled'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const sectionIds = navLinks.map((l) => l.href)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(20)
  const activeSection = useScrollSpy(sectionIds)

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="shrink-0 focus:outline-none focus:ring-2 focus:ring-navy rounded-lg"
            aria-label="Go to homepage"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-sm font-display font-600 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy ${
                    isActive ? 'text-navy' : 'text-text-primary hover:text-navy'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-brand rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <MessageCircle size={16} />
              Book On WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-bg-light focus:outline-none focus:ring-2 focus:ring-navy"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-display font-600 transition-colors ${
                    activeSection === link.href
                      ? 'bg-navy text-white'
                      : 'text-text-primary hover:bg-bg-light hover:text-navy'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <MessageCircle size={16} />
                Book On WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
