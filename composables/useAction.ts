import { copyText } from '~/utils/utils'

export const useAction = () => {
  const Element = useElement()
  const { t } = useLang()
  // copy
  const copy = (text: string) => {
    copyText({
      text,
      callback: () => {
        Element.$Notification({
          title: t('common.components.copy_success'),
          type: 'success',
        })
      },
    })
  }
  return {
    copy,
  }
}
