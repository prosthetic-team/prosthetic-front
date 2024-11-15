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
            <div class="border-b mb-5">
                <!-- Información del paciente -->
                <PatientInfo v-if="patientData" :item="patientData" />
            </div>
            <ButtonA :link="'/info-tratamiento/' + treatmentDataId">Información de tratamiento</ButtonA>
            <div class="flex flex-col gap-5 mt-5">
                <div class="text-center">
                    aqui va el dropdown para cambiar fechas (solo deberia afectar a estado de actividad)
                </div>
                <div class="flex justify-center gap-5">
                    <CardInfoPatient class="w-1/3">
                        <div class="flex justify-center items-center">
                            <div class="flex flex-col items-center">
                                <h3 class="text-lg font-semibold text-center border-b p-2 w-full mb-2">Estado </h3>
                                <div class="flex items-center mb-5 text-bgblue font-semibold">
                                    <Icon :icon="['fas', 'rotate']" :size="'2x'" />
                                    <div class="flex flex-col ml-2">
                                        <p class="text-lg text-black ">Estado del sensor</p>
                                        <p class="text-sm text-gray-500">Actualizado hace {{ timeSinceLastUpdate }}</p>
                                    </div>

                                </div>
                                <div :class="['mt-2 font-semibold', 'text-3xl', sensorStatusClass]">
                                    {{ patientData?.sensorStatus === 'moviendo' ? 'Moviendo' : 'Quieto' }}
                                </div>

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
import { patientListMock } from '@/assets/mocks/PatientListMock';
import CardInfoPatient from '@/molecules/CardInfoPatient.vue';
import ButtonA from '@/atoms/ButtonA.vue';
import Icon from '@/atoms/Icon.vue';
import RoseChart from '@/molecules/RoseChart.vue';

const route = useRoute();
const patientData = ref(null);
const treatmentDataId = ref(null);
onMounted(() => {
    const patientId = route.params.id;
    console.log('ID del paciente:', patientId);

    const patient = patientListMock.find(patient => patient.id === parseInt(patientId));

    if (patient) {
        patientData.value = patient;
        treatmentDataId.value = patient.id;
    } else {
        console.error(`Paciente con ID ${patientId} no encontrado.`);
    }
    console.log('Datos del paciente:', patientData.value);
});

// Computed para calcular el tiempo transcurrido desde la última actualización del sensor
const timeSinceLastUpdate = computed(() => {
    const now = new Date();
    const lastUpdate = new Date(patientData.value?.sensorLastUpdate);
    const diffInSeconds = Math.floor((now - lastUpdate) / 1000);

    return `${diffInSeconds} segundos`;
});

// Computed para determinar el color basado en el estado del sensor
const sensorStatusClass = computed(() => {
    return patientData.value?.sensorStatus === 'moviendo' ? 'text-green-500' : 'text-red-500';
});

// Datos de actividad para el PieChart (Rose style)
const activityData = computed(() => {
    return {
        reposo: 30,
        movimiento: 50,
        apagado: 10,
        activo: 10
    };
});

const chartData = {
    Movimiento: 45,
    Reposo: 60,
    'Uso Activo': 55,
    Apagado: 70
};
</script>