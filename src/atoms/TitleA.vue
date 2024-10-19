<template>
    <h2 class="text-2xl text-tblue font-semibold">
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
