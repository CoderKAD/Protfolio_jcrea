<template>
  <footer class="bg-[#1b1b1b] text-gray-300 py-12  px-15  md:px-16 rounded-t-2xl ">

    <div class="flex flex-col md:flex-row justify-between items-center mb-12 ml-5 ">
      <h2 class="text-3xl md:text-4xl font-bold text-white">Lets Connect there</h2>
      <button
        class="mt-6 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition">
        Hire me <img :src="imgsrc2" alt="" class="w-5 " ref="logo" @mouseenter="hoverImg2" @mouseleave="resetImg2">

      </button>
    </div>

    <div class="border-t border-gray-600 my-8"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>

        <img :src="imgsrc" alt="" class=" -ml-20" ref="logo" @mouseenter="hoverImg" @mouseleave="resetImg">

        <p class="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
        <div class="flex gap-3 mt-4 text-white text-lg">
            <Icon name="fa-brands:facebook-f" class="hover:text-orange-500 cursor-pointer" />
            <Icon name="fa-brands:youtube" class="hover:text-orange-500 cursor-pointer" />
            <Icon name="fa-brands:whatsapp" class="hover:text-orange-500 cursor-pointer" />
            <Icon name="fa-brands:instagram" class="hover:text-orange-500 cursor-pointer" />
            <Icon name="fa-brands:twitter" class="hover:text-orange-500 cursor-pointer" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3 class="text-orange-500 font-semibold mb-3">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-orange-500">Home</a></li>
            <li><a href="#" class="hover:text-orange-500">About Us</a></li>
            <li><a href="#" class="hover:text-orange-500">Service</a></li>
            <li><a href="#" class="hover:text-orange-500">Resume</a></li>
            <li><a href="#" class="hover:text-orange-500">Project</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-orange-500 font-semibold mb-3">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li>+20 11 43 63 73 41</li>
            <li>fawzisayed1209@gmail.com</li>
            <li>fawziuiux.com</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 class="text-orange-500 font-semibold mb-3">Get the latest information</h3>
        <form class="flex">
          <input type="email" placeholder="Email Address"
            class=" rounded-l-lg px-4 py-2 text-black focus:outline-none bg-white " />
          <button type="submit" class="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-lg text-white ">
            <img src="~/assets/img/send.png" alt="">
          </button>
        </form>
      </div>
    </div>

    <div class="border-t border-gray-600 my-8"></div>
    <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>Copyright© 2023 Fawziuiux. All Rights Reserved.</p>
      <p>
        <a href="#" class="hover:text-orange-500">User Terms & Conditions</a> |
        <a href="#" class="hover:text-orange-500">Privacy Policy</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import jcreaHover from "~/assets/img/jcrea-log.svg"
import jcrea from "~/assets/img/hover-logo.svg"
import arrowDown from "~/assets/img/arrow-down.png"
import arrRight from "~/assets/img/up-right.svg"


const imgsrc = ref(jcrea);
const imgsrc2 = ref(arrowDown);

const hoverImg = () => {
  imgsrc.value =jcreaHover;
};

const resetImg = () => {
  imgsrc.value = jcrea;
};
const hoverImg2 = () => {
  imgsrc2.value = arrRight;
};

const resetImg2 = () => {
  imgsrc2.value =arrowDown;
};

</script>
