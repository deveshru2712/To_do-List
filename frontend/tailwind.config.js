/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#C5A15F",
        breadWhite: "#F6ECD4",
        yolk: "#FCDB6F",
      },
    },
  },
  plugins: [],
};
