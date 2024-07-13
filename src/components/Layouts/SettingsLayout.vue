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
          <SettingsSideBar />
        </div>
      </div>
      <div class="hidden lg:block flex-shrink-0 md:w-[288px] exclude-from-print">
        <SettingsSideBar />
      </div>
      <div class="flex-grow overflow-hidden pb-20">
        <SettingsNavbar />

        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUpdated, watch } from "vue";

import SettingsNavbar from "@/components/Header/SettingsNavbar.vue";
import SettingsSideBar from "@/components/Layouts/SideBar/SettingsSideBar.vue";
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
