<template>
    <main class="w-full">
        <div class="flex flex-col items-center mt-10">
            <h1 class="text-4xl font-bold text-tblue">Evalua nuestro sistema</h1>
            <form action="" class="flex flex-col py-5 items-center">
                <InputField label="Nombre completo" type="text" class="w-ls" />
                <InputField label="Tu comentario" type="text" class="w-ls" />
                <ButtonB class="mb-10 mt-5" type="submit" :icon="['fas', 'paper-plane']">Enviar
                    mensaje</ButtonB>
            </form>
        </div>
    </main>
</template>
<script setup>
import InputField from './InputField.vue';
import ButtonB from '@/atoms/ButtonB.vue';

</script>