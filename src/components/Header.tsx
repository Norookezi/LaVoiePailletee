import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="relative overflow-clip">
            <img
                className="absolute object-cover w-screen h-full -z-50"
                src="images/degrade.webp"
                aria-hidden="true"
            />

            {/* Conteneur Flex pour le logo et le titre */}
            <div className="flex flex-col items-center justify-between w-full h-full px-4 md:flex-row sm:px-8 md:px-16">
                {/* Logo à gauche */}
                <Link to="/" aria-label="Bouton retour a l'acceuil" role="button">
                    <img
                        className="md:left-[2.5vw] md:absolute md:top-1/2 md:-translate-y-1/2 w-auto max-w-36 sm:max-w-44 lg:max-w-48 h-auto z-50"
                        src="images/lvp_colored.webp"
                        alt="Logo de l'évènement la voie pailletée"
                        aria-hidden="true"
                    />
                </Link>

                {/* Titre centré sous le logo */}
                <div className="flex items-center justify-center w-full md:pt-24 pb-10 md:pb-16 leading-none text-center text-white font-kony text-[3em] z-10">
                    <h1>La voie Pailletée</h1>
                </div>
            </div>

            {/* <div className='flex items-center justify-end w-screen px-5 pt-1 md:absolute md:top-1/2 md:-translate-y-1/2'>
        <span className='h-fit px-1.5 py-0 text-xl text-white uppercase border-4 border-white rounded-lg font-kony'>
          menu
        </span>
      </div> */}
        </header>
    );
};

export default Header;
