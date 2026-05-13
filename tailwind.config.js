export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172026',
        muted: '#64717c',
        surface: '#f7f4ee',
        line: '#ddd6cb',
        route: {
          50: '#eef8f4',
          100: '#d8efe5',
          500: '#288866',
          600: '#1f7054',
          700: '#195943'
        },
        signal: '#e2b84c',
        coral: '#d86b5d'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 38, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
