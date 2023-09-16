/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/tailvue/dist/tailvue.es.js",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'fira': ['Fira Code', 'sans-serif']
      },
      colors: {
        lblue: '#2374e1'
      }
    },
  },
  plugins: [],
}
