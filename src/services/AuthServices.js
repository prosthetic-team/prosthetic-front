import axios from 'axios';


const login = async (email, password) => {
    try {
        const response = await axios.post(process.env.VUE_APP_API_URL + '/users/login', {
            email: email,
            password: password
        });

        // Verificar que la respuesta tiene los datos correctos
        if (response.data && response.data.user) {
            // Guardar el token en el almacenamiento local
            if (response.data.user.token) {
                localStorage.setItem('auth_token', response.data.user.token);
            }

            // Guardar el ID de usuario
            if (response.data.user.id) {
                localStorage.setItem('user_id', response.data.user.id);
            }
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
