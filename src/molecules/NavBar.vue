<template>
    <nav class="fixed top-0 left-0 w-full bg-white shadow-lg shadow-black-500/50 z-50">
        <div class="flex flex-wrap items-center justify-between p-3">
            <a href="https://flowbite.com/">
                <Logo class="px-8" />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse px-8">
                <router-link to="/register" type="button" class="text-black bg-white hover:bg-bggray border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
          ">
                    Crear cuenta
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import Logo from '@/atoms/Logo.vue';
</script>

<style></style>
