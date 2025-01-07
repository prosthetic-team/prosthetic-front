import axios from 'axios';

const getAvailableDevices = async (token) => {
    try {
        const response = await axios.get('https://prosthetic-api.onrender.com/devices/available', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.filter(device => device.state === 'disponible');
    } catch (error) {
        console.error('Error al obtener dispositivos:', error);
        throw new Error('Error al obtener dispositivos');
    }
};

const isActive = async (device_id, token) => {
    try {
        const response = await axios.get(`https://prosthetic-api.onrender.com/thingsboard/isactive/${device_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener dispositivos:', error);
        throw new Error('Error al obtener dispositivos');
    }
};

export {
    getAvailableDevices,
    isActive
};
