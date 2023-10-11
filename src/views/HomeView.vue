<script setup>
import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue'
import { onMounted, ref} from "vue"
import {client} from '../utils/axios'
import MyCard from '../components/MyCard.vue'



const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}

onMounted(async () => {
  recipes.value = await getRecipes()
})

console.log('loser',recipes.value)
</script>

<template>
  <DefaultLayout>
    <template #header>
      <nav>
        <ul>
          <!-- <li v-for="(recipe, index) in recipes" :key="index"><a href="#">{{ recipe.recipe_name }}</a></li> -->
        </ul>
      </nav>
    </template>

    <template #aside>
      <img style='max-width: 100px;' src='@/assets/pizza-png.png' />
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 2</a></li>
          <li><a href="#">Aside link 3</a></li>
        </ul>
      </nav>
    </template>
    <div >
      <MyCard v-for="(item, index) in recipes" :key="index"
      :id="item.recipe_id"
      :title="item.recipe_name"
      :description="item_description"
      :imgSrc="item.image_url">
    </MyCard>
      
    </div>
    <MyBackgroundScroll />

    <template #footer>
      <MyButton href="/about" variant="rounded">My link Button</MyButton>
    </template>
  </DefaultLayout>

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  <p></p>
</template>