/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'primary': '#bab',
        'overlay': 'rgba(0, 0, 0, 0.6)',
      }
    }
  },
  plugins: [],
}