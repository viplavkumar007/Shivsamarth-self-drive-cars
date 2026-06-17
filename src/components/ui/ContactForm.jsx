import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { contact } from '../../data/siteContent'

const initialForm = { name: '', phone: '', carModel: '', message: '' }
const carOptions = [
  'Kia Seltos', 'Kia Sonet', 'Maruti Suzuki Ciaz Smart Hybrid', 'Maruti Suzuki Baleno',
  'Hyundai Creta', 'Tata Tigor', 'Honda City', 'Toyota Innova', 'Toyota Innova Crysta',
  'Kia Carens', 'Hyundai Venue', 'Mahindra Thar Roxx', 'Maruti Suzuki Ertiga',
  'Maruti Suzuki Grand Vitara', 'Maruti Suzuki Swift', 'Ford Figo', 'Hyundai Aura',
  'Mahindra Scorpio N', "I'm not sure – need help choosing",
]

function buildMessage(form) {
  return `Hello Shivsamarth Self Drive Cars! 🚗

*New Enquiry from Website*

👤 Name: ${form.name}
📱 Phone: ${form.phone}
🚘 Interested Vehicle: ${form.carModel || 'Not specified'}
💬 Message: ${form.message || 'No additional message'}

Please help me with availability and booking details. Thank you!`
}

export default function ContactForm({ onToast }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }

    const message = buildMessage(form)
    const url = `https://wa.me/91${contact.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    setForm(initialForm)
    if (onToast) onToast({ type: 'success', message: 'Redirecting to WhatsApp! We\'ll respond shortly.' })

    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-display font-700 text-navy-dark text-xl">WhatsApp Opened!</h3>
        <p className="text-text-muted text-sm max-w-xs">
          Your enquiry message has been pre-filled. Just hit send on WhatsApp and we'll get back to you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-display font-600 text-navy-dark mb-1.5">
          Your Name <span className="text-orange-brand">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Patil"
          className={`w-full border rounded-xl px-4 py-3 text-sm font-body text-text-primary placeholder-text-light bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy ${
            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-border'
          }`}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-display font-600 text-navy-dark mb-1.5">
          Mobile Number <span className="text-orange-brand">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          maxLength={10}
          className={`w-full border rounded-xl px-4 py-3 text-sm font-body text-text-primary placeholder-text-light bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy ${
            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-border'
          }`}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>
        )}
      </div>

      {/* Car model */}
      <div>
        <label htmlFor="carModel" className="block text-sm font-display font-600 text-navy-dark mb-1.5">
          Preferred Vehicle
        </label>
        <select
          id="carModel"
          name="carModel"
          value={form.carModel}
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-text-primary bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy appearance-none"
        >
          <option value="">-- Select a vehicle (optional) --</option>
          {carOptions.map((car) => (
            <option key={car} value={car}>{car}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-display font-600 text-navy-dark mb-1.5">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Rental dates, trip details, special requirements..."
          rows={3}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-text-primary placeholder-text-light bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy resize-none"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full inline-flex items-center justify-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-display font-700 px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-orange-brand focus:ring-offset-2 text-base"
      >
        <Send size={18} />
        Send via WhatsApp
      </button>

      <p className="text-xs text-text-muted text-center">
        Clicking submit will open WhatsApp with your enquiry pre-filled.
      </p>
    </div>
  )
}
