import { JSX } from "react";
import { Link, To } from "react-router-dom";

interface ImageLinkProps {
    link: To;
    imageSource: string;
    imageAlt: string;
    className?: string;
}

export default function ImageLink({ link, imageSource, imageAlt, className }: ImageLinkProps): JSX.Element {
    return(
        <Link
            to={link}
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-between transition-transform transform hover:scale-105 min-w-[150px] w-[12vw] max-w-[150px] h-full flex-shrink-0"
            reloadDocument 
        >
            {/* Conteneur de l'image */}
            <div className="flex items-center justify-center overflow-hidden bg-white rounded-full shadow-md bg-opacity-40 min-w-[120px] w-[20vw] max-w-[150px] min-h-[120px] h-[20vw] max-h-[150px]">
                <img
                    src={imageSource}
                    alt={imageAlt}
                    className="p-5 w-[90%] h-[90%] object-contain transition-opacity duration-300 hover:opacity-80"
                />
            </div>

            {/* Texte adaptatif et uniforme */}
            <span className="text-center font-roboto w-full px-2 text-[clamp(14px,1.2rem,18px)] leading-tight
                             min-h-[2.4em] max-h-[3.6em] flex items-center justify-center mt-2">
                {imageAlt}
            </span>
        </Link>
    );
};