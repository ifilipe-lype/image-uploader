const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          1: "#F6F8FB",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#A9A9A9",
        },
        blue: "#97BEF4",
        blue1: "#2F80ED",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
