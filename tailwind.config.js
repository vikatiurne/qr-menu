/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        elMessiri: ['El Messiri', 'sans-serif'],
      },
      screens: {
        tablet: { max: '1024px' },
        mobile: { max: '375px' },
      },
      backgroundImage: {
        gradientToTop: 'linear-gradient(to top, #15C5CE, #0C677C)',
      },
    },
  },
  plugins: [],
};
