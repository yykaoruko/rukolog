import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
};

export default config;
