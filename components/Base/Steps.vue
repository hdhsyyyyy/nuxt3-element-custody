<script lang="ts" setup>
/**
 * @description: 步骤条组件
 */
import { useVModel } from '@vueuse/core'

export interface IStep {
  title: string
  description?: string
  // 约定component 需要defineExpose next方法
  component: string
  // component传参props
  props: object
}

const props = defineProps({
  steps: {
    // 步骤条
    type: Array as PropType<IStep>,
    default: () => [],
  },
  modelValue: {
    // 设置当前激活步骤
    type: Number,
    default: 0,
  },
  space: {
    // step-space
    type: String,
    default: '240px',
  },
})

const emit = defineEmits(['update:modelValue'])

const step = useVModel(props, 'modelValue', emit)

const comp = ref(null)

const activeItem = computed(() =>
  props.steps.find((item, index) => index === step.value)
)

const isFirst = computed(() => !step.value)
const isFinal = computed(() => step.value + 1 === props.steps.length)

const next = () => {
  if (!comp.value.next || typeof comp.value.next !== 'function') {
    return console.error('component must expose next function')
  }
  comp.value.next(() => {
    if (!isFinal.value) {
      step.value++
    }
  })
}

const prev = () => {
  step.value--
}
</script>

<template>
  <div>
    <el-steps :active="step" :space="space">
      <el-step
        v-for="(item, index) in steps"
        :key="index"
        :title="item.title"
        :description="item?.description"
      />
    </el-steps>
    <keep-alive>
      <component
        :is="activeItem?.component"
        v-bind="activeItem?.props"
        ref="comp"
      ></component>
    </keep-alive>
    <!-- 上一步/下一步 -->
    <footer class="h-48px mt-56px">
      <template v-if="isFirst">
        <el-button rounded type="primary" @click="next">
          {{ $t('common.step.next') }}
        </el-button>
      </template>
      <div v-else class="group h-full">
        <el-button rounded @click="prev">
          {{ $t('common.step.prev') }}
        </el-button>
        <el-button rounded type="primary" @click="next">
          {{ isFinal ? $t('common.step.confirm') : $t('common.step.next') }}
        </el-button>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
footer {
  button {
    --at-apply: w-368px h-full rounded-50px text-size-16px;
  }
  .group {
    button {
      --at-apply: w-172px;
    }
  }
}
</style>
