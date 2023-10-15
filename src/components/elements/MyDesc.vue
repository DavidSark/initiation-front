<script setup>
import { computed } from 'vue'

const props = defineProps(({
  content: String,
  color: String,
  bold: String,
  size: String,
}))


const className = computed (()=>({
  ' -lightgray': props.color === 'light gray',
  ' -white': props.color === 'white',
  ' -bold': props.bold === 'bold',
  ' -small': props.size === 'small',
  ' -medium': props.size === 'medium',
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
    &.-white{
        color: $white;
    }
    &.-bold{
      font-weight: bold;
    }
    &.-small{
      font-size: $small-font-size;
    }
    &.-medium{
      font-size: $medium-font-size;
    }
}
</style>