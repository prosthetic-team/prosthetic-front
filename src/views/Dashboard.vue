<template>
    <ContentLayout>
        <section>
            <TitleB>Dashboard</TitleB>
        </section>
        <div class="flex flex-col gap-5 h-full overflow-y-auto
                   md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5
                   md:h-[calc(100vh-4rem)] md:overflow-y-visible mb-2" style="min-height:0;">
            <div class="w-full min-h-[300px] flex-shrink-0 h-auto md:h-full md:min-h-0">
                <CardGrid v-if="!loading" class="h-full" title="Pacientes que cumplen tratamiento"
                    :chartData="chartData1" />
            </div>
            <div class="w-full min-h-[300px] flex-shrink-0 h-auto md:h-full md:min-h-0">
                <CardGrid class="h-full" title="Reportes de fallo" :listData="reportsList" type="list" />
            </div>
            <div class="w-full min-h-[300px] flex-shrink-0 h-auto md:h-full md:min-h-0">
                <CardGrid v-if="!loading" class="h-full" title="Dispositivos" :chartData="chartData2"
                    :colors="colorsChart2" type="ring2" />
            </div>
            <div class="w-full min-h-[300px] flex-shrink-0 h-auto md:h-full md:min-h-0">
                <CardGrid v-if="!loading" class="h-full" title="Actividad de usuarios" :chartData="weekData"
                    type="bar" />
            </div>
            <div v-if="loading" class="w-full text-center md:col-span-2 md:row-span-2 flex items-center justify-center">
                <p>Cargando datos...</p>
            </div>
        </div>
    </ContentLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TitleB from '@/atoms/TitleB.vue';
import ContentLayout from '@/layout/ContentLayout.vue';
import CardGrid from '@/organism/CardGrid.vue';
import { getPatients, getCompletedTreatments } from '@/services/pacientServices'; // Importar las funciones de pacientServices.js

// Estado de carga
const loading = ref(true);

const chartData1 = ref({
    'Cumplen tratamiento': 0,
    'No Cumplen': 0
});

const reportsList = [
    {
        id: 1,
        patient: 'Paciente 1',
        description: 'Descripción del reporte de fallo 1',
        date: '2021-10-10',
        status: 'Pendiente'
    }
];

const colorsChart2 = ['#4FCA64', '#FB902A'];

const chartData2 = {
    'Dispositivos funcionando': 1,
    'Dispositivos apagados': 2
};

// Data para bar chart
const weekData = {
    L: 80,
    Ms: 55,
    Mi: 70,
    J: 90,
    V: 60,
    S: 50,
    D: 30,
};

// Función para calcular los datos de chartData1
const calculateChartData1 = async () => {
    const token = localStorage.getItem('auth_token');

    // Obtener los pacientes y los que cumplen el tratamiento
    const patients = await getPatients(token);
    // si no hay pacientes registrados Cumplen tratamiento = 0 y no cumplen = 0
    if (patients.length === 0) {
        chartData1.value = {
            'Cumplen tratamiento': 0,
            'No Cumplen': 0
        };
        loading.value = false;
        return;
    }
    else {
        // Obtener los pacientes que cumplen el tratamiento
        const completedTreatments = await getCompletedTreatments(token);

        // Calcular los pacientes que cumplen y no cumplen el tratamiento
        const totalPatients = patients.length;  // Número total de pacientes
        const patientsComplying = completedTreatments;  // Pacientes que cumplen el tratamiento
        const patientsNotComplying = totalPatients - patientsComplying;  // Pacientes que no cumplen el tratamiento

        // Asignar los datos al gráfico
        chartData1.value = {
            'Cumplen tratamiento': patientsComplying,
            'No Cumplen': patientsNotComplying
        };

        // Una vez cargados los datos, actualizamos el estado de loading
        loading.value = false;
    }
};

// Llamar a la función cuando el componente se monta
onMounted(async () => {
    await calculateChartData1();
});
</script>
