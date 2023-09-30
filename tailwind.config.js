/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        newgreen:"#0ee81c"
      },
      fontFamily:{
        poppins:"poppins"
      }
    },
  },
  plugins: [],
};

