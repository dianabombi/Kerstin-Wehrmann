/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          50: '#f8f5f6',
          100: '#f1e7e9',
          200: '#e4d1d5',
          300: '#d3b5bc',
          400: '#bc959f',
          500: '#a0727a',
          600: '#8b5a62',
          700: '#73444b',
          800: '#5c3638',
          900: '#4a2a2b',
        }
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'minimal': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
