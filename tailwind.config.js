/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '480px',
        '101': '605px'
      }
    },
  },
  plugins: [],
};

