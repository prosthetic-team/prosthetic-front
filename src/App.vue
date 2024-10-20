<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import InitialLayout from './molecules/InitialLayout.vue';
import PageLayout from './molecules/PageLayout.vue'; // Asegúrate de tener este layout creado

const route = useRoute();

const layout = computed(() => {
  if (route.name === 'AboutUs' || route.name === 'Regist' || route.name === 'Landing') {
    return InitialLayout;
  }
  return PageLayout;
});
</script>


<style></style>
