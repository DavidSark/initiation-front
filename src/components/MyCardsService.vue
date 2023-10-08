<script setup>
import {reactive} from 'vue'
import MyCardService from './MyCardService.vue';

const response = [
  {
    el: 'h2',
    sizeText: 'small',
    bold: 'bold',
    title: "Qualityfull Food",
    desc: `But I must explain to you how all this
            mistaken idea of denouncing pleasur and
            prasising pain was bron.`,
    color : 'light orange',
    stroke : 'orange',
    size: 'big'
  }, 
  {
    el: 'h2',
    sizeText: 'small',
    bold: 'bold',
    title: "Healthy Food",
    desc: `But I must explain to you how all this
            mistaken idea of denouncing pleasur and
            prasising pain was bron.`,
    name: 'fork spoon',
    color : 'light orange',
    stroke : 'orange',
    size: 'big'
  },
  {
    el: 'h2',
    sizeText: 'small',
    bold: 'bold',
    title: "Fast Delivery",
    desc: `But I must explain to you how all this
            mistaken idea of denouncing pleasur and
            prasising pain was bron.`,
    name: 'delivery',
    color : 'light orange',
    stroke : 'orange',
    size: 'big'
  }
]

const cardsService = reactive(response)
</script>



<template>
  <div class="cardService__grid">
    <MyCardService v-for='card in cardsService' v-bind='card' :key="card.title" /> 
  </div>
</template>

<style lang="scss" scoped>
.cardService__grid{
  display: grid;
  gap: rem(20);
  grid-template-columns: repeat(3, 1fr);
}
</style>