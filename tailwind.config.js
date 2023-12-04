/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'background-pattern': "url('src/assets/background/background-pattern-desktop.svg')"
      },
      fontFamily: {
       'work-sans': 'Work Sans, sans-serif'
      }
    },
  },
  plugins: [],
}

