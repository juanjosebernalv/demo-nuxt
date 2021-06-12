module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '80vh': '80vh',
      },
      container: {
        padding: {
          DEFAULT: '0rem',
          sm: '0rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#08539f',
        secondary: '#fcc50e',
        error: '#e41e29',

      }
    }
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}