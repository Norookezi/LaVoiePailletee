/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kony: ['"kony"', "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        "mediumseagreen": "#06D79F",
        "crimson": "#F04770"
      }
    },
  },
  plugins: [],
}

