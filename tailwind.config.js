const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./public/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1450px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
