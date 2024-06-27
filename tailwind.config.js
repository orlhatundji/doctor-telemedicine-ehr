/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FA5805',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
          300: "#FFE4D6",
        },
        "tertiary": {
          100: "#111111",
          200: "#333333",
          300: "#14142B",
        },
        "stroke": {
          100: "#E0E0E0",
          200: "#A0A3BD",
          300: "#DDDDDD",
        },
        "placeholder": "#959595",
        "off-white": {
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#FA5805",
        },
        "grey": {
          100: "#818181",
          200: "#ACACAC",
          300: "#444444",
          400: "#8E8E8E",
          500: "#AAAAAA",
        },
        "app-bg": "#F0F0F0"
      },
      fontFamily: {
        'sans': ['Helveticaneue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}