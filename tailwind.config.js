/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#041120",
          900: "#071A2E",
          800: "#0B2742",
          700: "#123758",
        },
        gold: {
          400: "#D9B45C",
          500: "#C69A3D",
          600: "#A77B26",
        },
        porcelain: "#F7F5EF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(217, 180, 92, 0.2)",
        glass: "0 24px 80px rgba(4, 17, 32, 0.2)",
      },
    },
  },
  plugins: [],
};
