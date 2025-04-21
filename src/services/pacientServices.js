import axios from 'axios';

const createPatient = async (token, patientData) => {
    try {
        const response = await axios.post(process.env.API_URL + '/pacients', patientData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Puede retornar el pacientId u otros detalles si es necesario
    } catch (error) {
        console.error('Error al crear paciente:', error);
        throw new Error('Error en la creación del paciente');
    }
};

const getPatients = async () => {
    try {
        const response = await axios.get(process.env.API_URL + '/pacients');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        throw new Error('Error al obtener los pacientes');
    }
};

const getPatientById = async (id) => {
    try {
        const response = await axios.get(process.env.API_URL + `/pacients/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el paciente con ID ${id}:`, error);
        throw error;
    }
};

// Función para obtener la cantidad de pacientes que cumplen el tratamiento
const getCompletedTreatments = async (token) => {
    try {
        const response = await axios.get(process.env.API_URL + '/pacients/completed-treatments/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Respuesta de la API de pacientes que cumplen el tratamiento:', response);
        return response.data;
    } catch (error) {
        console.error('Error al obtener pacientes que cumplen el tratamiento:', error);
        return 0;  // Si ocurre un error, devolver 0
    }
};

export {
    createPatient,
    getPatients,
    getPatientById,
    getCompletedTreatments
};

