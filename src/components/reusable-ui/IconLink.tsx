import { JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
    link: string;
    icon: IconDefinition;
    hoverColor?: string;
}

export default function IconLink({ link, icon, hoverColor = "#ef476f" }: IconLinkProps): JSX.Element {

    return (
      (<a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 text-white"
      >
        <FontAwesomeIcon 
          icon={icon} 
          style={{color: hoverColor}}
          className="w-8 h-8 text-3xl duration-500 ease-out md:text-4xl [&:not(:hover)]:!text-white hover:scale-150"
        />
      </a>)
    );
};
