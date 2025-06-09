import axios from 'axios';
import { getUserById } from './UserServices';


const login = async (email, password) => {
    try {
        const response = await axios.post(process.env.VUE_APP_API_URL + '/users/login', {
            email: email,
            password: password
        });

        if (response.data && response.data.user) {
            if (response.data.user.token) {
                localStorage.setItem('auth_token', response.data.user.token);
            }
            if (response.data.user.id) {
                localStorage.setItem('user_id', response.data.user.id);
            }

            // Esperar a que getUserById resuelva
            const user = await getUserById(response.data.user.id);

            // Después de obtener el usuario autenticado
            localStorage.setItem('user_name', user.name);

            // Retornar el usuario junto con la data original
            return { ...response.data, userData: user };
        }

        return response.data;
    } catch (error) {
        console.error("Error al realizar login:", error);
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error("Error desconocido");
        }
    }
};

export default login;
