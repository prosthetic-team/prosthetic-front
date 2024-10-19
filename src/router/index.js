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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;