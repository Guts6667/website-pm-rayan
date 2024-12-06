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
          blurry: "rgba(255, 251, 249, 0.3)",
        },
        dark: {
          background: "#141310",
          text: "#FCF6E6",
          yellow: "#FFB800",
          blurry: "rgb(20, 19, 16, 0.4)",
          
        },
        "dark-primary": "#FFB800",
        yellow: "#FFB800",
        black: "#141310",
        white: "#FCF6E6",
        orange: "#FB6502",
        "dark-blurry": "rgba(20, 19, 16, 0.3)",
        "light-blurry": "rgba(255, 251, 249, 0.3)",
        
        "white-transparent": "rgb(255, 246, 224, 0.2)",
        "black-transparent": "rgb(20, 19, 16, 0.4)",
      },
      backgroundColor: {
        black: "#141310",
        white: "#FCF6E6",
      },

      animation: {
        marquee: "marquee linear infinite",
        cover: "cover 1s forwards  ease-in-out ",
        uncover: "uncover 1s forwards ease-in-out ",
        slideDown: "slideDown 0.6s forwards ease-in-out ",
        slideUp: "slideUp 0.6s forwards  ease-in-out",
        fadeIn: "fadeIn 1.6s forwards ease-in-out ",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
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
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        }, 
      },
    },
  },
  plugins: [],
};
