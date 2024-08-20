/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 15px rgba(39, 0, 93, 1)',
      }
    },
  },
  plugins: [],
}

