import React from 'react';
import { Instagram, Linkedin, CornerDownRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Newsletter & Contact */}
        <div className="flex flex-col justify-between space-y-12">
          <div>
            <h3 className="text-2xl text-gray-500 mb-6 font-normal">Assine nossa newsletter</h3>
            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-white border border-gray-100 rounded-full py-4 pl-6 pr-36 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900 placeholder-gray-400 shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
                Inscrever
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              {/* X (Twitter) Icon */}
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:shadow-md transition-all text-gray-900 hover:scale-110">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:shadow-md transition-all text-gray-900 hover:scale-110">
                <Instagram size={18} />
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:shadow-md transition-all text-gray-900 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
            
            <a href="mailto:contato@inf8vision.com" className="block text-3xl md:text-5xl font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
              contato@inf8vision.com
            </a>
          </div>
        </div>

        {/* Right Column: Navigation */}
        <div className="flex flex-col justify-between h-full pl-0 md:pl-20">
            <div className="flex gap-12 md:gap-20">
                <div className="flex items-start gap-2 text-gray-500 mt-1">
                    <CornerDownRight size={20} className="stroke-[1.5]" />
                    <span className="font-medium">Páginas</span>
                </div>
                <ul className="space-y-4">
                    <li><a href="#" className="text-lg text-gray-900 font-medium hover:text-gray-500 transition-colors">Início</a></li>
                    <li><a href="#" className="text-lg text-gray-900 font-medium hover:text-gray-500 transition-colors">Sobre</a></li>
                    <li><a href="#" className="text-lg text-gray-900 font-medium hover:text-gray-500 transition-colors">Serviços</a></li>
                    <li><a href="#" className="text-lg text-gray-900 font-medium hover:text-gray-500 transition-colors">Cases</a></li>
                </ul>
            </div>

            <div className="mt-16 md:mt-0 text-gray-400 text-sm md:text-right">
                Designed by INF8VISION. Todos os direitos reservados.
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;