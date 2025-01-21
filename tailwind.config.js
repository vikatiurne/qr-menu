/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        elMassiri: ['El Messiri', 'sans-serif'],
      },
      screens: {
        tablet: { max: '1024px' },
        mobile: { max: '375px' },
      },
    },
  },
  plugins: [],
};
