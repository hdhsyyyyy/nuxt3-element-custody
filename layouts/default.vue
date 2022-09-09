<template>
  <div class="flex flex-col min-h-screen">
    <PageDefault />
    <div class="flex-1 w-full flex flex-col">
      <div
        class="default-layout relative flex-1 flex flex-col h-full pl-16.8vw pt-7vh"
      >
        <slot />
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
:deep(.default-layout) {
  .common-wrapper {
    --at-apply: w-368px;
  }
  // form
  .el-form-item {
    --at-apply: mb-40px;
  }

  .el-form--default.el-form--label-top .el-form-item .el-form-item__label {
    --at-apply: mb-12px text-size-16px h-24px leading-24px font-semibold;
  }

  // input
  @at-root .el-input {
    ::-webkit-input-placeholder {
      font-size: 14px;
    }
    &__wrapper {
      box-shadow: 0 0 0 1px theme('colors.tertiary.border') inset;
    }
  }

  // steps
  .el-steps {
    --at-apply: mb-48px;
    // --at-apply: ml--90px mb-48px;
  }

  // text
  h2 {
    --at-apply: text-size-32px font-bold h-40px leading-40px mb-48px;
  }

  h3 {
    --at-apply: mt-48px text-size-16px h-24px leading-24px font-semibold;
  }

  .desc {
    --at-apply: mt-8px color-font-tertiary text-size-12px h-20px leading-20px;
  }
}
</style>
