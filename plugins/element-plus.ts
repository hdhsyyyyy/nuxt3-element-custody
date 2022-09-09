/* eslint-disable dot-notation */
import {
  ID_INJECTION_KEY,
  ElSteps,
  ElStep,
  ElDialog,
  ElForm,
  ElFormItem,
  ElEmpty,
  ElSpace,
  ElButton,
  ElPagination,
  ElConfigProvider,
  ElTable,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDivider,
  ElTabPane,
  ElTabs,
  ElTableColumn,
  ElTag,
  ElSelect,
  ElOption,
  ElPopper,
  ElLink,
  ElInput,
  ElCascader,
  ElTooltip,
  ElPopover,
  ElPopconfirm,
  ElLoading,
  vLoading,
} from 'element-plus'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ElSteps', ElSteps)
  nuxtApp.vueApp.component('ElStep', ElStep)
  nuxtApp.vueApp.component('ElDialog', ElDialog)
  nuxtApp.vueApp.component('ElForm', ElForm)
  nuxtApp.vueApp.component('ElFormItem', ElFormItem)
  nuxtApp.vueApp.component('ElEmpty', ElEmpty)
  nuxtApp.vueApp.component('ElSpace', ElSpace)
  nuxtApp.vueApp.component('ElButton', ElButton)
  nuxtApp.vueApp.component('ElPagination', ElPagination)
  nuxtApp.vueApp.component('ElConfigProvider', ElConfigProvider)
  nuxtApp.vueApp.component('ElTable', ElTable)
  nuxtApp.vueApp.component('ElIcon', ElIcon)
  nuxtApp.vueApp.component('ElDropdown', ElDropdown)
  nuxtApp.vueApp.component('ElDropdownMenu', ElDropdownMenu)
  nuxtApp.vueApp.component('ElDropdownItem', ElDropdownItem)
  nuxtApp.vueApp.component('ElDivider', ElDivider)
  nuxtApp.vueApp.component('ElTabPane', ElTabPane)
  nuxtApp.vueApp.component('ElTabs', ElTabs)
  nuxtApp.vueApp.component('ElTableColumn', ElTableColumn)
  nuxtApp.vueApp.component('ElTag', ElTag)
  nuxtApp.vueApp.component('ElSelect', ElSelect)
  nuxtApp.vueApp.component('ElOption', ElOption)
  nuxtApp.vueApp.component('ElPopper', ElPopper)
  nuxtApp.vueApp.component('ElLink', ElLink)
  nuxtApp.vueApp.component('ElInput', ElInput)
  nuxtApp.vueApp.component('ElCascader', ElCascader)
  nuxtApp.vueApp.component('ElTooltip', ElTooltip)
  nuxtApp.vueApp.component('ElPopover', ElPopover)
  nuxtApp.vueApp.component('ElPopconfirm', ElPopconfirm)
  nuxtApp.vueApp.component('ElLoading', ElLoading)

  nuxtApp.vueApp.directive('loading', vLoading)

  // ui组件全局默认设置
  nuxtApp.vueApp._context.components.ElLink['props'].underline = false
  // form表单必填项去掉星号
  nuxtApp.vueApp._context.components.ElForm[
    'props'
  ].hideRequiredAsterisk.default = true

  // ssr prefix
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0,
  })
})
