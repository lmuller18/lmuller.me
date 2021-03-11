const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
      colors: {
        ...colors,
        darkNavy: {
          DEFAULT: '#161130',
          well: '#130d2d',
          'video-well': '#150f2f',
        },
        ur: {
          DEFAULT: '#0b3f69',
        },
        wsb: {
          DEFAULT: '#0082ed',
        },
        monro: {
          DEFAULT: '#ffce00',
        },
        raidr: {
          DEFAULT: '#313641',
        },
        brandless: {
          DEFAULT: '#4299E1',
          dark: '#000041',
        },
        spotify: {
          DEFAULT: '#1DB954',
          dark: '#005500',
        },
        trakt: {
          DEFAULT: '#ED1C24',
          dark: '#890000',
        },
        twitch: {
          DEFAULT: '#6441A4',
          dark: '#000018',
        },
        steam: {
          DEFAULT: '#00adee',
          dark: '#002162',
        },
      },
      boxShadow: {
        elevate: '0px 6px 15px 0px #00000094',
      },
      keyframes: {
        slide: {
          '0%': {
            opacity: 0,
            transform: 'translate(0px,40px)',
          },
          '100%': {
            opacity: 1,
            transform: ' translate(0px,0px)',
          },
        },
        move: {
          '50%': {
            backgroundPosition: 'right bottom',
          },
        },
        marquee: {
          '0%': {
            transform: 'translate(100%, 0)',
          },
          '100%': {
            transform: 'translate(-100%, 0)',
          },
        },
        rubberBand: {
          from: {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },

          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          'to ': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        slide: 'slide 1s ease-in-out',
        move: 'move 30s infinite',
        marquee: 'marquee 12s linear infinite',
        rubberBand: 'rubberBand',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
