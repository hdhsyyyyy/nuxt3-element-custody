<script lang="ts" setup>
/**
 * @description: 通用表格搜索组件
 * @rules: reset按钮统一使用Link
 */
const props = defineProps({
  // 是否有圆角border
  rounded: {
    type: Boolean,
    default: false,
  },
})

const cls = computed(() => {
  return {
    border: props.rounded,
    'rounded-50px': props.rounded,
    'border-tertiary-border': props.rounded,
    'bg-tertiary-bg': props.rounded,
    'pl-10px': props.rounded,
  }
})
</script>

<template>
  <div class="query-form flex items-center flex-wrap mt-40px">
    <div class="flex items-center mr-auto pt-2px pb-2px pr-24px" :class="cls">
      <ClientOnly>
        <slot />
      </ClientOnly>
      <div class="query-form-btn">
        <slot name="footer" />
      </div>
    </div>
    <div class="query-form-options">
      <slot name="options" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.query-form {
  --at-apply: mb-24px;
  :deep(.el-select) {
    .el-input {
      --at-apply: rounded-50px bg-font-white;
      .el-input__wrapper {
        --at-apply: rounded-50px;
        box-shadow: none !important;
      }
    }
  }

  :deep(.el-cascader) {
    .el-input {
      --at-apply: rounded-50px bg-font-white;
      .el-input__wrapper {
        --at-apply: rounded-50px pl-20px;
        box-shadow: none !important;
      }
    }
  }

  :deep(.el-input) {
    --at-apply: h-34px leading-34px text-size-12px;
    .el-input__wrapper {
      --at-apply: pl-11px pr-11px shadow-none;
      background: transparent;
    }
  }

  :deep(.query-form-btn) {
    button,
    a {
      --at-apply: ml-15px font-size-12px;
    }
    .el-button--primary {
      --at-apply: min-w-84px;
    }
  }

  &-options {
    :deep(.el-button) {
      --at-apply: h-40px pl-40px pr-40px font-size-16px font-semibold;
    }
  }

  ::-webkit-input-placeholder {
    color: theme('colors.font.tertiary');
    font-size: 12px;
  }
}
</style>
