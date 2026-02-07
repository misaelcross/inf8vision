import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrationLogos = [
    // Top Row
    {
      bg: 'bg-white',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" stroke="#3b82f6" strokeWidth="6" strokeOpacity="0.3" />
          <path d="M20 5A15 15 0 0 1 35 20" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      bg: 'bg-white',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="20" height="20" rx="4" fill="#a855f7" fillOpacity="0.2" />
          <path d="M10 20L20 10L30 20L20 30L10 20Z" fill="#a855f7" />
        </svg>
      )
    },
    // Row 2
    {
      bg: 'bg-white',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="20" r="10" fill="#06b6d4" fillOpacity="0.8" />
          <circle cx="26" cy="20" r="10" fill="#f97316" fillOpacity="0.8" style={{ mixBlendMode: 'multiply' }} />
        </svg>
      )
    },
    {
      bg: 'bg-white',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="30" height="30" rx="8" fill="#ea580c" />
          <circle cx="20" cy="20" r="8" fill="white" />
          <circle cx="20" cy="20" r="4" fill="#ea580c" />
        </svg>
      )
    },
    // Row 3
    {
      bg: 'bg-white',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10C5 7.23858 7.23858 5 10 5H30C32.7614 5 35 7.23858 35 10V30C35 32.7614 32.7614 35 30 35H10C7.23858 35 5 32.7614 5 30V10Z" fill="#f97316" />
          <path d="M20 10L23 17L30 20L23 23L20 30L17 23L10 20L17 17L20 10Z" fill="white" />
        </svg>
      )
    },
    {
        bg: 'bg-white',
        icon: (
          <div className="flex items-center gap-1 font-bold text-slate-800 text-xs">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500"></div>
            <span>data</span>
          </div>
        )
      },
      // Row 4
      {
        bg: 'bg-white',
        icon: (
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="5" width="8" height="30" rx="4" fill="#3b82f6" />
            <rect x="35" y="16" width="8" height="30" rx="4" transform="rotate(90 35 16)" fill="#3b82f6" />
          </svg>
        )
      },
      {
        bg: 'bg-white',
        icon: (
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="14" fill="#e2e8f0" />
            <path d="M20 20L34 20A14 14 0 0 1 20 34V20Z" fill="#7c3aed" />
            <path d="M20 20V6A14 14 0 0 1 34 20H20Z" fill="#f97316" />
          </svg>
        )
      },
      // Row 5
      {
        bg: 'bg-white',
        icon: (
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L35 30H5L20 5Z" fill="#60a5fa" />
          </svg>
        )
      },
      {
        bg: 'bg-white',
        icon: (
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="24" height="16" rx="2" fill="#94a3b8" />
            <path d="M8 20L20 28L32 20" stroke="white" strokeWidth="2" />
          </svg>
        )
      }
  ];

  // Split logos into two columns for the marquee effect
  const col1 = integrationLogos.slice(0, 5);
  const col2 = integrationLogos.slice(5, 10);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Content */}
        <div className="relative">
            {/* Background Decorations */}
            <div className="absolute -left-12 top-24 text-gray-200"><Plus size={24} strokeWidth={1} /></div>
            <div className="absolute left-1/3 top-24 text-gray-200"><Plus size={24} strokeWidth={1} /></div>
            <div className="absolute left-2/3 top-24 text-gray-200"><Plus size={24} strokeWidth={1} /></div>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Um processo simples e objetivo</h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
                Nossa metodologia foi desenhada para gerar clareza imediata e resultados contínuos para sua empresa.
            </p>

            <button className="bg-black text-white text-base font-medium pl-6 pr-2 py-2.5 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all transform hover:scale-105 mb-16 shadow-lg shadow-black/20">
                <span>Começar agora</span>
                <div className="bg-white text-black rounded-full p-1.5">
                    <ArrowRight size={16} />
                </div>
            </button>

            <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">01</div>
                    <div>
                        <span className="block text-lg text-gray-900 font-bold pt-1">Entendimento & Organização</span>
                        <p className="text-gray-600 mt-1">Mergulhamos no seu negócio, integramos e limpamos seus dados.</p>
                    </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">02</div>
                     <div>
                        <span className="block text-lg text-gray-900 font-bold pt-1">Definição & Entrega</span>
                        <p className="text-gray-600 mt-1">Estabelecemos o que importa medir e geramos clareza imediata para gestores.</p>
                    </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5">03</div>
                     <div>
                        <span className="block text-lg text-gray-900 font-bold pt-1">Acompanhamento</span>
                        <p className="text-gray-600 mt-1">Ajustes e suporte contínuo para o seu crescimento.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Vertical Marquee */}
        <div className="relative h-[600px] overflow-hidden mask-linear-fade">
            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-10 pointer-events-none"></div>
            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-10 pointer-events-none"></div>

            <div className="grid grid-cols-2 gap-4 h-full pl-0 md:pl-12">
                
                {/* Column 1 - Marquee Up */}
                <div className="flex flex-col gap-4 animate-marquee-up">
                    {[...col1, ...col1, ...col1].map((item, index) => (
                        <div 
                            key={`col1-${index}`} 
                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
                
                {/* Column 2 - Marquee Down */}
                <div className="flex flex-col gap-4 animate-marquee-down">
                    {[...col2, ...col2, ...col2].map((item, index) => (
                        <div 
                            key={`col2-${index}`} 
                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Integrations;