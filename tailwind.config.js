const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        outlineShadow: "0px 0px 21px rgba(0, 0, 0, 0.15)",
        floatingShadow: "0px 0px 40px rgba(0, 0, 0, 0.2)",
        mobileAppShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
        myOrdersShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
        questionCardShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
        filterButtonShadow: "0px 0px 37px rgba(0, 0, 0, 0.1)",
        paymentAddressShadow: "0px 0px 40px rgba(0, 0, 0, 0.08)",
        cardShadow: "0px 10px 10px 0px rgba(0 ,0, 0 ,0.75)",
      },
      spacing: {
        128: "32rem",
        129: "21.25rem",
        130: "48.93rem",
        131: "6.31rem",

        132: "33.31rem",
        133: "36.94rem",
        134: "3.1rem",
        135: "4.31rem",
        136: "5.5rem",
        137: "3.12rem",
        138: "13.88rem",
        139: "44.18rem",
      },
      colors: {
        brand: {
          1: "#FFEBCD",
          2: "#A3E8DE",
          3: "#37A492",
          4: "#FFC0B9",
          5: "#FFECE5",
          6: "#767676",
          7: "#6EDBC9",
          8: "#5C5C5C",
          9: "#37A492",
          10: "#A3E8DE",
          11: "#A3E8DE",
          12: "#5C5C5C",
          13: "#767676",
          14: "#A3E8DE",
          15: "#F6F6F6",
          16: "#B2B2B2",
        },

        utils: {
          bgGreen: "#E4F8F4",
          bgGray: "#F7F7F7",
          bgGrayLight: "#F6F6F6",
          indicatorBlue: "#2280B4",
          dodgerBlue: "#2AB2FF",
          darkOrange: "#FF8A00",
          yellow: "#FFEE00",
          lemon: "#D5FF44",
          brown: "#DABC6A",
          burntOrange: "#FF6E2A",
          turquoise: "#49D0BF",
          gray31: "#4F4F4F",
          gray164: "#A4A4A4",
          nightRider: "#343434",
          whiteSmoke: "#F4F4F4",
          gray68: "#ADADAD",
          whiteSmokeLight: "#F3F3F3",
          alternativeBrand: "#0C9881",
          lightGray: "#F1F1F1",
          mediumRed: "#FF5B5B",
          heart: "#FFC0B9",
        },
      },

      borderRadius: {
        xxxl: "4.1rem",
        xxs: "1.56rem",
      },
      
      borderWidth: {
        10: "1px",
      },
      screens: {
        "2xl-max": { max: "1535px" },
        "xl-max": { max: "1279px" },
        "lg-max": { max: "1023px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
      },
    },

    plugins: [],
  },
};