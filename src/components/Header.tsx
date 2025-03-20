import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='relative flex justify-center overflow-clip'>
      <img
        className='absolute object-cover w-screen h-full -z-50'
        src='images/degrade.webp'
        alt=''
      />
      <h1 className='py-4 pb-16 pt-10 md:py-14 px-8 text-[3em] leading-[.9em] tracking-tighter text-center text-white font-kony'>
        La voie Pailletée
      </h1>
    </header>
  );
};

export default Header;
