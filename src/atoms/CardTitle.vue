<template>
    <h1 class="text-2xl px-10 py-3 mb-2 font-semibold">{{ title }}</h1>
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
