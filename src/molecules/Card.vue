<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg w-full h-48 object-cover" :src="linkImage" alt="" />
        <div class="flex flex-col justify-between p-3">
            <div>
                <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{ cardTitle }}</h5>
                <!-- Establecemos un límite de 3 líneas en la descripción con puntos suspensivos -->
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{{ description }}</p>
            </div>
            <!-- Contenedor del botón al final -->
            <div class="py-5">
                <ButtonC class="" :link="link">
                    Leer más
                </ButtonC>
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonC from '@/atoms/ButtonC.vue';
defineProps({
    link: {
        type: String,
        required: true,
    },
    linkImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cardTitle: {
        type: String,
        required: true,
    },
    icon: {
        type: Array,
        default: () => ['fas', 'chevron-right'],
    },
});
</script>
