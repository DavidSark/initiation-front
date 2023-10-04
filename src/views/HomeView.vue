<script setup>
import MyButton from '@/components/elements/MyButton.vue'
// import MyButtonVue3 from '@/components/elements/MyButton2.vue'
import Layout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue'
import MyIcon from '@/components/elements/MyIcon.vue'
import SocialIcon from '@/components/elements/SocialIcons.vue'
import ServiceIcon from '../components/elements/ServiceIcon.vue'
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
      <MyIcon></MyIcon>

      <!-- Appel d'un variant de social icon -->
      <SocialIcon name="instagram"></SocialIcon>

      <ServiceIcon></ServiceIcon>
      <MyBackgroundScroll />
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aperiam neque quam perferendis, quo blanditiis
        ratione, soluta eum nobis quaerat aut modi eligendi voluptatum, in numquam tempore optio. Temporibus, minus.</p>
      <template v-slot:footer>
        <MyButton></MyButton>
      </template>

    </Layout>



    <!-- <MyButton size="small" variant="rounded" href="/about" >My button</MyButton>
   <MyButton href="/about" >My button</MyButton> -->
    <!-- <MyButton variant="rounded" >My big rounded button</MyButton> -->

    <!-- <MyButtonVue3 >My big rounded button</MyButtonVue3> -->
    <!-- <MyButton>My button 2</MyButton> -->
  </main>
</template>
