import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ toast, onDismiss }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onDismiss, 4000)
    return () => clearTimeout(t)
  }, [toast, onDismiss])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white min-w-[280px] max-w-sm"
          style={{
            background: toast.type === 'success' ? '#123C73' : '#DC2626',
          }}
        >
          {toast.type === 'success' ? (
            <CheckCircle size={20} className="shrink-0 text-green-300" />
          ) : (
            <XCircle size={20} className="shrink-0 text-red-300" />
          )}
          <span className="font-body text-sm font-medium flex-1">{toast.message}</span>
          <button
            onClick={onDismiss}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
