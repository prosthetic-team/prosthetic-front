<template>
    <main class="flex min-h-screen">
        <div class="w-2/5 flex items-center justify-center">
            <AutenticationForm />
        </div>

        <div class="w-3/5">
            <BackgroundGradient>
                <div class="flex flex-col items-center justify-center min-h-screen">
                    <img class="h-50 w-auto" src="@/assets/logo.png" alt="logo prosthetic">
                    <h1 class="text-5xl text-tblue font-bold">Bienvenido a ProstheticSync</h1>
                    <h2 class="text-2xl text-center text-tblue max-w-xl font-bold">Una solución innovadora para
                        monitorear el
                        tratamiento
                        de sus paciente en tiempo real</h2>
                    <ButtonB class="mt-5" link="/about-us" :icon="['fas', 'chevron-right']">
                        Empezar
                    </ButtonB>
                </div>
            </BackgroundGradient>
        </div>
    </main>
</template>

<script setup>
import BackgroundGradient from '@/atoms/BackgroundGradient.vue';
import AutenticationForm from '@/organism/AutenticationForm.vue';
import ButtonB from '@/atoms/ButtonB.vue';
</script>
