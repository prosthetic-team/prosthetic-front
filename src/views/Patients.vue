<template>
    <ContentLayout>
        <div class="flex items-center justify-between">
            <TitleB>Lista de pacientes</TitleB>
            <ButtonB link="#" :icon="['fas', 'file-circle-plus']" @click="handleRegisterClick">
                Registrar paciente
            </ButtonB>
        </div>
        <!-- Mostrar mensaje si no hay pacientes registrados -->
        <div v-if="list.length === 0" class="text-center mt-4">
            <p class="text-lg">No hay pacientes registrados.</p>
        </div>
        <div v-else class="min-h-screen bg-bggray w-full">
            <!-- Pasamos la lista de pacientes que obtenemos de la API a PatientList -->
            <PatientList :data="list" />
        </div>
    </ContentLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PatientList from '@/molecules/PatientList.vue';
import { getAvailableDevices } from '@/services/deviceServices.js';
import { getMovingHours } from '@/services/ThingsBoardServices';
import { getPatients } from '@/services/pacientServices';
import TitleB from '@/atoms/TitleB.vue';
import ContentLayout from '@/layout/ContentLayout.vue';
import ButtonB from '@/atoms/ButtonB.vue';
import axios from 'axios';

const list = ref([]);  // Lista vacía por defecto
const router = useRouter();

// Función para manejar el clic en "Registrar paciente"
const handleRegisterClick = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        alert('No se ha encontrado token de autenticación.');
        return;
    }

    try {
        const devices = await getAvailableDevices(token);
        if (devices.length === 0) {
            alert('No hay dispositivos disponibles, no puede registrar otro paciente.');
        } else {
            router.push('/registro-paciente');
        }
    } catch (error) {
        alert('Error al verificar los dispositivos disponibles.');
    }
};

// Función para obtener las horas de movimiento y calcular goalCompletness
const getGoalCompletion = async (deviceId, timeOfUse) => {
    try {
        // Obtener las horas de movimiento
        const movingHours = await getMovingHours(deviceId);
        console.log('Horas de movimiento en getgoal:', movingHours);

        // Asegurarse de que movingHours es un número válido
        const numericMovingHours = isNaN(movingHours) ? 0 : movingHours;  // Si no es un número, asignar 0

        // Limitar el valor de las horas a 3 decimales
        const roundedMovingHours = numericMovingHours.toFixed(3);

        // Calcular el goalCompletness en porcentaje
        const goalCompletion = Math.min((roundedMovingHours / timeOfUse) * 100, 100);
        return goalCompletion.toFixed(0);  // Redondeado a 0 decimales
    } catch (error) {
        console.error('Error al calcular goalCompletness:', error);
        return 0;  // Si hay error, retornar 0
    }
};


// Obtener los pacientes desde el servicio y asignarlos a la lista
const fetchPatients = async () => {
    try {
        const response = await getPatients();  // Llamada al servicio para obtener los pacientes
        if (response.length === 0) {
            list.value = [];  // Si no hay pacientes, asegúrate de que la lista esté vacía
        } else {
            // Obtener y asignar goalCompletness a cada paciente
            for (const patient of response) {
                const goalCompletness = await getGoalCompletion(patient.device_id, patient.time_of_use);

                list.value.push({
                    id: patient.id,
                    imageUrl: require('@/assets/images/patient1.jpg'),
                    name: patient.name,
                    description: patient.description,
                    goalCompletness: goalCompletness,  // Asignamos el goalCompletness calculado
                    active: false,
                    sensorStatus: 'moviendo',
                    sensorLastUpdate: new Date().toISOString(),
                });
            }
        }
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
    }
};

// Llamar a fetchPatients cuando el componente se monta
onMounted(fetchPatients);
</script>
