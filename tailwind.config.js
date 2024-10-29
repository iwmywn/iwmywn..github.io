/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-change': 'colorChange 10s linear infinite',
        'ripple': 'ripple 0.6s ease-out forwards',
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#0B1121' },
          '9%': { backgroundColor: '#0B1222' },
          '18%': { backgroundColor: '#101829' },
          '27%': { backgroundColor: '#0F1E2E' },
          '36%': { backgroundColor: '#0D2134' },
          '45%': { backgroundColor: '#0B243A' },
          '54%': { backgroundColor: '#0D253D' },
          '63%': { backgroundColor: '#0B243A' },
          '72%': { backgroundColor: '#0D2134' },
          '81%': { backgroundColor: '#0F1E2E' },
          '90%': { backgroundColor: '#101829' },
          '100%': { backgroundColor: '#0B1222' },
        },
        'ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}