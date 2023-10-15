<script setup>
import MyCard from './MyCard.vue'
import MyTitle from './elements/MyTitle.vue'
import MyButton from './elements/MyButton.vue'
import { reactive } from 'vue'

const response = [
{
    description :'',
    title : 'Pizza',
    imageSrc : 'src/assets/pizza-pepperoni.jpg',
    imageAlt : 'Image de pizza',
    buttonLabel : 'Add To Cart',
    price:'18.50',
    note:'5.0',
  },
  {
    description :'',
    title : 'Enchilade',
    imageSrc : 'src/assets/enchiladas.jpg',
    imageAlt : 'Image de enchiladas',
    buttonLabel : 'Add To Cart',
    price:'25.50',
    note:'5.0',
  },
  {
    description :'',
    title : 'Green Beans',
    imageSrc : 'src/assets/greenbeans.jpg',
    imageAlt : 'Image de green beans',
    buttonLabel : 'Add To Cart',
    price:'12.00',
    note:'4.9',
  },
  {
    description :'',
    title : 'Gyro Sandwich',
    imageSrc : 'src/assets/sandwich.jpg',
    imageAlt : 'Image de sandwich',
    buttonLabel : 'Add To Cart',
    price:'15.00',
    note:'4.9',
  },
  {
    description :'',
    title : 'Chicken Pot Pie',
    imageSrc : 'src/assets/chicken-pot-pie.png',
    imageAlt : 'Image de chicken pot pie',
    buttonLabel : 'Add To Cart',
    price:'25.00',
    note:'4.9',
  },
  {
    description :'',
    title : 'Green Salad',
    imageSrc : 'src/assets/green-salad.jpg',
    imageAlt : 'Image de green salad',
    buttonLabel : 'Add To Cart',
    price:'15.00',
    note:'4.9',
  },
]

const cards = reactive(response)
</script>

<template>
  <div class='cards'>
    <div class="cards__title">
      <MyTitle el="h3" color="orange">Product</MyTitle>
      <MyTitle el="h3" bold="bold" size="medium">Most Popular Product</MyTitle>
    </div>
    <div class='cards__grid'>
      <MyCard v-for='card in cards' v-bind='card' :key="card.title" />
    </div>
    <div class="cards__more">
      <MyButton size="small" variant="rounded" hasIcon="true" sizeText="medium">See more products</MyButton>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.cards {
  display: flex;
  flex-direction: column;
  &__title{
    text-align: center;
    margin-bottom: rem(60);
  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    gap: 50px;
  }
  &__more{
    text-align: center;
    margin: rem(50) auto;
  }
}

@media screen and (min-width: 1680px ) {
  .cards__grid{

    grid-template-columns: repeat(3, minmax(400px, 1fr));  
   
  }
}

</style>
