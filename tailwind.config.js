module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      width: {
        'ls': '30rem',
        'lix': '60rem',
      },
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(180deg, #77B6E1, #88C0E6, #C9E3F4, #FFFFFF)',
        'lineal-upbottom-gradient': 'linear-gradient(to bottom, #77B7E3, #C9E3F4, #FFFFFF)',
      },
      fontSize: {
        '2xl': '1.55rem',
      },
      fontWeight: {
        'semibold': '600',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#20314B',
      'tblue': '#2E4E7A',
      'celes': '#C9E3F4',
      'bgblue': '#4383CD',
      'tgray': '#999999',
      'bggray': '#E9E9E9'

    },
  }
}