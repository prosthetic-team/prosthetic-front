// src/router/routes.js
export const routes = [
    {
        name: 'Landing',
        path: '/',
        component: () => import('../views/Landing.vue'),
    },
    {
        name: 'AboutUs',
        path: '/about-us',
        component: () => import('../views/AboutUs.vue'),
    },

    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue'),
    },
    {
        name: 'Pacientes',
        path: '/pacientes',
        component: () => import('../views/Patients.vue'),
    },
    {
        name: 'Configuracion',
        path: '/configuracion',
        component: () => import('../views/Config.vue'),
    },
    {
        name: 'Paciente',
        path: '/paciente/:id',
        component: () => import('../views/PatientView.vue'),
    },
    {
        name: 'RegistroPaciente',
        path: '/registro-paciente',
        component: () => import('../views/PatientRegist.vue'),
    },
    {
        name: 'UpdateAccount',
        path: '/UpdateAccount',
        component: () => import('../views/UpdateUser.vue'),
    },
    {
        name: 'DashboardPaciente',
        path: '/pacient-dashboard',
        component: () => import('../pacient/views/DashboardPacient.vue')
    },
];
