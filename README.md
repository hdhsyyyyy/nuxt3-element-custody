## Featur

- [✅] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [✅] 🚩 [Localization (i18n) by @intlify](https://github.com/intlify/nuxt3) & Auto Generate Locales
- [✅] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [✅] 📚 [Content Management System (Nuxt Content)](https://content.nuxtjs.org/) [SSR]
- [✅] 📈 [ UI FrameWork(Element-plus)](https://element-plus.gitee.io/zh-CN/guide/design)
- [✅] 💨 [Reimagine Atomic CSS(UnoCSS)](https://github.com/unocss/unocss)
- [✅] 🇮🇩 Language Switcher
- [✅] 🪝 Built-in Component & Layout
- [✅] Eslint & Stylelint && Prettier
- [✅] Husky & Commitlint
- [✅] [Custom Git commit(cz-comit)](https://github.com/leoforfree/cz-customizable)
- [✅] Custom Workspace Snippets

## To Do

- [ ] Adding simple Unit Test
- [ ] Configurable Theme
  - [x] Primary Colors
  - [x] Font

## Quick Start

### Start with this template

- This project using `yarn` as package manager.
- Install dependencies `yarn install`
- Run `yarn dev` to start development server and open `http://localhost:3000` in your browser

### Deploy as Static Site

- Run `yarn generate` to build the project
- Serve `dist/` folder
  Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

### Custom Workspace Snippets

This workspace including custom snippets for VSCode.

- **nuxt3:content**  
  content template with markdown
- **nuxt3**  
  page template

### Localization

Localization is a plugin that allows you to switch between languages. this lib in :

```
/path/to/utils/lang.ts
```

`LanguageManager` is a function-class construct when app.vue before mounted.
this lib depend on [@intlify/nuxt3](https://github.com/intlify/nuxt3)
lang construct inside `AppSetup()` in `/path/to/app.vue` :

<!-- /path/to/app.vue -->
<script lang="ts" setup>
import { AppSetup } from '~/utils/app';
// app setup
AppSetup()
</script>

To change language, you can direct set language from state `lang.setting`, example :

```vue
<script lang="ts" setup>
const langSetting = useState<string>('locale.setting')
langSetting.value = 'en'
</script>
```

When you change state `locale.setting`, it will automatically change language.

### Generate Locales

I made an automatic tool to automatically translate to all languages ​​that have been prepared in the ./locales/ folder
So, you can just update "locales/en.yml" and run this tools, it will automatically translate to all languages.

You can just run :

```
yarn translate

# or :

node ./tools/translator.js ./locales en.yml
```

### Git commit

Run :

```
yarn commit
```

## License

This project is licensed under the MIT license, Copyright (c) 2022 Alfian Dwi Nugraha. For more information see the [LICENSE](LICENSE.md) file.
