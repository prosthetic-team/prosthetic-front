<template>
    <font-awesome-icon :icon="icon" :size="size" :style="{ color: hover ? hoverColor : color }"
        @mouseenter="hover = true" @mouseleave="hover = false" class="" />
</template>

<script setup>
import { ref } from 'vue';

const hover = ref(false); // Estado para controlar el hover

defineProps({
    icon: {
        type: [String, Array],
        required: true,
        default: () => ['fas', 'star'],
    },
    size: {
        type: String,
        default: '1x',
    },
    color: {
        type: String,
        default: 'currentColor',
    },
    hoverColor: {
        type: String,
        default: 'bgblue',
    },
});
</script>
