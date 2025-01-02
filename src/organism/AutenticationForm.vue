<template>
    <main class="flex w-full items-center justify-center min-h-screen p-5">
        <div class="w-full max-w-sm mx-auto">
            <div class="flex justify-center mb-6">
                <TitleA>Iniciar Sesión</TitleA>
            </div>
            <form @submit.prevent="handleSubmit">
                <InputField v-model="username" label="Usuario" id="username" type="text" />
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
import login from '@/services/AuthServices'; // Importar el servicio de login
import { useRouter } from 'vue-router'; // Para redireccionar al dashboard

const username = ref('');
const password = ref('');
const router = useRouter(); // Instancia del router para redirección

const handleSubmit = async () => {
    try {
        const response = await login(username.value, password.value); // Esta es la respuesta que contiene el token

        // Acceder al token de la respuesta
        const token = response?.token;

        // Guardar el token en localStorage
        localStorage.setItem('token', token);

        console.log("Token guardado en localStorage:", token);

        // Redirigir a la vista de Dashboard
        router.push('/dashboard');
    } catch (error) {
        console.error('Error en el login:', error.message);
        alert(error.message); // Mostrar el error en una alerta
    }
};
</script>
