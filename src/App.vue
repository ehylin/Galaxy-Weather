<script setup>
   import { ref } from 'vue';
   import { RouterView } from 'vue-router'
   import Footer from './components/ui/Footer.vue'
   import add from './assets/images/add.png'
   import menu from './assets/images/menu.png'

</script>

<template>
  <div class="min-h-screen flex flex-col">
      <header class="border border-b-scale-600">
        <div>
          <div class="flex items-center justify-between mx-auto p-4 lg:max-w-6xl">
            <img :src="menu" alt="Menu" class="w-[20px] h-auto" />
              <h1 class="text-sm font-extrabold text-center">
                MyWeather App
              </h1>
            <img :src="add" alt="Add" class="w-[20px] h-auto cursor-pointer" />
          </div>
        </div>
      </header>

      <main class="flex-grow"> 
        <RouterView />
      </main>
      <Footer />
  </div>
</template>


