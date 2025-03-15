import { JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
    link: string;
    icon: IconDefinition;
}

export default function IconLink({ link, icon }: IconLinkProps): JSX.Element {
    return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:scale-150 transition-transform duration-300"
        >
            <FontAwesomeIcon icon={icon} className="text-3xl md:text-4xl" />
        </a>
    );
};
