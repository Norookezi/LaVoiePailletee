import axios, { AxiosError } from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
});

// Ajouter un intercepteur pour les erreurs
api.interceptors.response.use(
    (response) => response, // Si la réponse est réussie, on retourne directement la réponse
    (error: AxiosError) => {
        // Vérifier si l'erreur vient du serveur ou du client
        if (error.response) {
            // Erreur provenant du serveur (status 4xx, 5xx)
            console.error(`API Error: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
            // Si la requête a été faite mais il n'y a pas de réponse
            console.error('API Error: No response received', error.request);
        } else {
            // Erreur lors de la configuration de la requête
            console.error('API Error: Request setup failed', error.message);
        }

        // Renvoi de l'erreur pour que l'appelant puisse la capturer
        return Promise.reject(error);
    }
);

export default api;