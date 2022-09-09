<template>
  <svg aria-hidden="true" class="outline-none" :style="style" :class="unoCls">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: 'svg',
  },
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: '',
  },
  hoverTheme: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '1em',
  },
  height: {
    type: [String, Number],
    default: '1em',
  },
  rotate: {
    type: [String, Number],
    default: 0,
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const unoCls = computed(() => {
  // 配合unocss theme控制color和hover color 备注(所有设置的样式需要在unocss.config.ts safelist里配置)
  const theme = `fill-${props.theme}`
  const hoverTheme = `hover:fill-${props.hoverTheme}`
  return {
    [theme]: true,
    [hoverTheme]: true,
  }
})

const style = computed(() => {
  return {
    width: props.width,
    height: props.height,
    transform: `rotate(${props.rotate}deg)`,
  }
})
</script>
