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
      animation: {
        'spin-slow': 'spin linear infinite ',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      spacing: {
        '20': '8rem', // w-20 y h-20 (puedes cambiar el valor)
        '10': '6rem', // Otro ejemplo, w-30 y h-30
      },
      height: {
        'mdx': '60vh',
        'lgx': '40vh',
        'xlgx': '75vh',
      },
      maxWidth: {
        'mdx': '30rem',
        'lgx': '40rem',
        'xsm': '15rem',
      },
      width: {
        'ls': '30rem',
        'lix': '60rem',
        'tsm': '20rem',
      },
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(180deg, #77B6E1, #88C0E6, #C9E3F4, #FFFFFF)',
        'lineal-upbottom-gradient': 'linear-gradient(to bottom, #77B7E3, #C9E3F4, #FFFFFF)',
      },
      fontSize: {
        '2xl': '1.35rem',
      },
      fontWeight: {
        'b': '700',
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
      'bggray': '#E9E9E9',
      'tdark': '#343A40',
      'chartBlue': '#00B7FE',

    },
  }
}