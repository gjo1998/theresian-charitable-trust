/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          DEFAULT: '#1F7A4D',
          deep: '#135437',
          soft: '#E3F3E9',
        },
        mango: {
          DEFAULT: '#FFC53D',
          soft: '#FFF4D1',
        },
        hibiscus: {
          DEFAULT: '#E8456A',
          soft: '#FDE4EA',
        },
        sky: {
          DEFAULT: '#3E9FD6',
          soft: '#E3F3FB',
        },
        ink: {
          DEFAULT: '#1E2A3F',
          soft: '#4D5A70',
        },
      },
      fontFamily: {
        heading: ['"Baloo Chettan 2"', 'system-ui', 'sans-serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '26px',
      },
      screens: {
        // The spec's two collapse points, available as utilities.
        lap: { max: '980px' },
        palm: { max: '560px' },
      },
    },
  },
  plugins: [],
};
