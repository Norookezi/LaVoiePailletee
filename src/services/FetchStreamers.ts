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
    try {
        const response = await api.get<StreamerApiResponse>('/streamers');
        //console.log('response data ', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des streamers:', error);
        return {
            cacheRefreshedAt: '',
            streamers: [],
        };
    }
};