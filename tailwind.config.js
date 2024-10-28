/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Trade Winds', 'system-ui'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        'night': '#010101',
        'liliac': {
          'dark': '#2b0047',
          'soft': '#411b57',
          'light': '#EE8DFF',
        },
        'ambar': '#fcf67d',
        'pumpkin': '#FF7D25',
        'frosted': '#faf5ff',
      }
    },
  },
  plugins: [],
}

