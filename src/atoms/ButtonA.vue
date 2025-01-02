<template>
    <div>
        <!-- Si el 'link' está definido, usar router-link -->
        <router-link v-if="link" :to="link"
            class="text-black bg-celes font-medium rounded text-sm px-12 py-3 text-center text-tblue hover:bg-bgblue hover:text-white transition-colors duration-300">
            <slot></slot>
        </router-link>

        <!-- Si no hay 'link', usar el botón normal -->
        <button v-else @click="handleClick"
            class="text-black bg-celes font-medium rounded text-sm px-12 py-3 text-center text-tblue hover:bg-bgblue hover:text-white transition-colors duration-300">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        required: false,
    },
});

const handleClick = () => {
    console.log("Botón presionado");
};
</script>
