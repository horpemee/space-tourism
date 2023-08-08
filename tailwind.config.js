/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    screens:{
      'sm': '320px',
      'lg': '768px' ,
      'xl': '1024px',
      "2xl": "1536px"
    },

    extend: {
      
      colors: {
        "white": "#FFFFFF",
        "blackShade": "#0B0D17",
        "blueLight": "#D0D6F9",
        "lightBlack": "#D0D6F9",
        "customHSL": 'hsl(231, 77%, 90%)',
        customRGB: 'rgb(208, 214, 249)',
        "head": "#151923",
        customHL: 'hsl( 230, 35%, 7%)',
        dustomRGB: 'rgba(50,54,65,255)',
        border: "#383B4B",
        "hr": "#979797",
        "headDesk": "##323541"
        




       
      },
    },
  },

  plugins: [],
}

