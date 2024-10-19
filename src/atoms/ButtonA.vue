<template>
    <router-link :to="link"
        class="text-black bg-celes font-medium rounded text-sm px-12 py-3 text-center text-tblue hover:bg-bgblue hover:text-white transition-colors duration-300">
        <slot></slot>
    </router-link>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        required: true,
    },
});
</script>
