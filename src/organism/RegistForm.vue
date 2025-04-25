<template>
    <main class="flex w-full items-center justify-center min-h-screen">
        <div class="max-w-md bg-white rounded-lg shadow p-9 w-full mx-auto">
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col text-center justify-center mb-6">
                    <TitleA class="py-2">Crear una cuenta</TitleA>
                </div>
                <InputField v-model="name" label="Nombre Completo" id="username" type="text" />
                <InputField v-model="email" label="Email" id="email" type="email" />
                <InputField v-model="password" label="Contraseña" id="password" type="password" />
                <InputField v-model="confirmPassword" label="Repetir Contraseña" id="confirm-password"
                    type="password" />

                <div class="flex justify-center mt-6">
                    <ButtonA type="submit">Regístrate</ButtonA>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '@/molecules/InputField.vue';
import TitleA from '@/atoms/TitleA.vue';
import ButtonA from '@/atoms/ButtonA.vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Para redirección después del registro

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter(); // Instancia del router para redirección

// Este método hay que moverlo al service
const handleSubmit = async () => {
    // Validar que las contraseñas coinciden
    if (password.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden');
        return;
    }

    try {
        // Enviar los datos al backend para crear un usuario
        const response = await axios.post(process.env.VUE_APP_API_URL + '/users', {
            name: name.value,
            email: email.value,
            password: password.value,
        });

        // Si el registro fue exitoso, redirigir al usuario
        if (response.data && response.data.userId) {
            alert('Usuario creado exitosamente');
            router.push('/'); // Redirigir a la página de login
        } else {
            alert('Error al crear la cuenta');
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        alert('Error en el registro. Por favor, intente nuevamente.');
    }
};
</script>
