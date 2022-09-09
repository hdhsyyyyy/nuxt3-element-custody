<script lang="ts" setup>
/**
 * @description: 二次封装表格通用组件  统一设置empty/loading-text等
 */
</script>

<template>
  <el-table :element-loading-text="$t('common.loading.text')" v-bind="$attrs">
    <template #empty>
      <SvgIcon name="NoSearchcontent" width="100%" height="70px" />
      {{ $t('common.table.emptyText') }}
    </template>
    <slot />
  </el-table>
</template>
