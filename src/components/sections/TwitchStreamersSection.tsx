import React, { useEffect, useState } from 'react';
import StreamerCard from '../reusable-ui/StreamerCard';
import { fetchStreamersData } from '../../services/FetchStreamers';


interface Streamer {
    id: string;
    name: string;
    image: string;
    isOnline: boolean;
}

const TwitchStreamers: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {        
        const loadStreamers = async () => {
            try {
                const data = await fetchStreamersData();

                if (data && Array.isArray(data.streamers)) {
                    setStreamers(data.streamers);
                } else {
                    console.warn('🚨 Les données des streamers sont mal formées.');
                    setStreamers([]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des streamers:', error);
                setError('Impossible de charger les streamers. Veuillez réessayer plus tard.');
                setLoading(false);
            }
        };

        loadStreamers();
    }, []);

    const liveStreamers = Array.isArray(streamers) ? streamers.filter((streamer) => streamer.isOnline) : [];
    const offlineStreamers = Array.isArray(streamers) ? streamers.filter((streamer) => !streamer.isOnline) : [];

    return (
        <div className="p-4 mx-auto mt-20 max-w-7xl">
            <h2 className="mb-4 text-3xl text-center uppercase text-crimson font-kony"><span aria-hidden="true">🎥</span> Streamers en direct</h2>
            <div className="flex flex-wrap justify-center w-auto gap-5 pt-10 mb-10 mt-14 px-7 md:mt-10 md:px-20">
                {loading ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">
                        Chargement des streamers...
                    </h3>
                ) : liveStreamers.length === 0 ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">Aucun streameur "En Ligne" actuellement</h3>
                ) : (
                    liveStreamers.map((streamer) => (
                        <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.image} isLive />
                    ))
                )}
            </div>

            <hr className="border-b-4 max-w-[75vw] w-auto mx-auto my-5 border-black/10" />

            <h2 className="mt-10 mb-4 text-3xl text-center uppercase text-crimson font-kony"><span aria-hidden="true">💤</span> Streamers hors ligne</h2>
            <div className="flex flex-wrap justify-center w-auto gap-5 pt-10 mt-14 px-7 md:mt-10 md:px-20">
                {loading ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">
                        Chargement des streamers...
                    </h3>
                ) : offlineStreamers.length === 0 ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">Aucun streameur "Hors Ligne" actuellement</h3>
                ) : (
                    offlineStreamers.map((streamer) => (
                        <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.image} />
                    ))
                )}
            </div>

            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>
    );
};

export default TwitchStreamers;