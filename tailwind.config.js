/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: "'Nunito Sans', sans-serif",
    },
    extend: {
      screens: {
        hight600: { raw: "(min-height: 630px)" },
        hight700: { raw: "(min-height: 720px)" },
        hight900: { raw: "(min-height: 981px)" },
        hight1100: { raw: "(min-height: 1100px)" },
        hightUt900: { raw: "(max-height: 981px)" },
        xs: { min: "400px" },
        sm: { min: "639px" },
        md: { min: "767px" },
        tab: { min: "965px" },
        lg: { min: "1024px" },
        "max-lg": { max: "1024px" },
        xl: { min: "1279px" },
        "2xl": { min: "1535px" },
      },
    },
  },
  plugins: [],
};
