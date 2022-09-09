import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { loadEnv } from 'vite'

const path = require('path')

interface VITE_ENV_CONFIG {
  VITE_HOST: string
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

const lifecycle = process.env.npm_lifecycle_event

// 通过启动命令区分环境
const envScript = process.env.npm_lifecycle_script?.split(' ')
const envName = envScript?.[envScript.length - 1] || ''
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // runtime config
  runtimeConfig: {
    // dymatic env (dev/build/localDev)
    ...envData,
    // base env
    public: {
      apiBase: '',
    },
  },

  // app
  app: {
    head: {
      title: 'Noah Custody',
      titleTemplate: '%s - Noah Custody',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Noah Custody',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
    },
  },

  // css
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/index.scss',
    '~/assets/scss/nprogress.scss',
    '~/assets/scss/element/index.scss',
  ],

  // plugins
  plugins: [],

  // build
  build: {
    transpile: [
      lifecycle === 'build:dev' || lifecycle === 'build:prod'
        ? 'element-plus'
        : '',
    ],
  },

  // modules
  modules: ['@intlify/nuxt3', '@unocss/nuxt'],

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    '@nuxtjs/svg',
    '@pinia/nuxt',
  ],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    server: {
      proxy: {
        '/mock': {
          target: 'http://yapi.dev-10-94-175-192.nip.io/mock',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mock/, ''),
        },
      },
    },
    plugins: [
      createSvgIconsPlugin({
        // svg icon url
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')],
        // svg name
        symbolId: 'svg-[dir]-[name]',
      }),
    ],
    envDir: '~/env', // 指定env文件夹
    vue: {
      reactivityTransform: true,
    },
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      availableLocales: ['zh', 'en'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // unocss
  unocss: {},
})
