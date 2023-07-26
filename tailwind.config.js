/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "*": {
              color: theme("colors.white"),
            },
            "footer *": {
              color: theme("colors.black"),
            },
          },
        },
      }),
    },
  },
};
