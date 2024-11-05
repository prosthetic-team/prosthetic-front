<template>
    <!-- El contenedor tiene un tamaño fijo con `w-32` y `h-32` y el borde redondeado para hacer el círculo -->
    <div :style="{ backgroundImage: `url(${imageUrl})` }"
        class="w-32 h-32 p-16 rounded-full overflow-hidden bg-cover bg-center">
    </div>
</template>

<script setup>
defineProps({
    imageUrl: {
        type: String,
        required: true
    }
})
</script>
