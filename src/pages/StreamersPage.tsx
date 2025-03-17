import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TwitchStreamers from "../components/TwitchStreamers";

const title: string = process.env["NODE_ENV"] === "development" ? "La voie pailletée (DEV)": "La voie pailletée";
const StreamersPage: React.FC = () => {
  return (
    <main className="flex flex-col h-full min-h-screen">
        {/* Dynamic title */}
        <title>{title}</title>

        {/* Header */}
        <Header />

        {/* Page Section */}
        <section className="relative bg-[#eeeeee]">
            <div className="relative flex justify-center p-3 mx-auto mt-14 md:mt-52 w-fit">
                <h2 className="uppercase content-center text-[2rem] w-56 md:text-6xl md:w-auto md:max-w-[50vw] leading-[2.5rem] text-center text-crimson font-kony">
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