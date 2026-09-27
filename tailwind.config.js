/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7EE',
        sage: {
          DEFAULT: '#2F5D46',
          dark: '#1D3E2E',
          soft: '#DDEBDF',
        },
        // Leaf tones, for illustrations only - not for text.
        leaf: {
          600: '#4F8A62',
          500: '#6AA37A',
          400: '#7FB38C',
          300: '#9FD0AD',
        },
        peach: {
          DEFAULT: '#F4A77C',
          soft: '#FBE6D6',
        },
        sun: {
          DEFAULT: '#FBD46B',
          soft: '#FFF1C9',
        },
        bark: '#8A5A3B',
        ground: '#E6DCC4',
        // Light blue, used only for one decorative photo ring.
        sky: '#A9D4EA',
        ink: {
          DEFAULT: '#23302A',
          muted: '#52605A',
        },
        // Light text on sage.
        mist: '#CFE2D5',
        // Eyebrow labels. Passes 4.5:1 on cream and white only.
        clay: '#B4572A',
      },
      fontFamily: {
        heading: ['"Young Serif"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '32px',
        'card-lg': '40px',
        arch: '50% 50% 32px 32px',
        'leaf-corner': '32px 120px 32px 32px',
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(35, 48, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
