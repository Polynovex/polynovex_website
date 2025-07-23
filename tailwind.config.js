/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-green': '#47ff00',
        'brand-green-secondary': '#44b749',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        'myriad': ['Myriad Pro', 'Arial', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
