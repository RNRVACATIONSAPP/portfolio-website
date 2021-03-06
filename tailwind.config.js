module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bulgari: ["Bulgari", "serif"],
        HelveticaNeue: ["Helvetica Neue", "sans-serif"],
        SchnyderL: ["Schnyder L", "serif"],
        GTWalsheim: ["GT Walsheim Pro", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
