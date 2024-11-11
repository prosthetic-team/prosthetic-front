<template>
    <div class="flex flex-col min-h-screen">
        <!-- Contenedor de la tabla con scroll -->
        <div class="flex-1 overflow-y-auto max-h-[80vh] rounded-lg">
            <table class="w-full text-sm text-gray-500">
                <tbody>
                    <tr class="bg-white border" v-for="item in data" :key="item.id">
                        <!-- Información del paciente -->
                        <td class="px-7">
                            <!-- Asegúrate de pasar el item correctamente al componente PatientInfo -->
                            <PatientInfo :item="item" />
                        </td>

                        <!-- Botón "Ver paciente" -->
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
import { defineProps } from 'vue';
import PatientInfo from '@/organism/PatientInfo.vue';
import ButtonC from '@/atoms/ButtonC.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});
</script>
