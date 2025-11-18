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
          // فونت‌های فارسی اصلی
          'iran-sans-black': ['var(--font-iran-sans-black)', 'sans-serif'],
          'iran-sans-bold': ['var(--font-iran-sans-bold)', 'sans-serif'],
          'iran-sans-medium': ['var(--font-iran-sans-medium)', 'sans-serif'],
          'iran-sans-regular': ['var(--font-iran-sans-regular)', 'sans-serif'],
          
          // فونت‌های مخصوص اعداد
          'number-black': ['var(--font-number-sans-black)', 'sans-serif'],
          'number-bold': ['var(--font-number-sans-bold)', 'sans-serif'],
          'number-medium': ['var(--font-number-sans-medium)', 'sans-serif'],
          'number-regular': ['var(--font-number-sans-regular)', 'sans-serif'],
      },
      screens: {

      },
    },
  },
  plugins: [],
};
