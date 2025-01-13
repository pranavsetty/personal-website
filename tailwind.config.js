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
        custom: "10px 10px 0 -1px rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "gradient-noise": "linear-gradient(135deg, #ffd700, #7b68ee)", // Adjust colors
        "noise-texture": "url('path-to-noise-texture.png')", // Add your texture image
      },
    },
    plugins: [aspectRatio],
  },
};
