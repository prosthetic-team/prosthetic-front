<template>
    <div ref="chartDom" style="width: 100%; height: 170%;"></div>
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
});
</script>
