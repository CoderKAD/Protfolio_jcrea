<template>
  <section class="flex flex-col items-center text-center py-16 px-4 bg-white" id="contact">
   
    <h2
      class="  md:text-[64px] font-bold text-[#344054] text-[64px] mb-6 max-sm:text-[40px] "
    >
      Have an Awsome Project<br/> Idea?
      <span class="text-orange-500"> Let’s Discuss</span>
    </h2>

   
    <div
      class="flex flex-col sm:flex-row justify-between items-center w-full max-w-lg
       rounded-full border border-gray-200 shadow-sm px-4 py-2 mb-6 gap-3
       max-sm:flex-row max-sm:p-1 max-sm:text-xs
       "
    >
      <div class="flex items-center gap-3 w-full sm:w-auto text-gray-400">
        <div class="bg-orange-100 p-2 rounded-full flex-shrink-0">
          <img src="~/assets/img/sms.png" class="w-5 h-5" alt="mail" />
        </div>
        <input
          type="email"
          placeholder="Enter Email Address"
          class="flex-1 bg-transparent text-sm text-gray-700 outline-none"
        />
      </div>

      <button
        class="w-full sm:w-auto bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Send
      </button>
    </div>
    <div
      class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:space-x-6 text-sm text-gray-600"
    >
      <div class="flex items-center space-x-2">
        <img src="~/assets/img/star.png" alt="rating" class="w-5 h-5" />
        <span>4.9/5 Average Ratings</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="~/assets/img/award.png" alt="award" class="w-5 h-5" />
        <span>25+ Winning Awards</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="~/assets/img/shield-tick.png" alt="certified" class="w-5 h-5" />
        <span>Certified Product Designer</span>
      </div>
    </div>

    <div class="pt-16 sm:pt-20 w-full">
      <Slide />
    </div>
  </section>
</template>

