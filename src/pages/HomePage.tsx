import React from 'react'
import Home from '../components/Home';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-[#ffc53e]">
          <Home />
        </main>
        <Footer />
    </div>
  );
};

export default HomePage;