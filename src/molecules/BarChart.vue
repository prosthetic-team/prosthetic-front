<template>
    <div ref="chartDom" style="width: 100%; height: 100%;"></div> <!-- Usar flex-grow -->
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
        default: () => ['#4FCA64'],
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
    const days = Object.keys(props.data);
    const values = Object.values(props.data);

    const option = {
        xAxis: {
            type: 'category',
            data: days,
        },
        yAxis: {
            type: 'value',
            max: 100,
        },
        series: [
            {
                type: 'bar',
                data: values.map((value, index) => ({
                    value,
                    itemStyle: {
                        color: props.colors[index % props.colors.length],
                        shadowColor: props.colors[index % props.colors.length],
                        shadowBlur: 5,
                        opacity: 0.6,
                    },
                })),
                itemStyle: {
                    barBorderRadius: 3,
                    borderWidth: 1,
                    borderType: 'solid',
                    borderColor: '#73c0de',
                }
            }
        ],
    };

    myChart.setOption(option);
}

watch(() => props.data, () => {
    updateChart();
});
</script>

<style scoped></style>
