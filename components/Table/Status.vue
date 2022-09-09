<script lang="ts" setup>
type Type = 'success' | 'failed' | 'info' | 'warning'

const props = defineProps({
  // 状态
  type: {
    type: String as PropType<Type>,
    default: 'success',
  },
})
</script>

<template>
  <p class="table-status relative pl-15px" :class="type">
    <slot />
  </p>
</template>

<style scoped lang="scss">
.table-status {
  &::before {
    content: '';
    position: absolute;
    margin: auto;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    top: 0;
    left: 0;
    bottom: 0;
  }
  &.success {
    &::before {
      background-color: theme('colors.success');
    }
  }
  &.failed {
    &::before {
      background-color: theme('colors.danger');
    }
  }
  &.info {
    &::before {
      background-color: theme('colors.info');
    }
  }
  &.warning {
    &::before {
      background-color: theme('colors.warning');
    }
  }
}
</style>
