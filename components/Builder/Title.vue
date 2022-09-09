<script lang="ts" setup>
const props = defineProps({
  // title
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <p
      class="text-primary font-bold font-size-32px flex items-center h-40px leading-40px"
    >
      {{ name }}
    </p>
  </div>
</template>
