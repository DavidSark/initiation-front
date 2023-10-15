<script setup>
import MyButton from './elements/MyButton.vue';
import MyIcon from './elements/MyIcon.vue';


defineProps({
  id: Number,
  imageAlt: String,
  imageSrc: String,
  title : String,
  description: String,
  buttonLabel: String,
  price: String,
  note: String
})
</script>
<template>
  <div class='card'>
    <div class='card__image'>
      <img :src='imageSrc' :alt='imageAlt'/>
    </div>

    <div class="card__content">
      <div class="card__content-flex">
        <h2 size='small' >{{ title }}</h2>
        <div class="card__content-flex-note">
          <MyIcon name="star" color="nobg" stroke="orange"></MyIcon>
          <p>{{ note }}</p>
        </div>
      </div>
      <div class='card__button'>
        <MyButton variant='rounded' size='small'>Add to Cart</MyButton>
        <p>${{ price }}</p>
        <!-- <RouterLink :to="`/recipes/${id}`">Plus d'info</RouterLink> -->
      </div>
      
    </div>
  
  </div>
</template>
<style lang='scss' scoped>
.card{
 border-radius: rem(20);
 overflow: hidden;
 box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.10);
 &__image img{ 
    object-fit: cover;
    height: 100%;
    width: 100%;
 }
 &__content{
  padding: rem(0) rem(10) rem(40) rem(10);
 
  &-flex{
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    &-note{
      display: flex;
      align-items: center;
      p{
        font-size: $small-font-size;
      }
    }
  }
 
 }
 &__button{
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 }
}
</style>
