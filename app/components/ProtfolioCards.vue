<template>
  <div
    class="relative rounded-3xl overflow-hidden group shadow-lg w-[500px]"
  >
    <img
      :src="image"
      alt="Portfolio Image"
      class="w-full h-[320px] object-cover rounded-3xl"
    />

    
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
    ></div>

    
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col justify-end
             p-6 m-4 rounded-2xl w-auto
             bg-transparent backdrop-blur-0
             group-hover:bg-[#0000004D] group-hover:backdrop-blur-[25px]"
    >
      <h3
        class="text-white text-[40px] font-extrabold mb-2 group-hover:-translate-y-1 transition-transform duration-300"
      >
        {{ title }}
      </h3>

      <p
        class="text-gray-200 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden
               group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500"
      >
        {{ description }}
      </p>
    </div>

    <button
      class="rounded-full absolute top-6 right-6 border-2 border-orange-500 text-orange-500 p-4
             group-hover:bg-orange-500 group-hover:text-white transition w-[60px] h-[60px]
             
             "
    >
      <Icon name="uil:arrow-right" size="22" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
});
</script>
