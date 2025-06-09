<template>
    <ContentLayout>
        <section>
            <TitleB></TitleB>
            <!-- Título de la página vacio por diseño pero ayuda en el espaciado estandar de las pags -->
        </section>
        <div class="flex flex-row gap-5 h-[calc(100vh-6rem)]"> <!-- Ajusta 6rem según tu header -->
            <div class="basis-2/3 flex flex-col gap-5 h-full">
                <CardDashboard class="h-[16%] min-h-[80px]">
                    a
                </CardDashboard>
                <CardDashboard class="flex-1 min-h-[100px]">
                    b
                </CardDashboard>
            </div>
            <div class="basis-1/3 h-full">
                <CardDashboard class="h-full min-h-[200px]">
                    c
                </CardDashboard>
            </div>
        </div>
    </ContentLayout>
</template>

<script setup>
import ContentLayout from '@/layout/ContentLayout.vue';
import TitleB from '@/atoms/TitleB.vue';
import CardDashboard from '@/molecules/CardDashboard.vue';
</script>