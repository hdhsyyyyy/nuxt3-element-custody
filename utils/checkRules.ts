export type ITrigger = 'click' | 'blur' | 'change'

export interface IRule {
  trigger?: ITrigger
  message?: string
  required?: boolean
}

/**
 * 常规校验：不能为空
 */
export const commonPattern = (
  { message, trigger }: IRule = {
    trigger: 'blur',
  }
): Array<IRule> => {
  const commomPattern = [
    {
      required: true,
      message,
      trigger,
    },
  ]
  return commomPattern
}
