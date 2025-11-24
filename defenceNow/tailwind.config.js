/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blue - DEFENCE color from logo (#013D8D)
        primary: {
          50: '#e6f0f9',
          100: '#cce1f3',
          200: '#99c3e7',
          300: '#66a5db',
          400: '#3387cf',
          500: '#013D8D',  // Exact DEFENCE color from logo
          600: '#01357d',
          700: '#012d6e',
          800: '#01255e',
          900: '#011d4f',
        },
        // Navy/Dark Blue - WINGS color from logo (#021E42)
        navy: {
          50: '#e6e9ed',
          100: '#ccd3db',
          200: '#99a7b7',
          300: '#667b93',
          400: '#334f6f',
          500: '#02274b',
          600: '#021E42',  // Exact WINGS color from logo
          700: '#021939',
          800: '#021430',
          900: '#020f27',
        },
        // Accent color (keeping gold as accent, you can change this)
        accent: {
          50: '#fef3e2',
          100: '#fde5c4',
          200: '#fbcb89',
          300: '#f9b14e',
          400: '#f79713',
          500: '#e67e00',  // Warm accent
          600: '#b86400',
          700: '#8a4b00',
          800: '#5c3200',
          900: '#2e1900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
