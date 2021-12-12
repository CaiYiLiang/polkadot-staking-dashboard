const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./**/*.html', './**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        subvis: {
          primary: {
            DEFAULT: '#1D3FAA',
            focus: '#3F62D3',
            content: colors.white,
          },
          secondary: {
            DEFAULT: '#378E75',
            focus: '#52A990',
            content: colors.white,
          },
          accent: {
            DEFAULT: '#FCCA46',
            focus: '#FFDF89',
            content: '#0F172A',
          },
          neutral: {
            DEFAULT: '#334155',
            focus: '#0F172A',
            content: colors.white,
          },
          base: {
            100: colors.white,
            200: colors.blueGray['50'],
            300: colors.blueGray['200'],
            content: colors.blueGray['800'],
          },
        },
        info: colors.blue['500'],
        success: colors.emerald['500'],
        warning: colors.yellow['500'],
        error: colors.red['500'],
        mainBg: '#F8FAFC',
      },
      textColor: (theme) => ({
        header: '#4b5563', // colors.grey['600'],
        subtitle: colors.blueGray['700'],
        tableHead: colors.blueGray['500'],
        button: colors.blueGray['400'],
        'nav-rested': colors.blueGray['400'],
        error: colors.red['500'],
        'nav-primary': theme('colors')['subvisprimary'],
        'nav-hover': theme('colors')['subvisprimary-focus'],
        disabled: '#CBD5E1', // colors.blueGray['400'],
        primary: '#94A3B8',
        secondary: '#1D3FAA',
      }),
      // borderColor: (theme) => ({
      //   divider: theme('colors').blueGray['200'],
      // }),
    },
  },
  variants: {},
  plugins: [require('daisyui')],
};
