<script setup lang="ts">

</script>

<template>
    <div class="flex justify-center flex-col items-center text-3xl p-10">
      <span class=""><Icon name="teenyicons:phone-solid"/> 8 (800) 555 35 35</span>
      <span><Icon name="ic:round-mail"/> example@mail.ru</span>
    </div>
    <div class="w-full  h-96">
      <LMap
          ref="map"
          zoom="4"
          :center="[47.21322, -1.559482]"
      >
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
      </LMap>
    </div>
</template>

<style scoped>

</style>
