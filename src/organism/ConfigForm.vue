<template>
    <div class="space-y-6">
        <CardPacient class="bg-white p-6 mt-5">
            <h1 class="text-2xl font-semibold mb-5">Bienvenido, {{ userName }}</h1>
            <ul class="space-y-3">
                <li>
                    <button @click="redirectToUpdateAccount"
                        class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                        Actualizar información de la cuenta
                    </button>
                </li>
                <li>
                    <button @click="showDeleteModal = true"
                        class="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none">
                        Eliminar cuenta
                    </button>
                </li>
            </ul>
        </CardPacient>

        <ConfirmationModal :isVisible="showDeleteModal" :onConfirm="confirmDelete" :onCancel="cancelDelete" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CardPacient from '@/molecules/CardPacient.vue';
import ConfirmationModal from '@/atoms/ConfirmationModal.vue';
import { getUserById, deleteUser } from '@/services/UserServices.js';

const userId = localStorage.getItem('user_id');
const userName = ref('');
const showDeleteModal = ref(false);
const router = useRouter();

onMounted(async () => {
    try {
        const user = await getUserById(userId);
        userName.value = user.name;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

const redirectToUpdateAccount = () => {
    router.push({ name: 'UpdateAccount' });
};

const confirmDelete = async () => {
    try {
        await deleteUser(userId);
        showDeleteModal.value = false;
        localStorage.clear();
        router.push({ name: 'Landing' });
    } catch (error) {
        console.error('Error deleting user:', error);
        showDeleteModal.value = false;
    }
};

const cancelDelete = () => {
    showDeleteModal.value = false;
};
</script>

<style scoped>
/* Si es necesario añadir algo específico aquí */
</style>
