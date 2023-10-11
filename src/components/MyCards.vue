<script setup>
import MyCard from './MyCard.vue'
import { reactive } from 'vue'
 
const response = [
  {
    description: 'Description de la card',
    title: "100% Gratuit",
    imageSrc : 'src/assets/sandwich.jpg',
    imageAlt : 'image de sandwich',
    buttonLabel: "Bouton de la card",
    price: '15.00',
    note: 4.9
  }, 
  {
    description: 'Description de la card',
    title: "100% ecolo",
    imageSrc : 'src/assets/enchiladas.jpg',
    imageAlt : "Image d'enchiladas",
    buttonLabel: "Bouton de la card",
    price: '25.00',
    note: '5.0'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc : 'src/assets/greenbeans.jpg',
    imageAlt : "Image d'haricots verts",
    buttonLabel: "Bouton de la card",
    price: '12.00',
    note: '5.9'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc : 'src/assets/pizza-pepperoni.jpg',
    imageAlt : 'Image de pizza pepperoni',
    buttonLabel: "Bouton de la card",
    price: '18.50',
    note: '5.0'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc : 'src/assets/chicken-pot-pie.png',
    imageAlt : 'Image de tarte au poulet',
    buttonLabel: "Bouton de la card",
    price: '25.00',
    note: '4.9'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc : 'src/assets/green-salad.jpg',
    imageAlt : 'Image de salade verte',
    buttonLabel: "Bouton de la card",
    price: '15.00',
    note: '5.0'
  }
]

const cards = reactive(response)
</script>

<template>
  <div class='cards' >
    <MyCard v-for='card in cards' v-bind='card' :key="card.title" /> 
  </div>
</template>

<style lang='scss' scoped>
.cards{
  display: grid;
  gap: rem(20);
  grid-template-columns: repeat(3, 1fr);
}
</style>
