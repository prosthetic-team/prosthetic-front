<template>
    <div class="px-7 mb-5 overflow-x-auto">
        <table class="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700" v-for="report in data" :key="report.id">
                    <td class="w-4/6 py-4 max-w-xs overflow-hidden">
                        <div class="flex flex-col">
                            <div class="flex gap-5">
                                <span class="font-medium text-black font-bold dark:text-white truncate">
                                    {{ report.patient }}
                                </span>
                                <span class="text-gray-500 truncate">{{ report.date }}</span>
                            </div>
                            <span class="text-gray-500 block truncate whitespace-nowrap overflow-hidden max-w-full">
                                {{ report.description }}
                            </span>
                        </div>
                    </td>
                    <td class="w-2/6">
                        <ButtonC class="w-full flex justify-center items-center">
                            Resolver reporte
                        </ButtonC>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import ButtonC from '@/atoms/ButtonC.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    }
});
</script>