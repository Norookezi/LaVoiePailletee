import api from './API';

export interface Streamer {
    id: string;
    name: string;
    image: string;
    isOnline: boolean;
}

export interface StreamerApiResponse {
    cacheRefreshedAt: string;
    streamers: Streamer[];
}

export const fetchStreamersData = async (): Promise<StreamerApiResponse> => {
    return await api.get<StreamerApiResponse>('/streamers')
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Erreur lors de la récupération des streamers:', error);
            throw new Error('Impossible de récupérer les données des streamers.');
        });
};
