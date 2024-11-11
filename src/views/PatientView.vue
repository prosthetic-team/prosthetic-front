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
            <div class="border-b">
                <PatientInfo v-if="patientData" :item="patientData" />
            </div>
            <div class="flex items-end gap-5 mt-5">
                <Card class="w-1/3">

                </Card>
                <div class="flex flex-col w-2/3 gap-5">
                    <div class="flex justify-center">
                        algo
                    </div>
                    <div class="flex gap-5">
                        <Card class="w-1/2">

                        </Card>
                        <Card class="w-1/2">

                        </Card>
                    </div>
                </div>

            </div>

        </CardPatient>
    </ContentLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ContentLayout from '@/layout/ContentLayout.vue';
import TitleB from '@/atoms/TitleB.vue';
import Icon from '@/atoms/Icon.vue';
import CardPatient from '@/molecules/CardPatient.vue';
import PatientInfo from '@/organism/PatientInfo.vue';
import { patientListMock } from '@/assets/mocks/PatientListMock';
import Card from '@/molecules/CardDashboard.vue';

const route = useRoute();
const patientData = ref(null);

onMounted(() => {
    const patientId = route.params.id;
    console.log('ID del paciente:', patientId); // Verifica si el ID es correcto
    patientData.value = patientListMock.find(patient => patient.id === parseInt(patientId));
    console.log('Datos del paciente:', patientData.value); // Verifica los datos
});

</script>
