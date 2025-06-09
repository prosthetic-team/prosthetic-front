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
        '20': '8rem',
        '10': '6rem',
      },
      height: {
        'mdx': '60vh',
        'lgc': '27vh',
        'lgx': '40vh',
        'xlgx': '80vh',
      },
      maxWidth: {
        'mdx': '34rem',
        'lgx': '40rem',
        'xsm': '15rem',
      },
      width: {
        'ls': '30rem',
        'lix': '60rem',
        'tsm': '20rem',
        'mdx': '34rem',
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
      'bggray': '#F5F5F5',
      'tdark': '#343A40',
      'chartBlue': '#00B7FE',

    },
  }
}