<template>
  <section class="rounded-[30px] md:rounded-[50px] p-6 md:p-20 bg-[url('~/assets/img/background-services.jpg')] bg-cover bg-center" id="commentSection">
    <div class="flex flex-col items-center justify-center text-white text-center px-4">
      <div class="flex flex-col md:flex-row items-center md:items-start ">
        <h1 class="text-2xl md:text-5xl font-bold max-w-xl md:max-w-3xl leading-snug" >
          Testimonials That <br class="hidden md:block" />
          Speak to <span class="text-[#FD853A]">My Results</span>
          sty
        </h1>
        <img
          src="~/assets/img/vector1.svg"
          class="w-10  -md:w-auto
                 -ml-12
                 -mt-2.5
                 md:ml-10 max-sm:ml-500 
                 max-sm:relative 
                 max-sm:top-[-70px] 
                 max-sm:left-[170px] 
                 max-sm:w-5 "
          alt="star"
          style="margin-left: -50px;margin-top: -10px;"

          
          
        />
      </div>
      <div class="flex flex-col md:flex-row items-center md:items-start gap-3 
          max-sm:flex-row   
      ">
        <p class="mt-4 max-w-md md:max-w-2xl text-sm md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
        <img
          src="~/assets/img/vecto.svg"
          class="w-10 md:w-auto mb-6 md:mb-20
                max-sm:-mt-32 max-sm:-ml-15
                

          "
          alt="star"
          
        />
      </div>

      <img
        src="~/assets/img/vecto.svg"
        class="  -ml-155 -mt-3
          max-sm:-ml-64
        "
        alt="star"
       
      />
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 9000 }"
      :items="comments"
      class="mt-12 px-4 md:px-0"
      :ui="{ item: 'basis-full w-full md:basis-1/2 md:w-1/2 lg:basis-1/2' }"
    >
      <div class="px-2 md:px-4 w-full">
        <Comment
          class="w-full"
          :text="item.text"
          :imgSrc="item.imgSrc"
          :job="item.job"
          :name="item.name"
        />
      </div>
    </UCarousel>
  </section>
</template>

<script setup lang="ts">
import fawzi from "~/assets/img/fawzi.png"


const comments = [
  {
    imgSrc: fawzi,
    job: 'Ui Ux Designer',
    name: 'Fawzi Sayed',
    text: 'Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.',
  },
  {
    imgSrc: fawzi,
    job: 'Ui Ux Designer',
    name: 'Fawzi Sayed',
    text: 'Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.',
  },
  {
    imgSrc: fawzi,
    job: 'Ui Ux Designer',
    name: 'Fawzi Sayed',
    text: 'Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.',
  },
  {
    imgSrc: fawzi,
    job: 'Ui Ux Designer',
    name: 'Fawzi Sayed',
    text: 'Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.',
  },
]
</script>
