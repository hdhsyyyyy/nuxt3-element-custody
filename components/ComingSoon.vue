<script lang="ts" setup>
import emptyImg from '~/assets/svg/Comingsoon.svg'
</script>

<template>
  <el-empty :image="emptyImg" :description="$t('common.coming.text')" />
</template>
