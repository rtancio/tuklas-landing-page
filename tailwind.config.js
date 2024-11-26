/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tuklas: {
          primary: '#2A9D8F',
          secondary: '#E9C46A',
          accent: '#F4A261',
          highlight: '#E76F51',
        }
      }
    },
  },
  plugins: [],
}