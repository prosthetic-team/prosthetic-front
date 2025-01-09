<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 class="text-lg font-semibold mb-4">¿Está seguro que desea borrar la cuenta?</h2>
            <p class="text-sm mb-4">Se borrarán todos los pacientes junto con la cuenta.</p>
            <div class="flex justify-between">
                <button @click="onConfirm"
                    class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none">
                    Sí, eliminar
                </button>
                <button @click="onCancel"
                    class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isVisible: Boolean,
    onConfirm: Function,
    onCancel: Function,
});
</script>
