import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        panel: "rgba(255,255,255,0.075)",
        line: "rgba(255,255,255,0.12)",
        cyan: "#57E6E6",
        coral: "#FF6B8A",
        gold: "#FFC857",
        violet: "#9E7CFF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(87, 230, 230, 0.22)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        }
      },
      animation: {
        gradient: "gradientShift 12s ease infinite",
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
