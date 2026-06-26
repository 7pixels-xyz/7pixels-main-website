import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg-cream)",
        brandBlue: "var(--brand-blue)",
        accentLight: "var(--accent-light)",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
