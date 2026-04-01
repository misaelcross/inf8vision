import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-32 pb-10 w-full">
        <Hero />
        <Integrations />
        <ProductShowcase />
        <Features />
        <Pricing />
        <SuccessStories />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;