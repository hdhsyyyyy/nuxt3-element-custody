<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: Boolean
}>()
const emit = defineEmits(['update:modelValue'])

const visible = useVModel(props, 'modelValue', emit)

const form = ref({
  netWork: 'Ethereum(ERC20)',
})
</script>

<template>
  <el-dialog v-model="visible" width="600px">
    <template #header>
      <div class="my-header">
        <p class="el-dialog__title">
          {{ $t('pages.wallet.deposit.title') }}
          <span class="el-dialog__subtitle">Ethereum ETH</span>
        </p>
      </div>
    </template>
    <el-form label-position="top" :model="form">
      <!-- Network -->
      <el-form-item :label="$t('pages.wallet.deposit.network_label')">
        <p class="form-item__content__text">Ethereum(ERC20)</p>
      </el-form-item>
      <!-- Memo -->
      <el-form-item :label="$t('pages.wallet.deposit.memo_label')">
        <p class="form-item__content__text">0xb000999</p>
        <ActionCopy text="0xb000999" />
      </el-form-item>
      <!-- Address -->
      <el-form-item :label="$t('pages.wallet.deposit.address_label')">
        <div class="flex items-start">
          <p class="form-item__content__text max-w-400px">
            0xb1eab9bcac6f694a9edbec28d2b7dff64aac57142db7ac02bb4b70fbaf4bb14d20
          </p>
          <el-space class="ml-8px mt-3px" :size="15">
            <ActionCopy text="0xb000999" />
            <ActionQrcode
              url="https://www.baidu.com/"
              description="Ethereum (ERC20)"
            />
            <ActionRefresh
              :tooltip="$t('pages.wallet.deposit.reset_address')"
              :title="$t('pages.wallet.deposit.reset_confirm')"
              width="284px"
            />
          </el-space>
        </div>
      </el-form-item>
    </el-form>
    <ul class="el-dialog__description list-inherit ml-12px h-auto">
      <li>{{ $t('pages.wallet.deposit.description1') }}</li>
      <li>{{ $t('pages.wallet.deposit.description2') }}</li>
      <li>
        {{ $t('pages.wallet.deposit.description3') }}
        <span class="color-danger">{{ form?.netWork }}</span>
      </li>
    </ul>
    <template #footer>
      <el-button round @click="visible = false">
        {{ $t('common.query.cancel') }}
      </el-button>
    </template>
  </el-dialog>
</template>
