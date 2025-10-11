<template>
  <section
    class="flex flex-col md:flex-row items-center justify-between bg-[#F5F7FA] rounded-3xl p-10 md:p-16 overflow-hidden"
  >
    <div class="relative w-full md:w-1/2 flex justify-center items-center">
      <div
        class="absolute -z-10 w-48 h-64 bg-orange-400 rounded-[3rem] left-10 top-5"
      ></div>

      <div class="relative w-[320px] md:w-[380px] h-[380px] flex justify-center items-center">
        <img
          :src="imgsrc"
          @mouseenter="hoverImg"
          @mouseleave="resetImg"
          ref="myImage"
          alt="Hire me illustration"
          class="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>

    
    <div
      class="w-full md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0"
    >
      <h2 class="text-4xl font-bold text-gray-800">
        Why <span class="text-orange-500">Hire me?</span>
      </h2>
      <p class="text-gray-500 max-w-md mx-auto md:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
        posuere in justo vulputate, bibendum sodales.
      </p>

    
      <div
        class="flex items-center justify-center md:justify-start gap-10 pt-4"
      >
        <div>
          <h3 class="text-2xl font-bold text-gray-800">450+</h3>
          <p class="text-gray-500 text-sm">Projects Completed</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-800">120+</h3>
          <p class="text-gray-500 text-sm">Happy Clients</p>
        </div>
      </div>

     
      <div class="pt-6">
        <button
          class="px-8 py-3 border border-gray-700 rounded-xl text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition"
        >
          Hire me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import hiremerest from "~/assets/img/hire-me.svg"
import hiremehover from "~/assets/img/my-hire-me2.svg"

const imgsrc = ref(hiremerest);

const hoverImg = () => {
  imgsrc.value = hiremehover;
};

const resetImg = () => {
  imgsrc.value = hiremerest;
};
</script>
