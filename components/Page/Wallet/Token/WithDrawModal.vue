<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { commonPattern } from '~/utils/checkRules'
import { replaceNumber } from '~/utils/utils'

const { t } = useLang()

const props = defineProps<{
  modelValue: Boolean
}>()
const emit = defineEmits(['update:modelValue'])

const visible = useVModel(props, 'modelValue', emit)

const form = ref({})

const rules = ref({
  address: commonPattern({
    message:
      t('pages.wallet.withdraw.address_label') + t('common.validate.empty'),
  }),
  amount: commonPattern({
    message:
      t('pages.wallet.withdraw.amount_label') + t('common.validate.empty'),
  }),
})

const fee = ref('0.01')
</script>

<template>
  <el-dialog v-model="visible" width="600px">
    <template #header>
      <div class="my-header">
        <p class="el-dialog__title">
          {{ $t('pages.wallet.withdraw.title') }}
          <span class="el-dialog__subtitle">Ethereum ETH</span>
        </p>
      </div>
    </template>
    <el-form label-position="top" :model="form" :rules="rules">
      <!-- Address -->
      <el-form-item
        :label="$t('pages.wallet.withdraw.address_label')"
        prop="address"
      >
        <el-input
          v-model="form.address"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          :placeholder="$t('pages.wallet.withdraw.address_placeholder')"
        />
      </el-form-item>
      <!-- Network -->
      <el-form-item :label="$t('pages.wallet.withdraw.network_label')">
        <el-input v-model="form.network" disabled />
      </el-form-item>
      <!-- Memo -->
      <el-form-item
        :label="
          $t('pages.wallet.withdraw.memo_label') + $t('common.form.optional')
        "
      >
        <el-input
          v-model="form.memo"
          :placeholder="$t('pages.wallet.withdraw.memo_placeholder')"
        />
      </el-form-item>
      <!-- Amount -->
      <el-form-item
        :label="$t('pages.wallet.withdraw.amount_label')"
        prop="amount"
      >
        <el-input
          v-model="form.amount"
          :oninput="(form.amount = replaceNumber(form.amount))"
          :placeholder="$t('pages.wallet.withdraw.amount_placeholder')"
          clearable
        />
      </el-form-item>
    </el-form>
    <p class="el-dialog__description">
      {{ $t('pages.wallet.withdraw.fee') }}：
      <span :class="{ 'text-primary': parseFloat(fee) > 0 }"
        ><span class="mr-4px">{{ fee }}</span
        >ETH</span
      >
    </p>
    <p class="el-dialog__description">
      {{ $t('pages.wallet.withdraw.fee_description') }}
    </p>
    <template #footer>
      <el-button round @click="visible = false">
        {{ $t('common.query.cancel') }}
      </el-button>
      <el-button type="primary" round>
        {{ $t('common.query.confirm') }}
      </el-button>
    </template>
  </el-dialog>
</template>
