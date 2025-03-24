import React, { JSX } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import IconLink from "../components/reusable-ui/IconLink";
import { Link } from "react-router-dom";
import { partenaires } from "../partenaires";

const title: string =
  process.env["NODE_ENV"] === "development"
    ? "La voie pailletée (DEV)"
    : "La voie pailletée";

function makePartenaires(): JSX.Element[] {
  const social = (
    socials: {
      name: string;
      icon: IconDefinition;
      href: string;
      className?: string;
    }[]
  ): JSX.Element[] => {
    const elements: JSX.Element[] = socials.map((social) => {
      return (
        <Link to={social.href} className="flex items-center text-black/50 lg:text-xl xl:text-2xl hover:!text-black/70 duration-300 transition-colors">
          <span className="hidden font-kony">{social.name}</span> {/* lg:inline-block */}
          <IconLink
            icon={social.icon}
            link={social.href}
            name={social.name}
            className={`text-black/50 hover:!text-black/70 lg:!text-inherit lg:[&>*]:hover:!scale-[1]  ${social.className}`}
          />
        </Link>
      );
    });

    return elements;
  };
  const Elements: JSX.Element[] = partenaires.map((partenaire) => {
    return (
      <div className="w-auto py-6 group max-w-[75rem]" id={partenaire.name.replace(/ /g,"_")}>
        <div className="flex-[2] md:flex md:group-even:flex-row-reverse justify-between w-auto h-full bg-white p-10 pb-0 md:p-2 shadow-lg shadow-gray-500/50 rounded-xl group-odd:text-right relative">
          <div className="absolute top-0 flex-1 p-10 overflow-hidden md:flex-none md:relative md:p-0 max-sm:!left-1/2 max-sm:top-0 max-sm:-translate-x-1/2 translate-x-[33%] group-even:right-0 group-odd:-translate-x-[52%] -translate-y-1/3 h-52 w-52 lg:w-[15rem] lg:h-[15rem] xl:h-[20rem] xl:w-[20rem] 2xl:w-[25rem] 2xl:h-[25rem]  max-h-full lg:p-4 md:!translate-x-0 md:!translate-y-0">
            <img
              className={`object-contain w-auto h-full p-3 shadow-lg md:shadow-none bg-crimson rounded-xl overflow-hidden aspect-square shadow-gray-500 ${partenaire.className}`}
              src={partenaire.image}
              alt=""
            />
          </div>
          <div className="max-sm:pt-16 max-sm:!m-0 max-sm:justify-center max-sm:text-center group-odd:ml-[4rem] lg:p-4 lg:pt-10 lg:flex flex-col justify-start group-even:mr-[4rem]">
            <span className="text-3xl md:text-4xl font-kony text-crimson lg:text-5xl">
              {partenaire.name}
            </span>
            <p className="text-start lg:text-2xl xl:text-2xl font-roboto" dangerouslySetInnerHTML={{__html: partenaire.description.replace(/\n/g, "</br>")}}>
              
            </p>
            <div className="flex p-3 mt-auto group-odd:justify-end"> 
              {partenaire.socials ? social(partenaire.socials) : ""}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return Elements;
}

const PartnerPage: React.FC = () => {
  return (
    <main className="flex flex-col h-full min-h-screen overflow-x-hidden">
      <title>{title}</title>
      <Header />
      <section className="grid justify-center h-full px-10 pt-5 bg-goldenrod">
        {makePartenaires()}
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default PartnerPage;
