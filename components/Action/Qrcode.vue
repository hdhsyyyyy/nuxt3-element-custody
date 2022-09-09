<script lang="ts" setup>
/**
 * @description: 显示二维码组件
 */
import VueQrcode from '@chenfengyuan/vue-qrcode'

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <el-popover placement="top" :width="260" trigger="hover" v-bind="$attrs">
    <template #reference>
      <SvgIcon
        name="qr-code-line"
        width="17px"
        height="17px"
        theme="font-tertiary"
        hover-theme="primary"
        cursor-pointer
      />
    </template>
    <div class="flex flex-column items-center">
      <VueQrcode :value="url" />
      <p v-if="description" class="mb-4px">{{ description }}</p>
    </div>
  </el-popover>
</template>
