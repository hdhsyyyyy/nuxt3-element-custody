/* eslint-disable no-useless-escape */
// 常用工具类函数

// 限制 input 只能输入整数、小数
export const replaceNumber = (
  value: string | undefined,
  num: number = 18
): string | undefined => {
  // 添加限制小数点后几位 默认18位
  const reg: RegExp = new RegExp(`^\\d*(\\.?\\d{0,${num}})`, 'g')
  return value
    ?.replace(/[^\d^\.]+/g, '')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .match(reg)?.[0]
}

// money分割
export const replaceMoney = (money: string): string => {
  if (isNaN(Number(money))) return ''
  const integerNum = money.split('.')[0]
  const decimalNum = money.split('.')[1] || ''
  return decimalNum
    ? `${Number(integerNum).toLocaleString()}.${decimalNum}`
    : Number(integerNum).toLocaleString()
}

// token/主链 层级选择器忽略大小写的
export const selectToken = (
  node: Record<'text', string>,
  keyWord: string
): Boolean => {
  if (
    !!~node.text.indexOf(keyWord) ||
    !!~node.text.toUpperCase().indexOf(keyWord.toUpperCase())
  ) {
    return true
  }
  return false
}

interface Icopy {
  text: string
  callback: Function
}
// 复制
export const copyText = ({ text, callback }: Icopy) => {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  callback()
}
