/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-gray': '#333333',
        'soft-white': '#F5F5F5',
        'cool-blue-gray': '#2C3E50',
        'light-cool-grey': '#ECEFF1',
        'muted-blue': '#607D8B',
        'skin' : '#ebdecb',
        'dark' : '#9c7664'
      },
    },
  },
  plugins: [],
}