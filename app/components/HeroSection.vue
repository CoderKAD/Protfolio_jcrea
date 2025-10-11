<template>
  <section class="w-full" id="about">
    
    <div ref="titre" class="text-center px-3">
      <div class="flex justify-center font-bold items-center gap-4 flex-wrap">
        <span
          class="border-2 border-[#171717] text-stone-950 px-5 md:px-7 py-2 md:py-3 rounded-full text-sm md:text-base"
        >
          Hello!
        </span>
        <img
          src="~/assets/img/vector-top.svg"
          alt="vector"
          class="-mt-8 -ml-5 md:-mt-15 w-8 md:w-auto"
        />
      </div>

      <div
        class="text-sm md:text-tiny font-bold text-stone-950 text-center leading-tight mt-4 md:mt-0"
      >
        <h1>
          I'm <span class="text-orange-500">Jenny,</span>
        </h1>
        <img
          src="~/assets/img/vector-buttom.svg"
          class="inline-block align-middle -mb-25 w-6 md:w-auto"
          alt="vector"
        />
        <h1 class="inline capitalize">Product Designer</h1>
      </div>
    </div>

    
    <div
      class="md:flex md:flex-row md:justify-center md:items-center md:-mt-16 md:pl-10 md:gap-6 md:flex-wrap
             grid grid-cols-1 gap-8 place-items-center mt-6"
    >
     
      <div
        ref="text"
        class="w-11/12 md:w-1/5 font-lufga text-base md:text-lg text-[#344054] flex flex-col justify-center 
               px-4 md:px-0 text-center md:text-left"
      >
        <img
          src="~/assets/img/quote-up.svg"
          alt="quote"
          class="mb-2 self-center md:self-start w-6 md:w-auto"
        />
        <p>
          Jenny's exceptional product design ensures our website's success. Highly recommended!
        </p>
      </div>

      
      <div
        class="relative w-11/12 
        md:w-2/4 flex justify-center
          -translate-y-1 md:-translate-y-3
         max-sm:w-[420px]
         "
      >
        <img
          :src="currentImg"
          alt="young-pretty-women"
          @mouseenter="hoverImg"
          @mouseleave="resetImg"
          class="w-full object-cover rounded-xl md:rounded-none "
        />

        <div
          class="absolute left-1/2 bottom-4 md:bottom-19 -translate-x-1/2 flex flex-col md:flex-row gap-3 md:gap-4 
                 p-2 bg-[#FFFFFF1A] rounded-full backdrop-blur-md text-white 
                 border-[1px]
                 border-[radial-gradient(at_left,#C9C9C900,FFFFFF)]
                 max-sm:flex-row max-sm:p-1 max-sm:text-xs
                 "
        >
          <button
            ref="portfolio"
            @mouseenter="hoverButton('portfolio')"
            @mouseleave="resetButtons"
            class="px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 text-sm 
            md:text-base transition max-sm:px-2 
           
            "
            :class="{
              'bg-orange-500 text-white': activeButton === 'portfolio',
              'bg-transparent text-white': activeButton !== 'portfolio'
            }"
          >
            Portfolio
            <span v-if="activeButton === 'portfolio'">
              <Icon name="ph:arrow-up-right" />
            </span>
          </button>

          <button
            ref="hire"
            @mouseenter="hoverButton('hire')"
            @mouseleave="resetButtons"
            class="px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 text-sm md:text-base transition"
            :class="{
              'bg-orange-500 text-white': activeButton === 'hire',
              'bg-transparent text-white': activeButton !== 'hire'
            }"
          >
            Hire Me
            <span v-if="activeButton === 'hire'">
              <Icon name="ph:arrow-up-right" />
            </span>
          </button>
        </div>
      </div>

      
      <div
        ref="exper"
        class="w-full md:w-1/5 text-center text-stone-950 flex flex-col justify-center mt-2 md:mt-0"
      >
        <ul class="flex justify-center gap-1 my-2 text-amber-300 text-xl md:text-3xl">
          <li v-for="n in 5" :key="n">
            <Icon name="ph:star-fill" />
          </li>
        </ul>
        <h1 class="font-bold text-2xl md:text-[47px] capitalize">10 years</h1>
        <span class="text-sm md:text-base">Experience</span>
      </div>
    </div>

   
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import youngwomen2 from '~/assets/img/young-women.svg'
import youngwomen from '~/assets/img/pretty-women.svg'

const currentImg = ref(youngwomen);
const titre = ref<HTMLElement | null>(null);
const text = ref<HTMLElement | null>(null);
const exper = ref<HTMLElement | null>(null);
const activeButton = ref<string>("portfolio");


const hoverImg = () => {
  currentImg.value =youngwomen2;
  if (titre.value) {
    titre.value.style.transform = "translateY(150px)";
    titre.value.style.opacity = "0";
    titre.value.style.zIndex = "5";
    titre.value.style.transition = "all 0.7s ease-in-out";
  }
  if (text.value) {
    text.value.style.marginTop = "-300px";
  }
  if (exper.value) {
    exper.value.style.marginTop = "-300px";
  }
};

const resetImg = () => {
  currentImg.value = youngwomen;
  if (titre.value) {
    titre.value.style.transform = "translateY(0)";
    titre.value.style.opacity = "1";
    titre.value.style.zIndex = "10";
    titre.value.style.transition = "all 0.7s ease-in-out";
  }
  if (text.value) {
    text.value.style.marginTop = "0px";
  }
  if (exper.value) {
    exper.value.style.marginTop = "0px";
  }
};

const hoverButton = (button: string) => {
  activeButton.value = button;
};
const resetButtons = () => {
  activeButton.value = "portfolio";
};
</script>
