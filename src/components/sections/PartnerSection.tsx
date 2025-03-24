import { JSX } from "react";
import ImageLink from "../reusable-ui/ImageLink";
import { partenaires, partnerType } from "../../partenaires";
import { Link } from "react-router-dom";

export default function PartnerContainer():JSX.Element {
    // Les deux premiers partenaires mélangés entre eux
    const fixedPartners: partnerType[] = partenaires.slice(0, 2).sort(() => Math.random() - 0.5);

    // Les autres partenaires restants
    const remainingPartners: partnerType[] = partenaires.slice(2);

    // Mélanger aléatoirement les partenaires restants
    const randomPartners: partnerType[] = remainingPartners
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    // Combiner les partenaires fixes et aléatoires
    const displayPartners: partnerType[] = [...fixedPartners, ...randomPartners];

    return(
        <section className="flex flex-col justify-center flex-1 py-10 text-center text-white shadow-2xl bg-crimson">
            <div className="flex flex-col md:items-center md:justify-evenly md:mx-10">
                <h2 className="p-5 mb-10 text-4xl tracking-wide text-center break-words whitespace-normal md:text-5xl md:whitespace-nowrap font-kony">
                    <span>Partenaires de</span>
                    <span className="ml-4 max-2xl:block">l'évènement</span>
                </h2>

                <div className="flex flex-row flex-wrap gap-4 sm:px-[15vw] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] 
                               place-items-center justify-center w-full md:grid-cols-6 md:px-0 sm:grid-cols-3 md:flex-1 lg:max-w-[70rem]">
                    {displayPartners.map(({image, name }) => (
                        <div key={name} className="flex flex-col items-center justify-center">
                            <ImageLink
                                link={{ pathname: "/partenaires", hash: image.split('.')[0].split('/').slice(-1)[0] }}
                                imageSource={image}
                                imageAlt={name}
                            />
                        </div>
                    ))}
                </div>

                <Link to={{ pathname: "/partenaires"}} reloadDocument >
                    <div className="flex justify-center px-8 mt-20 md:justify-start md:px-0 sm:w-full">
                    <p className="px-3 py-2 uppercase break-all bg-white text-crimson w-fit md:text-2xl sm:text-lg font-kony rounded-xl">
                        En savoir plus
                    </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};
