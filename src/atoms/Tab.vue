<template>
    <router-link :to="route" :class="[
        'py-3 rounded-lg flex items-center transition-colors duration-200',
        isActive ? 'bg-tdark' : 'hover:bg-gray-200',
        // Centrar horizontalmente cuando la sidebar es angosta
        'justify-center md:justify-start',
        // Ajustar padding según ancho de sidebar
        'px-0 md:px-5'
    ]">
        <Icon v-if="icon" :icon="icon" class="mr-0 md:mr-3" :color="isActive ? '#fff' : 'currentColor'" />
        <span class="hidden md:inline text-sm font-semibold" :class="isActive ? 'text-white' : 'text-gray-600'">
            {{ name }}
        </span>
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