// src/router/tabs.js
export const navigationTabs = [
    { name: 'Dashboard', route: '/dashboard', icon: ['fas', 'chart-simple'] },
    { name: 'Lista de pacientes', route: '/pacientes', icon: ['fas', 'hospital-user'] },
    { name: 'Lista de reportes', route: '/reports', icon: ['fas', 'triangle-exclamation'] },
    { name: 'Lista de dispositivos', route: '/devices', icon: ['fas', 'network-wired'] }
];

export const accountTabs = [
    { name: 'Configuracion', route: '/configuracion', icon: ['fas', 'cog'] },
];

export const pacientTabs = [
    { name: 'Dashboard', route: '/pacient-dashboard', icon: ['fas', 'chart-simple'] },
    { name: 'Mis dispositivos', route: '/pacient-devices', icon: ['fas', 'network-wired'] }
];
