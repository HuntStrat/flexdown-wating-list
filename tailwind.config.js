/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      'dark-black': '#161617',
      'light-black': '#242629',
      'black-gray': '#3A3C3F',
      'dark-gray': '#4D5258',
      'light-gray' : '#595C61',
      'gray': '#86888B',
      'white' : '#F5F5F8',
   
      
            },
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/BG IMAGE.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },

  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  plugins: [],
}

