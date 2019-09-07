import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  buildModules: ['@nuxt/typescript-build'],
}

export default config;
