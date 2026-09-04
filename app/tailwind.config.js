/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Pivora brand tokens (Master Brief v8.1 §21)
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071628",
          light: "#12305A",
        },
        gold: {
          DEFAULT: "#C8A15A",
          // Deepened shade for small text on light backgrounds (WCAG AA ≥4.5:1);
          // decorative gold remains #C8A15A per §21.2
          dark: "#8A6D2F",
          soft: "#F3EBDC",
        },
        ink: "#172033",
        softgrey: "#F7F8FA",
        greytext: "#5B6575",
        line: "#E6EAF0",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "sans-serif"],
        head: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 2px 16px -6px rgb(11 31 58 / 0.08)",
        // Elevation system (three levels, reused everywhere — no one-off shadows).
        // e1 resting card · e2 hovered card · e3 active/expanded card.
        e1: "0 1px 2px 0 rgb(11 31 58 / 0.04), 0 4px 14px -8px rgb(11 31 58 / 0.10)",
        e2: "0 2px 4px 0 rgb(11 31 58 / 0.05), 0 14px 32px -14px rgb(11 31 58 / 0.20)",
        e3: "0 4px 8px 0 rgb(11 31 58 / 0.06), 0 26px 56px -22px rgb(11 31 58 / 0.30)",
        // Dark-surface variants: shadow reads as a lifted edge, not a drop shadow.
        "e2-dark": "0 2px 4px 0 rgb(0 0 0 / 0.28), 0 16px 36px -16px rgb(0 0 0 / 0.50)",
        "e3-dark": "0 4px 10px 0 rgb(0 0 0 / 0.32), 0 30px 64px -24px rgb(0 0 0 / 0.62)",
      },
      backgroundImage: {
        // Brand gradients — richness comes from tint and shade inside navy/gold,
        // never from a new hue (§21).
        "navy-depth": "linear-gradient(158deg, #0B1F3A 0%, #12305A 52%, #071628 100%)",
        "navy-rise": "linear-gradient(180deg, #12305A 0%, #0B1F3A 100%)",
        // Sheen, not shade: the darkest stop stays at 6.2:1 against navy so
        // navy text keeps AA on every part of a gold surface.
        "gold-sheen": "linear-gradient(135deg, #E0C289 0%, #C8A15A 55%, #C09A55 100%)",
        "line-fade": "linear-gradient(90deg, transparent 0%, #E6EAF0 12%, #E6EAF0 88%, transparent 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
