/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#c7e1ec',
          200: '#a3cee0',
          300: '#7fbad4',
          400: '#63aacb',
          500: '#479ac2',
          600: '#348abf',
          700: '#237aba',
          800: '#1f6ba5',
          900: '#1F3A93',
        },
        secondary: {
          50: '#e0f9f6',
          100: '#b3f0eb',
          200: '#80e6df',
          300: '#4ddcd3',
          400: '#26d3c7',
          500: '#00cabc',
          600: '#00a896',
          700: '#008679',
          800: '#006e61',
          900: '#00A896',
        },
        accent: {
          gold: '#D4AF37',
        },
        bg: {
          light: '#F8F9FA',
        },
        text: {
          dark: '#2C3E50',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
