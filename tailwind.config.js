/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu"],
        BebasNeue:["Bebas Neue"]
       },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}