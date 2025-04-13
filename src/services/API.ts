import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
});

export default api;