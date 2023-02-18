/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': "#622569",
        'turquoise': "#059aa0",
        'lightPurple': "#d6d4e0",
      },
    },
    
    fontFamily: {
      display: ["oswald"],
    }

    
  },
  plugins: [],
}