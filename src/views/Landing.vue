<template>
    <main class="flex flex-col lg:flex-row min-h-screen">
        <!-- Sección del texto de bienvenida y logo -->
        <div class="w-full lg:w-3/5 order-1 lg:order-1">
            <BackgroundGradient>
                <div class="flex flex-col items-center justify-center min-h-screen p-5 text-center">
                    <RotatingLogo />
                    <h1 class="text-3xl lg:text-5xl text-tblue font-bold mt-5">Bienvenido a ProstheticSync</h1>
                    <h2 class="text-xl lg:text-2xl text-tblue max-w-xl mt-3 font-bold">
                        Una solución innovadora para monitorear el tratamiento de sus pacientes en tiempo real
                    </h2>
                    <ButtonB class="mt-5" link="/about-us" :icon="['fas', 'chevron-right']">
                        Empezar
                    </ButtonB>
                </div>
            </BackgroundGradient>
        </div>

        <!-- Sección del formulario de autenticación -->
        <div class="w-full lg:w-2/5 order-2 lg:order-2 flex items-center justify-center p-5 lg:p-0">
            <AutenticationForm />
        </div>
    </main>
</template>

<script setup>
import BackgroundGradient from '@/atoms/BackgroundGradient.vue';
import AutenticationForm from '@/organism/AutenticationForm.vue';
import ButtonB from '@/atoms/ButtonB.vue';
import RotatingLogo from '@/atoms/RotatingLogo.vue';
</script>
