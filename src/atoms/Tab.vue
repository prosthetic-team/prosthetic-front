<template>
    <router-link :to="route"
        :class="['block py-3 px-4 rounded-lg hover:bg-gray-200 flex items-center', { 'bg-gray-300': isActive }]">
        <Icon v-if="icon" :icon="icon" size="lg" class="mr-2" />
        <span class="hidden md:inline">{{ name }}</span>
    </router-link>
</template>

<script setup>
import Icon from './Icon.vue';
const props = defineProps({
    name: String,
    route: String,
    icon: [String, Array],
    isActive: Boolean
});
</script>

<style scoped>
.bg-gray-300 {
    background-color: #e5e7eb;
}
</style>
