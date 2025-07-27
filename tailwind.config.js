/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        rosewood: {
          50: "#f8ebec",
          100: "#eed1d3",
          200: "#dca0a4",
          300: "#c6787d",
          400: "#9f585f",
          500: "#894d52",
          600: "#6e3e43",
          700: "#583235",
          800: "#422527",
          900: "#2d191a",
          950: "#1b0d0e",
        },
        magenta: "#a84ccf",
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
      },
      screens: {
        "3xl": "1800px",
        xs: "340px",
      },
    },
  },
  plugins: [],
};
