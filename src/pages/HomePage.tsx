import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageLink from "../components/reusable-ui/ImageLink";
import UserCard from "../components/reusable-ui/UserCard";

const title: string = process.env["NODE_ENV"] === "development" ? "La voie pailletée (DEV)": "La voie pailletée";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col h-full min-h-screen">
      <title>{title}</title>
      <Header />

      {/* First Section */}
      <section className="flex-row-reverse items-center justify-between pt-16 mx-5 mb-10 max-md:mb-10 md:flex md:mb-16">
        <div className="relative md:mx-[5vw] flex-wrap flex-1 self-stretch">
          <h2 className="absolute block px-5 pt-2 text-center text-white -translate-y-1/2 shadow-lg md:pt-4 md:px-8 md:-translate-x-1/2 md:top-1/2 left-3 bg-mediumseagreen rounded-3xl whitespace-break-spaces font-kony">
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
          <h2 className="inline-block px-4 py-4 text-3xl text-center uppercase translate-x-5 bg-white shadow-lg md:bg-transparent mb:px-0 md:text-left md:shadow-none lg:text-6xl -translate-y-1/3 md:translate-y-0 md:translate-x-0 md:text-5xl rounded-xl whitespace-break-spaces font-kony text-crimson">
            <span className="block">Un évènement</span>
            <span className="block">caritatif unique</span>
          </h2>
          <hr className="hidden mb-4 border-t-8 md:block" />
          <div className="p-5 text-xl md:p-0 md:pb-3">
            <span className="block mr-2 sm:inline-block">
              Un nouveau chapitre commence avec
            </span>
            <span className="block mr-2 sm:inline-block">
              <b>La Voie Pailletée !</b>
            </span>
            <span className="block mr-2">
              Soutenir la cause <b>LGBTQIA+</b> au travers d’une association.
            </span>
            <span className="block mr-2">
              Pleins de paillettes dans vos beaux yeux 👀
            </span>
          </div>
          <div className="flex justify-end px-8 md:justify-start md:px-0">
            <p className="px-3 py-2 text-white uppercase w-fit md:text-2xl font-kony rounded-xl bg-mediumseagreen">
              + de 50 streamers<span className="md:hidden"> participent</span>
            </p>
          </div>
        </div>
      </section>

      {/* "Le refuge" Section */}
      <section className="flex flex-col items-stretch justify-between flex-1 md:flex-row">
        <div className="relative flex items-center justify-center flex-1 overflow-hidden md:mb-0 min-h-[50vh]">
          {/* Background image */}
          <img
            src="/images/le_refuge_bg.webp"
            alt=""
            className="absolute object-cover object-center w-full h-full -z-40"
          />
          <img
            src="/images/le_refuge.webp"
            alt=""
            className="w-auto p-5 max-w-[70vw] sm:max-w-[60vw] md:max-w-[35vw]"
          />
        </div>

        <div className="flex-col justify-start flex-1 px-16 py-16 text-white bg-mediumseagreen md:py-20 md:px-20lg:py-32 lg:px-32flex mx-autow-full h-autosm: h-automd:h-autolg:h-auto lg:w-full">
          <h2 className="pb-4 text-3xl text-center uppercase break-words sm:text-4xl md:text-4xl lg:text-5xl md:text-left font-kony">
            L'intolérance <br />
            brise des vies
          </h2>
          <p className="pt-4 pb-4 text-base text-center break-words bg sm:text-lg md:text-lg md:text-left font-roboto">
            Le Refuge, c'est la fondation que nous allons soutenir grâce à vos
            donations. Depuis près de 20 ans, la Fondation Le Refuge agit pour
            briser l'isolement et le suicide des jeunes LGBTQI+, de 14 à 25 ans,
            victimes d'homophobie ou de transphobie et en situation de rupture
            familiale. Elle les héberge et les accompagne vers leur
            reconstruction émotionnelle et matérielle.
          </p>
        </div>
      </section>

      {/* Partenaires Section */}
      <section className="flex flex-col justify-center flex-1 py-10 text-center text-white shadow-2xl bg-crimson">
        <div className="flex flex-col lg:flex-row md:items-center md:justify-evenly md:mx-10">
          <h2 className="p-5 text-3xl tracking-wide text-center break-words whitespace-normal md:text-5xl md:whitespace-nowrap font-kony">
            <span>Partenaires de</span>
            <span className="ml-4 max-2xl:block">l'évènement</span>
          </h2>

          <div className="grid gap-5 px-[15vw] grid-cols-2 md:grid-cols-6 md:px-0 sm:grid-cols-3 justify-center md:flex-1 items-center lg:max-w-[70rem]">
            <ImageLink
                imageSize={20}
                link="https://eastgames.org/"
                imageSource="images/partenaires/east_games.webp"
                imageAlt="East Games"
              />
            <ImageLink
                imageSize={20}
                link="https://www.cybergrange.eu/"
                imageSource="images/partenaires/la_cybergrange.webp"
                imageAlt="La CyberGrange"
              />
            <ImageLink
                imageSize={20}
                link="https://www.getailicia.com/fr"
                imageSource="images/partenaires/ai_licia.webp"
                imageAlt="Ai Licia"
              />
            <ImageLink
                imageSize={20}
                link="https://www.skillcamp.gg/"
                imageSource="images/partenaires/skillcamp.webp"
                imageAlt="SkillCamp"
              />
            <ImageLink
                imageSize={20}
                link="https://www.ventdivin.com/"
                imageSource="images/partenaires/vent_divin.webp"
                imageAlt="Vent Divin"
              />
            <ImageLink
                imageSize={20}
                link="https://shadok-strasbourg.eu/"
                imageSource="images/partenaires/le_shadok.webp"
                imageAlt="Le Shadok"
              />
          </div>
        </div>
      </section>
      {/* Equipe */}
      <section className="relative bg-goldenrod">
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
        <div className="flex flex-wrap justify-center w-screen pt-10 mt-14 px-7 md:mt-10 md:px-20">
          <UserCard href="images/team/Camille.webp" name="Camille" job="Présidente de l'association SolidariGames" />
          <UserCard href="images/team/Petounio.webp" name="Petounio" job="CoPrésident de l'association SolidariGames" />
          <UserCard href="images/team/GeekLawliet.webp" name="GeekLawliet" job="Secrétaire" />
          <UserCard href="images/team/MissVeronicaLife.webp" name="MissVeronicaLife" job="Responsable boutique" />
          <UserCard href="images/team/Matsu.webp" name="Matsu" job="Responsable recrutement" />
          <UserCard href="images/team/Natiel.webp" name="Natiel" job="Responsable recrutement" />
          <UserCard href="images/team/NobodyZ.webp" name="NobodyZ" job="Responsable artistique" />
          <UserCard href="images/team/Valcka.webp" name="Valcka" job="Responsable réseaux sociaux" />
          <UserCard href="images/team/Jimmy.webp" name="Jimmy" job="Trésorier" />
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
        <div className="flex flex-wrap justify-center w-screen pt-10 mt-14 px-7 md:mt-10 md:px-20">
          <UserCard href="images/team/Norookezi.webp" name="norookezi" job="Hébergement, développement & DevOps" />
          <UserCard href="images/team/h0ldhaven.webp" name="h0ldhaven" job="Responsable concepteur développeur" />
        </div>
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
