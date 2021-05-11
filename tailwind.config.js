module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#F6F8FB",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD"
        },
        blue: "#97BEF4",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
