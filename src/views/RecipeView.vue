<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from 'vue';
import {client} from '../utils/axios'

const route = useRoute()
const recipe = ref({})

const getRecipes = async () => {
  const response = await client.get(`/recipes/${route.params.id}`)
  return response.data
}

onMounted(async()=>{ 
recipe.value = await getRecipes()
})
</script>

<template>
<div>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
{{ recipe.recipe_name }}
</div>
</template>

<style lang="scss" scoped>

</style>