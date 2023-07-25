module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        darker: '#12151f',
        light: '#f7fafc',
        lighter: '#ffffff',
        primary: '#9f7aea',
        secondary: '#ed64a6',
      },
      gradientColorStops: theme => ({
        'primary': '#9f7aea',
        'secondary': '#ed64a6',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}