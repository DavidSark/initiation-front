<script setup>
import MyButton from '@/components/elements/index.vue'
import MyButtonVue3 from '@/components/elements/indexVue3.vue'
import Layout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue'
</script>

<template>
  <main>
    <Layout>
      <template v-slot:header>
        <nav>
          <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </nav>
      </template>
     
        <template v-slot:aside>
        <nav>
          <ul>
            <li><a href="#">Aside link</a></li>
            <li><a href="#">Aside link</a></li>
            <li><a href="#">Aside link</a></li>
          </ul>
        </nav>
        
      </template>
      
      <MyBackgroundScroll />
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aperiam neque quam perferendis, quo blanditiis
        ratione, soluta eum nobis quaerat aut modi eligendi voluptatum, in numquam tempore optio. Temporibus, minus.</p>
      <template v-slot:footer>
        <MyButton>Bouton</MyButton>
      </template>

    </Layout>



    <!-- <MyButton size="small" variant="rounded" href="/about" >My button</MyButton>
   <MyButton href="/about" >My button</MyButton> -->
    <!-- <MyButton variant="rounded" >My big rounded button</MyButton> -->

    <!-- <MyButtonVue3 >My big rounded button</MyButtonVue3> -->
    <!-- <MyButton>My button 2</MyButton> -->
  </main>
</template>
