<script setup>
import MyCard from './MyCard.vue'
import MyTitle from './elements/MyTitle.vue'
import MyButton from './elements/MyButton.vue'
import { reactive } from 'vue'

const response = [
  {
    description: 'Description de la card',
    title: "100% Gratuit",
    imageSrc: 'src/assets/sandwich.jpg',
    imageAlt: 'image de sandwich',
    buttonLabel: "Bouton de la card",
    price: '15.00',
    note: 4.9
  },
  {
    description: 'Description de la card',
    title: "100% ecolo",
    imageSrc: 'src/assets/enchiladas.jpg',
    imageAlt: "Image d'enchiladas",
    buttonLabel: "Bouton de la card",
    price: '25.00',
    note: '5.0'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc: 'src/assets/greenbeans.jpg',
    imageAlt: "Image d'haricots verts",
    buttonLabel: "Bouton de la card",
    price: '12.00',
    note: '5.9'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc: 'src/assets/pizza-pepperoni.jpg',
    imageAlt: 'Image de pizza pepperoni',
    buttonLabel: "Bouton de la card",
    price: '18.50',
    note: '5.0'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc: 'src/assets/chicken-pot-pie.png',
    imageAlt: 'Image de tarte au poulet',
    buttonLabel: "Bouton de la card",
    price: '25.00',
    note: '4.9'
  },
  {
    description: 'Description de la card',
    title: "Retours gratuits",
    imageSrc: 'src/assets/green-salad.jpg',
    imageAlt: 'Image de salade verte',
    buttonLabel: "Bouton de la card",
    price: '15.00',
    note: '5.0'
  }
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
