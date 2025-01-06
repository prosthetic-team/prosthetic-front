<template>
    <div class="flex flex-col min-h-screen justify-start w-16 md:w-64 transition-width duration-300">
        <!-- logo -->
        <section class="h-1/6 flex items-center justify-center">
            <router-link to="/dashboard">
                <Logo class="px-2 py-5" />
            </router-link>
        </section>

        <!-- navegación -->
        <section class="flex flex-col h-4/6 px-2">
            <h6 class="font-semibold text-tgray hidden md:block">MENU</h6>
            <div>
                <ul class="mt-4 space-y-2">
                    <li v-for="tab in navigationTabs" :key="tab.name">
                        <Tab :name="tab.name" :route="tab.route" :icon="tab.icon" :isActive="isActiveTab(tab.route)"
                            class="flex items-center" />
                    </li>
                </ul>
            </div>
        </section>

        <!-- cuenta -->
        <section class="flex flex-col px-2 py-5 h-2/6">
            <h6 class="font-semibold text-tgray hidden md:block">CUENTA</h6>
            <div>
                <ul class="space-y-2 mt-4">
                    <li v-for="tab in accountTabs" :key="tab.name">
                        <Tab :name="tab.name" :route="tab.route" :icon="tab.icon" :isActive="isActiveTab(tab.route)"
                            class="flex items-center" />
                    </li>
                    <!-- Agregar el botón de cerrar sesión -->
                    <li>
                        <button @click="logout" class="flex items-center py-3 px-4 rounded-lg hover:bg-gray-200 w-full">
                            <Icon :icon="['fas', 'door-open']" size="lg" class="mr-2" />
                            <span class="hidden md:inline">Cerrar sesión</span>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Para redirigir al login
import Logo from '@/atoms/Logo.vue';
import Tab from '@/atoms/Tab.vue';
import Icon from '@/atoms/Icon.vue';
import { useRoute } from 'vue-router';
import { navigationTabs, accountTabs } from '@/router/tabs.js';

const router = useRouter();

const route = useRoute();

const isActiveTab = (tabRoute) => route.path === tabRoute;

// Función de logout
const logout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    // Redirigir a la página de login
    router.push('/');
};
</script>

<style scoped>
.bg-gray-300 {
    background-color: #e5e7eb;
}
</style>
