<script setup>
import {onMounted} from 'vue'
import MyButton from '@/components/elements/MyButton.vue'
// import MyButtonVue3 from '@/components/elements/MyButton2.vue'
import MyIcon from '@/components/elements/MyIcon.vue'
import SocialIcon from '@/components/elements/SocialIcons.vue'
import ServiceIcon from '../components/elements/ServiceIcon.vue'
import MyDesc from '../components/elements/MyDesc.vue'
import MyCard from '../components/MyCards.vue'
import MyCardsService from '../components/MyCardsService.vue'


// Première façon d'écrire le fetch
// fetch('http://localhost:3000/recipes',{
//   method: 'GET'
// }).then((response) => {
//   return response.json()
// }).then((data) => {
//   console.log(data)
// })

//Autre facon de fetch :
// console.log('avant la requête 1');
// fetch('http://localhost:3000/recipes').then(response => response.json()
// ).then((data) => {
//   console.log('liste des recettes',data)
// });
// console.log('après la requête 1')

// onMounted(async() => {
//   console.log('avant la requête 2');
//   const response = await fetch('http://localhost:3000/recipes')
//   const data = await response.json()
//   console.log('liste des recettes', data)
//   console.log('après la requête 2')
// })


// const getArticlesThen = () =>{
//   fetch('http://localhost:3000/recipes')
//   .then(response => response.json())
//   .then(data => console.log('fetch + then', data))
// }

// const getArticles = async () =>{
//   const response = await fetch('http://localhost:3000/recipes')
//   return response.json()
// }

const getRecipiesThen = () =>{
  fetch('http://localhost:3000/recipes')
  .then(response => response.json())
  .then(data => console.log('fetch + then', data))
}

const getRecipies = async () =>{
  const response = await fetch('http://localhost:3000/recipes')
  return response.json()
}


onMounted(async () => {
  console.log('fect + await', await getRecipies())
  getRecipiesThen()
})
</script>

<template>
  <main>
  
    <MyCard></MyCard>
    <MyDesc color="light gray"></MyDesc>
    <MyCardsService></MyCardsService>

  </main>
</template>
