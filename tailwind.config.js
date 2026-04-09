/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1F44",
        secondary: {
          start: "#1E3A8A",
          end: "#3B82F6"
        }
      },
    },
  },
  plugins: [],
};