<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Hacer un vfor con cards una por cada link -->
        <Card v-for="link in links" :key="link.link" :link="link.link" :cardTitle="link.cardTitle"
            :linkImage="link.linkImage" :description="link.description" />
    </div>
</template>
<script setup>
import Card from '@/molecules/Card.vue';

// aqui hay que dejar imagenes estáticas
const links = [
    {
        cardTitle: 'Teletón Chile',
        linkImage: 'https://www.teleton.cl/wp-content/uploads/2025/02/09A0056-1.jpg',
        link: 'https://www.teleton.cl/nosotros/',
        description: 'Teletón Chile es una institución privada sin fines de lucro que busca entregar una atención integral a niños, niñas y jóvenes con discapacidad.',
    },
    {
        cardTitle: 'Laboratorio de Ortesis y Prótesis Teletón',
        linkImage: 'https://www.teleton.cl/wp-content/uploads/2022/03/cumpleortesis975.jpg',
        link: 'https://www.teleton.cl/tratamiento/laboratorio-de-ortesis-y-protesis/',
        description: 'El Laboratorio de Ortesis y Prótesis Teletón es un centro de atención especializado en la fabricación y adaptación de órtesis y prótesis para personas con discapacidad.',
    },
    {
        cardTitle: 'Ingeniería Informática UFRO Temuco',
        linkImage: 'https://fica.ufro.cl/wp-content/uploads/2024/04/Magister-en-ingenieria-informatica.webp',
        link: 'https://admision.ufro.cl/ingenieria-informatica/',
        description: 'La carrera de Ingeniería en Informática de la Universidad de La Frontera es una carrera de pregrado que forma profesionales capaces de diseñar, implementar y administrar sistemas informáticos.',
    },
];


</script>