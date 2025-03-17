import React, { useEffect, useState } from "react";
import { fetchStreamersData, Streamer } from "../services/FetchStreamers";
import StreamerCard from "./reusable-ui/StreamerCard";

const TwitchStreamers: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);

    useEffect(() => {
        const loadStreamers = async () => {
            const data = await fetchStreamersData();
            setStreamers(data);
        };

        loadStreamers();
    }, []);

    const liveStreamers = streamers.filter((streamer) => streamer.isLive);
    const offlineStreamers = streamers.filter((streamer) => !streamer.isLive);

    return (
        <div className="mt-20 p-4 max-w-7xl mx-auto">
            <h2 className="text-3xl uppercase text-center mb-4 text-crimson font-kony">🎥 Streamers en direct</h2>
            <div className="flex flex-wrap gap-5 justify-center w-auto pt-10 mt-14 px-7 md:mt-10 md:px-20 mb-10">
                {liveStreamers.map((streamer) => (
                    <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.avatar} isLive />
                ))}
            </div>

            <hr className="border-b-4 max-w-[75vw] w-auto mx-auto my-5 border-black/10" />

            <h2 className="mt-10 text-3xl uppercase text-center mb-4 text-crimson font-kony">💤 Streamers hors ligne</h2>
            <div className="flex flex-wrap gap-5 justify-center w-auto pt-10 mt-14 px-7 md:mt-10 md:px-20">
                {offlineStreamers.map((streamer) => (
                    <StreamerCard key={streamer.id} username={streamer.name} avatar={streamer.avatar} />
                ))}
            </div>
        </div>
    );
};

export default TwitchStreamers;