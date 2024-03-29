/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#011F45",
        "theme-btn": "#FF4638",
        "theme-offwhite": "#F0DDBF"
      }
    },
  },
  plugins: [],
};
