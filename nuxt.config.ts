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
};

export default config;
