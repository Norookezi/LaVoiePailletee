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
                       w-[clamp(150px,12vw,150px)] h-full flex-shrink-0"
        >
            {/* Conteneur de l'image */}
            <div className="w-full h-full bg-white bg-opacity-40 rounded-full shadow-md
                            overflow-hidden flex items-center justify-center w-[clamp(120px, 20vw, 150px)]"
                 style={{ height: "clamp(120px, 20vw, 150px)", width: "clamp(120px, 20vw, 150px)" }}>
                <img
                    src={imageSource}
                    alt={imageAlt}
                    className="w-[clamp(60%, 70%, 80%)] h-[clamp(60%, 70%, 80%)] object-contain transition-opacity duration-300 hover:opacity-80"
                />
            </div>

            {/* Texte adaptatif et uniforme */}
            <span className="text-center font-roboto w-full px-2 text-[clamp(14px,1.2rem,18px)] leading-tight
                             min-h-[2.4em] max-h-[3.6em] flex items-center justify-center mt-2">
                {imageAlt}
            </span>
        </a>
    );
};