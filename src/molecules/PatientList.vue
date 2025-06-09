<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex-1 overflow-y-auto max-h-[80vh] rounded-lg">
            <div v-if="loading" class="text-center py-4">
                Cargando pacientes...
            </div>
            <table v-else class="w-full text-sm text-gray-500">
                <tbody>
                    <tr class="bg-white border" v-for="item in patients" :key="item.id">
                        <!-- Información del paciente -->
                        <td class="px-7">
                            <PatientInfo :item="item" />
                        </td>
                        <!-- Botón "Ver paciente" -->
                        <td class="px-6 py-4 text-right whitespace-nowrap">
                            <ButtonC :link="'/paciente/' + item.id">
                                Ver paciente
                            </ButtonC>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PatientInfo from '@/organism/PatientInfo.vue';
import ButtonC from '@/atoms/ButtonC.vue';
import { getPatients } from '@/services/pacientServices';
import { isActive } from '@/services/deviceServices';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});

// Definir patients como una referencia reactiva
const patients = ref([]);

// Obtener el token de autenticación
const token = localStorage.getItem('auth_token');

const loading = ref(true);


// Transformación de los datos obtenidos del endpoint
const transformPatientsData = (patientsData, activeStatuses) => {
    return patientsData.map((patient, index) => ({
        id: patient.id,
        imageUrl: require('@/assets/images/patient1.jpg'),
        patientName: patient.name, // Usar "patientName" en lugar de "name"
        description: patient.description,
        goalCompletness: patient.time_of_use,
        active: activeStatuses[index], // Estado de actividad asignado a cada paciente
        sensorStatus: 'moviendo',
        sensorLastUpdate: new Date().toISOString(),
    }));
};

// Obtener los pacientes desde el endpoint al montar el componente
onMounted(async () => {
    try {
        const response = await getPatients();  // Llama al servicio para obtener los pacientes
        console.log('Respuesta de getPatients:', response);  // Log de la respuesta de getPatients

        const deviceIds = response.map(patient => patient.device_id);
        console.log('Device IDs:', deviceIds);  // Log de los device_id obtenidos

        if (deviceIds.some(id => !id)) {
            throw new Error('Algunos pacientes no tienen device_id');
        }

        // Llama a isActive para cada device_id
        const activeStatuses = await Promise.all(deviceIds.map(id => isActive(id, token)));
        console.log('Respuestas de isActive para cada device_id:', activeStatuses);  // Log de la respuesta de isActive para cada paciente

        // Verificar la asignación del estado de actividad a cada paciente
        patients.value = transformPatientsData(response, activeStatuses);
        console.log('Pacientes transformados:', patients.value); // Log de pacientes con el estado de actividad

        loading.value = false;  // Marcar como terminado
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        loading.value = false;  // Marcar como terminado en caso de error
    }
});
</script>
