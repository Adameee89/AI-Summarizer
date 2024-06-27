/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          800: '#2d2d2d',
          900: '#1f1f1f',
        },
        orange: {
          500: '#f97316',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
      },
    },
  },
  plugins: [],
}

