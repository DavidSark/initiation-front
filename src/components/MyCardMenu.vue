<script setup>

import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'
import MyDesc from './elements/MyDesc.vue';

defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  sauce: String,
  price: String,
  id: String
})


</script>

<template>
  <div class="card">
    <div class="card__image" >
      <img  :src="imageSrc" :alt="imageAlt" :class="className">
    </div>

    <div class="card__content">
      <div class="card__content-flex">
        <MyTitle el="h4" size='small' bold="bold">{{ title }}</MyTitle>
        <MyDesc>{{ sauce }}</MyDesc>
        <MyDesc bold="bold"><span>$</span>{{ price }}</MyDesc>
      </div>
      <div class="card__content-icon">
        
        <MyIcon name="right arrow2" color="black" stroke="white"></MyIcon>
    
        <MyIcon name="left arrow" color="white" stroke="black"></MyIcon>
       
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.card{
  margin-top: 100px;
  border-radius: 1.875rem;
  background: $white;
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.05);
  width: rem(258);
  height: rem(275);
  position: relative;
  border: 1px solid black;
  &__image img{
    position: absolute;
    width: rem(350);
    top: rem(40);
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);

  }
  &__content{
    &-flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: rem(140);
    gap: 10px;
    position: relative;
    }
    &-icon{
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: rem(-50);
    left: 50%;
    transform: translate(-50%, -50%);    
    }
  }
  
  span{
    color: #EE140A;
  }
}
</style>