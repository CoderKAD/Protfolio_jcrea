<template>
  <div
    class="relative w-76 md:w-90 lg:w-[420px]   "
  >
    <svg
      viewBox="0 0 416 508"
      class="w-full h-auto"
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
        width="416"
        height="508"
        clip-path="url(#frame60Clip1)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          class="relative w-full h-full border-2 border-solid 
                 [border-image-source:radial-gradient(87.42%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_100%)] 
                 bg-[#68686833] backdrop-blur-[15px] "
        >
          <img
            :src="imageUrl"
            class="absolute inset-0 w-full h-full object-cover z-0 "
          />

          <div class="relative z-10 p-4 text-white">
          </div>
        </div>
      </foreignObject>
    </svg>

  <button
  class="absolute bottom-4 right-4 
         w-16 h-16 sm:w-20 sm:h-20
         rounded-full flex items-center justify-center
         text-white text-3xl shadow-xl 
         bg-[#1D2939] hover:bg-[#FD853A]
         transition-all duration-300"
>
  <img
    src="~/assets/img/up-right.svg"
    alt="up"
    class="w-6 h-6 sm:w-8 sm:h-8"
  />
</button>

  </div>
</template>

<script setup lang="ts">

defineProps<{
  imageUrl: string;
}>()

</script>
