import React, { JSX } from 'react'

export default function Home(): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-[#ffc53e] text-[#eeeeee] px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-center font-['Open_Sans']">Bienvenue sur la page d'accueil de l'application !</h2>
    </div>
  );
};
