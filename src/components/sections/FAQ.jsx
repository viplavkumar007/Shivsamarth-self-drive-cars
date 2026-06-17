import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-btn-${faq.id}`}
      >
        <span className="font-display font-600 text-navy-dark text-base">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0 text-orange-brand"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted">
              Everything you need to know about renting a self-drive car in Nashik.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.id} delay={i * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
