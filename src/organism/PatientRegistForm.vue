<template>
    <section class="flex w-full p-2 items-center min-h-screen">
        <div class="max-w-xlgx bg-white rounded-lg shadow p-9 w-full mx-auto">
            <form class="" action="#">
                <div class="flex flex-col text-center justify-center mb-6">
                    <TitleA class="py-2">Registrar un paciente</TitleA>
                </div>
                <InputField label="Nombre Completo" id="nombre" type="text" />
                <InputField label="Email" id="email" type="email" />
                <InputField label="descripción" id="descripcion" type="text" />
                <InputField label="Información tratamiento" id="tratamiento" type="text" />
                <InputField label="Tiempo de uso determinado (Horas por dia)" id="tiempouso" type="number" />

                <div class="flex justify-center mt-6">
                    <ButtonA link="/">Registrar paciente</ButtonA>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import InputField from '@/molecules/InputField.vue';
import ButtonA from '@/atoms/ButtonA.vue';

</script>