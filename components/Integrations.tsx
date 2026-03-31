import React from 'react';
import { ArrowRight } from 'lucide-react';

const logos = [
  { src: '/imgs/logos/Kione.png', alt: 'Kione' },
  { src: '/imgs/logos/Peripan.png', alt: 'Peripan' },
  { src: '/imgs/logos/TRN.png', alt: 'TRN' },
  { src: '/imgs/logos/barto.png', alt: 'Barto' },
  { src: '/imgs/logos/concept ferramentas.png', alt: 'Concept Ferramentas' },
  { src: '/imgs/logos/coufer.png', alt: 'Coufer' },
  { src: '/imgs/logos/guscio.png', alt: 'Guscio' },
  { src: '/imgs/logos/leiloes.png', alt: 'Leilões' },
  { src: '/imgs/logos/m tower.png', alt: 'M Tower' },
  { src: '/imgs/logos/multifor.png', alt: 'Multifor' },
  { src: '/imgs/logos/olga.png', alt: 'Olga' },
  { src: '/imgs/logos/papi.png', alt: 'Papi' },
  { src: '/imgs/logos/pyramid.png', alt: 'Pyramid' },
  { src: '/imgs/logos/Rei do forno alimentos.png', alt: 'Rei do Forno Alimentos' },
];

const col1 = logos.slice(0, 7);
const col2 = logos.slice(7, 14);

const Integrations: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
            Empresas que crescem com consistência possuem algo em comum
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-4 max-w-lg">
            Acreditam em nós.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
            Estruturamos dados, processos e operações para que empresas consigam crescer com previsibilidade, controle e eficiência.
          </p>

          <button className="bg-black text-white text-base font-medium pl-6 pr-2 py-2.5 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg shadow-black/20">
            <span>Conhecer os pilares</span>
            <div className="bg-white text-black rounded-full p-1.5">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>

        {/* Right Column: Vertical Marquee with real logos */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-10 pointer-events-none"></div>
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-2 gap-4 h-full pl-0 md:pl-12">

            {/* Column 1 – scroll up */}
            <div className="flex flex-col gap-4 animate-marquee-up">
              {[...col1, ...col1, ...col1].map((logo, index) => (
                <div
                  key={`col1-${index}`}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-[35%] h-[35%] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Column 2 – scroll down */}
            <div className="flex flex-col gap-4 animate-marquee-down">
              {[...col2, ...col2, ...col2].map((logo, index) => (
                <div
                  key={`col2-${index}`}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-[35%] h-[35%] object-contain"
                  />
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
