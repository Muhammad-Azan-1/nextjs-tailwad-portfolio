import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#fdfdfd",
        secondary: "#333",
        main:'#754ef9',
      },
    },
  },
  plugins: [],
} satisfies Config;
