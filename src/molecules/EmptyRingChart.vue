<template>
    <div ref="chartDom" class="w-full h-64"></div> <!-- Asegúrate de que tiene un tamaño fijo -->
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    colors: {
        type: Array,
        default: () => ['#00B7FE', '#E9E9E9'],
    }
});

const chartDom = ref(null);
let myChart = null;

onMounted(() => {
    nextTick(() => {
        // Esperamos a que el DOM esté completamente renderizado
        myChart = echarts.init(chartDom.value);
        updateChart();
        myChart.resize();  // Forzamos el redibujado

        // Escuchar el evento resize para ajustar el gráfico cuando cambie el tamaño de la ventana
        window.addEventListener('resize', () => {
            myChart.resize();
        });
    });
});

function updateChart() {
    const dataEntries = Object.entries(props.data).map(([name, value]) => ({ name, value }));
    const totalValue = dataEntries.reduce((sum, entry) => sum + entry.value, 0);
    const firstEntry = dataEntries[0];

    const colors = [
        ...props.colors,
    ];

    const option = {
        color: colors,
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    rich: {
                        c: {
                            fontSize: 15,
                            lineHeight: 20,
                        },
                    },
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 1,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    },
                },
                labelLine: {
                    show: false,
                },
                data: dataEntries,
            },
        ],
    };

    myChart.setOption(option);
}

watch(() => props.data, () => {
    updateChart();
    myChart.resize();
});
</script>
