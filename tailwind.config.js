/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'behance' : {
        'black': '#191919',
        'blue': '#0057FF',
        'white': '#F9F9F9',
      },
      'brown': '#3F2016',
      'cerveza' : {
        'negro': '#2C2D48',
      },
      'dribble': {
        'black': '#0D0C22',
        'blue': '#00B6E3',
        'pink': '#EA4C89',
      },
      'github': {
        'black': '#0E0D0D',
        'purple': '#6F42C1',
        'white': '#F4F7FB',
      },
      'grey': '#EFEFEF',
      'orange': '#F79425',
      'red': '#D54935',
      'tan': '#F8EFE7',
      'spotify': {
        'black': '#191414',
        'green': '#22D760'
      },
      'white': '#ffffff',
    },
    extend: {
      fontSize: {
        '3xl': '2rem'
      },
      fontFamily: {
        sans: ['var(--font-signika)', 'Helvetica Neue', 'sans-serif'],
        orelega: ['var(--font-orelega)', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
