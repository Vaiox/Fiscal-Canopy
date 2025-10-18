/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        secondary: '#222222',
        accent: '#ff6b6b',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
