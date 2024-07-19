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
          400: "#FFF4EE",
        },
        "tertiary": {
          100: "#111111",
          200: "#333333",
          300: "#14142B",
          400: "#646464"
        },
        "stroke": {
          100: "#E0E0E0",
          200: "#A0A3BD",
          300: "#DDDDDD",
          400: "#BBBBBB",
        },
        "placeholder": "#959595",
        "off-white": {
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#FA5805",
          400: "#DFE1E6",
        },
        "grey": {
          100: "#818181",
          200: "#ACACAC",
          300: "#444444",
          400: "#8E8E8E",
          500: "#AAAAAA",
          600: "#42526E",
          700: "#8C8C8C"
        },
        "app-bg": "#F0F0F0",
        "red-alert": "#ff0000",
      },
      fontFamily: {
        'sans': ['Helveticaneue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}