/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#B5C8D9',
        base: {
          white: '#F9FAFB',
          black: '#000000',
        },
        primary: {
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84A9FF',
          400: '#6690FF',
          500: '#3366FF',
          600: '#254EDB',
          700: '#1939B7',
          800: '#102693',
          900: '#091A7A',
          1000: '#071862',
        },
        secondary: {
          100: '#C8DAF2',
          200: '#A2BEDB',
          300: '#7CA1C4',
          400: '#5685AD',
          500: '#326A95',
          600: '#255A81',
          700: '#194A6D',
          800: '#0D3A59',
          900: '#022A45',
          1000: '#001B32',
        },
        neutrals: {
          100: '#F9FAFB',
          200: '#F4F4F5',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
          1000: '#111827',
        },
        success: {
          100: '#A2F4EE',
          200: '#6CE9E1',
          300: '#33D3C9',
        },
        warning: {
          100: '#FCE6C1',
          200: '#FCCB92',
          300: '#FCB564',
        },
        error: {
          100: '#FCA5A5',
          200: '#F87171',
          300: '#DC2626',
        },
      },
    },
    extend: {
      spacing: {
        '100': '480px',
        '101': '605px',
        '010': '10%'
      }
    },
  },
  plugins: [],
};
