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

// Inicialización del gráfico al montar el componente
onMounted(() => {
    myChart = echarts.init(chartDom.value);
    updateChart();

    // Redimensionar el gráfico cuando cambie el tamaño de la ventana
    window.addEventListener('resize', () => {
        myChart.resize();
    });
});

// Función para actualizar el gráfico
function updateChart() {
    // Verifica que los datos sean válidos
    if (!props.data || Object.keys(props.data).length === 0) {
        console.error('Los datos proporcionados para el gráfico están vacíos o no son válidos');
        return;
    }

    const dataEntries = Object.entries(props.data).map(([name, value]) => ({ name, value }));

    // Calcula el valor total para las proporciones del gráfico
    const totalValue = dataEntries.reduce((sum, entry) => sum + entry.value, 0);
    const firstEntry = dataEntries[0] || { value: 0 }; // Asegúrate de que firstEntry tenga un valor por defecto

    const colors = [...props.colors];

    // Configuración de las opciones para el gráfico
    const option = {
        color: colors,
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['Dispositivos funcionando', 'Dispositivos apagados'],
        },
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
                    }
                },
                labelLine: {
                    show: false,
                },
                data: dataEntries,
            },
        ],
    };

    // Establecer las opciones en el gráfico
    myChart.setOption(option);
}

// Observar cambios en los datos y actualizar el gráfico si es necesario
watch(() => props.data, () => {
    updateChart();
});
</script>
