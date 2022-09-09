<template>
  <div class="flex flex-col min-h-screen">
    <PageNavbar />
    <div class="flex-1 w-full flex flex-col">
      <div
        class="relative flex-1 flex flex-col mx-auto max-w-1312px w-88% h-full pt-60px pb-30px"
      >
        <slot />
      </div>
    </div>
    <PageFooter />
  </div>
</template>
