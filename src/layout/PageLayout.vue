<template>
    <div class="flex max-h-screen">
        <!-- Sidebar fija -->
        <SideBar />

        <!-- Contenedor principal de contenido -->
        <div class="flex-1 overflow-y-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../molecules/SideBar.vue';
</script>
