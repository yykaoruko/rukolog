import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/styles/_variables.scss'],
  },
  head: {
    title: 'RUKOLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ログです。' },
      // OGP
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://rukolog.netlify.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'rukolog.netlify.com',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `/ogp.png`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ログです',
      },
      // twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@yykaoruko',
      },
      // TODO: fb
      // {
      //   hid: 'fb:app_id',
      //   property: 'fb:app_id',
      //   content: '646811135773478',
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Reenie+Beanie|Passion+One&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
};

export default config;
