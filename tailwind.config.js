/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#123C73',
          dark: '#0A2342',
          light: '#1a4f96',
        },
        orange: {
          brand: '#F97316',
          hover: '#ea6a0a',
        },
        bg: {
          light: '#F8FAFC',
          white: '#FFFFFF',
        },
        text: {
          primary: '#1F2937',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(18,60,115,0.08), 0 2px 4px -1px rgba(18,60,115,0.04)',
        'card-hover': '0 20px 40px -8px rgba(18,60,115,0.18), 0 8px 16px -4px rgba(18,60,115,0.1)',
        nav: '0 2px 20px rgba(18,60,115,0.1)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A2342 0%, #123C73 100%)',
        'gradient-orange': 'linear-gradient(135deg, #F97316 0%, #ea6a0a 100%)',
      },
    },
  },
  plugins: [],
}
