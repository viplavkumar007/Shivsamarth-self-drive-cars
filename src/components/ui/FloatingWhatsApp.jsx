import { motion } from 'framer-motion'
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
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8"
      >
        <path
          fill="#fff"
          d="M16.03 4C9.42 4 4.05 9.33 4.05 15.9c0 2.1.56 4.14 1.62 5.93L4 28l6.32-1.64a12.05 12.05 0 0 0 5.71 1.45C22.64 27.8 28 22.47 28 15.9S22.64 4 16.03 4Zm0 21.77c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.75.97 1-3.64-.24-.38a9.72 9.72 0 0 1-1.5-5.18c0-5.45 4.5-9.88 10.04-9.88 5.53 0 10.03 4.43 10.03 9.88 0 5.44-4.5 9.87-10.03 9.87Zm5.5-7.39c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.29-.78.96-.96 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.29-.02-.45.13-.6.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.18 5.1 4.46.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.78-.72 2.03-1.41.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"
        />
      </svg>
    </motion.a>
  )
}
