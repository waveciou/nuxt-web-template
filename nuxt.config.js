
export default {
  mode: 'universal',
  vue: {
    config: {
      devtools: true
    }
  },
  router: {
    base: '/nuxt-web-template/'
  },
  generate: {
    fallback: false,
    minify: {
      collapseWhitespace: false
    }
  },
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    bodyAttrs: {
      class: 'no-js'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'Content-Type', charset: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge'},
      { name: 'format-detection', content: 'telephone=no'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './_resources/favicon/favicon.ico' }
    ],
    script: [
      { src: './_resources/js/polyfill.min.js'}
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  plugins: [
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/';
      }
      return config;
    },
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js'
    }
  }
}
