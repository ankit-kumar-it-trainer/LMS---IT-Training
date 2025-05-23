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
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
