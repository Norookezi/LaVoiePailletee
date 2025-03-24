import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className='relative flex justify-center overflow-clip'>
      <img
        className='absolute object-cover w-screen h-full -z-50'
        src='images/degrade.webp'
        alt='Gradient background'
      />

      {/* Conteneur Flex pour le logo et le titre */}
      <div className="flex flex-col items-center justify-between w-full h-full px-4 md:flex-row sm:px-8 md:px-16">
        
        {/* Logo à gauche */}
        <Link to="/">
          <img
            className="w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[250px] h-auto z-50"
            src="images/lvp_colored.webp"
            alt="logo"
          />
        </Link>

        {/* Titre centré sous le logo */}
        <div className="flex items-center justify-center w-full pt-12 md:pt-24 pb-16 text-center text-white font-kony text-[3em] z-10">
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
