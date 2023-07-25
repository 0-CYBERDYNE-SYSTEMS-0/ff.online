module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        darker: '#121827',
        light: '#f7fafc',
        lighter: '#edf2f7',
      },
      gradientColorStops: theme => ({
        'dark-stop': '#1a202c',
        'light-stop': '#f7fafc',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}