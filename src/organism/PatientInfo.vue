<template>
    <div class="flex items-center px-7">
        <!-- Imagen a la izquierda-->
        <ProfileImage :imageUrl="item.imageUrl" class="mr-5" />

        <!-- Contenedor de texto con flex columna -->
        <div class="flex flex-col">
            <div class="flex justify-between items-center">
                <span class="font-medium text-gray-900 whitespace-nowrap">
                    {{ item.patientName || item.name }}
                    <!-- Icono a la derecha del nombre -->
                    <Icon :icon="item.active ? 'fa-solid fa-plug-circle-check' : 'fa-solid fa-plug-circle-xmark'"
                        class="ml-2 text-lg" :style="item.active ? 'color: #10b981' : 'color: #ef4444'" />
                </span>
            </div>

            <!-- Descripción -->
            <span class="text-gray-500 break-words line-clamp-3 max-w-xsm">{{ item.description }}</span>

            <span class="text-gray-400">
                Tiempo de uso diario(horas):
                <span v-if="item.goalCompletness === 100">
                    Completado
                </span>
                <span v-else>
                    {{ item.time_of_use }} horas
                </span>
            </span>
        </div>

        <!-- Contenedor del gráfico de progreso -->
        <div class="w-1/5">
            <RingChart :data="getCompletionData(item.goalCompletness)" />
        </div>
    </div>
</template>

<script setup>
import ProfileImage from '@/atoms/ProfileImage.vue';
import Icon from '@/atoms/Icon.vue';
import RingChart from '@/molecules/EmptyRingChart.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

// Función para crear los datos necesarios para el gráfico
const getCompletionData = (goalCompletness) => {
    return {
        completed: goalCompletness,  // Progreso actual
        remaining: 100 - goalCompletness, // Lo que queda por completar
    };
};

</script>
