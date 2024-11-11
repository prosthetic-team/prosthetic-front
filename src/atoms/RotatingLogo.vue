<template>
    <div class="relative w-32 h-32">
        <!-- Círculo 1 (base) -->
        <img class="absolute lg:w-20 lg:h-20 sm:w-10 sm:h-10 top-0 left-0 transform origin-[calc(50%+9px)] animate-spin-slowest"
            src="@/assets/logo/circulo1.png" alt="Circulo 1" />

        <!-- Círculo 2 (en una posición diferente) -->
        <img class="absolute lg:w-20 lg:h-20 -top-1 sm:w-10 sm:h-10 transform origin-[calc(50%+7px)] animate-spin-slow"
            src="@/assets/logo/circulo2.png" alt="Circulo 2" />

        <!-- Círculo 3 (en otra posición diferente) -->
        <img class="absolute lg:w-20 lg:h-20 left-1 top-1 sm:w-10 sm:h-10 top-1 transform origin-[calc(50%+3px)] animate-spin-medium"
            src="@/assets/logo/circulo3.png" alt="Circulo 3" />
    </div>
</template>

<script setup>
// No es necesario añadir lógica adicional, ya que la animación está controlada por Tailwind
</script>

<style scoped>
/* Definimos la animación de rotación lenta */
@keyframes spin-slow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}

/* Animación personalizada utilizando el nombre de la animación */
.animate-spin-slow {
    animation: spin-slow 1.8s linear infinite;
}

.animate-spin-medium {
    animation: spin-slow 1.6s linear infinite;
}

.animate-spin-slowest {
    animation: spin-reverse 2.1s linear infinite;
}
</style>
