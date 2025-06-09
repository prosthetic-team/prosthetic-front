<template>
    <h1 class="flex items-center md:text-md text-2xl w-full px-11 h-14 font-semibold truncate">{{ title }}</h1>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Card Title',
        required: true,
    },
});
</script>
