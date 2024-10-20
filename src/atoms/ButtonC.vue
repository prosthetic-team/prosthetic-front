<template>
    <a :href="link" class="text-black bg-white px-10 py-3 hover:bg-bggray border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
          ">
        <slot></slot>
    </a>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        required: true,
    },
});
</script>
