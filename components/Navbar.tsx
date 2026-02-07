import React from 'react';
import { ArrowRight, Bolt } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-full py-2.5 px-4 md:px-6 flex items-center gap-6 md:gap-12 transition-all duration-300 hover:shadow-md">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg text-gray-900 cursor-pointer">
          <div className="bg-black text-white p-1 rounded-full">
            <Bolt size={16} fill="currentColor" />
          </div>
          <span>INF8VISION</span>
        </div>

        {/* Links - Hidden on very small screens */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Sobre</a>
          <a href="#" className="hover:text-black transition-colors">Soluções</a>
          <a href="#" className="hover:text-black transition-colors">Metodologia</a>
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white text-sm font-medium pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors group">
          <span>Falar com especialista</span>
          <div className="bg-white text-black rounded-full p-1 group-hover:bg-gray-200 transition-colors">
            <ArrowRight size={14} />
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;