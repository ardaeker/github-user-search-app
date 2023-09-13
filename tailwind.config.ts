import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#0079FF",
        "greyish-blue": "#697C9A",
        "metallic-blue": "#4B6A9B",
        "dark-slate": "#2B3442",
        "ghost-white": "#F6F8FF",
        "milk-white": "#FEFEFE",
        mirage: "#141D2F",
        "blue-zodiac": "#1E2A47",
      },
      fontSize: {
        h1: ["1.625rem", { lineHeight: "2.375rem", fontWeight: "700" }],
        h2: ["1.375rem", { lineHeight: "2.063rem", fontWeight: "700" }],
        h3: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        h4: ["0.8125rem", { lineHeight: "1.25rem", fontWeight: "700" }],
        body: ["0.9375rem", { lineHeight: "1.563", fontWeight: "400" }],
      },
      boxShadow: {
        input: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
        container: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
