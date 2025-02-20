module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1601px",
        lg: { max: "1700px", min: "1334px" },
        md: { max: "1333px", min: "768px" },
        sm: { max: "767px" },
        xs: { max: "550px" },
        custom: { max: "1024px", min: "768px" },
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      spacing: {
        gutter: "32px",
        margin200: "200px",
        1.2: "1.2rem",
        1.5: "1.5rem",
        1.6: "1.6rem",
        1.8: "1.8rem",
        4.6: "4.6rem",
        6.4: "6.4rem",
        12.8: "12.8rem",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: [
          "70px",
          {
            lineHeight: "130%",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          },
        ],
        h2: [
          "50px",
          { lineHeight: "130%", fontWeight: "600", fontFamily: "Montserrat" },
        ],
        h3: [
          "25px",
          { lineHeight: "130%", fontWeight: "600", fontFamily: "Montserrat" },
        ],
        paragraph: [
          "18px",
          { lineHeight: "140%", fontWeight: "400", fontFamily: "Open Sans" },
        ],
        menu: [
          "20px",
          { lineHeight: "140%", fontWeight: "600", fontFamily: "Open Sans" },
        ],
        details: [
          "16px",
          { lineHeight: "22.4px", fontWeight: "400", fontFamily: "Open Sans" },
        ],
        buttonText: [
          "20px",
          { lineHeight: "140%", fontWeight: "600", fontFamily: "Open Sans" },
        ],
        detailsBold: [
          "18px",
          { lineHeight: "140%", fontWeight: "600", fontFamily: "Open Sans" },
        ],
      },
      colors: {
        white: "#FFFFFF",
        black: "#010612",
        "dark-opacity-75": "#010612BF",
        "dark-opacity-80": "#01061299",
        "white-opacity-cc": "#FFFFFFCC",
        "light-blue": "#DFF5FF",
        "dark-blue": "#2D3686",
        "medium-blue": "#6C94E9",
      },
      margin: {
        200: "200px",
      },
      gap: {
        32: "32px",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
        700: "700ms",
        900: "900ms",
      },
      width: {
        27.6: "27.6rem",
      },
      height: {
        35.5: "35.5rem",
      },
    },
  },
  plugins: [],
};
