/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ministry: {
          forest: '#06452F',
          deep: '#003B27',
          gold: '#F4C430',
          warmGold: '#D9A928',
          lime: '#8BD329',
          ivory: '#F8F7F0',
          dark: '#17251D',
          muted: '#4A5568',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        scripture: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(6, 69, 47, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 25px -3px rgba(6, 69, 47, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'elevated': '0 20px 30px -10px rgba(6, 69, 47, 0.15)',
      }
    },
  },
  plugins: [],
}

