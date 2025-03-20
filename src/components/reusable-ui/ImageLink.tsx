import { JSX } from "react";

interface ImageLinkProps {
    link: string;
    imageSource: string;
    imageAlt: string;
    imageSize: number;
}

export default function ImageLink({ link, imageSource, imageAlt, imageSize }: ImageLinkProps): JSX.Element {
    return(
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-between transition-transform transform hover:scale-105 
                       w-[clamp(90px,10vw,120px)] h-auto flex-shrink-0"
        >
            {/* Conteneur de l'image */}
            <div className="w-[clamp(60px,8vw,90px)] aspect-square bg-white bg-opacity-40 rounded-full shadow-md 
                            overflow-hidden flex items-center justify-center">
                <img
                    src={imageSource}
                    alt={imageAlt}
                    className="w-[clamp(50%,65%,75%)] h-[clamp(50%,65%,75%)] object-contain transition-opacity duration-300 hover:opacity-80"
                />
            </div>

            {/* Texte adaptatif et uniforme */}
            <span className="text-center font-roboto w-full px-2 text-[clamp(12px,1.2vw,14px)] leading-tight 
                             min-h-[clamp(2em,2.2vw,2.6em)] flex items-center justify-center">
                {imageAlt}
            </span>
        </a>
    );
};