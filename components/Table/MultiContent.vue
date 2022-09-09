<script setup lang="ts">
type AlignType = 'left' | 'center' | 'right'

const props = defineProps({
  // 数据值
  data: {
    type: Array as PropType<string>,
    default: () => [],
    validator: (val) => {
      return val.length > 1
    },
  },
  // 对齐方式
  align: {
    type: String as PropType<AlignType>,
    default: 'left',
  },
  // 图标svg
  icon: {
    type: String,
    default: '',
  },
})

const wrapperStyle = computed(() => {
  if (props.align === 'right') {
    return {
      'justify-content': 'flex-end',
    }
  }
  return {}
})

const contentStyle = computed(() => {
  if (props.align === 'right') {
    return {
      'text-align': 'right',
    }
  }
  return {}
})
</script>

<template>
  <div class="flex space-x-12px items-center" :style="wrapperStyle">
    <SvgIcon v-if="icon" :name="icon" class="font-size-26" />
    <div class="flex flex-column" :style="contentStyle">
      <div class="text-primary font-semibold">{{ data?.[0] }}</div>
      <div class="text-font-tertiary">{{ data?.[1] }}</div>
    </div>
  </div>
</template>
