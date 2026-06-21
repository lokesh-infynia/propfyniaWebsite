/** @type {import('tailwindcss').Config} */
// Theme tokens sourced from getdesign.md (ElevenLabs design analysis).
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink / text
        ink: "#0c0a09",
        body: "#4e4e4e",
        "body-strong": "#292524",
        muted: "#777169",
        "muted-soft": "#a8a29e",
        // Brand action (warm near-black pill)
        primary: "#292524",
        "primary-active": "#0c0a09",
        // Surfaces
        canvas: "#f5f5f5",
        "canvas-soft": "#fafafa",
        "canvas-deep": "#0c0a09",
        "surface-card": "#ffffff",
        "surface-strong": "#f0efed",
        "surface-dark": "#0c0a09",
        "surface-dark-elevated": "#1c1917",
        // Hairlines
        hairline: "#e7e5e4",
        "hairline-soft": "#f0efed",
        "hairline-strong": "#d6d3d1",
        // On dark
        "on-dark": "#ffffff",
        "on-dark-soft": "#a8a29e",
        // Atmospheric gradient orb stops (decoration only)
        "orb-mint": "#a7e5d3",
        "orb-peach": "#f4c5a8",
        "orb-lavender": "#c8b8e0",
        "orb-sky": "#a8c8e8",
        "orb-rose": "#e8b8c4",
        // Semantic
        success: "#16a34a",
        error: "#dc2626",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Waldenburg Light substitute per DESIGN.md: EB Garamond.
        display: ["EB Garamond", "Times New Roman", "Georgia", "serif"],
      },
      letterSpacing: {
        body: "0.16px",
        display: "-0.02em",
        "display-tight": "-0.03em",
        label: "0.96px",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        xxl: "24px",
      },
      boxShadow: {
        // Single subtle drop tier — "hairline + soft drop".
        soft: "0 4px 16px rgba(0, 0, 0, 0.04)",
        card: "0 1px 2px rgba(0, 0, 0, 0.04)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
