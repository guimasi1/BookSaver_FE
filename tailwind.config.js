/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        midnight: "#1F2937",
        grapefruit: "#F86B0A",
      },
    },
  },
  plugins: [],
};
