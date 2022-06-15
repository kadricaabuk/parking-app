/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // Configure your color palette here
      "subwhite" : "rgba(255, 255, 255, .65)",
      "white": "#FFFFFF",
      "primary" : "#353355",
      "purple" : "#B11D94",
      "pink" : "#FC1167",
      "blue" : "rgba(94, 83, 225, .09)"
    },
    extend: {
      boxShadow: {
        'card': '0px 2px 17px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}