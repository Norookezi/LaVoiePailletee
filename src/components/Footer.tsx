import React, { JSX } from 'react';
import { faTwitch, faInstagram, faXTwitter, faThreads, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import IconLink from './reusable-ui/IconLink';

export default function Footer(): JSX.Element {
  return (
    <footer className='w-full px-4 py-6 mt-auto text-center text-white bg-goldenrod'>
      {/* Title of application */}
      <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
        La voie pailletée 2025
      </h1>

      {/* Socials icons */}
      <div className="flex justify-center mt-2 space-x-3">
        {/* Twitch Icon */}
        <IconLink link="https://twitch.tv/lavoiepailletee" icon={faTwitch} />
        {/* Instagram Icon */}
        <IconLink link="https://instagram.com/lavoiepailletee/" icon={faInstagram} />
        {/* X Icon */}
        <IconLink link="https://x.com/LaVoiePailletee" icon={faXTwitter} />
        {/* Threads Icon */}
        <IconLink link="https://threads.net/@lavoiepailletee" icon={faThreads} />
        {/* Tiktok Icon */}
        <IconLink link="https://tiktok.com/@lavoiepailletee" icon={faTiktok} />
        {/* Youtube Icon */}
        <IconLink link="https://youtube.com/@lavoiepailletee" icon={faYoutube} />
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
