<template>
    <div ref="chartDom" style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
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

const showLegend = ref(true);

function updateLegendVisibility() {
    if (chartDom.value) {
        const height = chartDom.value.offsetHeight;
        showLegend.value = height >= 150;
    }
}

onMounted(() => {
    myChart = echarts.init(chartDom.value);
    updateLegendVisibility();
    updateChart();

    window.addEventListener('resize', () => {
        updateLegendVisibility();
        myChart.resize();
        updateChart();
    });
});

function updateChart() {
    if (!props.data || Object.keys(props.data).length === 0) return;

    const dataEntries = Object.entries(props.data).map(([name, value]) => ({ name, value }));
    const totalValue = dataEntries.reduce((sum, entry) => sum + entry.value, 0);
    const firstEntry = dataEntries[0] || { value: 0 };
    const colors = [...props.colors];

    const option = {
        color: colors,
        legend: showLegend.value ? {
            orient: 'vertical', // vertical para una sobre otra
            bottom: 0,
            left: 'center',
            data: dataEntries.map(entry => entry.name),
        } : { show: false },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', showLegend.value ? '35%' : '50%'], // deja más espacio arriba si hay leyenda
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: `{c|${totalValue ? ((firstEntry.value / totalValue) * 100).toFixed(1) : 0}%}`,
                    rich: {
                        c: {
                            fontSize: 25,
                            lineHeight: 30,
                        },
                    },
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 1,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    }
                },
                labelLine: {
                    show: false,
                },
                data: dataEntries,
            },
        ],
    };

    myChart.setOption(option, true); // true para forzar actualización completa
}

watch(() => props.data, () => {
    updateChart();
});

watch(showLegend, () => {
    updateChart();
});
</script>