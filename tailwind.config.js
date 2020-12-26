/**
 * @typedef { import('tailwindcss/defaultConfig') } DefaultConfig
 * @typedef { import('tailwindcss/defaultTheme') } DefaultTheme
 * @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig
 */

/**
 * @type {TailwindConfig}
 */
module.exports = {
  purge: process.env.NODE_ENV === 'production' ? ['components/**/*.vue'] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-dark-darker': '#303030',
        'my-red': '#e41749',
        'my-light': '#f0f0f0',
        'my-light-darker': '#e0e0e0',
        'my-dark': '#404040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
