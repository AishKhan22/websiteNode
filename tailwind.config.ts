import type { Config } from "tailwindcss";

// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#FF0000', // Red
      },
    },
  },
  plugins: [],
};
