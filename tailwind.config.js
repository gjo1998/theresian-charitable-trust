/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        emeraldTrust: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        amberGold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        slateNavy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        modalFadeIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
};
