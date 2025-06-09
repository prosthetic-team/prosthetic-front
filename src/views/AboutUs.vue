<template>
    <main class="flex flex-col min-h-screen w-full bg-white">
        <HeaderAbout class="bg-lineal-upbottom-gradient" />
        <div class="flex justify-center my-12">
            <CardsInfo />
        </div>
    </main>

</template>

<script setup>
import HeaderAbout from '@/molecules/HeaderAbout.vue';
import CardsInfo from '@/organism/CardsInfo.vue';
</script>

<style scoped>
.grid-rows-layout {
    grid-template-rows: auto auto 1fr;
}
</style>
