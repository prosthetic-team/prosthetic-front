<template>
    <div class="flex flex-col min-h-screen">
        <!-- Contenedor de la tabla con scroll -->
        <div class="flex-1 overflow-y-auto max-h-[80vh] rounded-lg">
            <table class="w-full text-sm text-gray-500">
                <tbody>
                    <tr class="bg-white border" v-for="item in data" :key="item.id">
                        <td class="px-6 py-4">
                            <!-- Contenedor principal con flex para imagen y datos -->
                            <div class="flex items-center">
                                <!-- Imagen a la izquierda-->
                                <ProfileImage :imageUrl="item.imageUrl" class="mr-5" />

                                <!-- Contenedor de texto con flex columna -->
                                <div class="flex flex-col">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium text-gray-900 whitespace-nowrap">
                                            {{ item.patientName }}
                                            <!-- Icono a la derecha del nombre -->
                                            <Icon
                                                :icon="item.active ? 'fa-solid fa-plug-circle-check' : 'fa-solid fa-plug-circle-xmark'"
                                                class="ml-2 text-lg"
                                                :style="item.active ? 'color: #10b981' : 'color: #ef4444'" />
                                        </span>
                                    </div>

                                    <!-- Descripción, sin overflow, ocupará varias líneas si es necesario -->
                                    <span class="text-gray-500 break-words line-clamp-3 max-w-xsm">{{ item.description
                                        }}</span>

                                    <span class="text-gray-400">
                                        Compleción:
                                        <span v-if="item.goalCompletness === 100">
                                            Completado
                                        </span>
                                        <span v-else>
                                            {{ item.goalCompletness }}%
                                        </span>
                                    </span>
                                </div>

                                <!-- Contenedor del gráfico de progreso -->
                                <div style="width: 20%">
                                    <RingChart :data="getCompletionData(item.goalCompletness)" />
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-right whitespace-nowrap">
                            <ButtonC :link="'/paciente/' + item.id">
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
import { ref } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});

// Simulamos la actualización de goalCompletness en tiempo real.
const simulatedData = ref([...props.data]); // Copia reactiva de los datos

// Función para actualizar goalCompletness
const simulateGoalCompletness = () => {
    simulatedData.value.forEach(item => {
        if (item.active) {
            if (item.goalCompletness < 100) {
                item.goalCompletness += 5;  // Simula un avance del 5% por cada segundo
                if (item.goalCompletness >= 100) {
                    // Esperar 10 segundos y reiniciar contador
                    setTimeout(() => {
                        item.goalCompletness = 0;
                    }, 10000);
                }
            }
        }
    });
};

// Función para crear los datos necesarios para el gráfico
const getCompletionData = (goalCompletness) => {
    return {
        completed: goalCompletness,  // Progreso actual
        remaining: 100 - goalCompletness, // Lo que queda por completar
    };
};

// Simulamos la actualización cada 5 segundo
setInterval(simulateGoalCompletness, 5000);
</script>
