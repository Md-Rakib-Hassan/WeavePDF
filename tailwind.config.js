/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair : ['Playfair Display', 'serif']
    },
    colors: {
      teal : '#2b6777',
      light_blue: ' #c8d8e4',
      grey : '#f2f2f2' ,
      blue : '#c8d8e4',
      white: '#ffffff',
      black:'#000000',
      aqua_marine : '#52ab98',
      error_color:'#ff0000'
    },
    extend: {},
  },
  plugins: [
  require("daisyui"),
  require('@tailwindcss/typography')
],
}

