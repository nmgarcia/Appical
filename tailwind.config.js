/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Appical brand colors - Green palette
        green: {
          0:"#f0fdf4",
          50:"#dcfce7", 
          100:"#bbf7d0",  
          200:"#86efac",  
          300:"#4ade80",  
          400:"#22c55e",  
          500:"#16a34a",  
          600:"#15803d",  
          700:"#166534",  
          800:"#14532d",  
          900:"#14532d",  
          950:"#052e16",
        },
        // Appical brand colors - Blue palette
        blue: {
          0:"#eff6ff",
          50:"#dbeafe", 
          100:"#bfdbfe",  
          200:"#93c5fd",  
          300:"#60a5fa",  
          400:"#3b82f6",  
          500:"#2563eb",  
          600:"#1d4ed8",  
          700:"#1e40af",  
          800:"#1e3a8a",  
          900:"#1e3a8a",  
          950:"#172554",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 8px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

