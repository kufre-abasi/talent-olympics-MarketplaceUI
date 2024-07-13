/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['plus-jakarta']
      },
      colors: {
        brand: '#0040A1',
        primary: {
          100: '#FEF4E6',
          200: '#FDE8CD',
          300: '#FCD8AC',
          400: '#F8B15A',
          500: '#F79E30',
          600: '#F58A07',
          700: '#CC7306',
          800: '#A35C05',
          900: '#7A4504',
          1000: '#522E02',
          1100: '#311C01'
        },
        secondary: {
          100: '#E3EFFC',
          200: '#C6DDF7',
          300: '#B6D8FF',
          400: '#80BBFF',
          500: '#3D89DF',
          600: '#1671D9',
          700: '#0D5EBA',
          800: '#034592',
          900: '#04326B',
          1000: '#012657',
          1100: '#001633'
        },
        success: {
          100: '#E7F6EC',
          200: '#B5E3C4',
          300: '#91D6A8',
          400: '#5FC381',
          500: '#40B869',
          600: '#0F973D',
          700: '#099137',
          800: '#04802E',
          900: '#036B26',
          1000: '#015B20',
          1100: '#004617'
        },
        warning: {
          100: '#FEF6E7',
          200: '#FBE2B7',
          300: '#F7D394',
          400: '#F7C164',
          500: '#F5B546',
          600: '#F3A218',
          700: '#DD900D',
          800: '#AD6F07',
          900: '#865503',
          1000: '#664101',
          1100: '#523300'
        },
        error: {
          100: '#FBEAE9',
          200: '#F2BCBA',
          300: '#EB9B98',
          400: '#E26E6A',
          500: '#DD524D',
          600: '#D42620',
          700: '#CB1A14',
          800: '#BA110B',
          900: '#9E0A05',
          1000: '#800501',
          1100: '#591000'
        },
        neutral: {
          100: '#F9FAFB',
          200: '#F7F9FC',
          300: '#F0F2F5',
          400: '#E4E7EC',
          500: '#D0D5DD',
          600: '#98A2B3',
          700: '#667185',
          800: '#475367',
          900: '#344054',
          1000: '#1D2739',
          1100: '#101928'
        },
        brown: {
          100: '#FBF1F1',
          200: '#F0E6E6',
          300: '#E4DBDB',
          400: '#CDC4C4',
          500: '#B7AFAF',
          600: '#A29999',
          700: '#8D8484',
          800: '#787070',
          900: '#645D5D',
          1000: '#514A4A',
          1100: '#3E3838'
        },
        shades: {
          white: '#FFFFFFF',
          black: '#000000'
        },
        text: {
          white: {
            100: '#FFFFFF',
            200: '#C2C2C4',
            300: '#9D9EA1'
          },
          black: {
            100: '#1D2433',
            200: '#98A2B3',
            300: '#D0D5DD',
            secondary: '#707989',
            primary: '#1D2433'
          }
        }
      },
      utilities: {
        '.tick': {
          display: 'inline-block',
          width: '1.55rem',
          height: '0.5rem',
          border: '2px solid currentColor',
          borderTop: 'none',
          borderRight: 'none',
          transform: 'rotate(-45deg)',
          marginRight: '0.25rem'
        }
      }
    }
  },
  plugins: []
}
