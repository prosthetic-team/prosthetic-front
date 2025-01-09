<template>
    <CardPacient class="bg-white p-6 mt-5">
        <div class="space-y-6">
            <h2 class="text-2xl font-semibold">Actualizar información de la cuenta</h2>
            <form @submit.prevent="updateAccount" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="name" v-model="userData.name"
                        class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
                    <input type="email" id="email" v-model="userData.email"
                        class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit"
                    class="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none">
                    Actualizar
                </button>
            </form>
        </div>
    </CardPacient>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUserById, updateUser } from '@/services/UserServices.js';
import CardPacient from '@/molecules/CardPacient.vue';

const userId = localStorage.getItem('user_id');
const userData = ref({ name: '', email: '' });
const router = useRouter();

onMounted(async () => {
    try {
        const user = await getUserById(userId);
        userData.value = { name: user.name, email: user.email };
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

const updateAccount = async () => {
    try {
        await updateUser(userId, userData.value);
        router.push({ name: 'Configuracion' });
    } catch (error) {
        console.error('Error updating user data:', error);
    }
};
</script>
