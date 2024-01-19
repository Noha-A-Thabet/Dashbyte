/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},

    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      lemon: ['Lemon', 'serif']
    },

    colors: {
      gray: "#f8f8fb",
      purple: "#d4dbf9",
      darkPurple: "#8f75e6"
    }
  },
  plugins: [],
}

