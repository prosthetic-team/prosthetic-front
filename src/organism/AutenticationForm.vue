<template>
    <main class="flex w-full items-center justify-center min-h-screen p-5">
        <div class="w-full max-w-sm mx-auto">
            <div class="flex justify-center mb-6">
                <TitleA>Iniciar Sesión</TitleA>
            </div>
            <form @submit.prevent="handleSubmit">
                <InputField v-model="email" label="Email" id="email" type="text" />
                <InputField v-model="password" label="Contraseña" id="password" type="password" />
                <div class="flex justify-center mt-6">
                    <ButtonA>Ingresar</ButtonA>
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
import login from '@/services/AuthServices';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleSubmit = async () => {
    try {
        const response = await login(email.value, password.value);

        // Acceder al token y user_id de la respuesta
        const token = response?.user?.token;
        const userId = response?.user?.id;

        // Verificar si el token existe antes de almacenarlo
        if (token) {
            // Guardar el token y el ID de usuario en localStorage
            localStorage.setItem('auth_token', token);
            localStorage.setItem('user_id', userId);
            console.log("Token guardado en localStorage:", token);

            router.push('/dashboard');
        } else {
            throw new Error('Token no encontrado');
        }
    } catch (error) {
        console.error('Error en el login:', error.message);

        // Mostrar un alert si las credenciales son inválidas
        if (error.message === 'Invalid credentials') {
            alert('Credenciales inválidas. Por favor, intenta de nuevo.');
        } else {
            alert(error.message); // Mostrar otros errores genéricos
        }
    }
};
</script>
