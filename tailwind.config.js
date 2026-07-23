/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A1918',
          light: '#282625',
          muted: '#3D3A38',
        },
        ivory: {
          DEFAULT: '#FBF9F5',
          dark: '#F3EFEA',
          border: '#E8E2D9',
        },
        copper: {
          DEFAULT: '#C88D66',
          hover: '#B57A55',
          light: '#F4ECE6',
        },
        forest: {
          DEFAULT: '#22332B',
          muted: '#34493E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
