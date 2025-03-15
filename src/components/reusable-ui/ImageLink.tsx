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
          className={` group w-${imageSize} h-${imageSize} md:w-20 md:h-20 flex justify-center items-center bg-white bg-opacity-40 rounded-full shadow-md overflow-hidden transition-transform transform hover:scale-110`}
        >
            <img 
                src={imageSource}
                alt={imageAlt}
                className={`w-full h-full p-3 max-w-[80px] max-h-[80px] md:max-w-[128px] md:max-h-[128px] object-contain transition-opacity duration-300 group-hover:opacity-80`}
            />
        </a>
    );
};