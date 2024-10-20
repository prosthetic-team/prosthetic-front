<template>
    <main class="flex w-full grid grid-rows-layout h-screen">
        <HeaderAbout class="bg-lineal-upbottom-gradient" />
        <div class="flex justify-center">
            <CardsInfo />
        </div>
        <FooterAbout />
    </main>
</template>

<script setup>
import HeaderAbout from '@/molecules/HeaderAbout.vue';
import CardsInfo from '@/organism/CardsInfo.vue';
import FooterAbout from '@/molecules/FooterAbout.vue';
</script>

/* Añade esto a tu CSS o configura Tailwind para que lo genere */
<style scoped>
.grid-rows-layout {
    grid-template-rows: 1fr 1fr 1fr;
}
</style>
