<script lang="ts" setup>
/**
 * @description: 重置组件
 */
const t = useLang()
const props = defineProps({
  tooltip: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <el-popconfirm
    placement="top"
    :confirm-button-text="$t('common.query.confirm')"
    :cancel-button-text="$t('common.query.cancel')"
    icon="WarningFilled"
    v-bind="$attrs"
  >
    <template #reference>
      <div class="flex items-center">
        <el-tooltip :content="tooltip" effect="dark" placement="bottom">
          <SvgIcon
            name="restart-line"
            width="17px"
            height="17px"
            theme="font-tertiary"
            hover-theme="primary"
            cursor-pointer
          />
        </el-tooltip>
      </div>
    </template>
  </el-popconfirm>
</template>
