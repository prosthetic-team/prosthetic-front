<template>
    <ContentLayout>
        <TitleB>Lista de pacientes</TitleB>
        <div class="min-h-screen bg-bggray w-full">
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

const list = ref(patientListMock);



</script>
