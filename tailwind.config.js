/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'header': 'Gabriola',
        'body': 'Segoe UI',
      },
      colors: {
        'border': '#00000041',
      },
    },
  },
  plugins: [],
}