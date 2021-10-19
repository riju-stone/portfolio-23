module.exports = {
  mode: "jit",
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'phone': {'max': '640px'},
      'tablet': {'max': '768px'},
      'laptop': {'max': '1024px'}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
