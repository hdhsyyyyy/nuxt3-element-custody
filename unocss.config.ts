import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetScalpel } from 'unocss-preset-scalpel'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
    presetScalpel({}),
  ],
  // Dynamic Rules
  rules: [
    // padding vh/vw
    [/^pl-(\d+)-vw$/, ([, d]) => ({ 'padding-left': `${d}vw` })],
    [/^pr-(\d+)-vw$/, ([, d]) => ({ 'padding-right': `${d}vw` })],
    [/^pt-(\d+)-vh$/, ([, d]) => ({ 'padding-top': `${d}vh` })],
    [/^pb-(\d+)-vh$/, ([, d]) => ({ 'padding-bottom': `${d}vh` })],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'fill-font-tertiary',
    'hover:fill-primary',
    'fill-tertiary-icon',
    'fill-font-white',
  ],
  // preflight: true,
  theme: {
    // ...
    colors: {
      // 主题色
      primary: '#19191D',
      warning: '#FDB022',
      danger: '#F5223B',
      success: '#00DC5F',
      info: '#8D98AF',
      // 文本
      font: {
        secondary: '#6F757E',
        main: '#3F4753',
        tertiary: '#8D98AF',
        white: '#FFF',
        license: '#86939B',
      },
      // 图标/边框等
      tertiary: {
        border: '#EFEFF4',
        icon: '#D0D5DD',
        bg: '#FBFBFD',
        divider: '#F7F7FA',
        disabled: '#EDEDF0',
        tag: '#597EF7',
      },
    },
  },
})
