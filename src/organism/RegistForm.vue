<template>
    <main class="flex w-full items-center justify-center min-h-screen">
        <div class="max-w-md bg-white rounded-lg shadow p-10 w-full mx-auto">
            <form class="" action="#">
                <div class="flex justify-center mb-6">
                    <TitleA>Crear una cuenta</TitleA>
                </div>
                <InputField label="Nombre Completo" id="username" type="text" />
                <InputField label="Email" id="email" type="email" />
                <InputField label="Contraseña" id="password" type="password" />
                <InputField label="Repetir Contraseña" id="confirm-password" type="password" />

                <div class="flex justify-center mt-6">
                    <ButtonA link="/">Regístrate</ButtonA>
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
