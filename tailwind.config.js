/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 70%': { width: '0%' },
          '30%, 100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { 'border-color': 'black' },
          '51%, 100%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 6s steps(40, end) infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}