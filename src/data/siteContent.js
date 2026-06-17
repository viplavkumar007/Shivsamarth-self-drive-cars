// ─────────────────────────────────────────────
//  SHIVSAMARTH SELF DRIVE CARS — Site Content
//  Single source of truth for all site data
// ─────────────────────────────────────────────

export const brand = {
  name: 'Shivsamarth Self Drive Cars',
  shortName: 'Shivsamarth',
  tagline: 'Drive Your Journey, Your Way',
  description: 'Premium Self Drive Cars in Nashik',
  logo: '/assets/logo.png',
  heroDesktop: '/assets/hero-desktop.png',
  heroMobile: '/assets/hero-mobile.png',
}

export const contact = {
  phone1: '9172247873',
  phone2: '8625907127',
  whatsapp: '9172247873',
  email: 'nashikselfdrivecars@gmail.com',
  address: 'Shop No. 1, Shivsamarth Tours and Travellers, Dhruva Nagar, Nashik',
  city: 'Nashik, Maharashtra',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60189.73!2d73.7898!3d20.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba1bc9f5f4b%3A0x1d8a97ba35b59516!2sDhruva%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000',
}

export const hero = {
  badge: "Nashik's #1 Self Drive Service",
  heading1: 'Drive Your Journey,',
  heading2: 'Your Way',
  subheading:
    'Premium Self Drive Cars in Nashik. Choose from Hatchbacks, Sedans, SUVs and Family Cars for every trip.',
  cta1: { label: 'Book On WhatsApp', type: 'whatsapp' },
  cta2: { label: 'View Fleet', href: '#fleet' },
  trustBadges: [
    'Self Drive Cars',
    'Sanitized Vehicles',
    'Easy Documentation',
    '24×7 Support',
  ],
  stats: [
    { value: '18+', label: 'Vehicles' },
    { value: '500+', label: 'Happy Customers' },
    { value: '24/7', label: 'Support' },
    { value: '5★', label: 'Rated Service' },
  ],
}

export const about = {
  sectionLabel: 'About Us',
  heading: "Nashik's Trusted Self Drive Car Rental Service",
  paragraphs: [
    'At Shivsamarth Self Drive Cars, we provide well-maintained and reliable vehicles for local travel, weekend getaways, family trips, business travel, and long-distance journeys.',
    'Our mission is to offer affordable, comfortable, and hassle-free self-drive experiences with transparent service and customer-first support.',
  ],
  highlights: [
    { icon: 'Shield', label: 'Fully Insured Vehicles' },
    { icon: 'CheckCircle', label: 'Regular Maintenance' },
    { icon: 'Clock', label: 'Flexible Durations' },
    { icon: 'MapPin', label: 'Local Nashik Expertise' },
  ],
  ctaLabel: 'Book Your Ride',
}

// Vehicle categories for filter tabs
export const fleetCategories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Family / MUV']

export const fleet = [
  {
    id: 1,
    name: 'Kia Seltos',
    category: 'SUV',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kia_Seltos_IMG_9147.jpg?width=800',
  },
  {
    id: 2,
    name: 'Kia Sonet',
    category: 'SUV',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Kia_Sonet_1.5_Premiere_%28Indonesia%29_front_view_02.jpg?width=800',
  },
  {
    id: 3,
    name: 'Maruti Suzuki Ciaz Smart Hybrid',
    category: 'Sedan',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Maruti_Suzuki_Ciaz_Alpha_Smart_Hybrid.jpg?width=800',
  },
  {
    id: 4,
    name: 'Maruti Suzuki Baleno',
    category: 'Hatchback',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022_Maruti_Suzuki_Baleno_Alpha_%28India%29_front_view.jpg?width=800',
  },
  {
    id: 5,
    name: 'Hyundai Creta',
    category: 'SUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg?width=800',
  },
  {
    id: 6,
    name: 'Tata Tigor',
    category: 'Sedan',
    fuel: 'Petrol + CNG',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/TATA_Tigor_at_Shillong_Peak_View.jpg?width=800',
  },
  {
    id: 7,
    name: 'Honda City',
    category: 'Sedan',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg?width=800',
  },
  {
    id: 8,
    name: 'Toyota Innova',
    category: 'Family / MUV',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 7,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_%28Innova%29_Zenix_2.0_V_2023_%281%29.jpg?width=800',
  },
  {
    id: 9,
    name: 'Toyota Innova Crysta',
    category: 'Family / MUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 7,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Innova_Crysta_2.4_Z_side.jpg?width=800',
  },
  {
    id: 10,
    name: 'Kia Carens',
    category: 'Family / MUV',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 7,
    badge: 'Popular Choice',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022_Kia_Carens_1.4_%28India%29_front_view_01.jpg?width=800',
  },
  {
    id: 11,
    name: 'Hyundai Venue',
    category: 'SUV',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022_Hyundai_Venue_Preferred_in_Polar_White%2C_Front_Right%2C_09-12-2023.jpg?width=800',
  },
  {
    id: 12,
    name: 'Mahindra Thar Roxx',
    category: 'SUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    badge: 'Adventure Ready',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Thar_ROXX_on_dirt.jpg?width=800',
  },
  {
    id: 13,
    name: 'Maruti Suzuki Ertiga',
    category: 'Family / MUV',
    fuel: 'Petrol + CNG',
    transmission: 'Manual',
    seats: 7,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Ertiga%281%29.jpg?width=800',
  },
  {
    id: 14,
    name: 'Maruti Suzuki Grand Vitara',
    category: 'SUV',
    fuel: 'Petrol + CNG',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/SUZUKI_GRAND_VITARA_%28JT%29_China.jpg?width=800',
  },
  {
    id: 15,
    name: 'Maruti Suzuki Swift',
    category: 'Hatchback',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Swift_LXi.jpg?width=800',
  },
  {
    id: 16,
    name: 'Ford Figo',
    category: 'Hatchback',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Figo_front.JPG?width=800',
  },
  {
    id: 17,
    name: 'Hyundai Aura',
    category: 'Sedan',
    fuel: 'Petrol + CNG',
    transmission: 'Manual',
    seats: 5,
    badge: null,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2020_Hyundai_Aura_Front.png?width=800',
  },
  {
    id: 18,
    name: 'Mahindra Scorpio N',
    category: 'SUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 7,
    badge: 'Premium SUV',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Scorpio_2014.JPG?width=800',
  },
]

export const whyChooseUs = [
  {
    icon: 'Car',
    title: 'Wide Vehicle Selection',
    description: 'From compact hatchbacks to premium SUVs and 7-seater family cars — pick the perfect vehicle for your trip.',
  },
  {
    icon: 'IndianRupee',
    title: 'Affordable Rentals',
    description: 'Competitive pricing with no hidden charges. Transparent billing every time.',
  },
  {
    icon: 'Sparkles',
    title: 'Clean & Sanitized Cars',
    description: 'Every vehicle is thoroughly sanitized before handover for your safety and comfort.',
  },
  {
    icon: 'Zap',
    title: 'Quick Booking Process',
    description: 'Book in minutes via WhatsApp. No lengthy paperwork, no unnecessary delays.',
  },
  {
    icon: 'Calendar',
    title: 'Flexible Rental Duration',
    description: 'Hourly, daily, weekly or monthly rentals — rent for exactly as long as you need.',
  },
  {
    icon: 'Headphones',
    title: 'Reliable Customer Support',
    description: '24×7 support available via phone and WhatsApp. We\'re always just a call away.',
  },
  {
    icon: 'FileText',
    title: 'Easy Documentation',
    description: 'Simple and straightforward documentation process. Just your driving licence and ID.',
  },
  {
    icon: 'MapPin',
    title: 'Trusted Local Service',
    description: 'A locally trusted name in Nashik serving hundreds of satisfied customers.',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Choose Your Vehicle',
    description: 'Browse our fleet of 18+ well-maintained cars. Pick the perfect vehicle for your journey.',
    icon: 'Car',
  },
  {
    step: '02',
    title: 'Share Required Documents',
    description: 'Send your driving licence and ID proof via WhatsApp. Quick and hassle-free verification.',
    icon: 'FileText',
  },
  {
    step: '03',
    title: 'Confirm Booking',
    description: 'Get instant confirmation. We\'ll set the pickup time and location as per your convenience.',
    icon: 'CheckCircle',
  },
  {
    step: '04',
    title: 'Pick Up & Drive',
    description: 'Collect your clean, fuelled-up vehicle and hit the road. Enjoy the freedom of self-drive.',
    icon: 'Navigation',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Patil',
    location: 'Nashik',
    rating: 5,
    text: 'Booked a Kia Seltos for a Shirdi trip. The car was spotless and the booking process was super smooth via WhatsApp. Highly recommended!',
    trip: 'Nashik → Shirdi',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Nashik',
    rating: 5,
    text: 'Got the Innova Crysta for a family trip to Mahabaleshwar. 7 of us had the most comfortable journey. Will definitely book again.',
    trip: 'Family Trip to Mahabaleshwar',
  },
  {
    id: 3,
    name: 'Amit Deshmukh',
    location: 'Nashik',
    rating: 5,
    text: 'Rented the Thar Roxx for a weekend adventure to Trimbakeshwar. Pure beast on the roads! Shivsamarth never disappoints.',
    trip: 'Weekend Adventure',
  },
  {
    id: 4,
    name: 'Sneha Joshi',
    location: 'Nashik',
    rating: 5,
    text: 'Very professional service. Clean cars, easy paperwork, and the team was very helpful. Booked the Hyundai Creta for a business trip.',
    trip: 'Business Travel',
  },
  {
    id: 5,
    name: 'Rohan Kulkarni',
    location: 'Nashik',
    rating: 5,
    text: 'Best self drive service in Nashik! I\'ve used them 4 times now. Always on time, great cars, and fantastic support from the team.',
    trip: 'Regular Customer',
  },
]

export const faqs = [
  {
    id: 1,
    question: 'What documents are required to rent a car?',
    answer:
      'You need a valid driving licence (at least 1 year old), a government-issued photo ID (Aadhaar, Passport, or PAN card), and a security deposit. The process is quick and simple.',
  },
  {
    id: 2,
    question: 'How do I book a vehicle?',
    answer:
      'Simply WhatsApp us at 9172247873 or fill the contact form on this page. Share your preferred car, rental dates, and documents. We\'ll confirm your booking instantly.',
  },
  {
    id: 3,
    question: 'Do you provide long-term rentals?',
    answer:
      'Yes! We offer flexible rental durations — daily, weekly, and monthly rentals. Long-term rentals get special rates. Contact us for a custom quote.',
  },
  {
    id: 4,
    question: 'Can I book through WhatsApp?',
    answer:
      'Absolutely! WhatsApp is our preferred booking channel. Message us at 9172247873 and we\'ll get back to you within minutes with confirmation and details.',
  },
  {
    id: 5,
    question: 'Are vehicles sanitized before delivery?',
    answer:
      'Yes, every vehicle is thoroughly cleaned and sanitized before each rental. We follow strict hygiene protocols to ensure your safety and comfort.',
  },
  {
    id: 6,
    question: 'Do you provide doorstep delivery?',
    answer:
      'Yes, we offer doorstep pickup and delivery within Nashik city limits at a nominal charge. Please enquire at the time of booking for availability and pricing.',
  },
  {
    id: 7,
    question: 'What happens in case of a breakdown?',
    answer:
      'We provide 24×7 roadside assistance. In case of any breakdown, call us immediately. We\'ll arrange a replacement vehicle or on-site assistance as quickly as possible.',
  },
  {
    id: 8,
    question: 'Can I extend my rental duration?',
    answer:
      'Yes, rental extensions are possible subject to vehicle availability. Please inform us at least a few hours in advance so we can make the necessary arrangements.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// WhatsApp helper
export const buildWhatsAppUrl = (vehicleName = '') => {
  const number = contact.whatsapp
  const message = vehicleName
    ? `Hello Shivsamarth Self Drive Cars! 🚗\n\nI'm interested in booking the *${vehicleName}*.\n\nCould you please share availability and rental details?\n\nThank you!`
    : `Hello Shivsamarth Self Drive Cars! 🚗\n\nI'd like to book a self-drive car.\n\nCould you please help me choose the right vehicle?\n\nThank you!`
  return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`
}

export const buildCallUrl = (phone = contact.phone1) => `tel:+91${phone}`
