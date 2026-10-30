/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F3EC',
          50: '#FDFBF8',
          100: '#F7F3EC',
          200: '#EFE8DC',
          300: '#E6DCCB',
        },
        sand: {
          DEFAULT: '#D8C5AA',
          light: '#EADFD0',
          dark: '#BFAA8E',
        },
        walnut: {
          DEFAULT: '#75543E',
          50: '#F9F6F4',
          100: '#EDE4DE',
          200: '#DAC2B3',
          300: '#BF9A83',
          400: '#9E7459',
          500: '#75543E',
          600: '#624430',
          700: '#4F3524',
          800: '#3D281B',
          900: '#2C1B11',
        },
        forest: {
          DEFAULT: '#34483D',
          light: '#486354',
          dark: '#223028',
        },
        gold: {
          DEFAULT: '#C49A61',
          light: '#D7B483',
          dark: '#A67E44',
        },
        charcoal: {
          DEFAULT: '#302B27',
          muted: '#635952',
          light: '#8A7E76',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(48, 43, 39, 0.06)',
        'medium': '0 10px 30px -4px rgba(48, 43, 39, 0.1)',
        'elevated': '0 20px 40px -6px rgba(48, 43, 39, 0.15)',
      },
    },
  },
  plugins: [],
}
