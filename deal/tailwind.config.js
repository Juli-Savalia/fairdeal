/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          xs: "320px", // This starts at 320px, not up to 320px
          sm: "768px",
          md: "1024px",
          lg: "1440px",
        },
      },
    },
    plugins: [],
  };
  