<template>
  <section class="max-w-6xl mx-auto py-12 px-4" id="resume">
    <h2 class="text-[64px] md:text-4xl font-bold text-center text-gray-800 mb-12 max-sm:text-[50px]">
      My <span class="text-orange-500  ">Work Experince</span>
    </h2>

    <div class="relative">
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-400"></div>

      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12 md:mb-20 relative"
      >
        
        <div class="text-left md:ml-5 order-1 md:order-none">
          <h3 class="text-[40px] md:text-xl font-bold text-gray-800 max-sm:text-[30px]">{{ item.company }}</h3>
          <p class="text-gray-500 text-sm">{{ item.duration }}</p>
        </div>

        <div class="flex justify-start md:justify-center relative z-10 order-2 md:order-none mt-3 md:mt-0">
          <div class="relative flex items-center justify-center">
            <div
              class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center"
            >
              <div
                :class="[
                  'w-4 h-4 md:w-6 md:h-6 rounded-full',
                  item.color === 'orange' ? 'bg-orange-500' : 'bg-gray-900'
                ]"
              ></div>
            </div>
          </div>
        </div>

       

        <div class="text-left md:pl-6 mr-auto order-3 md:order-none">
          <h3 class="text-lg md:text-xl font-bold text-gray-800">{{ item.role }}</h3>
          <p
            v-if="item.description"
            class="text-gray-500 text-sm mt-1 leading-relaxed"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    company: "Cognizant, Mumbai",
    duration: "Sep 2016 - July 2020",
    role: "Experince Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "orange",
  },
  {
    company: "Sugee Pvt limited, Mumbai",
    duration: "Sep 2020 - July 2023",
    role: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "dark",
  },
  {
    company: "Cinetstox, Mumbai",
    duration: "Sep 2023",
    role: "Lead UX Designer",
    color: "orange",
  },
];
</script>
