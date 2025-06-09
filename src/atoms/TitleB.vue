<template>
    <h2 class="text-base md:text-2xl py-8 text-tdark font-semibold">
        <slot></slot>
    </h2>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});
</script>
