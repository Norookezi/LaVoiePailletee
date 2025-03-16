import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageLink from '../components/reusable-ui/ImageLink';

const HomePage: React.FC = () => {
  return (
    <main className='flex flex-col h-full min-h-screen'>
        <Header />

        {/* First Section */}
        <section className='flex-row-reverse items-center justify-between pt-16 mx-5 mb-10 max-md:mb-10 md:flex md:mb-16'>
          <div className='relative md:mx-[5vw] flex-wrap flex-1 self-stretch'>
            <h2 className='absolute block px-5 pt-2 text-center text-white -translate-y-1/2 shadow-lg md:pt-4 md:px-8 md:-translate-x-1/2 md:top-1/2 left-3 bg-mediumseagreen rounded-3xl whitespace-break-spaces font-kony'>
              <span className='block text-xl'>Le 6, 7 et 8 Juin</span>
              <span className='block text-6xl'>2025</span>
            </h2>
            <img src='images/gameuse.png' alt='' className='object-cover object-[60%_0%] w-full h-full' />
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
              <p className='px-3 py-2 text-white uppercase w-fit md:text-2xl font-kony rounded-xl bg-mediumseagreen'>+ de 50 streamers<span className='md:hidden'> participent</span></p>
            </div>
          </div>
        </section>

        {/* "Le refuge" Section */}
        <section className="flex flex-col items-stretch justify-between flex-1 md:flex-row">
          <div className="relative flex items-center justify-center flex-1 overflow-hidden md:mb-0 min-h-[50vh]">
            {/* Background image */}
            <img src="/images/le_refuge_bg.png" alt="" className='absolute object-cover object-center w-full h-full -z-40' />
            <img src="/images/le_refuge.png" alt="" className='w-auto p-5 max-w-[70vw] sm:max-w-[60vw] md:max-w-[35vw]' />
          </div>

          <div className="
            flex-1 
            bg-[#06d6a0] 
            text-white 
            py-16 px-16 
            md:py-20 md:px-20
            lg:py-32 lg:px-32
            flex flex-col 
            justify-start 
            mx-auto
            w-full h-auto
            sm: h-auto
            md:h-auto
            lg:h-auto lg:w-full
            ">
            <h2 className="pb-4 text-3xl text-center uppercase break-words sm:text-4xl md:text-4xl lg:text-5xl md:text-left font-kony">
              L'intolérance <br/>brise des vies
            </h2>
            <p className="pt-4 pb-4 text-base text-center break-words sm:text-lg md:text-lg md:text-left font-roboto">
              Le Refuge, c'est la fondation que nous allons soutenir grâce à vos donations. 
              Depuis près de 20 ans, la Fondation Le Refuge agit pour briser l'isolement 
              et le suicide des jeunes LGBTQI+, de 14 à 25 ans, victimes d'homophobie 
              ou de transphobie et en situation de rupture familiale. 
              Elle les héberge et les accompagne vers leur reconstruction émotionnelle 
              et matérielle.
            </p>
          </div>
        </section>

        {/* Partenaires Section */}
        <section className='flex-1 bg-[#ef476f] py-10 text-white text-center flex flex-col justify-center shadow-2xl'>
          <div className="flex flex-col lg:flex-row md:items-center md:justify-evenly md:mx-10">
            <h2 className='p-5 text-3xl tracking-wide text-center break-words whitespace-normal md:text-5xl md:whitespace-nowrap font-kony'>
              <span>Partenaires de</span>
              <span className='ml-4 max-2xl:block'>l'évènement</span>
            </h2>

            <div className='grid gap-5 px-[15vw] grid-cols-2 md:grid-cols-6 md:px-0 sm:grid-cols-3 justify-center md:flex-1 items-center lg:max-w-[70rem]'>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://eastgames.org/" imageSource="images/partenaires/east_games.webp" imageAlt="East Games" /></div>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://www.cybergrange.eu/" imageSource="images/partenaires/la_cybergrange.webp" imageAlt="La CyberGrange" /></div>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://www.getailicia.com/fr" imageSource="images/partenaires/ai_licia.webp" imageAlt="Ai Licia" /></div>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://www.skillcamp.gg/" imageSource="images/partenaires/skillcamp.webp" imageAlt="SkillCamp" /></div>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://www.ventdivin.com/" imageSource="images/partenaires/vent_divin.webp" imageAlt="Vent Divin" /></div>
              <div className='flex items-center justify-center'><ImageLink imageSize={20} link="https://shadok-strasbourg.eu/" imageSource="images/partenaires/le_shadok.webp" imageAlt="Le Shadok" /></div>
            </div>
          </div>
        </section>
        <div className="mt-auto">
          <Footer />
        </div>
    </main>
  );
};

export default HomePage;