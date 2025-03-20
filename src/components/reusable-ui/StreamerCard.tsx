import { JSX } from "react";

interface StreamerCardProps {
    username: string;
    avatar: string;
    isLive?: boolean;
}

const rainbowColors = [
    "#FF0000", // Red
    "#FF4500", // Orange Red (nuance intermédiaire)
    "#FF7F00", // Orange
    "#FFD700", // Gold
    "#FFB300", // Light Gold (transition vers rouge)
    "#FF9A00", // Darker Yellow (transition douce vers rouge)
    "#FFFF00", // Yellow
    "#9ACD32", // Yellow Green (nuance intermédiaire)
    "#00FF00", // Green
    "#00FA9A", // Medium Spring Green (nuance intermédiaire)
    "#00FFFF", // Cyan
    "#1498c4", // Light Blue (nuance intermédiaire)
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
    "#FF1493", // Deep Pink
    "#ee3333"  // Gold
];

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
            <div className="flex flex-col text-center items-center justify-center h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="relative flex items-center justify-center aspect-square rounded-full w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40">
                    <div
                        className="absolute inset-0 animate-[spin_20s] rounded-full"
                        style={{
                            backgroundImage: `conic-gradient(${rainbowColors.join(", ")})`,
                        }}
                    />
                    <img 
                        src={avatar} 
                        loading="lazy" 
                        alt={username} 
                        className="w-[90%] h-[90%] rounded-full object-contain bg-white z-0"
                        
                    />
                    {isLive && (
                        <div
                            className="absolute bottom-[-6px] left-[-6px] w-[50%] h-[50%]  
                            border-b-4 border-l-4 border-red-500 rounded-bl-full z-20 animate-pulse"
                        />
                    )}
                </div>
                <span className="text-center mt-2 text-xs sm:text-base md:text-lg lg:text-xl w-full text-crimson font-kony">{username}</span>
            </div>
        </a>
    );
};