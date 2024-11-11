<template>
    <h1 class="text-2xl w-sm px-7 py-3 font-semibold">{{ title }}</h1>
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
