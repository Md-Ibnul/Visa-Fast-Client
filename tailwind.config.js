/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Urbanist: ['Urbanist', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
      Fasthand: ['Fasthand', "cursive"]
    }
  },
  plugins: [require("daisyui")],
}

