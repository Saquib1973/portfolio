import axios from 'axios';

const API_URL = 'http://127.0.0.1:8787/api/v1';
// const API_URL = 'https://portfolio-backend.saquibali353.workers.dev/api/v1';

export const createTech = async (tech) => {
    const res = await axios.post(`${API_URL}/tech`, tech, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};

export const getTech = async () => {
    const res = await axios.get(`${API_URL}/tech`, {
        headers: {
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};
export const getUniqueTech = async (id) => {
    const res = await axios.get(`${API_URL}/tech/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};

export const updateTechVisibility = async (id, visibility) => {
    const res = await axios.put(`${API_URL}/tech/${id}`, { visibility }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};


export const updateTech = async (id, tech) => {
    const res = await axios.put(`${API_URL}/tech/${id}`, tech, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};


export const deleteTech = async (id) => {
    const res = await axios.delete(`${API_URL}/tech/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('authToken'),
        },
    });
    return res.data;
};
