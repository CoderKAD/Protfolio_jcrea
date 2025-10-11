<template>
    <section class="py-16 px-6 md:px-20 bg-white">
  <div class="flex justify-between items-center mb-10">
    <h2 class=" font-[Lufga] text-5xl font-bold text-gray-800">
      From my <br /> blog post
    </h2>
    <button
      class="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
    >
      See All
    </button>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
    <div
      v-for="(post, index) in blogPosts"
      :key="index"
      class="flex flex-col h-full bg-white rounded-2xl  overflow-hidden p-4"
    >
     
      <CardPost :imageUrl="post.image" class="w-full rounded-xl overflow-hidden" />

      <div class="mt-4">
        <span class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          {{ post.category }}
        </span>
      </div>

      <div class="flex justify-between items-center mt-3 text-gray-500 text-sm font-[Lufga]">
        <ul class="flex gap-6 list-disc marker:text-orange-600 ml-4">
          <li>{{ post.author }}</li>
          <li>{{ post.date }}</li>
        </ul>
      </div>

      <h3 class="mt-3 text-gray-800 font-[Lufga] text-[48px] leading-snug flex-grow md:text-[20px]">
        {{ post.title }}
      </h3>
    </div>
  </div>
</section>

</template>

<script setup>
import WebsiteDesign from "~/assets/img/Website-Design.jpeg"
import Dashboard from "~/assets/img/dashboard.jpg"
import MediaApp from "~/assets/img/media-app.jpg"
const blogPosts = [
  {
    image: WebsiteDesign,
    category: 'UI/UX Design',
    author: 'Jayesh Patil',
    date: '10 Nov, 2023',
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
  },
  {
    image:Dashboard,
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '09 Oct, 2023',
    title: 'Sugee: Loan Management System for Rural Sector.',
  },
  {
    image:MediaApp,
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '13 Aug, 2023',
    title: 'Cinetrade: Innovative way to invest in Digital Media',
  },
];
</script>
