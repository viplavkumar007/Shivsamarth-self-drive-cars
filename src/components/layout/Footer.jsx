import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { brand, contact, navLinks, fleet, buildWhatsAppUrl, buildCallUrl } from '../../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const popularCars = fleet.filter((c) => c.badge).slice(0, 4)
  const allCars = fleet.slice(0, 6)

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={brand.logo} alt={brand.name} className="h-16 w-auto mb-4 rounded-md bg-white p-2" />
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Premium self-drive car rental service in Nashik. Trusted by 500+ customers for comfortable, hassle-free journeys.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-brand transition-colors flex items-center justify-center"
              aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-brand transition-colors flex items-center justify-center"
              aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-brand transition-colors flex items-center justify-center"
              aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-widest text-orange-brand mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Fleet */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-widest text-orange-brand mb-4">Our Fleet</h3>
          <ul className="space-y-2">
            {allCars.map((car) => (
              <li key={car.id}>
                <a
                  href={buildWhatsAppUrl(car.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                  {car.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-widest text-orange-brand mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={16} className="text-orange-brand shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </li>
            <li>
              <a href={buildCallUrl(contact.phone1)} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-orange-brand shrink-0" />
                {contact.phone1}
              </a>
            </li>
            <li>
              <a href={buildCallUrl(contact.phone2)} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-orange-brand shrink-0" />
                {contact.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors break-all">
                <Mail size={16} className="text-orange-brand shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <MessageCircle size={16} className="text-orange-brand shrink-0" />
                WhatsApp: {contact.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {year} SHIVSAMARTH SELF DRIVE CARS. All Rights Reserved.</p>
          <p>Designed with ❤️ in Nashik</p>
        </div>
      </div>
    </footer>
  )
}
