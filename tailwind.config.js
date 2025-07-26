/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B1834',
          dark: '#16142a',
          light: '#28244d'
        },
        secondary: {
          DEFAULT: '#2C333F',
          dark: '#1E2527',
          light: '#3D4548'
        },
        accent: {
          orange: '#FF6B6B',
          blue: '#74B9FF',
          purple: '#A29BFE',
          yellow: '#FED330'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'twinkle': 'twinkle 3s infinite',
        'float': 'float 6s infinite ease-in-out',
        'float-delayed': 'float-delayed 8s infinite ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
