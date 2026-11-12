/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          50: '#F4F9F7',
          100: '#EAF3EF',
          200: '#C9E2D8',
          300: '#9EC8B8',
          400: '#5A9F88',
          500: '#246B57', // Primary institutional dark green
          600: '#1D5847',
          700: '#17473A',
          800: '#12372D',
          900: '#0C2720',
          blue: '#365B73', // Subtle institutional blue
          blueLight: '#EBF1F5',
          alert: '#B91C1C',
          warning: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

