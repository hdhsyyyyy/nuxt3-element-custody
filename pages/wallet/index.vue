<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const activeName = ref('Token')
</script>

<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="Token" name="Token">
        <PageWalletToken />
      </el-tab-pane>
      <el-tab-pane label="NFT" name="NFT">
        <PageWalletNFT />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
