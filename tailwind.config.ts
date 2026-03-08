import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "var(--navy-950)",
          900: "var(--navy-900)",
          800: "var(--navy-800)",
          700: "var(--navy-700)"
        },
        teal: {
          500: "var(--teal-500)",
          400: "var(--teal-400)",
          300: "var(--teal-300)"
        },
        grayx: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)"
        },
        gold: {
          400: "var(--gold-400)"
        }
      },
      fontFamily: {
        serifDisplay: ["var(--font-playfair)", "serif"],
        body: ["var(--font-noto-jp)", "sans-serif"],
        english: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        card: "0 16px 40px rgba(11, 18, 32, 0.08)",
        cardHover: "0 24px 60px rgba(11, 18, 32, 0.14)"
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, var(--navy-950), var(--navy-800))"
      },
      keyframes: {
        floatArrow: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" }
        },
        driftPattern: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-120px, -80px, 0)" }
        }
      },
      animation: {
        floatArrow: "floatArrow 2.2s ease-in-out infinite",
        driftPattern: "driftPattern 60s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
