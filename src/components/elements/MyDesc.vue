<script setup>
import { computed } from 'vue'

const props = defineProps(({
  content: String,
  color: String,
  bold: String
}))


const className = computed (()=>({
  ' -lightgray': props.color === 'light gray',
  ' -bold': props.bold === 'bold'
}))

</script>



<template>
  <div>
    <p :class="className" class="desc"><slot></slot></p>
  </div>
</template>
 
<style lang="scss" scoped>
.desc{
    &.-lightgray{
        color: $gray;
    }
    &.-bold{
      font-weight: bold;
    }
}
</style>