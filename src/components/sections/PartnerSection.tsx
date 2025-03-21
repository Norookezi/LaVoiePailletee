import { JSX } from "react";
import ImageLink from "../reusable-ui/ImageLink";

interface Partner {
    link: string;
    img: string;
    alt: string;
}

export default function PartnerContainer():JSX.Element {
    const partners: Partner[] = [
        { link: "https://www.cybergrange.eu/", img: "la_cybergrange.webp", alt: "La CyberGrange" },
        { link: "https://shadok-strasbourg.eu/", img: "le_shadok.webp", alt: "Le Shadok" },
        { link: "https://eastgames.org/", img: "east_games.webp", alt: "East Games" },
        { link: "https://www.getailicia.com/fr", img: "ai_licia.webp", alt: "Ai Licia" },
        { link: "https://www.skillcamp.gg/", img: "skillcamp.webp", alt: "SkillCamp" },
        { link: "https://www.ventdivin.com/", img: "vent_divin.webp", alt: "Vent Divin" },
        { link: "#", img: "iconic.webp", alt: "Iconic" },
        { link: "#", img: "level_gaming_corner.webp", alt: "Level Gaming Corner" },
        { link: "#", img: "le_loup_des_balkans.webp", alt: "Le Loup des Balkans" },
        { link: "#", img: "afb.webp", alt: "AFB" },
        { link: "#", img: "epitech_strasbourg.webp", alt: "Epitech" }
    ];

    // Les deux premiers partenaires mélangés entre eux
    const fixedPartners: Partner[] = partners.slice(0, 2).sort(() => Math.random() - 0.5);

    // Les autres partenaires restants
    const remainingPartners: Partner[] = partners.slice(2);

    // Mélanger aléatoirement les partenaires restants
    const randomPartners: Partner[] = remainingPartners
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    // Combiner les partenaires fixes et aléatoires
    const displayPartners: Partner[] = [...fixedPartners, ...randomPartners];

    return(
        <section className="flex flex-col justify-center flex-1 py-10 text-center text-white shadow-2xl bg-crimson">
            <div className="flex flex-col md:items-center md:justify-evenly md:mx-10">
                <h2 className="p-5 text-4xl tracking-wide text-center break-words whitespace-normal md:text-5xl md:whitespace-nowrap font-kony mb-10">
                    <span>Partenaires de</span>
                    <span className="ml-4 max-2xl:block">l'évènement</span>
                </h2>

                <div className="flex flex-row flex-wrap gap-4 px-[15vw] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] 
                               place-items-center justify-center w-full md:grid-cols-6 md:px-0 sm:grid-cols-3 md:flex-1 lg:max-w-[70rem]">
                    {displayPartners.map(({ link, img, alt }) => (
                        <div key={alt} className="flex flex-col items-center justify-center">
                            <ImageLink
                                imageSize={20}
                                link={link}
                                imageSource={`images/partenaires/${img}`}
                                imageAlt={alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
