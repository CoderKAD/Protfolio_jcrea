<template>
  <div class="w-full h-30 overflow-hidden">
    <div class="animate-marquee">
      <img
        v-for="(img, index) in [...items, ...items]"
        :key="index"
        :src="img"
        alt="slide image"
        class="h-full object-cover flex-shrink-0 w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import imgSlide from "~/assets/img/img-slide.png"
const items = [
  imgSlide,imgSlide,
];
</script>
