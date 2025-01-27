/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(0deg, rgba(21,197,206,1) 0%, rgb(14, 129, 155) 100%)',
      },

      screens: {
        mobile: { min: '375px', max: '768px' },
        tab: { min: '769px', max: '1023px' },
        imgBG: { min: '1024px', max: '1279px' },
      },
    },
  },
  plugins: [],
};
