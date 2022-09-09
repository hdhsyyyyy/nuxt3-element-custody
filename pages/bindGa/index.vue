<script lang="ts" setup>
import PageGaAddToken from '~/components/Page/Ga/AddToken.vue'
import PageGaVerifyToken from '~/components/Page/Ga/VerifyToken.vue'

/**
 * @description: 登录绑定ga
 */
definePageMeta({
  layout: 'default',
})

const { t } = useLang()

const steps = [
  {
    title: t('pages.ga.step_add_token'),
    component: PageGaAddToken,
  },
  {
    title: t('pages.ga.step_verify_token'),
    component: PageGaVerifyToken,
  },
]

const active = ref(0)
</script>

<template>
  <div>
    <h2>
      {{ $t('pages.ga.title') }}
    </h2>
    <BaseSteps v-model="active" :steps="steps" />
  </div>
</template>
