<template>
    <div class="relative overflow-x-auto px-7 mb-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="report in data"
                    :key="report.id">
                    <td class="px-6 py-4">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                                <span class="font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                                    report.patient }}</span>
                                <span class="text-gray-500">{{ report.date }}</span>
                            </div>
                            <span class="text-gray-500">{{ report.description }}</span>
                        </div>
                    </td>
                    <td class="px-6 py-1 text-right">
                        <ButtonB class="bg-chartBlue font-semibold text-white px-3 
                                   text-base md:text-sm lg:text-base 
                                   flex items-center space-x-1" :icon="['fas', 'paper-plane']">
                            <span class="text-sm md:text-xs lg:text-sm">Ver reporte </span>
                        </ButtonB>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import ButtonB from '@/atoms/ButtonB.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    }
});
</script>