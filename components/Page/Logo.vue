<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')
</script>

<template>
  <div class="flex items-center overflow-hidden md:w-auto text-md font-bold">
    <SvgIcon name="logo" width="32px" height="32px" class="mr-10px" />
    <span class="flex items-center text-primary font-size-20 font-bold">
      {{ app.name }}
    </span>
  </div>
</template>
