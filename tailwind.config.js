/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      black: '#F2EFEB',
      btnorange: '#ff8a4c',
      graytype: '#a19f9d',
      whitetype: '#faf7f3'
    },


    extend: {},
  },


  plugins: [
    require('flowbite/plugin')
  ],
};
