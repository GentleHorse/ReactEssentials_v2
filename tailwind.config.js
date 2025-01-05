/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", serif'],
        dmSerifTextRegular: ['"DM Serif Text", serif'],
        inriaSerifBold: ['"Inria Serif", serif'],
        poiretOneRegular: ['"Poiret One", serif'],
        montserrat: ['"Montserrat", serif'],
      },

      keyframes: {
        tilt: {
          "0%, 100%": { transform: "rotate(-75deg)" },
          "50%": { transform: "rotate(-45deg)"},
        },
      },

      animation: {
        tilt: "tilt 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
