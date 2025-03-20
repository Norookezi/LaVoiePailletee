import React, { JSX } from 'react';
import { faTwitch, faInstagram, faXTwitter, faThreads, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import IconLink from './reusable-ui/IconLink';

export default function Footer(): JSX.Element {
  return (
    <footer className='w-full px-4 py-6 mt-auto text-center text-white bg-goldenrod'>
      <hr className="border-b-4 max-w-[75vw] w-auto mx-auto my-5 border-black/10" />
      {/* Title of application */}
      <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
        La voie pailletée 2025
      </h1>

      {/* Socials icons */}
      <div className="flex flex-wrap items-center justify-center mt-2 space-x-0 space-y-0">
        {/* Twitch Icon */}
        <IconLink link="https://twitch.tv/lavoiepailletee" icon={faTwitch} className="hover:text-[#9146FF] text-white" />
        {/* Instagram Icon */}
        <IconLink link="https://instagram.com/lavoiepailletee/" icon={faInstagram} className="hover:text-[#E1306C] text-white" />
        {/* X Icon */}
        <IconLink link="https://x.com/LaVoiePailletee" icon={faXTwitter} className="hover:text-[#171717] text-white" />
        {/* Threads Icon */}
        <IconLink link="https://threads.net/@lavoiepailletee" icon={faThreads} className="hover:text-[#3C9EFC] text-white" />
        {/* Tiktok Icon */}
        <IconLink link="https://tiktok.com/@lavoiepailletee" icon={faTiktok} className="hover:text-[#D6004C] text-white" />
        {/* Youtube Icon */}
        <IconLink link="https://youtube.com/@lavoiepailletee" icon={faYoutube} className="hover:text-[#FF0000] text-white" />
      </div>

      {/* Footer text */}
      <p className='mt-1 text-base md:text-lg font-roboto'>
        Copyright © 2025 <span className='font-bold'>La Voie Pailletée</span> &{' '}
        <span className='font-bold'>SolidariGames</span>
      </p>
      <p className='mt-2 text-sm italic md:text-base font- opacity-90'>
        Tous droits réservés
      </p>
    </footer>
  );
}
