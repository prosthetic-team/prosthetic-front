<template>
    <h1 class="text-2xl w-tsm px-10 py-3 font-semibold">{{ title }}</h1>
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
