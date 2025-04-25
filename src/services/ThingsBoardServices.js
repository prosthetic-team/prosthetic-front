import axios from 'axios';

export const getMovingHours = async (deviceId) => {
    try {
        const token = localStorage.getItem('auth_token');  // Obtener el token
        const response = await axios.get(process.env.VUE_APP_API_URL + `/thingsboard/movinghours/${deviceId}`, {
            headers: {
                'Authorization': `Bearer ${token}`  // Pasar el token en el encabezado
            }
        });

        console.log('Respuesta de la API de horas de movimiento:', response);

        // Verificar si la respuesta contiene un valor válido
        const hours = response.data ? parseFloat(response.data) : 0;

        // Limitar a 3 decimales
        const roundedHours = hours.toFixed(3);

        console.log('Horas de movimiento redondeadas:', roundedHours);
        return roundedHours;

    } catch (error) {
        console.error('Error al obtener las horas de movimiento:', error);
        return 0;  // Retornamos 0 si ocurre un error
    }
};

// Función para obtener el estado de actividad del dispositivo
export const getSensorStatus = async (deviceId) => {
    try {
        const token = localStorage.getItem('auth_token');  // Obtener el token
        const response = await axios.get(process.env.VUE_APP_API_URL + `/thingsboard/telemetry/${deviceId}`, {
            headers: {
                'Authorization': `Bearer ${token}`  // Pasar el token en el encabezado
            }
        });

        const moving = response.data.moving?.[0]?.value === 'true';
        return moving;

    } catch (error) {
        console.error('Error al obtener el estado de movimiento del dispositivo:', error);
        return false;  // Si hay un error, devolver false
    }
};
