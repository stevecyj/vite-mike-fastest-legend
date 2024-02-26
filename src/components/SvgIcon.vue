<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  className: {
    type: String
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const svgClass = computed(() => (props.className ? 'svg-icon ' + props.className : 'svg-icon'))
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
