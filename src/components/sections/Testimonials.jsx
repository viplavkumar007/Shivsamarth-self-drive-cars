import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(t)
  }, [autoplay])

  const prev = () => {
    setAutoplay(false)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setAutoplay(false)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Trusted by Nashik's Travellers
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-bg-light rounded-3xl p-8 lg:p-12 border border-border text-center"
            >
              <Quote size={36} className="text-orange-brand mx-auto mb-6 opacity-60" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#F97316" color="#F97316" />
                ))}
              </div>

              <p className="text-text-primary text-lg lg:text-xl leading-relaxed mb-6 italic font-body">
                "{t.text}"
              </p>

              <div>
                <div className="font-display font-700 text-navy-dark text-base">{t.name}</div>
                <div className="text-text-muted text-sm">{t.location} · {t.trip}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-bg-light border border-border hover:bg-navy hover:text-white hover:border-navy transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    i === current ? 'w-6 h-2.5 bg-orange-brand' : 'w-2.5 h-2.5 bg-border hover:bg-text-muted'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-bg-light border border-border hover:bg-navy hover:text-white hover:border-navy transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
