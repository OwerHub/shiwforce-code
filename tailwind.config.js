const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "333px",
      xs: "475px",
      headBrake: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        cambo: "Cambo",
        openSans: "Open Sans",
        yellowtail: "Yellowtail",
      },
      colors: {
        customGray: {
          headBG: "#1c1c1c",
          headBTN: "#3e3e3e",
          headTXT: "#5c5c5c",
          cardBG: "#f4f4f4",
          cardHvrUp: "#383838",
          cardHvrDown: "#1f1f1f",
          footUp: "#313131",
          footDown: "#202020",
          downerBG: "#cdcdcd",
        },
        customBlue: {
          buttonUp: "#5697bb",
          buttonDown: "#28688c",
        },
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ["group-hover"],
      transitionProperty: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
