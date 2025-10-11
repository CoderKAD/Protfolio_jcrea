<template>
  <header
    class="relative flex flex-col md:flex-row items-center justify-between bg-black text-white 
           px-6 md:px-10 py-4 w-11/12 md:w-5/6 rounded-2xl md:rounded-full mx-auto my-6"
  >
    <button
      @click="toggleMenu"
      class="absolute right-6 top-4 md:hidden text-3xl focus:outline-none"
    >
      <Icon
        name="fa-solid:bars"
        class="hover:text-orange-500 cursor-pointer transition-colors duration-300"
        size="18px"
      />
    </button>

    <nav
      class="flex flex-col md:flex-row justify-center md:justify-start gap-3 md:gap-6 mb-4 md:mb-0"
      :class="{
        'hidden md:flex': !isMenuOpen,
        'flex bg-black md:bg-transparent absolute top-16 left-0 w-full px-6 py-4 rounded-2xl shadow-lg z-20':
          isMenuOpen
      }"
    >
      <a
        v-for="item in getLeftItems()"
        :key="item.label"
        :href="item.to"
        @click="setActive(item)"
        :class="[ 
          'transition-colors duration-300 px-4 py-2 rounded-full text-sm md:text-base',
          item.active ? 'bg-orange-500 text-white font-semibold' : 'hover:text-orange-400'
        ]"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="mb-4 md:mb-0 flex justify-center">
      <img
        :src="logo"
        @mouseover="hoverImage"
        @mouseout="restImage"
        alt="Logo JCrea"
        class="h-10 md:h-12 cursor-pointer"
      />
    </div>

    <nav
      class="flex flex-col md:flex-row justify-center md:justify-end gap-3 md:gap-6"
      :class="{
        'hidden md:flex': !isMenuOpen,
        'flex bg-black md:bg-transparent absolute top-[calc(100%+4rem)] left-0 w-full px-6 py-4 rounded-2xl shadow-lg z-20':
          isMenuOpen
      }"
    >
      <a
        v-for="item in getRightItems()"
        :key="item.label"
        :href="item.to"
        @click="setActive(item)"
        :class="[ 
          'transition-colors duration-300 px-4 py-2 rounded-full text-sm md:text-base',
          item.active ? 'bg-orange-500 text-white font-semibold' : 'hover:text-orange-400'
        ]"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import jcreaHover from "~/assets/img/jcrea-log.svg"
import jcrea from "~/assets/img/hover-logo.svg"

interface NavigationMenuItem {
  label: string
  to: string
  active: boolean
  navPosition: "left" | "right"
}

const logo = ref(jcrea)
const isMenuOpen = ref(false)

const hoverImage = () => { logo.value = jcreaHover}
const restImage = () => { logo.value = jcrea }

const items = ref<NavigationMenuItem[]>([
  { label: "Home", to: "/", active: true, navPosition: "left" },
  { label: "About", to: "#about", active: false, navPosition: "left" },
  { label: "Service", to: "#services", active: false, navPosition: "left" },
  { label: "Resume", to: "#resume", active: false, navPosition: "right" },
  { label: "Project", to: "#project", active: false, navPosition: "right" },
  { label: "Contact", to: "#contact", active: false, navPosition: "right" }
])

function getLeftItems() {
  return items.value.filter(i => i.navPosition === "left")
}
function getRightItems() {
  return items.value.filter(i => i.navPosition === "right")
}
function setActive(clickedItem: NavigationMenuItem) {
  items.value.forEach(item => {
    item.active = item.label === clickedItem.label && item.navPosition === clickedItem.navPosition
  })
  isMenuOpen.value = false 
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
