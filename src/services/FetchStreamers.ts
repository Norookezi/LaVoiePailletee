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
    const response = await api.get<StreamerApiResponse>('/streamers');
    return response.data;
};