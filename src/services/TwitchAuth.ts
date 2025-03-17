import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID || "";
const CLIENT_SECRET = process.env.REACT_APP_TWITCH_CLIENT_SECRET || "";
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || "";

const getNewAccessToken = async (): Promise<string | null> => {
    try {
        const response = await axios.post("https://id.twitch.tv/oauth2/token", null, {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "client_credentials",
            },
        });

        const newToken = response.data.access_token;
        localStorage.setItem("twitch_access_token", newToken);
        return newToken;
    } catch (error) {
        console.error("Erreur lors de la récupération du nouveau token:", error);
        return null;
    }
};

const api = axios.create({
    baseURL: "https://api.twitch.tv/helix",
});

api.interceptors.request.use(async (config) => {
    let token = localStorage.getItem("twitch_access_token") || ACCESS_TOKEN;

    if (!token) {
        const newToken = await getNewAccessToken();
        if (newToken) {
            token = newToken;
        } else {
            return Promise.reject(new Error("Impossible d'obtenir un token d'accès Twitch"));
        }
    }

    config.headers["Client-ID"] = CLIENT_ID;
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.log("Token expiré, récupération d'un nouveau...");

            const newToken = await getNewAccessToken();
            if (newToken) {
                error.config.headers["Authorization"] = `Bearer ${newToken}`;
                // Relance la requête avec le nouveau token
                return api(error.config);
            } else {
                return Promise.reject(new Error("Impossible de rafraîchir le token Twitch"));
            }
        }
        return Promise.reject(error);
    }
);

export default api;