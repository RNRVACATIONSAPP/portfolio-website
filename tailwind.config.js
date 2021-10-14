module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Bulgari: ["Bulgari", "serif"],
        HelveticaNeue: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  pseudo: {
    // defaults to {'before': 'before', 'after': 'after'}
    before: "before",
    after: "after",
    "not-first": "not(:first-child)",
  },
  variants: {
    empty: ["before", "after"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwindcss-pseudo")({
      empty: true, // defaults to true
    }),

  ],
};
