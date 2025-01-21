/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(21,197,206,1) 0%, rgb(14, 129, 155) 100%)',
        'customHover-gradient' : 'linear-gradient(0deg, rgb(12, 163, 171) 0%, rgb(5, 63, 75) 100%)' ,
      },
      textColor: {
        'basisText' : '#4B4B4B' ,
        'lightGrey' : '#8E8E8E'
      },
    }
  },
  plugins: [],
}
