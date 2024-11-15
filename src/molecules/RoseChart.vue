<template>
    <div ref="chartContainer" class="relative w-[20vw] h-[30vh]">
        <!-- Asegúrate de que el gráfico tenga un tamaño flexible con un contenedor adecuado -->
        <div ref="chartDom" class="absolute inset-3"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    colors: {
        type: Array,
        default: () => ['#00B7FE', '#E9E9E9', '#F39C12', '#8E44AD'],
    },
});

const chartContainer = ref(null);
const chartDom = ref(null);
let myChart = null;

const defaultData = {
    Movimiento: 30,
    Reposo: 15,
    'Uso Activo': 20,
    Apagado: 1,
};

onMounted(() => {
    // Inicializar el gráfico
    myChart = echarts.init(chartDom.value);
    updateChart();

    // Usar un ResizeObserver para redimensionar el gráfico automáticamente
    const resizeObserver = new ResizeObserver(() => {
        myChart.resize(); // Ajustar el tamaño del gráfico al contenedor
    });

    // Observar el contenedor de la gráfica para detectar cambios en el tamaño
    resizeObserver.observe(chartContainer.value);

    // Limpiar el observer al desmontar el componente
    onBeforeUnmount(() => {
        resizeObserver.disconnect();
    });
});

function updateChart() {
    if (!props.data || Object.keys(props.data).length === 0) {
        console.warn('No data provided for the PieChart.');
        return; // Si no hay datos, no hacemos nada.
    }

    const dataEntries = Object.entries(props.data).map(([name, value]) => ({ name, value }));

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                name: 'Estado',
                type: 'pie',
                radius: [10, 60],  // Ajusta los radios
                center: ['50%', '35%'], // Ajusta la posición del gráfico
                roseType: 'radius',   // Usa "radius" para un Nightingale Chart tradicional
                itemStyle: {
                    borderRadius: 1, // Bordes redondeados para los sectores
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#fff', // Color del texto cuando se hace hover
                    },
                },
                data: dataEntries,
            },
        ],
    };

    myChart.setOption(option);
}


// Reactividad para cuando cambian los datos
watch(() => props.data, () => {
    updateChart();
});
</script>