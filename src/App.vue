<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <div class="test">
  <MyHeader/>
  <RouterView />
  <MyFooter />
</div>
</template>

<style scoped lang="scss">
.test{
  overflow-x: hidden;
}
</style>