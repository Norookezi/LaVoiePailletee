import { JSX } from "react";

interface StreamerCardProps {
    username: string;
    avatar: string;
    isLive?: boolean;
}

export default function StreamerCard({username, avatar, isLive = false}: StreamerCardProps): JSX.Element {
    return(
        <a
            href={`https://twitch.tv/${username}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center"
        >
            {isLive && (
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-gray-900 z-10" />
            )}
            <div className="flex flex-col text-center items-center justify-center h-full w-full">
                <div className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 relative aspect-[1/1] overflow-hidden border-4 border-gray-700 rounded-full">
                    <img 
                        src={avatar} 
                        loading="lazy" 
                        alt={username} 
                        className="absolute object-cover w-full h-full rounded-full" 
                    />
                </div>
                <span className="text-center mt-2 text-xs sm:text-base md:text-lg lg:text-xl w-full text-[#ef476f] font-kony">{username}</span>
            </div>
        </a>
    );
};