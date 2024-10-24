<template>
    <CardDashboard class="flex flex-col ">
        <CardTitle :title="title" />
        <component :is="currentComponent" v-bind="componentProps" />
    </CardDashboard>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import RingChart from '@/molecules/RingChart.vue';
// import BarChart from '@/molecules/BarChart.vue'; // Asegúrate de tener este componente
import ListComponent from '@/molecules/List.vue';
import CardDashboard from '@/molecules/CardDashboard.vue';
import CardTitle from '@/atoms/CardTitle.vue';

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
        // case 'bar':
        //     currentComponent.value = BarChart;
        //     componentProps.value = { data: props.chartData };
        //     break;
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
