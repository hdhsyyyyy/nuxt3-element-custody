<template>
  <Html :lang="locale">
    <Body>
      <div>
        <el-config-provider :locale="elLocale">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </el-config-provider>
      </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import NProgress from 'nprogress'
import zh from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { AppSetup } from './utils/app'

AppSetup()
// locale
const locale = useState<string>('locale.setting')
const elLocale = computed(() => (locale.value === 'zh' ? zh : en))

// nprogress
const router = useRouter()

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
</script>
