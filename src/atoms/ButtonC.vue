<template>
    <a :href="link"
        class="text-black bg-white px-5 py-3 hover:bg-bggray border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center">
        <slot />
    </a>
</template>

<script setup>
defineProps({
    link: { type: String, required: true },
});
</script>