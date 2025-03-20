import { JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
    link: string;
    icon: IconDefinition;
    className?: string;
    name?: string
}

export default function IconLink({ link, icon, className, name }: IconLinkProps): JSX.Element {

    return (
      (<a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-12 h-12 ${className ?? 'hover:text-[#ef476f] text-white'}`}
        title={name}
        aria-label={`Lien vers ${name}`}
      >
        <FontAwesomeIcon 
          icon={icon}
          className="w-8 h-8 text-3xl duration-500 ease-out md:text-4xl hover:scale-110"
        />
      </a>)
    );
};
