<script lang="ts" setup>
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

  // show on sm
  const timer = setInterval(() => {
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
  return () => clearInterval(timer)
})

const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<template>
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none lg:z-50 border-b border-tertiary-border bg-white/[0.5] h-80px"
  >
    <div class="max-w-8xl w-full mx-auto">
      <!-- <div class="py-3 lg:px-8 mx-4 lg:mx-0"> -->
      <div class="py-3 px-40px">
        <div class="relative flex items-center h-55px">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <span v-if="!showDrawer">showDrawer</span>
                <span v-else>else</span>
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title"></slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div
            v-if="$slots['options']"
            class="flex-1 flex justify-end lg:hidden"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()"
            >
              <span
                class="flex items-center text-gray-600 text-sm"
                aria-hidden="true"
              >
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Transition name="slide-fade-from-up" mode="out-in">
        <div
          v-if="showDrawer && $slots['drawer']"
          class="fixed lg:hidden bg-gray-100 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"
        >
          <div class="flex-1 flex flex-col relative overflow-y-auto">
            <slot name="drawer" :toggle-drawer="toggleDrawer" />
          </div>
        </div>
      </Transition>

      <div v-if="showOptions && $slots['options']">
        <slot
          name="options"
          :toggle-options="toggleOptions"
          :show-options="showOptions"
        />
      </div>
    </ClientOnly>
  </div>
</template>
