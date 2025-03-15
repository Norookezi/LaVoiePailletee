import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='relative overflow-clip'>
      <img
        className='absolute object-cover w-screen h-full -z-50'
        src='images/degrade.jpg'
        alt=''
      />
      <div className='flex items-center justify-end w-screen px-5 pt-1 md:absolute md:top-1/2 md:-translate-y-1/2'>
        <span className='h-fit px-1.5 py-0 text-xl text-white uppercase border-4 border-white rounded-lg font-kony'>
          menu
        </span>
      </div>
      <h1 className='w-screen py-4 pb-16 md:py-14 px-8 text-[3em] leading-[.9em] tracking-tighter text-center text-white font-kony'>
        La voie Pailletée
      </h1>
    </header>
  );
};

export default Header;
