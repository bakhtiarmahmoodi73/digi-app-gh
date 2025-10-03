/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#F8F9FA",
      },
      fontFamily: {
        iranSans: ["var(--font-iran-sans)"],
        iranSansnumber: ["var(--font-number-sans)"],
      },
      screens: {
        mobile: "0px",
        tablet: "376px",
        laptop: "835px",
      },
    },
  },
  plugins: [],
};
