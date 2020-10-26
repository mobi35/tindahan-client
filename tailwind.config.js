/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      opacity:{
        '40': '40%'
      },
      fontFamily: {
        body: ['Nunito'],
        cera: ['buragnit']
      },height: {
        superbig: '30%'

      },maxHeight:{
        '0' : '0',
        '40': '40%',
        '60': '60%',
        '1000px' : '1000px'
      }, letterSpacing: {
        gkwide: '0.3em',
        gkwide2: '1em',
      },padding: {
        '3px' : '3px'
      },width:{
        '18' : '18rem',
        '14' : '14rem',
        'gk-line27' : '27%',
        'gk-line530px' : '530px'
      },height:{
        '700' : '700px',
        '600': '600px',
        '32rem' : '40rem',
        'product-height' : '550px'
      },margin:{
        '9':'2.3rem',
        '99': '2.2rem',
        '50' : '50%',
        '39rem':'39rem',
        '60rem': '60rem'
      },screens:{
        'mobile' : { 'max' : '766px' }
      },spacing:{
        '142rem' : '14.2rem',
        '14rem' : '14.9rem',
        '15rem' : '15.1rem'
      }



    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
