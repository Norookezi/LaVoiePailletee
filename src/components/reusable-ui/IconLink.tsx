import { JSX, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
    link: string;
    icon: IconDefinition;
    hoverColor?: string;
}

export default function IconLink({ link, icon, hoverColor = "#ef476f" }: IconLinkProps): JSX.Element {

    return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white transition-transform duration-500 ease-out flex items-center justify-center w-12 h-12 hover:scale-150`}
        >
            <FontAwesomeIcon 
              icon={icon} 
              className="text-3xl md:text-4xl w-8 h-8 transition-colors duration-500 ease-out"
              style={{
                color: "white",
                transition: "color 0.5s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
              }}
            />
        </a>
    );
};
