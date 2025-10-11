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
        
        // mobile: { max: "375px" },

        
        // tablet: { min: "376px", max: "834px" },

       
        // laptop: { min: "835px", max: "1440px" },

        // desktop: { min: "1441px" },
      },
    },
  },
  plugins: [],
};
