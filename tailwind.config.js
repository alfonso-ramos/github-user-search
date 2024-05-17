/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0079FF",
      primaryText: "#2B3442",
      primaryActive: "#4B6A9B",
      secondaryText: "#697C9A",
      white: "#ffffff",
      softWhite: "#FEFEFE",
      softGray: "#F6F8FF",
      darkPrimary: "#141D2F",
      softDark: "#1E2A47"
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
}

