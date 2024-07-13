<template>
  <div>
    <h4 v-if="title" class="mb-2 uppercase font-normal text-sm">
      {{ title }}
    </h4>
    <ul class="flex flex-col gap-2 sidebar">
      <li v-for="page in routes" :key="page.linkName">
        <RouterLink
          :to="{ name: page.linkName }"
          :class="{
            active: route.name === page.linkName,
          }"
        >
          {{ page.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
const props = defineProps(["routes", "title"]);
const route = useRoute();
const router = useRouter();
</script>

<style></style>
