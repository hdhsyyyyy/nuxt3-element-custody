<script lang="ts" setup>
/**
 * @description: 扫码绑定GA
 */
import VueQrcode from '@chenfengyuan/vue-qrcode'

export interface IDownload {
  name: string
  text: string
}
const { t } = useLang()

const downloads = computed((): IDownload[] => [
  { name: 'apple', text: t('pages.ga.download_apple') },
  { name: 'android', text: t('pages.ga.download_google') },
])

const token = ref('sdfGH34GSDSDFEE')

const next = (fn) => {
  fn()
}

defineExpose({
  next,
})
</script>

<template>
  <div>
    <h3 class="mb-20px">
      {{ $t('pages.ga.add_token') }}
    </h3>
    <el-space :size="24">
      <div
        v-for="item in downloads"
        :key="item.name"
        class="w-180px h-44px border border-tertiary-icon rounded-8px text-size-12px flex items-center"
      >
        <SvgIcon
          :name="item.name"
          width="24px"
          height="24px"
          class="ml-20px mr-14px"
        />
        <div class="w-80px h-32px leading-16px">
          {{ item.text }}
        </div>
      </div>
    </el-space>
    <h3 class="mb-0">
      {{ $t('pages.ga.add_token_key') }}
    </h3>
    <VueQrcode :value="token" />
    <p>{{ token }}</p>
    <p class="desc">{{ $t('pages.ga.desc') }}</p>
  </div>
</template>
