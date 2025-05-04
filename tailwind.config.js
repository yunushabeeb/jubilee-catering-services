/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Default font
        rubik: ['Rubik', 'sans-serif'], // Class-based font
      },
      colors: {
        primary: '#FBBC05',
        secondary: '#EFEAEA',
        tertiary: '#808080',
      },
    },
  },
  plugins: [],
};
