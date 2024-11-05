<template>
    <div class="flex flex-col min-h-screen">
        <!-- Contenedor de la tabla con scroll -->
        <div class="flex-1 overflow-y-auto max-h-[80vh] rounded-lg">
            <table class="w-full text-sm text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700" v-for="item in data"
                        :key="item.id">
                        <td class="px-6 py-4">
                            <!-- Contenedor principal con flex para imagen y datos -->
                            <div class="flex items-center">
                                <!-- Imagen a la izquierda-->
                                <ProfileImage :imageUrl="item.imageUrl" class="mr-5" />

                                <!-- Contenedor de texto con flex columna -->
                                <div class="flex flex-col flex-grow">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.patientName }}
                                            <!-- Icono a la derecha del nombre -->
                                            <Icon
                                                :icon="item.active ? 'fa-solid fa-plug-circle-check' : 'fa-solid fa-plug-circle-xmark'"
                                                class="ml-2 text-lg"
                                                :style="item.active ? 'color: #10b981' : 'color: #ef4444'" />
                                        </span>
                                    </div>

                                    <!-- Descripción, sin overflow, ocupará varias líneas si es necesario -->
                                    <span class="text-gray-500 break-words">{{ item.description }}</span>

                                    <span class="text-gray-400">
                                        Compleción: {{ item.goalCompletness }}%
                                    </span>
                                </div>
                                <RingChart :data="getCompletionData(item.goalCompletness)" class="w-16 h-16" />
                            </div>
                        </td>
                        <td class="px-6 py-4 text-right whitespace-nowrap">
                            <ButtonC :link="'/report/' + item.id">
                                Ver paciente
                            </ButtonC>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import ButtonC from '@/atoms/ButtonC.vue';
import RingChart from './EmptyRingChart.vue';
import Icon from '@/atoms/Icon.vue';
import ProfileImage from '@/atoms/ProfileImage.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});

// Función para crear los datos necesarios para el gráfico
const getCompletionData = (goalCompletness) => {
    return {
        completed: goalCompletness,
        remaining: 100 - goalCompletness,
    };
};
</script>
