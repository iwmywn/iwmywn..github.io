/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'color-change-dark': 'colorChangeDark 10s linear infinite',
        'color-change-light': 'colorChangeLight 10s linear infinite',
        'ripple': 'ripple 0.6s ease-out forwards',
      },
      keyframes: {
        colorChangeDark: {
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
        colorChangeLight: {
          '0%': { backgroundColor: '#F9FAFC' },
          '9%': { backgroundColor: '#F3F6FD' },
          '18%': { backgroundColor: '#F2F5FC' },
          '27%': { backgroundColor: '#EBF6FC' },
          '36%': { backgroundColor: '#E5F3FC' },
          '54%': { backgroundColor: '#E2ECFB' },
          '63%': { backgroundColor: '#DFF1FD' },
          '72%': { backgroundColor: '#E2ECFB' },
          '45%': { backgroundColor: '#E5F3FC' },
          '81%': { backgroundColor: '#EBF6FC' },
          '90%': { backgroundColor: '#F2F5FC' },
          '100%': { backgroundColor: '#F3F6FD' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}