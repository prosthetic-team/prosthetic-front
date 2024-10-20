import { createRouter, createWebHistory } from 'vue-router';


export const routes = [
    {
        name: 'Landing',
        path: '/',
        component: () => import('../views/Landing.vue'),
    },
    {
        name: 'Regist',
        path: '/register',
        component: () => import('../views/Regist.vue'),
    },
    {
        name: 'AboutUs',
        path: '/about-us',
        component: () => import('../views/AboutUs.vue'),
    },

    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue'), // Asegúrate de tener este componente creado
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;