/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      "black-1": "#272930ff",
      "black-2": "#171a23ff",
      "black-3": "#20212aff",
      "oxford-blue": "#1b2333ff",
      "steel-blue": "#217fccff",
      "sky-blue": "#2bd6f9ff",
      fawn: "#e4a663ff",
      "dark-cornflower-blue": "#204576ff",
      cafe: "#a67352ff",
      umber: "#6c5955ff",

      blue: {
        1: "#397FAD",
        2: "#2C364B",
        3: "#28A0F0",
      },
    },
    fontFamily: {
      myriad: "Myriad",
    },
    extend: {},
  },
  plugins: [],
};
