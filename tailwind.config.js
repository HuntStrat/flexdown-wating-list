/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
    colors: {
      'dark-black': '#161617',
      'light-black': '#242629',
      'black-gray': '#3A3C3F',
      'dark-gray': '#4D5258',
      'light-gray' : '#595C61',
      'border-gray' : '#AAACAE',
      'gray': '#86888B',
      'white' : '#F5F5F8',
      'blur-white': '#F9F7FF',
      'gradient-purple': '#9976DC63',
      'gradient-white': '#FFFFFF',
   
      
            },
            borderRadius: {
              '2px': '2px', 
            },
            blur: {
              'custom-blur': '10px',
            },
            boxShadow: {
              'list-shadow': '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
            backgroundColor: {
              'border-gradient':
                'linear-gradient(90deg, #9976DC63 0%, #FFFFFF 100%)',
            },
 
      lineHeight: {
        '10': '60px',
        '20': '90px',
        '36': '36px',
      },
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

