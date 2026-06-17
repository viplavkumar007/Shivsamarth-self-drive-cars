import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../../data/siteContent'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl whatsapp-pulse"
      style={{ background: '#25D366' }}
    >
      <MessageCircle size={26} fill="white" color="white" />
    </motion.a>
  )
}
