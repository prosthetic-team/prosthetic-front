<template>
    <ContentLayout class="">
        <section class="">
            <TitleB>Dashboard</TitleB>
        </section>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <CardGrid title="Pacientes que cumplen tratamiento" :chartData="chartData1" />
            <CardGrid title="Reportes de fallo" :listData="reportsList" type="list" />
            <CardGrid title="Dispositivos" :chartData="chartData2" :colors="colorsChart2" />
            <CardGrid title="Actividad de usuarios" :chartData="weekData" type="bar" />
        </div>
    </ContentLayout>
</template>

<script setup>
import TitleB from '@/atoms/TitleB.vue';
import ContentLayout from '@/layout/ContentLayout.vue';
import CardGrid from '@/organism/CardGrid.vue';

const chartData1 = {
    'Cumplen tratamiento': 1048,
    'No Cumplen': 735
};

const reportsList = [
    {
        id: 1,
        patient: 'Paciente 1',
        description: 'Descripción del reporte de fallo 1',
        date: '2021-10-10',
        status: 'Pendiente'
    },
    {
        id: 2,
        patient: 'Paciente 2',
        description: 'Descripción del reporte de fallo 2',
        date: '2021-10-10',
        status: 'Pendiente'
    },
    {
        id: 3,
        patient: 'Paciente 3',
        description: 'Descripción del reporte de fallo 3',
        date: '2021-10-10',
        status: 'Pendiente'
    },
    {
        id: 4,
        patient: 'Paciente 4',
        description: 'Descripción del reporte de fallo 4',
        date: '2021-10-10',
        status: 'Pendiente'
    },
    {
        id: 5,
        patient: 'Paciente 5',
        description: 'Descripción del reporte de fallo 5',
        date: '2021-10-10',
        status: 'Pendiente'
    },
    {
        id: 6,
        patient: 'Paciente 6',
        description: 'Descripción del reporte de fallo 6',
        date: '2021-10-10',
        status: 'Pendiente'
    }
];

const colorsChart2 = ['#4FCA64', '#FB902A'];

const chartData2 = {
    'Cumplen tratamiento': 600,
    'No Cumplen': 400
};

const chartData4 = {
    'Cumplen tratamiento': 600,
    'No Cumplen': 400
};

// data para bar chart
const weekData = {
    L: 80,
    Ms: 55,
    Mi: 70,
    J: 90,
    V: 60,
    S: 50,
    D: 30,
}
</script>