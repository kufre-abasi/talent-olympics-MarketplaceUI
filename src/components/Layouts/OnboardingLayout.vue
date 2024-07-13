<template>
  <main class="lg:bg-white">
    <AuthPageNavbar
      :routeName="routeName"
      :memo="memo"
      :buttonText="buttonText"
      :hideLeftSection="hideLeftSection"
    />
    <!-- <div
      class="w-full h-full min-h-[60%] overflow-y-auto mb-10 flex justify-center items-center auth-container px-[16px] hide-scrollbar"
    >
      <slot></slot>
    </div> -->
    <!-- <div class="min-h-screen md:h-full"> -->
    <div class="flex flex-col min-h-screen container gap-8 p-0 pb-10 h-full md:flex-row">
      <!-- <div class="flex justify-center w-full h-full items-center lg:py-0"> -->
      <div
        class="lg:w-[40%] w-full h-screen min-h-[90%] overflow-y-auto flex justify-center items-center auth-container lg:py-6 px-[16px] hide-scrollbar"
      >
        <slot></slot>
      </div>
      <!-- </div> -->

      <!-- <div class="sticky lg:flex flex-shrink-0 items-center hidden top-0"> -->
      <div class="lg:flex hidden items-center w-[60%] flex-col justify-center h-screen">
        <!-- <h3 v-html="heading" class="font-medium text-center text-3xl"></h3> -->

        <!-- <div> -->
        <img class="h-[90vh] w-full bg-cover" :src="image" alt="" />
        <!-- </div> -->

        <!-- <p
          class="text-[15px] text-center w-[70%] leading-[24px] text-[#282929] font-normal"
        ></p> -->
      </div>
      <!-- </div> -->
    </div>
    <!-- </div> -->
    <LandingPageFooter />
  </main>
</template>

<script setup>
import AuthPageNavbar from "@/components/Header/AuthPageNavbar.vue";
import LandingPageFooter from "@/components/Footer/LandingPageFooter.vue";

defineProps({
  memo: String,
  routeName: String,
  hideLeftSection: Boolean,
  buttonText: String,
  image: String,
});
</script>
