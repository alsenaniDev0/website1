/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'background': '#FFFAEB',
        'custom-yellow': '#F9B800',
        'dark12': '#26262621',
        'dark': '#262626',
      },
      maxWidth: {
        'sm': '400px',
        'lg': '1235px',
      }
    },
  },
  plugins: [],
}