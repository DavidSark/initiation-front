<script setup>
import MyHeader from '../components/MyHeader.vue'
import MyHero from '../components/layouts/MyHero.vue'
import MyLocationCards from '../components/LocationCards.vue'
import MyCards from '../components/MyCards.vue'
import MyCardsService from '../components/MyCardsService.vue'
import CommentarySection from '../components/CommentaryCard.vue'
import NewsletterSection from '../components/layouts/NewsletterSection.vue'


</script>

<template>
    <div class="main">
      <MyHero/>
      <MyLocationCards/>
      <MyCards/>
      <MyCardsService/>
      <CommentarySection/>
      <NewsletterSection/>
   
    
 













 

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  
</div>
</template>


<style lang="scss" scoped>
.main {
  margin: 0 rem(110) 0 rem(110) ;
  
}
</style>