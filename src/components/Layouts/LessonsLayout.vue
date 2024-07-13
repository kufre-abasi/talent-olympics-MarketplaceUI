<script setup>
import DashboardNavbar from "@/components/Header/DashboardNavbar.vue";
defineProps({ pageTitle: String });
</script>

<template>
  <div class="bg-neutral-300 min-h-screen">
    <div class="flex-grow pb-20">
      <DashboardNavbar />
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
