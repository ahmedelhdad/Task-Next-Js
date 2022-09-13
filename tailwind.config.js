/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.jsx',
    './pages/**/*js',
    './pages/**/*jsx'
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: '1rem'
      },
      colors:{
        primar :"#F0F0F0",
        brown:'#90BAD1 '
      }
    },
  },
  plugins: [],
}