const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#17b06b",
      red: "#ff3c5c",
      orange: "#f97515",
      white: "#e4e2ff",
      "github-black": "#171515",
      "youtube-red": "#ff0000",
      "twitter-blue": "#1da1f2",
      "linkedin-blue": "#0077b5",
      "facebook-blue": "#4267B2",
      "whatsapp-green": "#25D366",
      "pinterest-red": "#E60023",
    },
    fontFamily: {
      sans: ["Hack", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
