/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, #15C5CE, #0C677C)',
        'custom-gradient': 'linear-gradient(298deg, #15C5CE 31.01%, #0B5768 83.54%)',
      },
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
