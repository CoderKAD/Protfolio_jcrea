<template>
  <div class="max-w-3xl w-[50%] mx-auto bg-[#FFFFFF24]  text-white rounded-2xl p-6 relative backdrop-blur-md">
    <div class="absolute top-5 right-5 opacity-20">
      <img src="~/assets/img/quote-down.png" alt="quote-close" class="w-12 h-12 "  />
    </div>

    
    <div class="flex items-center gap-4">
      <img :src="imgSrc" alt="avatar"
        class="w-14 h-14 rounded-full border-2 border-gray-600 object-cover" />
      <div>
        <h2 class="font-bold text-lg">{{ name }}</h2>
        <p class="text-sm text-gray-400">{{ job }}</p>
      </div>
    </div>

   
    <div class="flex items-center mt-4 gap-2">
      <div class="flex text-orange-400">
        <Icon name="mdi:star" />
        <Icon name="mdi:star" />
        <Icon name="mdi:star" />
        <Icon name="mdi:star" />
        <Icon name="mdi:star" />
      </div>
      <p class="text-xl font-semibold">5.0</p>
    </div>

    
    <p class="mt-4 text-gray-300 leading-relaxed">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string
  text: string
  name: string
  job: string
}>()
</script>
