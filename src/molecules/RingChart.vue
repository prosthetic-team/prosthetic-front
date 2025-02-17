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

onMounted(() => {
    myChart = echarts.init(chartDom.value);
    updateChart();

    window.addEventListener('resize', () => {
        myChart.resize();
    });
});

function updateChart() {
    if (!props.data || Object.keys(props.data).length === 0) {
        console.warn("No data provided for the RingChart.");
        return; // Si no hay datos, no hacemos nada.
    }

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
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: `{c|${((firstEntry.value / totalValue) * 100).toFixed(1)}%}`,
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
});
</script>