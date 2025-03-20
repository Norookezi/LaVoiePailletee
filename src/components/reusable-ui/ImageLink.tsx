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
                       w-[clamp(90px,11vw,130px)] h-[clamp(110px, 13vw,150px)] gap-4 flex-shrink-0"
        >
            <div className="w-[clamp(60px,8vw,90px)] aspect-square bg-white bg-opacity-40 rounded-full shadow-md overflow-hidden flex items-center justify-center">
                <img
                    src={imageSource}
                    alt={imageAlt}
                    className="w-[clamp(50%,65%,75%)] h-[clamp(50%,65%,75%)] object-contain transition-opacity duration-300 hover:opacity-80"
                />
            </div>
            <span className="text-center font-roboto w-full px-2 text-[clamp(8px, 1vw, 12px)] leading-tight break-words flex-grow h-[clamp(1.2em,2vw,2.4em)] flex items-center justify-center">
                {imageAlt}
            </span>
        </a>
    );
};