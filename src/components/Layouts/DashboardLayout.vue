<script setup>
// import DashboardNavbar from "@/components/Header/DashboardNavbar.vue";
defineProps({ pageTitle: String });
</script>

<template>
  <div class="bg-neutral-300 min-h-screen">
    <div class="lg:flex">
      <div class="flex-grow pb-20">
        <!-- <DashboardNavbar /> -->
        <div class="pt-4">
          <!-- <div class="my-4 container">
            <h4 class="capitalize text-[24px] font-bold">{{ pageTitle }}</h4>
          </div> -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
