<script setup>
import { useRouter } from 'vue-router';
import Logo from '@/atoms/Logo.vue';
import Tab from '@/atoms/Tab.vue';
import Icon from '@/atoms/Icon.vue';
import { useRoute } from 'vue-router';
import { navigationTabs, accountTabs, pacientTabs } from '@/router/tabs.js';

const router = useRouter();
const route = useRoute();

const isActiveTab = (tabRoute) => route.path === tabRoute;

// Obtener el nombre del usuario desde localStorage
const userName = localStorage.getItem('user_name');

// Determinar qué tabs mostrar
const isPacient = userName === 'Test pacient Api' || route.path.startsWith('/pacient-dashboard');
const mainTabs = isPacient ? pacientTabs : navigationTabs;

// Función de logout
const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    router.push('/');
};
</script>

<template>
    <div class="flex flex-col min-h-full justify-start w-16 md:w-64 transition-width duration-300">
        <!-- logo -->
        <section class="h-1/6 flex items-center justify-center">
            <router-link to="/dashboard">
                <Logo class="px-2 py-5" />
            </router-link>
        </section>

        <!-- navegación -->
        <section class="flex flex-col h-4/6 px-3">
            <h6 class="font-semibold text-xs text-tgray hidden md:block">MENU</h6>
            <div>
                <ul class="mt-7 space-y-2">
                    <li v-for="tab in mainTabs" :key="tab.name">
                        <Tab :name="tab.name" :route="tab.route" :icon="tab.icon" :isActive="isActiveTab(tab.route)" />
                    </li>
                </ul>
            </div>
        </section>

        <!-- cuenta -->
        <section class="flex flex-col px-2 py-5 h-2/6">
            <h6 class="font-semibold text-xs text-tgray hidden md:block">CUENTA</h6>
            <div>
                <ul class="space-y-2 mt-4">
                    <li v-for="tab in accountTabs" :key="tab.name">
                        <Tab :name="tab.name" :route="tab.route" :icon="tab.icon" :isActive="isActiveTab(tab.route)" />
                    </li>
                    <li>
                        <button @click="logout"
                            class="block py-3 px-5 rounded-lg flex items-center transition-colors duration-200 hover:bg-gray-200 w-full"
                            type="button">
                            <Icon :icon="['fas', 'door-open']" class="mr-2" />
                            <span class="hidden md:inline text-sm font-semibold text-gray-600">Cerrar sesión</span>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>