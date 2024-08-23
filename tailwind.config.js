/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clima-bg': "url('/src/assets/images/bg_clima.jpg')",
      },
      primary: {
        50: '#184076',
      },
    },
  },
  plugins: [],
}
