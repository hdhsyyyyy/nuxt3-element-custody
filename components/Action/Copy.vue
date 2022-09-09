<script lang="ts" setup>
/**
 * @description: 复制组件
 */

const { copy } = useAction()

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <el-tooltip
    effect="dark"
    :content="$t('common.components.copy')"
    placement="bottom"
    v-bind="$attrs"
  >
    <SvgIcon
      name="file-copy-line"
      width="17px"
      height="17px"
      theme="font-tertiary"
      hover-theme="primary"
      cursor-pointer
      @click="copy(text)"
    />
  </el-tooltip>
</template>
