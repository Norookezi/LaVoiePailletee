import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageLink from '../components/reusable-ui/ImageLink';

const HomePage: React.FC = () => {
  return (
    <main className='flex flex-col h-full min-h-screen'>
        <Header />

        {/* First Section */}
        <section className='flex-row-reverse items-center justify-between pt-16 mx-5 max-md:mb-10 md:flex'>
          <div className='relative md:mx-[5vw] flex-1 self-stretch'>
            <h2 className='absolute block px-5 pt-2 text-center text-white -translate-y-1/2 shadow-lg md:pt-4 md:px-8 md:-translate-x-1/2 md:top-1/2 left-3 bg-mediumseagreen rounded-3xl whitespace-break-spaces font-kony'>
              <span className='block text-xl'>Le 6, 7 et 8 Juin</span>
              <span className='block text-6xl'>2025</span>
            </h2>
            <img src='images/gameuse.png' alt='' className='object-cover w-full h-full' />
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

        {/* Partenaires Section */}
        <section className='flex-1 bg-[#ef476f] py-10 text-white text-center mt-10 md:mt-16 flex flex-col justify-center items-center'>
          <div className="flex flex-col md:flex-col md:items-center md:justify-between md:mx-10">
            <h2 className='text-3xl md:text-5xl font-bold mb-8 md:mb-12 md:mr-10 whitespace-normal md:whitespace-nowrap break-words'>
              Nos partenaires
            </h2>
            <div className='flex flex-wrap justify-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 flex-1 min-w-0'>
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/east_games.webp" imageAlt="partenaire 1" />
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/la_cybergrange.webp" imageAlt="partenaire 2" />
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/ai_licia.webp" imageAlt="partenaire 3" />
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/skillcamp.webp" imageAlt="partenaire 4" />
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/vent_divin.webp" imageAlt="partenaire 5" />
              <ImageLink imageSize={20} link="#" imageSource="images/partenaires/le_shadock.webp" imageAlt="partenaire 6" />
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