import axios from 'axios';

const VUE_APP_API_URL = process.env.VUE_APP_API_URL + "/users";

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${VUE_APP_API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${VUE_APP_API_URL}/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${VUE_APP_API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export default {
    getUserById,
    updateUser,
    deleteUser
}; 
