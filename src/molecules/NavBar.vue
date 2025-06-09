<template>
    <nav class="fixed top-0 left-0 w-full bg-white shadow-lg shadow-black-500/50 z-50 h-16">
        <div class="flex items-center justify-between h-full px-4">
            <!-- Logo -->
            <router-link to="/" class="flex items-center">
                <Logo class="px-4" />
            </router-link>

            <!-- Botón "hamburguesa" para pantallas pequeñas -->
            <button @click="toggleMenu"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar" aria-expanded="false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <!-- Enlaces de navegación a página de pacientes -->
            <div :class="['w-full md:flex md:w-auto', isOpen ? 'block' : 'hidden']" id="navbar">
                <div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 px-4">
                    <a href="http://www.google.cl" type="button"
                        class="text-black bg-white hover:bg-bggray border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Ingresar como paciente
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '@/atoms/Logo.vue';

// Estado para controlar el menú en pantallas pequeñas
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>
