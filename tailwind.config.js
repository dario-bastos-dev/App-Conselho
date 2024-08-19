/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%" : { opacity: 0},
          "100%": { pacity: 1},
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      }
    },
  },
  plugins: [],
};
