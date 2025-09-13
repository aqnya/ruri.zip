import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-US',

//  title: 'Ruri',
  description: '「 须臾水面明月出，沧江万顷琉璃寒 」',

  theme: defaultTheme({
//   logo: '/images/logo.png',

   navbar: ['/','/Build'],
  }),

  bundler: webpackBundler(),
})
