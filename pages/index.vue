<script setup lang="ts">
import json from '~/static/items.json'
console.log(json)
const items=ref(json.items)
</script>

<template>
<main>
  <div >
    <video class='h-96 w-screen object-cover ' src="../asserts/pexels-cesar-casanova-6312477%20(2160p).mp4" loop muted autoplay ></video>
    <span class="relative bottom-36 left-10 text-3xl text-black">Попробуйте электрокары нового поколения. Дешево и эффективно </span>
  </div>
  <h1 class="text-center text-4xl m-10">наша продукция</h1>
  <section class="grid grid-cols-3 justify-items-center ">
    <div v-for="{name ,img} in items" class="w-96 bg-amber-50  rounded-lg">
      <div class="p-10">
        <h2>{{name}}</h2>
        <img :src='`/${img}`' >
      </div>
      <NuxtLink :href="`/car/${name}`"> <button class="bg-green-600 w-full p-3 rounded-lg">подробнее</button></NuxtLink>

    </div>
  </section>
</main>
</template>

<style scoped>

</style>
