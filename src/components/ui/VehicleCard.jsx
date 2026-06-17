import { motion } from 'framer-motion'
import { Fuel, Settings, Users, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../../data/siteContent'

// Car silhouette SVG by category — clean line illustrations
const CarSilhouette = ({ category }) => {
  const silhouettes = {
    Hatchback: (
      <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 58 C30 58 45 28 75 22 L115 18 C130 18 145 24 158 34 L178 44 L188 48 L192 58" stroke="#123C73" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M18 58 L192 58 L196 62 L196 66 L18 66 L14 62 Z" fill="#E5E7EB" stroke="#123C73" strokeWidth="1.5"/>
        <circle cx="52" cy="68" r="10" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="52" cy="68" r="5" fill="#123C73" opacity="0.4"/>
        <circle cx="158" cy="68" r="10" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="158" cy="68" r="5" fill="#123C73" opacity="0.4"/>
        <path d="M75 22 L80 38 L150 38 L155 24" stroke="#123C73" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M92 38 L92 22" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M130 38 L130 20" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    Sedan: (
      <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M22 58 C22 58 38 30 65 22 L110 16 C128 16 148 22 165 34 L182 44 L192 50 L196 58" stroke="#123C73" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M12 58 L196 58 L200 62 L200 66 L12 66 L8 62 Z" fill="#E5E7EB" stroke="#123C73" strokeWidth="1.5"/>
        <circle cx="48" cy="68" r="10" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="48" cy="68" r="5" fill="#123C73" opacity="0.4"/>
        <circle cx="162" cy="68" r="10" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="162" cy="68" r="5" fill="#123C73" opacity="0.4"/>
        <path d="M68 22 L72 38 L155 38 L162 24" stroke="#123C73" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M95 38 L95 19" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M130 38 L130 17" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    SUV: (
      <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M26 58 L26 24 L50 18 L168 18 L192 28 L196 58" stroke="#123C73" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M14 58 L196 58 L200 62 L200 68 L14 68 L10 62 Z" fill="#E5E7EB" stroke="#123C73" strokeWidth="1.5"/>
        <circle cx="50" cy="70" r="11" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="50" cy="70" r="5.5" fill="#123C73" opacity="0.4"/>
        <circle cx="166" cy="70" r="11" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="166" cy="70" r="5.5" fill="#123C73" opacity="0.4"/>
        <path d="M26 38 L196 38" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M80 18 L80 38" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M130 18 L130 38" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M192 28 L196 38" stroke="#123C73" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    'Family / MUV': (
      <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M24 58 L24 20 L48 14 L172 14 L196 24 L200 58" stroke="#123C73" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 58 L200 58 L204 63 L204 68 L12 68 L8 63 Z" fill="#E5E7EB" stroke="#123C73" strokeWidth="1.5"/>
        <circle cx="48" cy="70" r="11" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="48" cy="70" r="5.5" fill="#123C73" opacity="0.4"/>
        <circle cx="170" cy="70" r="11" fill="#123C73" opacity="0.15" stroke="#123C73" strokeWidth="2"/>
        <circle cx="170" cy="70" r="5.5" fill="#123C73" opacity="0.4"/>
        <path d="M24 36 L200 36" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M75 14 L75 36" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M120 14 L120 36" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
        <path d="M165 14 L165 36" stroke="#123C73" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  }
  return silhouettes[category] || silhouettes['SUV']
}

const fuelColors = {
  Petrol: 'bg-blue-50 text-blue-700 border-blue-100',
  Diesel: 'bg-amber-50 text-amber-700 border-amber-100',
  'Petrol + CNG': 'bg-green-50 text-green-700 border-green-100',
}

const badgeColors = {
  'Popular Choice': 'bg-orange-brand text-white',
  'Adventure Ready': 'bg-navy text-white',
  'Premium SUV': 'bg-navy-dark text-white',
}

export default function VehicleCard({ vehicle, index }) {
  const whatsappUrl = buildWhatsAppUrl(vehicle.name)
  const fuelClass = fuelColors[vehicle.fuel] || fuelColors['Petrol']
  const badgeClass = vehicle.badge ? (badgeColors[vehicle.badge] || 'bg-orange-brand text-white') : ''

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Badge */}
      {vehicle.badge && (
        <div className={`text-center text-xs font-display font-700 uppercase tracking-wider py-1.5 px-3 ${badgeClass}`}>
          ★ {vehicle.badge}
        </div>
      )}

      {/* Vehicle photo */}
      <div className="bg-bg-light flex items-center justify-center overflow-hidden">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.name} full car`}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-full max-w-[200px]">
            <CarSilhouette category={vehicle.category} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-3">
        {/* Category pill */}
        <span className="text-xs font-display font-600 text-text-muted uppercase tracking-widest mb-1">
          {vehicle.category}
        </span>

        {/* Name */}
        <h3 className="font-display font-800 text-navy-dark text-lg leading-snug mb-4">
          {vehicle.name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="flex flex-col items-center gap-1 bg-bg-light rounded-lg p-2">
            <Fuel size={14} className="text-orange-brand" />
            <span className={`text-xs font-600 px-1.5 py-0.5 rounded-full border ${fuelClass} text-center leading-tight`}>
              {vehicle.fuel}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-bg-light rounded-lg p-2">
            <Settings size={14} className="text-orange-brand" />
            <span className="text-xs font-display font-600 text-navy text-center leading-tight">
              {vehicle.transmission}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-bg-light rounded-lg p-2">
            <Users size={14} className="text-orange-brand" />
            <span className="text-xs font-display font-600 text-navy text-center leading-tight">
              {vehicle.seats} Seater
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-4" />

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-display font-700 text-sm px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
        >
          <MessageCircle size={15} />
          Book on WhatsApp
        </a>
      </div>
    </motion.article>
  )
}
