<script setup>
import Logo from '@/atoms/Logo.vue';
import ButtonC from '@/atoms/ButtonC.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen justify-start">
        <section class="flex flex-col gap-12 h-1/2 h-full">
            <!-- logo -->
            <section class="h-1/6">
                <router-link to="/dashboard">
                    <Logo class="px-8 py-5" />
                </router-link>
            </section>

            <!-- navigation -->
            <section class="flex flex-col bg-white h-5/6 w-full">
            </section>
        </section>

        <!-- profile -->
        <section class="flex items-center justify-center h-1/2">

            <router-link to="/">
                <ButtonC>Salir</ButtonC>
            </router-link>
        </section>
    </div>

</template>
