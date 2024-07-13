<template>
  <main class="bg-[#F0F2F5] min-h-screen">
    <AuthPageNavbar
      :routeName="routeName"
      :memo="memo"
      :buttonText="buttonText"
      :hideLeftSection="hideLeftSection"
    />
    <div
      class="w-full max-h-screen flex justify-center !pb-10 mb-18 items-center lg:px-[16px] hide-scrollbar overflow-auto"
    >
      <slot></slot>
    </div>
    <!-- <LandingPageFooter /> -->
  </main>
  <!-- <div class="min-h-screen md:h-full"> -->
  <!-- <div class="flex hidden flex-col min-h-screen p-0 h-full md:flex-row"> -->
  <!-- <div class="flex justify-center w-full h-full items-center lg:py-0"> -->
  <!-- <div
      class="w-full h-screen min-h-[90%] overflow-y-auto flex justify-center items-center auth-container lg:py-6 px-[16px] hide-scrollbar"
    >
      <slot></slot>
  </div>
  -->
  <!-- </div> -->

  <!-- <div class="sticky lg:flex flex-shrink-0 items-center hidden top-0"> -->
  <!-- <div
    class="lg:flex hidden items-center py-[40px] w-[85%] flex-col justify-between h-screen bg-[#ebf3ff]"
  > -->
  <!-- <h3 v-html="heading" class="font-medium text-center text-3xl"></h3> -->

  <!-- <div> -->
  <!-- <img class="h-[400px] w-[400px] bg-contain" :src="image" alt="" /> -->
  <!-- </div> -->

  <!-- <p
        class="text-[15px] text-center w-[70%] leading-[24px] text-[#282929] font-normal"
      ></p>
    </div> -->
  <!-- </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script setup>
import AuthPageNavbar from "@/components/Header/AuthPageNavbar.vue";
// import LandingPageFooter from '@/components/Footer/LandingPageFooter.vue'

defineProps({
  memo: String,
  routeName: String,
  hideLeftSection: Boolean,
  buttonText: String,
});
</script>
