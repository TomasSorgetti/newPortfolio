/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pinkColor: "#FE0072",
        pinkColor2: "#E80ECD",
        footerColor: "#ffffff54",
      },
    },
  },
  plugins: [],
};
