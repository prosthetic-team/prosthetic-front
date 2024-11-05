<template>
    <router-link :to="link"
        class="inline-flex items-center font-b text-black bg-bgblue rounded text-sm px-12 py-3 text-center text-white hover:bg-tblue hover:border-tblue transition-colors duration-300">

        <slot></slot>

        <!-- Usa el componente FontAwesomeIcon -->
        <Icon :icon="icon" class="ml-2" />

    </router-link>
</template>

<script setup>
import Icon from './Icon.vue';
defineProps({
    link: {
        type: String,
        required: true,
    },
    icon: {
        type: Array,
        default: () => ['fas', 'star'],
    },
});
</script>
