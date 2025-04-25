import { JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    action: CallableFunction;
    icon?: IconDefinition;
    className?: string;
    label?: string;
    iconPosition: 'left' | 'right' | 'only' | 'none'
}

export default function Button({ action, icon, className, label, iconPosition = 'none' }: ButtonProps): JSX.Element {

    return (
        <button className={['flex space-x-2 items-center py-2 px-4 m-1 text-center text-black duration-300 rounded-lg shadow-sm cursor-pointer bg-slate-500/50 hover:bg-slate-500/70 hover:shadow-lg',className].join(' ')} onClick={()=>action()}>
            { (iconPosition === 'left' || iconPosition === 'only') && icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon> }
            { label !== 'undefined' && iconPosition !== 'only' && <span>{ label }</span> }
            { iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon> }
        </button>
    );
};
