<template>
    <main class="flex w-full items-center justify-center min-h-screen">
        <div class="max-w-md bg-white rounded-lg shadow p-9 w-full mx-auto">
            <form class="" action="#">
                <div class="flex flex-col text-center justify-center mb-6">
                    <TitleA class="py-2">Crear una cuenta</TitleA>
                    <p class="font-light ">Antes de crear tu cuenta asegurate de estar registrado en
                        thingsboard
                        con el mismo correo y contraseña (Evita ingresar con cuentas como google)
                    </p>
                    <div>
                        <a href="https://demo.thingsboard.io/signup" class="border-b">Ir a registro de
                            Thingsboard
                        </a>
                    </div>
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
