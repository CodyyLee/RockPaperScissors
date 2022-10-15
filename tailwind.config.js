/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px'
    },
    extend: {
      screens: {
        '3xl': '2560px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 0% 0%, var(--tw-gradient-stops))'
      },
      colors: {
        'light': 'hsl(214, 47%, 23%)',
        'dark': 'hsl(237, 49%, 15%)',
        'rock': 'hsl(349, 71%, 52%)',
        'paper': 'hsl(230, 89%, 62%)',
        'scissors': 'hsl(39, 89%, 49%)',
        'lizard': 'hsl(261, 73%, 60%)',
        'spoc': 'hsl(189, 59%, 53%)'
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      },
      boxShadow: {
        'inner': 'inset 0 35px 60px -15px var(--tw-shadow-color)',
        'outer': '0 35px 60px -15px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [],
}
