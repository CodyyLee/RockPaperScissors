/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'from-rock',
    'from-scissors',
    'from-paper',
    'to-rockTo',
    'to-scissorsTo',
    'to-paperTo',
    'shadow-rockDark',
    'shadow-paperDark',
    'shadow-scissorsDark'
  ],
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
        'gradient-radial': 'radial-gradient(circle at 0% -10%, var(--tw-gradient-stops))'
      },
      colors: {
        'light': 'hsl(214, 47%, 23%)',
        'dark': 'hsl(237, 49%, 15%)',
        'rock': 'hsl(349, 71%, 52%)',
        'rockTo': 'hsl(349, 70%, 56%)',
        'rockDark': 'hsl(349, 71%, 42%)',
        'paper': 'hsl(230, 89%, 62%)',
        'paperTo': 'hsl(230, 89%, 65%)',
        'paperDark': 'hsl(230, 89%, 55%)',
        'scissors': 'hsl(39, 89%, 49%)',
        'scissorsTo': 'hsl(40, 84%, 53%)',
        'scissorsDark': 'hsl(40, 84%, 43%)',
        'lizard': 'hsl(261, 73%, 60%)',
        'spoc': 'hsl(189, 59%, 53%)',
        'overlay-black': 'rgba(0,0,0,0.9)'
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      },
      boxShadow: {
        'inner': 'inset 0px 6px var(--tw-shadow-color)',
        'outer': '0px 5px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [],
}
