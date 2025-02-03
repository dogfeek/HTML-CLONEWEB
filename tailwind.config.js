/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Playfair+Display']
      },
      colors:{
        primary :"#7D8CA3",
        secondary:{
          100: "#E2EFDE",
          200: "#AFD0BF",
        }
      }
    },
  },
  plugins: [],
}

