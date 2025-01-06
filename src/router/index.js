// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Proteger las rutas privadas
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('auth_token') && to.path !== '/') {
        next('/');
    } else {
        next();
    }
});

export default router;
