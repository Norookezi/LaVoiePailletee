import React from 'react'
import Home from '../components/Home';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
        <Header />
        <section aria-description="Hero section" className='flex-row-reverse items-center justify-between pt-16 mx-5 md:flex'>
          <div className='relative md:mx-[5vw] flex-1 self-stretch'>
            <h2 className='absolute block px-5 pt-2 text-center text-white -translate-y-1/2 shadow-lg md:pt-4 md:px-8 md:-translate-x-1/2 md:top-1/2 left-3 bg-mediumseagreen rounded-3xl whitespace-break-spaces font-kony'>
              <span className='block text-xl'>Le 6, 7 et 8 Juin</span>
              <span className='block text-6xl'>2025</span>
            </h2>
            <img src="images/gameuse.png" alt="" className='object-cover w-full h-full' />
          </div>
          <div className='md:mx-[5vw] flex-1'>
            <h2 className='inline-block px-4 py-4 text-3xl text-center uppercase translate-x-5 bg-white shadow-lg md:bg-transparent mb:px-0 md:text-left md:shadow-none lg:text-6xl -translate-y-1/3 md:translate-y-0 md:translate-x-0 md:text-5xl rounded-xl whitespace-break-spaces font-kony text-crimson'>
              <span className='block'>Un évènement</span>
              <span className='block'>caritatif unique</span>
            </h2>
            <hr className='hidden mb-4 border-t-8 md:block' />
            <div className='p-5 text-xl md:p-0 md:pb-3'>
              <span className='block mr-2 sm:inline-block'>Un nouveau chapitre commence avec</span>
              <span className='block mr-2 sm:inline-block'><b>La Voie Pailletée !</b></span>
              <span className='block mr-2'>Soutenir la cause <b>LGBTQIA+</b> au travers d’une association.</span>
              <span className='block mr-2'>Pleins de paillettes dans vos beaux yeux 👀</span>
            </div>
            <div className='flex justify-end px-8 md:justify-start md:px-0'>
              <p className="px-3 py-2 text-white uppercase w-fit md:text-2xl font-kony rounded-xl bg-mediumseagreen">+ de 50 streamers<span className='md:hidden'> participent</span></p>
            </div>
          </div>
        </section>
        <Home />
    </div>
  );
};

export default HomePage;