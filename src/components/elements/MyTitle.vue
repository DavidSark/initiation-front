<script setup>
import { computed } from 'vue'

const props = defineProps(({
  el: HTMLElement,
  size: String,
  color: String,
  bold: String,
}))


const className = computed (()=>({
  ' -big': props.size === 'big',
  ' -small': props.size === 'small',

  ' -h1': props.el === 'h1',
  ' -h2': props.el === 'h2',
  ' -h3': props.el === 'h3',
  ' -h4': props.el === 'h4',

  ' -orange': props.color === 'orange',

  ' -bold': props.bold === 'bold'
}))

</script>



<template>
  <div>
    <h2 v-if="props.el === 'h2'"  class="title" :class="className"><slot></slot></h2>
    <h1 v-if="props.el === 'h1'"  class="title" :class="className"><slot></slot></h1>
    <h3 v-if="props.el === 'h3'"  class="title" :class="className"><slot></slot></h3>
    <h4 v-if="props.el === 'h4'"  class="title" :class="className"><slot></slot></h4>
  </div>
</template>

<style lang="scss" scoped>
.title{
  font-size: $regular-font-size;
  &.-small{
    font-size: $medium-font-size;

  }
  &.-big{
    font-size: $giant-font-size;
  }

  &.-orange{
    color: $primary-color;
  }
  &.-bold{
    font-weight: 700;
  }
}
</style>