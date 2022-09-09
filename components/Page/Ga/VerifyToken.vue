<script lang="ts" setup>
/**
 * @description: 验证ga
 */
import { commonPattern } from '~/utils/checkRules'

const { t } = useLang()
const router = useRouter()

const form = reactive({
  gaCode: '',
})

const rules = reactive({
  gaCode: commonPattern({
    message: t('pages.ga.verify_label') + t('common.validate.empty'),
  }),
})

const next = () => {
  localStorage.setItem('userId', '123')
  localStorage.setItem('username', 'test@bitmart.com')
  localStorage.setItem('token', '779874')
  localStorage.setItem('customer', ' BitMart Global Corporate Name ')
  router.push('/wallet')
}

defineExpose({
  next,
})
</script>

<template>
  <el-form
    label-position="top"
    :model="form"
    class="common-wrapper"
    :rules="rules"
  >
    <!-- GaCode -->
    <el-form-item :label="$t('pages.ga.verify_label')" prop="gaCode">
      <el-input
        v-model="form.gaCode"
        maxlength="6"
        type="password"
        show-password
        :placeholder="$t('pages.ga.verify_placeholder')"
      />
    </el-form-item>
  </el-form>
</template>
