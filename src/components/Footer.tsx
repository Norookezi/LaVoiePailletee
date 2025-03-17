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
        <IconLink link="https://twitch.tv/lavoiepailletee" icon={faTwitch} hoverColor="#9146FF" />
        {/* Instagram Icon */}
        <IconLink link="https://instagram.com/lavoiepailletee/" icon={faInstagram} hoverColor="#E1306C" />
        {/* X Icon */}
        <IconLink link="https://x.com/LaVoiePailletee" icon={faXTwitter} hoverColor="#171717" />
        {/* Threads Icon */}
        <IconLink link="https://threads.net/@lavoiepailletee" icon={faThreads} hoverColor="#3C9EFC" />
        {/* Tiktok Icon */}
        <IconLink link="https://tiktok.com/@lavoiepailletee" icon={faTiktok} hoverColor="#D6004C" />
        {/* Youtube Icon */}
        <IconLink link="https://youtube.com/@lavoiepailletee" icon={faYoutube} hoverColor="#FF0000" />
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
