module.exports = {
  purge: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      colors: {
        'blue': {
          100: '#E8E9ED',
          200: '#C5C9D1',
          300: '#A2A8B5',
          400: '#5C677E',
          500: '#162647',
          600: '#142240',
          700: '#0D172B',
          800: '#0A1120',
          900: '#070B15',
        },
      }
    },
  },
  variants: {},
  plugins: [],
}