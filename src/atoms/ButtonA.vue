<template>
    <component :is="link ? 'router-link' : 'button'" :to="link || undefined" @click="!link && handleClick"
        class="text-black bg-celes font-medium rounded text-sm px-12 py-3 text-center text-tblue hover:bg-bgblue hover:text-white transition-colors duration-300">
        <slot />
    </component>
</template>

<script setup>
const props = defineProps({
    link: String,
});
</script>