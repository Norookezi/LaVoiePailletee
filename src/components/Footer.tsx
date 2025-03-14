import React, { JSX } from 'react'

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-[#ffc53e] text-[#eeeeee] text-center py-6 px-4">
        <h1 className="text-2xl md:text-3xl font-extrabold font-['Open_Sans']">La voir pailletée 2025</h1>
        <p className="text-base md:text-lg font-['Roboto'] mt-1">Copyright 2025 <span className="font-bold">La Voie Pailletée</span> & <span className="font-bold">SolidariGames</span></p>
        <p className="text-sm md:text-base italic font-['Roboto'] mt-2 opacity-90">Tous droits réservés</p>
    </footer>
  );
};
