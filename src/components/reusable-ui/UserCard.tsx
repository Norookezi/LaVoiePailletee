import { JSX } from "react";

interface UserCardProps {
    href: string;
    name: string;
    job: string;
    link?: string;
    label?: string;
}

export default function UserCard({ href, name, job, link, label }: UserCardProps): JSX.Element {
    return(
        <a href={link} role="text" aria-label={label} className="group basis-[23rem] md:basis-[25rem] relative h-auto my-1 w-auto aspect-[159/182] px-0 md:mx-[0.5rem] overflow-hidden">
            <img src={href} loading="lazy" className="absolute object-cover w-full h-full" alt="" />
            <div className="relative flex flex-col items-center justify-end w-full h-full text-center text-white bg-gradient-to-t from-gray-900/50 via-transparent to-transparent">
                <span className="leading-[2rem] align-bottom md:leading-[3rem] font-kony md:text-4xl text-2xl">{name}</span>
                <span className="text-[0.75rem] mb-2 leading-[1.2rem] md:leading-4 md:text-lg md:max-w-[75%] text-lg min-h-[2em]">{job}</span>
            </div>
        </a>
    );
};