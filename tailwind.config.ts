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
      screens: {
        'sm': '600px', // Custom 'sm' breakpoint
        'md': '700px', // Custom 'md' breakpoint, adjusted from the default 768px
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

    },
  },
  plugins: [],
} satisfies Config;
