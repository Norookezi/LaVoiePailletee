import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, ReactElement } from 'react';

interface ExpendProps {
    label: string
    children?: ReactElement | ReactElement[]
}

export default function Expend({label, children = <></>}: ExpendProps): JSX.Element {
    const elementKey: string = crypto.randomUUID();
    return (
        <label htmlFor={elementKey} className='block'>
            <span><span className='underline'>{label}</span> <FontAwesomeIcon icon={faChevronRight} /></span>
            <input type="checkbox" className='hidden peer' id={elementKey} />
            <div className='ml-3 max-w-[30rem] hidden peer-checked:block'>{children}</div>
        </label>
        
    );
};
