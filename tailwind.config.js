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
      lightPurple: "#d4dbf9",
      darkPurple: "#556ee6"
    },

  },
  plugins: [],
}

