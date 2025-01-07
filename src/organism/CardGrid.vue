<template>
    <CardDashboard class="flex flex-col">
        <div class="flex items-center justify-between">
            <CardTitle :title="title" />
            <router-link :to="'/dashboard'" class="px-7 underline cursor-pointer">Ver todos</router-link>
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
import RingChartLegend from '@/molecules/RingChartLegend.vue';
import axios from 'axios';

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
const chartData2 = ref({}); // Usamos `ref` para poder actualizar y reaccionar en el DOM.

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

// Fetch device data from ThingsBoard
const fetchDeviceData = async () => {
    try {
        const token = localStorage.getItem('auth_token');

        console.log('Realizando solicitud con el token:', token);  // Agregar log del token

        // Asegúrate de que el token esté siendo enviado correctamente
        const response = await axios.get(
            'https://demo.thingsboard.io/api/devices',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: { deviceIds: 'f83f4410-bfe0-11ef-af67-a38a7671daf5' },
            }
        );

        console.log('Respuesta de la API de dispositivos:', response);  // Agregar log de la respuesta

        // Asegurarse de que la respuesta contiene datos
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            const device = response.data[0]; // Suponiendo que solo obtenemos un dispositivo
            const deviceId = device.id.id; // Extraemos el ID del dispositivo

            console.log('ID del dispositivo:', deviceId);  // Agregar log para el ID del dispositivo

            // Luego, verificamos si el dispositivo está activo
            const isActiveResponse = await axios.get(
                `https://prosthetic-api.onrender.com/thingsboard/isactive/${deviceId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Respuesta de la API de dispositivo activo:', isActiveResponse);  // Agregar log de la respuesta de estado

            // Definir los datos del gráfico en base a si está activo
            chartData2.value = {
                'Dispositivos funcionando': isActiveResponse.data ? 1 : 0,
                'Dispositivos apagados': isActiveResponse.data ? 0 : 1,
            };

            console.log('Datos para el gráfico (chartData2):', chartData2.value);  // Log de los datos para el gráfico
        } else {
            console.error('No se encontraron dispositivos en la respuesta de ThingsBoard');
            chartData2.value = {
                'Dispositivos funcionando': 0,
                'Dispositivos apagados': 0,
            };
        }
    } catch (error) {
        console.error('Error fetching device data:', error);
        chartData2.value = {
            'Dispositivos funcionando': 0,
            'Dispositivos apagados': 0,
        };
    }
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
        case 'ring2':
            currentComponent.value = RingChartLegend;
            fetchDeviceData().then(() => {
                componentProps.value = {
                    data: chartData2.value || { 'Dispositivos funcionando': 0, 'Dispositivos apagados': 0 }, // Verificación
                    colors: props.colors,
                };
            });
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
