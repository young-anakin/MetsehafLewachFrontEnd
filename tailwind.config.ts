import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        vidaloka: ['Vidaloka', 'serif'],  // Added Vidaloka font here
        poppins: ['Poppins', 'sans-serif'],  // Added Poppins font here
        lato: ['Lato', 'sans-serif'],

      },
    },
  },
  plugins: [],
} satisfies Config;
