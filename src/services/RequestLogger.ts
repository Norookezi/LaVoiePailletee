import api from "./TwitchAuth";

let requestCount = 0;

export const attachLogger = (apiInstance: any) => {
    apiInstance.interceptors.request.use((config: any) => {
        requestCount++;
        console.log(`🔵 Requête #${requestCount}: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config.params);
        return config;
    });

    apiInstance.interceptors.response.use(
        (response: any) => {
            console.log(`🟢 Réponse reçue #${requestCount}: ${response.config.url} (${response.status})`);
            return response;
        },
        (error: any) => {
            console.log(`🔴 Erreur sur la requête #${requestCount}: ${error.config?.url}`);
            return Promise.reject(error);
        }
    );
};

export const getRequestCount = () => requestCount;