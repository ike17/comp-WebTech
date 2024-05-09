module.exports = {
    darkMode: 'class', // Use the 'class' strategy for dark mode
    theme: {
      extend: {
        colors: {
          gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            700: '#2d3748',
            800: '#1a202c',
            900: '#12151a'
          },
          clifford: '#da373d', // Custom color
        }
      }
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark']
      }
    },
    plugins: [],
  }
  