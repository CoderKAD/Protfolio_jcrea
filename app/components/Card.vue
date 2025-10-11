<template>
  <div
    class="relative w-76 md:w-90 lg:w-[420px] group hover:scale-105 mb-8"
  >
    <svg
      viewBox="0 0 416 508"
      class="w-full h-auto bg-transparent"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="frame60Clip1">
          <path
            d="M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V338.5C416 358.935 399.435 375.5 379 375.5H356.049C317.534 375.5 286.476 407.031 287.057 445.541L287.433 470.442C287.745 491.092 271.09 508 250.437 508H37C16.5655 508 0 491.435 0 471V37Z"
          />
        </clipPath>
      </defs>

      <foreignObject
        x="0"
        y="0"
        width="390"
        height="508"
        clip-path="url(#frame60Clip1)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          class="w-full h-full border-2 border-solid 
          [border-image-source:radial-gradient(87.42%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_100%)]  
          bg-[#68686833] backdrop-blur-[15px]
          group-hover:bg-[#FD853A] lg:gap-6"
        >
          <div class="h-full flex justify-between flex-col">
            <div class="p-4 border-b-2 border-[#F9FAFB4D]">
              <h2 class="text-3xl font-bold text-white p-4">
                {{ titre }}
              </h2>
            </div>

            <div class="flex items-center flex-col">
              <div
                class="bg-[#9E9D9D] h-10 rounded-t-4xl w-[65%] -mb-4 z-10 opacity-50"
              ></div>
              <div
                class="bg-[#757575] h-10 rounded-t-4xl w-[80%] -mb-4 z-20"
              ></div>
              <img
                :src="imageUrl"
                class="rounded-4xl z-30 w-[90%] object-cover"
              />
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>

    <button
      class="absolute bottom-4 right-10 w-20 h-20 rounded-full text-white 
      flex items-center justify-center text-3xl shadow-xl bg-[#1D2939] 
      group-hover:bg-[#FD853A] max-sm:left-[220px] max-sm:w-16 max-sm:h-16"
    >
      <img
        src="~/assets/img/up-right.svg"
        alt="up-right"
        class="w-8 h-8 group-hover:invert"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titre: string;
  imageUrl: string;
}>();
</script>
