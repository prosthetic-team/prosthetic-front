<template>
    <main class="flex w-full items-center justify-center min-h-screen">
        <div class="w-full max-w-sm mx-auto">
            <div class="flex justify-center mb-6">
                <TitleA>Iniciar Sesión</TitleA>
            </div>
            <form>
                <InputField label="Usuario" id="username" type="text" />
                <InputField label="Contraseña" id="password" type="password" />

                <div class="flex justify-center mt-6">
                    <ButtonA link="/">Ingresar</ButtonA>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup>
import InputField from '@/molecules/InputField.vue';
import TitleA from '@/atoms/TitleA.vue';
import ButtonA from '@/atoms/ButtonA.vue';
</script>
