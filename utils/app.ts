import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  logo: string
  author: {
    name: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Noah Custody',
    logo: 'NH',
    author: {
      name: 'noah',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // return
  return {
    app,
    themeManager,
    languageManager,
  }
}
