import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8787/api/v1';
const API_URL = 'https://portfolio-backend.saquibali353.workers.dev/api/v1';

export const createTech = async (tech) => {
    const response = await axios.post(`${API_URL}/tech`, tech, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return response.data;
};

export const getTech = async () => {
    const response = await axios.get(`${API_URL}/tech`, {
        headers: {
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return response.data;
};

export const updateTech = async (id, tech) => {
    const response = await axios.put(`${API_URL}/tech/${id}`, tech, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return response.data;
};

export const deleteTech = async (id) => {
    const response = await axios.delete(`${API_URL}/tech/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return response.data;
};
