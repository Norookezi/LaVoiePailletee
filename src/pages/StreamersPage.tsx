import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TwitchStreamers from "../components/sections/TwitchStreamersSection";

const title: string = process.env["NODE_ENV"] === "development" ? "La voie pailletée (DEV)": "La voie pailletée";
const StreamersPage: React.FC = () => {
  return (
    <main className="flex flex-col h-full min-h-screen">
        {/* Dynamic title */}
        <title>{title}</title>

        {/* Header */}
        <Header />

        {/* Page Section */}
        <section className="relative bg-white flex flex-col">
            <div className="justify-center p-3 mx-auto mt-14 md:mt-20 w-fit">
            <h2 className="uppercase text-center text-crimson font-kony break-all 
                    text-sm sm:text-lg md:text-4xl lg:text-6xl w-auto md:w-auto md:max-w-[50vw] leading-[2.5rem]">
                    Les Streameur.euse.s
                </h2>
            </div>
            
            <TwitchStreamers />
        </section>

        {/* Footer */}
        <div className="mt-auto">
            <Footer />
        </div>
    </main>
  );
};

export default StreamersPage;