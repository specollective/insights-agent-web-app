/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    fontFamily: {
      hero: "Segoe UI",
    },
    extend: {
      colors: {
        "green" : {
          100: "#70B443",
        }
      }
    },
  },
  plugins: [],
};
