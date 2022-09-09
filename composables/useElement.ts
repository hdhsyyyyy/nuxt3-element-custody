import { ElNotification } from 'element-plus'

// element全局配置
export const useElement = () => {
  // 全局配置消息提示
  const $Notification = (options: any) => {
    // 默认3s
    return ElNotification({
      duration: 3000,
      offset: 90,
      ...options,
    })
  }
  return {
    $Notification,
  }
}
