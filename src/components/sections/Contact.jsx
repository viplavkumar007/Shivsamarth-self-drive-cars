import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { contact, buildWhatsAppUrl, buildCallUrl } from '../../data/siteContent'
import ContactForm from '../ui/ContactForm'
import ScrollReveal from '../ui/ScrollReveal'

export default function Contact({ onToast }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label">Contact Us</p>
            <h2 className="section-title text-3xl lg:text-4xl mb-4">
              Get In Touch
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Ready to book your ride or need help choosing a vehicle? Reach out — we respond within minutes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — contact info + map */}
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={buildCallUrl(contact.phone1)}
                  className="flex items-center gap-4 bg-bg-light rounded-xl p-4 border border-border hover:border-navy transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy group-hover:bg-orange-brand flex items-center justify-center transition-colors shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-body">Call Us</div>
                    <div className="font-display font-700 text-navy-dark text-sm">{contact.phone1}</div>
                  </div>
                </a>

                <a
                  href={buildCallUrl(contact.phone2)}
                  className="flex items-center gap-4 bg-bg-light rounded-xl p-4 border border-border hover:border-navy transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy group-hover:bg-orange-brand flex items-center justify-center transition-colors shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-body">Alternate</div>
                    <div className="font-display font-700 text-navy-dark text-sm">{contact.phone2}</div>
                  </div>
                </a>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-bg-light rounded-xl p-4 border border-border hover:border-green-500 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500 group-hover:bg-green-600 flex items-center justify-center transition-colors shrink-0">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-body">WhatsApp</div>
                    <div className="font-display font-700 text-navy-dark text-sm">{contact.whatsapp}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 bg-bg-light rounded-xl p-4 border border-border hover:border-navy transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy group-hover:bg-orange-brand flex items-center justify-center transition-colors shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-body">Email</div>
                    <div className="font-display font-700 text-navy-dark text-sm break-all">{contact.email}</div>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-navy rounded-xl p-5 text-white">
                <MapPin size={20} className="text-orange-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-700 text-sm mb-1">Our Location</div>
                  <div className="text-white/75 text-sm leading-relaxed">{contact.address}</div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-border shadow-card h-56">
                <iframe
                  title="Shivsamarth Self Drive Cars Location"
                  src={contact.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-bg-light rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="font-display font-800 text-navy-dark text-xl mb-1">Send an Enquiry</h3>
              <p className="text-text-muted text-sm mb-6">
                Fill the form and we'll respond via WhatsApp within minutes.
              </p>
              <ContactForm onToast={onToast} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
