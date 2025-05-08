import { ChangeEventHandler, JSX } from 'react';

interface SwitchProps {
    htmlFor: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Switch({htmlFor, onChange = ()=>{}}: SwitchProps): JSX.Element {
    return (
        <div className='relative flex items-center justify-start w-10 h-4 p-1 duration-200 bg-gray-400 rounded-md group has-[input:checked]:bg-gray-300'>
            <input type="checkbox" onChange={onChange} className='hidden peer group' name="" id={htmlFor} />
            <span data-name="switchController" className='relative  duration-200 rounded-full h-[250%] left-1/2 w-auto aspect-square block bg-green-300 group-has-[input:checked]:bg-green-400 -translate-x-[110%] group-has-[input:checked]:-translate-x-[0%]' ></span>
        </div>
        
    );
};
