import React, { JSX } from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className='w-full px-4 py-6 mt-auto text-center text-white bg-goldenrod'>
      <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
        La voir pailletée 2025
      </h1>
      <p className='mt-1 text-base md:text-lg font-roboto'>
        Copyright 2025 <span className='font-bold'>La Voie Pailletée</span> &{' '}
        <span className='font-bold'>SolidariGames</span>
      </p>
      <p className='mt-2 text-sm italic md:text-base font- opacity-90'>
        Tous droits réservés
      </p>
    </footer>
  );
}
