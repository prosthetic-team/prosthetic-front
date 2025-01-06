import axios from 'axios';

const getAvailableDevices = async (token) => {
    try {
        const response = await axios.get('http://localhost:3000/devices/available', {
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
        const response = await axios.get(`http://localhost:3000/thingsboard/isactive/${device_id}`, {
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
