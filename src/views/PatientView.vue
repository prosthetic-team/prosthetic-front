<template>
    <ContentLayout>
        <router-link :to="'/pacientes'">
            <div class="flex items-center gap-2 mt-2 text-zinc-700">
                <Icon :icon="['fas', 'chevron-left']" />
                <h1>Lista de pacientes</h1>
            </div>
        </router-link>
        <div class="flex items-center">
            <TitleB>Vista de paciente</TitleB>
        </div>
        <CardPatient class="px-2">
            <div v-if="loading" class="text-center py-4">
                Cargando datos del paciente...
            </div>
            <div v-else>
                <div class="border-b mb-5">
                    <!-- Información del paciente -->
                    <PatientInfo v-if="patientData" :item="patientData" />
                </div>
                <ButtonA :link="'/info-tratamiento/' + treatmentDataId">Información de tratamiento</ButtonA>
                <div class="flex flex-col gap-5 mt-5">
                    <div class="text-center">
                        <!-- Dropdown para cambiar fechas (solo afecta a estado de actividad) -->
                        <label for="datePicker" class="font-semibold">Seleccionar fecha:</label>
                        <input type="date" id="datePicker" v-model="selectedDate"
                            class="mt-2 border px-4 py-2 rounded-md" />
                    </div>
                    <div class="flex justify-center gap-5">
                        <CardInfoPatient class="w-1/3">
                            <div class="flex justify-center items-center">
                                <div class="flex flex-col items-center">
                                    <h3 class="text-lg font-semibold text-center border-b p-2 w-full mb-2">Estado</h3>
                                    <div class="flex items-center mb-5 text-bgblue font-semibold">
                                        <Icon :icon="['fas', 'rotate']" :size="'2x'" />
                                        <div class="flex flex-col ml-2">
                                            <p class="text-lg text-black">Estado del sensor</p>
                                            <p class="text-sm text-gray-500">Actualizando cada segundo
                                            </p>
                                        </div>
                                    </div>
                                    <!-- Muestra "Moviendo" o "Quieto" dependiendo del estado -->
                                    <div :class="['mt-2 font-semibold', 'text-3xl', sensorStatusClass]">
                                        {{ sensorStatusText }}
                                    </div>
                                    <!-- Botón para refrescar el estado manualmente -->
                                    <button @click="refreshStatus"
                                        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                                        Actualizar estado
                                    </button>
                                </div>
                            </div>
                        </CardInfoPatient>
                        <!-- Segunda tarjeta con el PieChart (Rose style) -->
                        <CardInfoPatient class="w-1/3">
                            <div class="flex flex-col items-center max-h-screen">
                                <h3 class="font-bold text-lg">Estado de actividad</h3>
                                <RoseChart :data="chartData" />
                            </div>
                        </CardInfoPatient>
                    </div>
                </div>
            </div>
        </CardPatient>
    </ContentLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentLayout from '@/layout/ContentLayout.vue';
import TitleB from '@/atoms/TitleB.vue';
import CardPatient from '@/molecules/CardPatient.vue';
import PatientInfo from '@/organism/PatientInfo.vue';
import CardInfoPatient from '@/molecules/CardInfoPatient.vue';
import ButtonA from '@/atoms/ButtonA.vue';
import Icon from '@/atoms/Icon.vue';
import RoseChart from '@/molecules/RoseChart.vue';
import { getPatientById } from '@/services/pacientServices';
import { getMovingHours, getSensorStatus } from '@/services/ThingsBoardServices.js';

const route = useRoute();
const patientData = ref({});  // Inicializa como objeto vacío
const treatmentDataId = ref(null);
const loading = ref(true);  // Indicador de carga
const selectedDate = ref(null);
const sensorStatus = ref(null); // Estado de movimiento (true o false)
const sensorStatusText = computed(() => sensorStatus.value ? 'Moviendo' : 'Quieto'); // Mostrar texto basado en el estado
const sensorStatusClass = computed(() => sensorStatus.value ? 'text-green-500' : 'text-red-500'); // Color según el estado

// Función para obtener el goalCompleteness
const getGoalCompletion = (movingHours, timeOfUse) => {
    const goalCompletion = Math.min((movingHours / timeOfUse) * 100, 100);
    return goalCompletion.toFixed(0);  // Redondeado a 0 decimales
};

onMounted(async () => {
    const patientId = route.params.id;
    console.log('ID del paciente:', patientId);

    try {
        // Llamamos al servicio que obtiene el paciente por su ID
        const response = await getPatientById(patientId);

        // Verificar que la respuesta contenga el nombre del paciente
        if (!response.name) {
            throw new Error('El paciente no tiene un nombre definido');
        }

        // Llamamos a getSensorStatus para obtener el estado de actividad del paciente
        const isActiveResponse = await getSensorStatus(response.device_id);

        // Asignamos la respuesta de estado de actividad
        response.active = isActiveResponse;

        response.imageUrl = response.imageUrl || require('@/assets/images/patient1.jpg');

        // Obtener las horas de movimiento
        const movingHours = await getMovingHours(response.device_id);

        // Calcular goalCompletness
        const goalCompletness = getGoalCompletion(movingHours, response.time_of_use);

        // Asignamos goalCompletness al paciente
        response.goalCompletness = goalCompletness;

        console.log('Datos del paciente con goalCompletness:', response);

        patientData.value = response;  // Asignar el objeto paciente

        treatmentDataId.value = response.id;
        loading.value = false;  // Cargado exitosamente

        // Comienza a actualizar el estado del sensor
        startSensorStatusUpdate(response.device_id);
    } catch (error) {
        console.error(`Error al obtener los datos del paciente con ID ${patientId}:`, error);
        loading.value = false;  // Marcar como terminado incluso si hay error
    }
});

// Función para actualizar el estado del sensor cada segundo
const startSensorStatusUpdate = (deviceId) => {
    const token = localStorage.getItem('auth_token');  // Obtener el token

    setInterval(async () => {
        try {
            const moving = await getSensorStatus(deviceId);
            sensorStatus.value = moving;
            console.log('Estado actualizado del sensor:', sensorStatus.value);
        } catch (error) {
            console.error('Error al obtener el estado de movimiento del dispositivo:', error);
        }
    }, 1000); // Actualizar cada 1 segundo
};

// Función para actualizar manualmente el estado del sensor
const refreshStatus = async () => {
    try {
        const moving = await getSensorStatus(patientData.value.device_id);
        sensorStatus.value = moving;
    } catch (error) {
        console.error('Error al obtener el estado de movimiento del dispositivo:', error);
    }
};

// Computed para calcular el tiempo transcurrido desde la última actualización del sensor
const timeSinceLastUpdate = computed(() => {
    if (!patientData.value) return '';

    const now = new Date();
    const lastUpdate = new Date(patientData.value.sensorLastUpdate);
    const diffInSeconds = Math.floor((now - lastUpdate) / 1000);

    return `${diffInSeconds} segundos`;
});

// Datos de actividad para el PieChart (Rose style)
const chartData = computed(() => {
    return {
        Movimiento: 45,
        Reposo: 60,
        'Uso Activo': 55,
        Apagado: 70
    };
});
</script>
