/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        light: {
          background: "#FCF6E6",
          text: "#141310",
          orange: "#FB6502",
        },
        dark: {
          background: "#141310",
          text: "#FCF6E6",
          yellow: "#FFB800",
        },
        "dark-primary": "#FFB800",
        yellow: "#FFB800",
        black: "#141310",
        white: "#FCF6E6",
        orange: "#FB6502",
        "white-transparent": "rgb(255, 246, 224, 0.2)",
        "black-transparent": "rgb(20, 19, 16, 0.4)",
      },
      backgroundColor: {
        black: "#141310",
        white: "#FCF6E6",
      },

      animation: {
        marquee: "marquee linear infinite",
        cover: "cover 1s forwards  ease-in-out",
        uncover: "uncover 1s forwards ease-in-out",
        slideDown: "slideDown 0.6s forwards ease-in-out",
        slideUp: "slideUp 0.6s forwards  ease-in-out",
        fadeIn: "fadeIn 1.6s forwards ease-in-out ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        cover: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        uncover: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
