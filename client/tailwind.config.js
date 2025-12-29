/** @type {import('tailwindcss').Config} */
const tokens = require('./src/styles/tokens.json')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
      },
      fontFamily: {
        sans: [tokens.fonts.sans, 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
