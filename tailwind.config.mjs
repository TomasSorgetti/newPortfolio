/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#050310",
        textColor: "#D1D1D1",
        pinkColor: "#FE0072",
        pinkColor2: "#E80ECD",
        footerColor: "#ffffff54",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
