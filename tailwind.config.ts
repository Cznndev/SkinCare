import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Age Men Brand Colors
        nam: {
          // Light tones
          light: "#F5F5F5",
          "gray-light": "#B8BCC0",
          "blue-light": "#6B7A8F",

          // Medium tones
          teal: "#5A9B8E",
          "gray-medium": "#7A7F85",
          blue: "#1B365D",

          // Dark tones
          "gray-dark": "#4A5568",
          "gray-medium-dark": "#A0A4A8",
          navy: "#2C3E50",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "bounce-subtle": "bounce-subtle 0.6s ease-in-out",
        "slide-in-right": "slideInFromRight 0.6s ease-out",
        "slide-in-left": "slideInFromLeft 0.6s ease-out",
        "slide-in-bottom": "slideInFromBottom 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
        glow: "glow 2s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out",
        flash: "flash 1s ease-in-out",
        "count-up": "countUp 2s ease-out",
        "welcome-fade": "welcomeFade 3s ease-in-out",
        "welcome-slide": "welcomeSlide 2s ease-out",
        "logo-glow": "logoGlow 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(239, 68, 68, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-2px)",
          },
        },
        slideInFromRight: {
          from: {
            opacity: "0",
            transform: "translateX(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInFromLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInFromBottom: {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(90, 155, 142, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(90, 155, 142, 0.8), 0 0 30px rgba(90, 155, 142, 0.6)",
          },
        },
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        flash: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "rgba(90, 155, 142, 0.2)" },
        },
        countUp: {
          from: { transform: "scale(0.5)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        welcomeFade: {
          "0%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        welcomeSlide: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.9)",
          },
          "20%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-30px) scale(0.9)",
          },
        },
        logoGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 10px rgba(90, 155, 142, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(90, 155, 142, 0.6))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
