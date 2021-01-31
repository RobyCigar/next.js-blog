const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
  	colors: {
  		black: colors.black,
  		white: colors.white,
  		purple: colors.purple,
  		blue: colors.blue,
  		lightBlue: colors.lightBlue,
  		gray: colors.gray,
  		coolGray: colors.coolGray,
  		blueGray: colors.blueGray,
  	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
