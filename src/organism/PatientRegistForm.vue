<template>
    <section class="flex w-full p-2 items-center min-h-screen">
        <div class="max-w-xlgx bg-white rounded-lg shadow p-9 w-full mx-auto">
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col text-center justify-center mb-6">
                    <TitleA class="py-2">Registrar un paciente</TitleA>
                </div>
                <InputField v-model="nombre" label="Nombre Completo" id="nombre" type="text" />
                <InputField v-model="email" label="Email" id="email" type="email" />
                <InputField v-model="descripcion" label="Descripción" id="descripcion" type="text" />
                <InputField v-model="tratamiento" label="Información tratamiento" id="tratamiento" type="text" />
                <InputField v-model="tiempoUso" label="Tiempo de uso determinado (Horas por día)" id="tiempouso"
                    type="number" />

                <!-- Dropdown de dispositivos -->
                <div class="relative inline-block w-full mt-6">
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="toggleDropdown">
                        Selecciona un dispositivo
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div v-if="dropdownOpen"
                        class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li v-for="device in devices" :key="device.id">
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectDevice(device)">
                                    {{ device.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-center mt-6">
                    <ButtonA type="submit">Registrar paciente</ButtonA>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAvailableDevices } from '@/services/deviceServices.js';  // Importa la función de dispositivo
import { createPatient } from '@/services/pacientServices.js';  // Importa la función de paciente
import InputField from '@/molecules/InputField.vue';
import TitleA from '@/atoms/TitleA.vue';
import ButtonA from '@/atoms/ButtonA.vue';

const nombre = ref('');
const email = ref('');
const descripcion = ref('');
const tratamiento = ref('');
const tiempoUso = ref(null);
const dispositivoId = ref(null);
const devices = ref([]);
const dropdownOpen = ref(false);
const router = useRouter();
const especialista_id = localStorage.getItem('user_id');

// Obtener dispositivos disponibles
const fetchDevices = async () => {
    const token = localStorage.getItem('auth_token');
    try {
        devices.value = await getAvailableDevices(token);
    } catch (error) {
        alert('Error al cargar dispositivos.');
    }
};

// Abrir y cerrar el dropdown
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

// Seleccionar un dispositivo del dropdown
const selectDevice = (device) => {
    dispositivoId.value = device.id;
    dropdownOpen.value = false; // Cerrar dropdown al seleccionar
};

// Crear paciente
const handleSubmit = async () => {
    if (!dispositivoId.value) {
        alert('Por favor, selecciona un dispositivo.');
        return;
    }

    const token = localStorage.getItem('auth_token');
    const patientData = {
        nombreCompleto: nombre.value,
        email: email.value,
        descripcion: descripcion.value,
        tratamiento: tratamiento.value,
        tiempoUsoDiario: tiempoUso.value,
        dispositivoId: dispositivoId.value,
        especialistaId: especialista_id,
    };

    try {
        const response = await createPatient(token, patientData);
        if (response && response.pacientId) {
            alert('Paciente registrado exitosamente');
            router.push('/pacientes');
        } else {
            alert('Error al registrar paciente.');
        }
    } catch (error) {
        alert('Error en la creación del paciente. Intenta de nuevo.');
    }
};

// Cargar dispositivos disponibles cuando el componente se monta
onMounted(fetchDevices);
</script>
