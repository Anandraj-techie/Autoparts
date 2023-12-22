/** @type {import('tailwindcss').Config} */
const AnimatedCSS= require('animated-tailwindcss')
module.exports =AnimatedCSS( {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  

})

