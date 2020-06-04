
export default {
  mode: 'universal',
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `./favicon.ico` }
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
