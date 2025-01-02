<template>
    <ContentLayout>
        <div class="flex items-center justify-between">
            <TitleB>Lista de pacientes</TitleB>
            <ButtonB link="/registro-paciente" :icon="['fas', 'file-circle-plus']">Registrar paciente</ButtonB>
        </div>
        <div class=" min-h-screen bg-bggray w-full">
            <PatientList :data="list" />
        </div>
    </ContentLayout>

</template>

<script setup>
import PatientList from '@/molecules/PatientList.vue';
import { patientListMock } from '@/assets/mocks/PatientListMock';
import { ref } from 'vue';
import TitleB from '@/atoms/TitleB.vue';
import ContentLayout from '@/layout/ContentLayout.vue';
import ButtonB from '@/atoms/ButtonB.vue';

const list = ref(patientListMock);



</script>
