import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  zh_CN: {
    name: 'Chinese',
    iso: 'zh',
    flag: '🇨🇳',
  },
  // ja: {
  //   name: '日本語',
  //   iso: 'ja',
  //   flag: '🇯🇵',
  // },
  // ko: {
  //   name: '한국어',
  //   iso: 'ko',
  //   flag: '🇰🇷',
  // },
}

export function LanguageManager() {
  // 默认中文
  const DEFAULT_LOCALE = 'zh'

  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : DEFAULT_LOCALE
      return availableLocales[foundLang] ? foundLang : DEFAULT_LOCALE
    } catch (error) {
      return DEFAULT_LOCALE
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
