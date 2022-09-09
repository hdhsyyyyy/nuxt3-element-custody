import { Search, Upload, User, WarningFilled } from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Search', Search)
  nuxtApp.vueApp.component('Upload', Upload)
  nuxtApp.vueApp.component('User', User)
  nuxtApp.vueApp.component('WarningFilled', WarningFilled)
})
