module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    },
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      black: {
        DEFAULT: '#121212',
        light: '#19191A',
      },
      gray: {
        DEFAULT: '#EEEEEE',
        medium: '#C7C2C2',
      },
      red: {
        dark: '#972F31',
        darker: '#BD2B32',
        error: '#ff0033',
      },
      blue: {
        light: '#B6CCF9',
        DEFAULT: '#4577D8',
        dark: '#0a111e',
      },
      green: {
        DEFAULT: '#0BBF63',
      },
      yellow: {
        DEFAULT: '#AEAF00',
        light: '#D3D44F',
      },
      orange: {
        DEFAULT: '#F5A623',
        light: '#FBC774',
      },
      gold: {
        DEFAULT: '#A6812F',
      },

      pink: {
        DEFAULT: '#EC6A6C',
        light: '#EBA8A6',
        dark: '#D4696B',
      },
      silver: {
        DEFAULT: '#333F4B',

      },
      transparent: {
        DEFAULT: 'transparent',
      },
    },
    borderColor: theme => ({
      ...theme('colors'),
      'error': '#ff0033',
    }),
    extend: {

      width: {
        '1/4': '25vw',
        '1/3': '33.333333vw',
        '2/3': '66.666667vw',
        '3/4': '75vw',
        'icon': '16px',
        'screenshot': 'calc(100% - 22.1%)',
      },
      minHeight: {
        '3/4': '75vh',
      },
      height: {
        '1/10': '10vh',
        '3/20': '15vh',
        '1/2': '50vh',
        '2/3': '66.666667vh',
        '3/4': '75vh',
        'icon': '16px',
        'screenshot': 'calc(100% - 41.7%)',
      },
      inset: {
        '11/100': '10.9%',
        '13/100': '13.5%',
      },
    },
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '770px',
      'lg': '992px',
      'xl': '1500px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
