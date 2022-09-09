import { ElMessage } from 'element-plus'

interface Option {
  param?: object
  body?: object
  headers?: any
  method?: string
  baseURL?: string
  onResponseError?: any
  onResponse?: any
  retry?: number
}

export const useBaseFetch = async (url: string, opt?: Option) => {
  // 设置公共请求头
  const defaultOption = {
    retry: 0,
    headers: {
      'x-xsrf-token': 'your xsrf token',
    },
    onResponse({ response }: { response: any }) {
      // 响应拦截
      // navigateTo('/login')
    },
    onResponseError() {
      ElMessage.error('error')
    },
  }

  const res = await $fetch.raw(url, {
    ...defaultOption,
    ...opt,
  })

  return res._data
}
