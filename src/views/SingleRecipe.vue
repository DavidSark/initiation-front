<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { client } from "@/utils/axios";

const route = useRoute()
const recipe = ref({})

const getRecipe = async () => {
  const response = await client.get(`/recipes/${route.params.id}`)
  return response.data
}

onMounted(async () => {
  // Requête pour récupérer la recette avec l'id correspondant
  recipe.value = await getRecipe()
})
</script>

<template>
  <div class="p-recipe-view">
    <RouterLink to="/recipes">Back to recipes</RouterLink>
    <div class="c-recipe-card">
    <div class="c-recipe-card__content">
      <img class="c-recipe-card__image"  :src="recipe.image_url">
      <p class="c-recipe-card__title">{{ recipe.recipe_name }}</p>
      <p class="c-recipe-card__description">{{ recipe.recipe_description }}</p>
      <p>Liste des ingrédients : </p>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">
        {{ ingredient.quantity }} {{ ingredient.unit}} of {{ ingredient.name }}
      </li>
    </ul>
    </div>
  </div>

   
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  background-color: $white;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: rem(450);
  margin: rem(50) auto;
  &__content {
    padding: 20px;
  }

  &__image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  &__title {
    font-size: 22px;
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__description {
    font-size: 16px;
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>