<script setup>
import SideBar from '../molecules/SideBar.vue';
</script>

<template>
    <div class="flex min-h-screen">
        <SideBar />
        <div class="flex-1">
            <slot></slot>
        </div>
    </div>
</template>
