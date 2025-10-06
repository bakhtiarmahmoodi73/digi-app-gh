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
        // موبایل (۰ تا ۳۷۵px)
        mobile: { max: "375px" },

        // تبلت (۳۷۶ تا ۸۳۴px)
        tablet: { min: "376px", max: "834px" },

        // لپ‌تاپ (۸۳۵ تا ۱۴۴۰px)
        laptop: { min: "835px", max: "1440px" },

        // ا برای نمایشگرهای بزرگ‌تر
        desktop: { min: "1441px" },
      },
    },
  },
  plugins: [],
};
