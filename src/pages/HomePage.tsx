import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import UserCard from '../components/reusable-ui/UserCard';
import Footer from '../components/Footer';
import PartnerSection from '../components/sections/PartnerSection';

const title: string =
  process.env['NODE_ENV'] === 'development'
      ? 'La voie pailletée (DEV)'
      : 'La voie pailletée';

const HomePage: React.FC = () => {
    return (
        <main className="flex flex-col h-full min-h-screen" role="main">
            <title>{title}</title>
            <Header />

            {/* First Section */}
            <section aria-label="Section d'acceuil du site" role="article" className="flex-row-reverse items-center justify-between pt-16 mx-5 mb-10 max-md:mb-10 md:flex md:mb-16">
                <div className="relative md:mx-[5vw] flex-wrap flex-1 self-stretch">
                    <h2 role="text" className="absolute block px-5 pt-2 text-center text-white -translate-y-1/2 shadow-lg md:pt-4 md:px-8 md:-translate-x-1/2 md:top-1/2 left-3 bg-mediumseagreen rounded-3xl whitespace-break-spaces font-kony">
                        <span className="block text-xl">Le 6, 7 et 8 Juin</span>
                        <span className="block text-6xl">2025</span>
                    </h2>
                    <img
                        src="images/gameuse.webp"
                        alt=""
                        className="object-cover object-[60%_0%] w-full h-full"
                    />
                </div>
                <div className="md:mx-[5vw] flex-1">
                    <h2 role="text" className="inline-block px-4 py-4 text-3xl text-center uppercase translate-x-5 bg-white shadow-lg md:bg-transparent mb:px-0 md:text-left md:shadow-none lg:text-6xl -translate-y-1/3 md:translate-y-0 md:translate-x-0 md:text-5xl rounded-xl whitespace-break-spaces font-kony text-crimson">
            Un évènement<br />caritatif unique
                    </h2>
                    <hr className="hidden mb-4 border-t-8 md:block" />
                    <p className="p-5 text-xl md:p-0 md:pb-3" role="text">
            Un nouveau chapitre commence avec
                        <br className="sm:hidden" /> <strong>La Voie Pailletée !</strong>
                        <br className="sm:hidden" /> Soutenir la cause{' '}
                        <abbr role="text" aria-label="L G B T Q I A +">
                            <strong>LGBTQIA+</strong>
                        </abbr>{' '}
            au travers d'une association.
                        <br /> Pleins de paillettes dans vos beaux yeux{' '}
                        <span aria-hidden="true">👀</span>
                    </p>
                    <Link to="/streamers">
                        <div className="flex justify-end px-8 md:justify-start md:px-0">
                            <p role="text" className="px-3 py-2 text-white uppercase w-fit md:text-2xl font-kony rounded-xl bg-mediumseagreen">
                + de 50 streamers<span className="md:hidden"> participent</span>
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* "Le refuge" Section */}
            <section className="flex flex-col items-stretch justify-between flex-1 md:flex-row">
                <div className="relative flex items-center justify-center flex-1 overflow-hidden md:mb-0 min-h-[50vh]">
                    {/* Background image */}
                    <img
                        src="/images/le_refuge_bg.webp"
                        aria-hidden="true"
                        className="absolute object-cover object-center w-full h-full -z-40"
                    />
                    <img
                        src="/images/le_refuge.webp"
                        alt="Logo de l'association Le Refuge"
                        className="w-auto p-5 max-w-[70vw] sm:max-w-[60vw] md:max-w-[35vw]"
                    />
                </div>

                <div className="flex-col justify-start flex-1 px-16 py-16 text-white bg-mediumseagreen md:py-20 md:px-20lg:py-32 lg:px-32flex mx-autow-full h-autosm: h-automd:h-autolg:h-auto lg:w-full">
                    <h2 className="pb-4 text-4xl text-center uppercase break-words sm:text-5xl md:text-5xl lg:text-6xl md:text-left font-kony">
            L'intolérance brise des vies
                    </h2>
                    <p className="pt-4 pb-4 text-lg text-center break-words bg sm:text-xl md:text-lg md:text-left font-roboto">
            Le Refuge, c'est la fondation que nous allons soutenir grâce à vos
            donations. Depuis près de 20 ans, la Fondation Le Refuge agit pour
            briser l'isolement et le suicide des jeunes LGBTQI+, de 14 à 25 ans,
            victimes d'homophobie ou de transphobie et en situation de rupture
            familiale. Elle les héberge et les accompagne vers leur
            reconstruction émotionnelle et matérielle.
                    </p>

                    <Link to="https://le-refuge.org/" aria-label="Bouton de redirection vers le site de l'association Le Refuge" target="_blank">
                        <div className="flex justify-center px-8 md:justify-start md:px-0 sm:w-full">
                            <p className="px-3 py-2 uppercase break-all bg-white text-mediumseagreen w-fit md:text-2xl sm:text-lg font-kony rounded-xl">
                Visiter le site
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Partenaires Section */}
            <PartnerSection />

            {/* Equipe */}
            <section className="relative bg-goldenrod" aria-roledescription="Section équipe de l'évènement">
                <div className="relative flex justify-center p-3 mx-auto mt-14 md:mt-52 w-fit">
                    <img
                        src="images/star.webp"
                        className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2"
                        alt=""
                    />
                    <h3 className="uppercase content-center text-[2rem] w-56 md:text-6xl md:w-auto md:max-w-[50vw] leading-[2.5rem] text-center text-white font-kony">
            Une équipe pailletée
                    </h3>
                    <img
                        src="images/star.webp"
                        className="absolute bottom-0 right-0 w-20 h-20 translate-x-1/2 translate-y-1/2"
                        alt=""
                    />
                </div>
                <div className="flex flex-wrap justify-center w-full pt-10 mt-14 px-7 md:mt-10 md:px-20" aria-roledescription="Section équipe de l'association">
                    <UserCard
                        href="images/team/Camille.webp"
                        name="Camille"
                        job="Présidente de l'association SolidariGames"
                        label={'Camille, Présidente de l\'association SolidariGames'}
                    />
                    <UserCard
                        href="images/team/Petounio.webp"
                        name="Petounio"
                        job="Vice Président de l'association SolidariGames et Fondateur de la Voie Pailletée"
                        label={'Pétounio, Vice Président de l\'association SolidariGames et Fondateur de la Voie Pailletée'}
                    />
                    <UserCard
                        href="images/team/Jimmy.webp"
                        name="Jimmy"
                        job="Trésorier"
                    />
                    <UserCard
                        href="images/team/GeekLawliet.webp"
                        name="GeekLawliet"
                        job="Secrétaire"
                        label="GuikLawliet, Secrétaire"
                    />
                    <UserCard
                        href="images/team/MissVeronicaLife.webp"
                        name="MissVeronicaLife"
                        job="Responsable Boutique"
                    />
                    <UserCard
                        href="images/team/Matsu.webp"
                        name="Matsu"
                        job="Responsable Modération"
                        label="Mat sou, Responsable Modération"
                    />
                    <UserCard
                        href="images/team/Natiel.webp"
                        name="Natiel"
                        job="Responsable Recrutement"
                        label="Na tièl Responsable Recrutement"
                    />
                    <UserCard
                        href="images/team/NobodyZ.webp"
                        name="NobodyZ"
                        job="Responsable Artistique"
                    />
                    <UserCard
                        href="images/team/Valcka.webp"
                        name="Valcka"
                        job="Responsable Réseaux Sociaux"
                    />
                </div>
                <div className="relative flex justify-center p-3 mx-auto mt-14 md:mt-52 w-fit">
                    <img
                        src="images/star.webp"
                        className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2"
                        alt=""
                    />
                    <h3 className="uppercase content-center text-[2rem] w-56 md:text-6xl md:w-auto md:max-w-[50vw] leading-[2.5rem] text-center text-white font-kony">
            Site web
                    </h3>
                    <img
                        src="images/star.webp"
                        className="absolute bottom-0 right-0 w-20 h-20 translate-x-1/2 translate-y-1/2"
                        alt=""
                    />
                </div>
                <div className="flex flex-wrap justify-center w-full pt-10 mt-14 px-7 md:mt-10 md:px-20">
                    <UserCard
                        href="images/team/Norookezi.webp"
                        name="norookezi"
                        job="Hébergement, développement & DevOps"
                        label="Noroukézi, Hébergement, développement & DevOps"
                    />
                    <UserCard
                        href="images/team/h0ldhaven.webp"
                        name="h0ldhaven"
                        job="Responsable concepteur développeur"
                        label="Holdhaivenn Responsable concepteur développeur"
                    />
                </div>
            </section>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
};

export default HomePage;
