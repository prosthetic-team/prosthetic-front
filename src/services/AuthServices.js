import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/thingsboard/login',
});

const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('', {
            username: username,
            password: password
        });

        // Guardar el token en el almacenamiento local
        if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
        }

        return response.data;
    } catch (error) {
        console.error("Error al realizar login:", error);
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message); // Lanza el mensaje de error
        } else {
            throw new Error("Error desconocido");
        }
    }
};

export default login;
