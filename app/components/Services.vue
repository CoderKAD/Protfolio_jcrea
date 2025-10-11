<template>
  <section
    class="relative rounded-[30px] md:rounded-[50px] 
      min-h-screen   md:-mt-10.5 p-4 md:p-7 pb-16 md:pb-20 
      bg-[url('~/assets/img/background-services.jpg')] bg-cover bg-center
      overflow-hidden"
      id="services"
  >
   
    <div class="absolute inset-0 z-0 overflow-hidden">

      <img src="~/assets/img/light-yllow.png" class="absolute top-1/7 left-[-100px] w-[400px] h-[400px] opacity-70 animate-float-left" />
      <img src="~/assets/img/light-yllow.png" class="absolute top-[18%] right-[-250px] w-[750px] h-[750px] opacity-80 animate-float-right" />
      <img src="~/assets/img/light-yllow.png" class="absolute top-[15px] left-[35%] w-[250px] h-[250px] animate-float-center" />
    </div>

   
     <div class="absolute inset-0 bg-[#171717]/70 z-0"></div>

    
    <div
      class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-7 py-10 md:py-16 px-6 md:px-20 text-white capitalize"
    >
      <h1
        class="font-[Lufga] font-medium text-3xl md:text-[48px] leading-[120%] md:leading-[100%] tracking-[-0.015em] mb-3 md:mb-0"
      >
        My <span class="text-[#FD853A]">Services</span>
      </h1>

      <p
        class="font-[Lufga] font-normal text-sm md:text-[18px] max-w-full md:max-w-xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
        posuere in justo vulputate, bibendum sodales.
      </p>
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      dots
      :autoplay="{ delay: 6000 }"
      :items="project"
      :ui="{
        item: 'md:flex  sm:basis-2/3 md:basis-130 px-2'
      }"
      class="px-4 md:px-8  font-lufga relative z-10"
    >
      <Card :titre="item.titre" :imageUrl="item.imageUrl" />
    </UCarousel>
  </section>
</template>

<script setup lang="ts">
import service1 from "~/assets/img/service1.png"
import service2 from "~/assets/img/service2.png"
import service3 from "~/assets/img/service3.png"
  const project = [
    { titre: "UI/UX Design", imageUrl:service1 },
    { titre: "Web Design", imageUrl:service2 },
    { titre: "Landing Page", imageUrl:service3},
  ];
  </script>


