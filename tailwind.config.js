/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Josefin: ['Josefin Sans', 'sans-serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      Fasthand: ['Fasthand', "cursive"]
    }
  },
  plugins: [require("daisyui")],
}

