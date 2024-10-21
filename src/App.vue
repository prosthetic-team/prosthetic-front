<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import InitialLayout from './layout/InitialLayout.vue';
import PageLayout from './layout/PageLayout.vue';

const route = useRoute();

const layout = computed(() => {
  if (route.name === 'AboutUs' || route.name === 'Regist' || route.name === 'Landing') {
    return InitialLayout;
  }
  return PageLayout;
});
</script>


<style></style>
