<template>
    <CardDashboard class="flex flex-col">
        <div class="flex items-center justify-between">
            <CardTitle :title="title" />
            <router-link :to="linkTo" class="px-5 underline cursor-pointer">Ver todos</router-link>
        </div>
        <component :is="currentComponent" v-bind="componentProps" />
    </CardDashboard>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import RingChart from '@/molecules/RingChart.vue';
import ListComponent from '@/molecules/ReportList.vue';
import CardDashboard from '@/molecules/CardDashboard.vue';
import CardTitle from '@/atoms/CardTitle.vue';
import BarChart from '@/molecules/BarChart.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    chartData: {
        type: Object,
        required: false,
    },
    listData: {
        type: Array,
        required: false,
    },
    type: {
        type: String,
        default: 'ring',
    },
    colors: {
        type: Array,
        default: () => ['#00B7FE', '#E9E9E9'],
    },
    linkTo: {
        type: String,
        required: true,
    },
});

const currentComponent = ref('');
const componentProps = ref({});

const updateChartSize = () => {
    if (currentComponent.value && currentComponent.value.resize) {
        currentComponent.value.resize();
    }
};

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const handleResize = debounce(updateChartSize, 200);

onMounted(() => {
    window.addEventListener('resize', handleResize);
    // Inicializa el componente actual
    switch (props.type) {
        case 'ring':
            currentComponent.value = RingChart;
            componentProps.value = {
                data: props.chartData,
                colors: props.colors,
            };
            break;
        case 'bar':
            currentComponent.value = BarChart;
            componentProps.value = { data: props.chartData };
            break;
        case 'list':
            currentComponent.value = ListComponent;
            componentProps.value = { data: props.listData }; // Cambia de items a data
            break;
        default:
            throw new Error('Unsupported component type');
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
