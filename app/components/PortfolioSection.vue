<template>
  <section class="w-full px-6 sm:px-8 md:px-20 py-10 md:py-16" id="project">
    <div class="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-10 gap-6 md:gap-0">
      <h2 class="text-2xl sm:text-3xl ml-15 md:text-[40px] font-bold text-[#344054] text-center md:text-left">
        Let’s have a look at my <br/>
        <span class="text-orange-500">Portfolio</span>
      </h2>
      <button
        class="bg-orange-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-600"
      >
        See All
      </button>
    </div>
      <div class="mt-12 md:mt-16 ">
        <UCarousel
        v-slot="{ item }"
        loop
        dots
        :autoplay="{ delay: 6000 }"
        :items="projects"
        :ui="{
          item: ' md:flex  sm:basis-2/3 md:basis-130 px-2'
        }"
        class="max-w-7xl mx-auto gap-6"
      >
        <ProtfolioCards
          :title="item.title"
          :image="item.image"
          :description="item.description"
        />
      </UCarousel>

    </div>
    <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 md:mt-12">
      <span
        v-for="(tag, i) in tags"
        :key="i"
        class="bg-gray-100 text-gray-800 text-sm sm:text-base font-medium px-4 sm:px-5 py-2 rounded-full shadow-sm hover:bg-orange-100 "
      >
        {{ tag }}
      </span>
    </div>

    <div class="text-center mt-12 md:mt-14 px-4 sm:px-6">
      <h3
        class="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#344054] flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        Lirante - Food Delivery Solution
        <span
          class="border-2 border-orange-500 text-orange-500 rounded-full p-2 hover:bg-orange-500 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] hover:text-white  flex items-center justify-center"
        >
          <Icon name="uil:arrow-up-right" />
        </span>
      </h3>
      <p class="max-w-xl md:max-w-2xl mx-auto text-[#344054] mt-3 sm:mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import service1 from "~/assets/img/service1.png"
import service2 from "~/assets/img/service2.png"
import service3 from "~/assets/img/service3.png"
  const projects = [
    { title: "Lirante", image: service1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim." },
    { title: "Calathea", image: service2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim." },
    { title: "NovaPay", image: service3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim." },
]

  const tags = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"]
</script>
