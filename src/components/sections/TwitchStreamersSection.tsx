import React, { useEffect, useState } from "react";
import StreamerCard from "../reusable-ui/StreamerCard";

interface Streamer {
    id: string;
    name: string;
    avatar: string;
    isLive: boolean;
}

let fetchStreamersData: () => Promise<Streamer[]> | (() => Streamer[]);
let getRequestCount: () => number;

try {
    const fetchStreamersModule = require("../../services/FetchStreamers");
    const requestLoggerModule = require("../../services/RequestLogger");

    fetchStreamersData = fetchStreamersModule.fetchStreamersData;
    getRequestCount = requestLoggerModule.getRequestCount;
} catch (error) {
    console.warn("🚨 Les services API ne sont pas encore disponibles.");
    fetchStreamersData = (): Promise<Streamer[]> => Promise.resolve([]); // Mock si API non disponible
    getRequestCount = () => 0; // Mock si API non disponible
}

const TwitchStreamers: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("🔄 useEffect exécuté");
        
        const loadStreamers = async () => {
            try {
                if (fetchStreamersData) {
                    const data = await fetchStreamersData();
                    setStreamers(data);
                    setLoading(false);
    
                    // Count request from axios in debug mode (set "REACT_DEBUG_MODE=true (or false)" in your .env.local file)
                    if (process.env.REACT_DEBUG_MODE) {
                        console.log(`🔍 Nombre total de requêtes Axios : ${getRequestCount()}`);
                    }
                } else {
                    console.warn("🚨 fetchStreamersData n'est pas disponible.");
                    setStreamers([]);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des streamers:", error);
                setError("Impossible de charger les streamers. Veuillez réessayer plus tard.");
                setLoading(false);
            }
        };

        loadStreamers();
    }, []);

    const liveStreamers = streamers.filter((streamer) => streamer.isLive);
    const offlineStreamers = streamers.filter((streamer) => !streamer.isLive);

    return (
        <div className="mt-20 p-4 max-w-7xl mx-auto">
            <h2 className="text-3xl uppercase text-center mb-4 text-crimson font-kony">🎥 Streamers en direct</h2>
            <div className="flex flex-wrap gap-5 justify-center w-auto pt-10 mt-14 px-7 md:mt-10 md:px-20 mb-10">
                {loading ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">
                        Chargement des streamers...
                    </h3>
                ) : liveStreamers.length === 0 ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">Aucun streameur "En Ligne" actuellement</h3>
                ) : (
                    liveStreamers.map((streamer) => (
                        <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.avatar} isLive />
                    ))
                )}
            </div>

            <hr className="border-b-4 max-w-[75vw] w-auto mx-auto my-5 border-black/10" />

            <h2 className="mt-10 text-3xl uppercase text-center mb-4 text-crimson font-kony">💤 Streamers hors ligne</h2>
            <div className="flex flex-wrap gap-5 justify-center w-auto pt-10 mt-14 px-7 md:mt-10 md:px-20">
                {loading ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">
                        Chargement des streamers...
                    </h3>
                ) : offlineStreamers.length === 0 ? (
                    <h3 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-[#9c9898] font-kony">Aucun streameur "Hors lLigne" actuellement</h3>
                ) : (
                    offlineStreamers.map((streamer) => (
                        <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.avatar} />
                    ))
                )}
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
    );
};

export default TwitchStreamers;