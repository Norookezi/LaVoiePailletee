import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const title: string = process.env["NODE_ENV"] === "development" ? "La voie pailletée (DEV)": "La voie pailletée";
const StreamersPage: React.FC = () => {
  return (
    <main className="flex flex-col h-full min-h-screen">
        {/* Dynamic title */}
        <title>{title}</title>

        {/* Header */}
        <Header />

        {/* Page Section */}
        <section>
            <h2 className="
                pb-4 
                pt-4 
                text-3xl 
                text-center 
                uppercase 
                break-words 
                sm:text-4xl 
                md:text-4xl 
                lg:text-5xl 
                md:text-center 
                md:bg-transparent
                font-kony
                text-crimson
            ">
                Les Streameur.euse.s
            </h2>
        </section>

        {/* Footer */}
        <div className="mt-auto">
            <Footer />
        </div>
    </main>
  );
};

export default StreamersPage;