<script setup>
import { onMounted, ref } from "vue";
import { client } from '@/utils/axios.js';
import MyTitle from '../components/elements/MyTitle.vue';
import RecipeCard from '../components/RecipeCard/RecipeCard.vue';

const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}

onMounted(async () => {
  recipes.value = await getRecipes()
})

</script>

<template>
  <div class="content">
    <div class="section">
      <p class="section__title">Recipes</p>
      <MyTitle el="h3" size="small">Our Recipes</MyTitle>
    </div>

    <div class="recipes-list">
      <div v-for="(recipe, index) in recipes" :key="index">
        <RecipeCard :id="recipe.recipe_id" :title="recipe.recipe_name" :description="recipe.recipe_description"
          :image="recipe.image_url" />
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: 0 rem(100);

  .section {
    text-align: center;
    margin: rem(80) 0 rem(40) 0;

    p {
      color: $primary-color;
    }
  }

  .recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(40);
  }
}
</style>