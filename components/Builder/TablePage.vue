<script lang="ts" setup>
/**
 * @description: 通用表格+分页组件
 */
</script>

<template>
  <div class="table-page">
    <slot name="table" />
    <div class="table-pagination flex">
      <slot name="pagination" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-pagination {
  :deep(.el-pagination) {
    --at-apply: mt-16px ml-auto;

    button {
      --at-apply: border border-tertiary-border rounded-4px;

      &:disabled {
        background: transparent;
      }
    }
    .el-pager {
      li {
        --at-apply: border border-tertiary-border rounded-4px min-w-36px;

        &:not(.is-disabled).is-active {
          --at-apply: text-primary border border-primary;
          background: transparent;
        }

        &.more {
          --at-apply: color-tertiary-icon;
        }
      }
    }
  }
}
</style>
