<script setup>
import { reactive } from 'vue'
import MyCardService from './MyCardService.vue';
import MyTitle from './elements/MyTitle.vue'


const response = [
  {
    el: 'h2',
    sizeText: 'small',
    bold: 'bold',
    title: "Qualityfull Food",
    desc: `But I must explain to you how all this
            mistaken idea of denouncing pleasur and
            prasising pain was bron.`,
    color: 'light orange',
    stroke: 'orange',
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
    color: 'light orange',
    stroke: 'orange',
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
    color: 'light orange',
    stroke: 'orange',
    size: 'big'
  }
]

const cardsService = reactive(response)
</script>



<template>
  <div class='cards'>
    <div class="cards__title">
      <MyTitle el="h3" color="orange">Service</MyTitle>
      <MyTitle el="h3" bold="bold" size="medium">Why Choose Our Favorite Food</MyTitle>
    </div>
    <div class="cards__grid">
      <MyCardService v-for='card in cardsService' v-bind='card' :key="card.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards{
  margin: rem(50) 0 ;
  display: flex;
  flex-direction: column;
  &__title{
    text-align: center;
    margin-bottom: rem(60);
  }
  &__grid {
  display: grid;
  gap: rem(20);
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
}

</style>