<script setup lang="ts">
import json from '~/static/items.json'
const route = useRoute()
let target=json.items.find(elem=>elem.name===route.params.id)
console.log(target)
console.log(route.params.id)
</script>

<template>
<main>
  <h1 class="text-center text-9xl">{{target.name}}</h1>
  <img class="mx-auto m-10" :src="`/${target.img}`">
  <UDivider label="Информация " />
  <div v-text="target.desc" class="m-10"></div>
</main>
</template>

<style scoped>

</style>
