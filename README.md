# Shivsamarth Self Drive Cars — Website

Premium self-drive car rental website for Shivsamarth Self Drive Cars, Nashik.

## Tech Stack

- **React 18** (JavaScript only)
- **Vite 5** — blazing fast builds
- **Tailwind CSS 3** — all styling
- **Framer Motion 11** — animations
- **Lucide React** — icons

## Project Structure

```
shivsamarth/
├── public/
│   └── assets/
│       ├── logo.png            ← Brand logo
│       ├── hero-desktop.png    ← Hero background (desktop)
│       └── hero-mobile.png     ← Hero background (mobile)
├── src/
│   ├── assets/images/          ← (duplicate for direct imports if needed)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      ← Sticky navbar with scroll-spy
│   │   │   └── Footer.jsx      ← Full footer with links
│   │   ├── sections/
│   │   │   ├── Hero.jsx        ← Full-screen hero with trust badges
│   │   │   ├── About.jsx       ← About section with highlights
│   │   │   ├── Fleet.jsx       ← Fleet grid with filter tabs
│   │   │   ├── WhyChooseUs.jsx ← 8 feature cards
│   │   │   ├── HowItWorks.jsx  ← 4-step process
│   │   │   ├── Testimonials.jsx← Auto-carousel with dots
│   │   │   ├── FAQ.jsx         ← Animated accordion
│   │   │   ├── CTAStrip.jsx    ← Dark CTA with glow animation
│   │   │   └── Contact.jsx     ← Form + map + contact cards
│   │   └── ui/
│   │       ├── VehicleCard.jsx ← Car card with SVG silhouette
│   │       ├── ContactForm.jsx ← Form → WhatsApp redirect
│   │       ├── FloatingWhatsApp.jsx ← Fixed WhatsApp button
│   │       ├── ScrollReveal.jsx    ← Reusable animation wrapper
│   │       └── Toast.jsx           ← Toast notifications
│   ├── data/
│   │   └── siteContent.js      ← ALL content in one file
│   ├── hooks/
│   │   ├── useScrollSpy.js     ← Active nav section detection
│   │   └── useScrolled.js      ← Navbar scroll state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json
├── netlify.toml
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Option A — Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

### Option B — Netlify

1. Go to [netlify.com](https://netlify.com) → New Site
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**

Or drag & drop the `dist/` folder after running `npm run build`.

## Customisation

All content lives in **`src/data/siteContent.js`**. To update:
- Business name, tagline, contact details → `brand` + `contact` exports
- Fleet vehicles → `fleet` array
- Hero text and stats → `hero` export
- FAQ answers → `faqs` array
- Testimonials → `testimonials` array

## WhatsApp Integration

Every "Book on WhatsApp" button uses a pre-typed message:
```
Hello Shivsamarth Self Drive Cars! 🚗
I'm interested in booking the [Vehicle Name].
Could you please share availability and rental details?
```

The contact form also redirects to WhatsApp with a structured pre-filled message including the customer's name, phone, vehicle choice, and message.

---

© 2026 Shivsamarth Self Drive Cars. All Rights Reserved.
