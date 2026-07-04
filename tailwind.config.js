/** @type {import('tailwindcss').Config} */
// Theme tokens sourced from the PropFynia app's own design system
// (src/propfynia.css in propfyniaApp) — navy + gold "Quiet Luxury".
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink / text
        ink: "#0D1E35",
        body: "#3D5270",
        "body-strong": "#0D1E35",
        muted: "#7090B0",
        "muted-soft": "#B0C4D8",
        // Brand action (deep navy)
        primary: "#142B4A",
        "primary-active": "#0B1E35",
        // Accent (warm gold)
        accent: "#BF9428",
        "accent-active": "#9A7820",
        "accent-soft": "#F4EACB",
        "brand-soft": "#E6EDF8",
        "brand-soft-2": "#D4DFF2",
        // Surfaces
        canvas: "#F3F5FA",
        "canvas-soft": "#E8EBF5",
        "canvas-deep": "#0B1E35",
        "surface-card": "#FFFFFF",
        "surface-strong": "#E8EBF5",
        "surface-dark": "#0B1E35",
        "surface-dark-elevated": "#142B4A",
        // Hairlines
        hairline: "#DDE3EE",
        "hairline-soft": "#E8EBF5",
        "hairline-strong": "#CDD5E6",
        // On dark
        "on-dark": "#ffffff",
        "on-dark-soft": "#9BB5CE",
        // Semantic
        success: "#25875A",
        warning: "#CC8820",
        error: "#C0402E",
        info: "#2470A8",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        body: "0",
        display: "-0.01em",
        "display-tight": "-0.02em",
        label: "0.14em",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        xxl: "26px",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(13,30,53,0.07)",
        card: "0 1px 2px rgba(13,30,53,0.05)",
        brand: "0 8px 22px rgba(20,43,74,0.28)",
        gold: "0 6px 18px rgba(191,148,40,0.32)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
