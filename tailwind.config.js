module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Barlow Semi Condensed', 'sans-serif']
      }
    },
    screens:{
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'

    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
