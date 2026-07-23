/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'charcoal' is now Deep Forest Green
        charcoal: {
          DEFAULT: '#14251B', 
          light: '#233B2C',
        },
        // 'copper' is now Soft Premium Gold
        copper: {
          DEFAULT: '#C5A880', 
          hover: '#B0946D',
          light: '#E6DCCF',
        },
        // 'ivory' is now Earthy Sand
        ivory: {
          DEFAULT: '#F7F6F2', 
          border: '#E2DFD8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
