<script lang="ts" setup>
import { commonPattern } from '~/utils/checkRules'

definePageMeta({
  layout: 'default',
})

const { t } = useLang()
const router = useRouter()

const form = reactive({})

const rules = reactive({
  email: commonPattern({
    message: t('pages.login.email_label') + t('common.validate.empty'),
  }),
  password: commonPattern({
    message: t('pages.login.password_label') + t('common.validate.empty'),
  }),
})

const login = () => {
  router.push('/bindGa')
}

onMounted(() => {
  localStorage.clear()
})
</script>

<template>
  <div class="common-wrapper">
    <h2>
      {{ $t('pages.login.title') }}
    </h2>
    <el-form label-position="top" :model="form" :rules="rules">
      <!-- Email -->
      <el-form-item :label="$t('pages.login.email_label')" prop="email">
        <el-input
          v-model="form.email"
          :placeholder="$t('pages.login.email_placeholder')"
        />
      </el-form-item>
      <!-- Password -->
      <el-form-item :label="$t('pages.login.password_label')" prop="password">
        <el-input
          v-model="form.password"
          :placeholder="$t('pages.login.password_placeholder')"
          type="password"
          show-password
        />
      </el-form-item>
      <!-- GaCode -->
      <el-form-item :label="$t('pages.login.ga_label')">
        <el-input
          v-model="form.gaCode"
          maxlength="6"
          :placeholder="$t('pages.login.ga_placeholder')"
          type="password"
          show-password
        />
      </el-form-item>
      <!-- Login -->
      <el-form-item>
        <el-button
          round
          class="long h-48px mt-12px"
          type="primary"
          @click="login"
          >{{ $t('pages.login.submit') }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
