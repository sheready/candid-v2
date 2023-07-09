/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#005486',
        'light-blue': '#74cbf2',
        'lightest-blue': '#cae7e8',
        'indigo': '#fff4c6',
      },
      fontFamily:{
        'myfrida': 'myfrida',
        'myriad' : 'myriad',
      },
      screens:{
        'esm': '480px',
        // => @media (min-width: 480px) { ... } #
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
      },
    },
  },
  plugins: [],
}

