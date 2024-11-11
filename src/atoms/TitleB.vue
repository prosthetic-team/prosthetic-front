<template>
    <h2 class="md:text-2xl font-semi py-12 text-tdark font-semibold">
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
