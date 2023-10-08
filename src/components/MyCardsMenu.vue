<script setup>
import MyCardMenu from './MyCardMenu.vue'
import {reactive} from 'vue'


const response= [
  {
    title: 'Burger',
    sauce: 'Mushroom Sauce',
    price: '5.15',
    imageSrc: 'src/assets/burger_sandwich.png',
    imageAlt: 'Image de menu',
  },
  {
    title: 'Food Combo',
    sauce: 'Mushroom Sauce',
    price: '9.15',
    imageSrc: 'src/assets/junk_food.png',
    imageAlt: 'Image de menu',
  },
  {
    title: 'Pizza',
    sauce: 'Mushroom Sauce',
    price: '6.15',
    imageSrc: 'src/assets/pizza-png.png',
    imageAlt: 'Image de menu',
  },
  {
    title: 'Cake',
    sauce: 'Chocolate Sauce',
    price: '5.15',
    imageSrc: 'src/assets/pure.png',
    imageAlt: 'Image de menu',
  },
]

const cardsMenu = reactive(response)
</script>

<template>
  <div class="cardsMenu">
    <MyCardMenu v-for="card in cardsMenu" :key="card.title" v-bind="card"></MyCardMenu>
  </div>
</template>

<style lang="scss" scoped>

.cardsMenu{
  display: grid;
  gap: rem(50);
  grid-template-columns: repeat(2, 260px);
}
</style>