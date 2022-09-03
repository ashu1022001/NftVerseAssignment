/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: 'orange'
      },
      width: {
        '128': '20rem',
      }
    },
  },
  plugins: [],
}
