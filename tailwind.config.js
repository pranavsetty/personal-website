/** @type {import('tailwindcss').Config} */

import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./index.html", // If you have an HTML file in the root
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in src
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 10px 0 -1px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [aspectRatio],
};
