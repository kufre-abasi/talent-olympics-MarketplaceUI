<template>
  <div class="bg-neutral-300">
    <div class="lg:flex">
      <div
        v-if="closeBackdrop"
        @click.self="toggle"
        class="lg:hidden z-20 menubg fixed top-0 left-0 w-full exclude-from-print"
      >
        <div
          :class="{ 'animate__animated animate__slideOutLeft': !closeNav }"
          class="w-2/3 animate__animated animate__slideInLeft"
        >
          <LessonsSideBar />
        </div>
      </div>
      <div class="hidden lg:block flex-shrink-0 md:w-[288px] exclude-from-print">
        <LessonsSideBar />
      </div>
      <div class="flex-grow overflow-hidden pb-20">
        <!-- top-menu flex items-center justify-between py-3 px-4 lg:px-0 -->
        <!-- flex items-center gap-[3rem] justify-between px-4 min-[370px]:px-6 sticky top-0 pt-4 min-[370px]:pt-5 bg-white z-50  -->
        <LessonsNavbar />

        <slot></slot>
      </div>
    </div>
  </div>

  <!-- <div class="w-full relative justify-between bg-neutral-300">
    <DashboardNavbar />
    <div class="lg:flex relative hidden">
      <div class="lg:flex relative hidden">
        <div class="min-w-[273px] absolute w-[273px] max-w-[273px] p-4 bg-white">
          <div class="min-w-[273px] w-[273px] max-w-[273px] p-4 bg-white">SideBar</div>
        </div>
      </div>
      <div class="w-full flex overflow-y-auto max-h-screen hide-scrollbar">
        <div>content</div>
      </div>
    </div>
  </div> -->
</template>
<script setup>
import { ref, computed, onMounted, onUpdated, watch } from "vue";

import LessonsNavbar from "@/components/Header/LessonsNavbar.vue";
import LessonsSideBar from "@/components/Layouts/SideBar/LessonsSideBar.vue";
const closeBackdrop = ref(false);
const closeNav = ref(false);

const toggle = () => {
  closeNav.value = !closeNav.value;

  if (closeNav.value) {
    closeBackdrop.value = !closeBackdrop.value;
  }

  if (!closeNav.value) {
    setTimeout(() => {
      closeBackdrop.value = !closeBackdrop.value;
    }, 1000);
  }
};
defineProps({ pageTitle: String });
</script>
