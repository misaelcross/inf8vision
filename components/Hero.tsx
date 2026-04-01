import React from 'react';
import { ArrowRight } from 'lucide-react';

const areas = ['Marketing', 'Comercial', 'Financeiro', 'Logística', 'Fiscal'];

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-8 lg:mt-16">

        {/* Left Column: Text Content */}
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            A Infovision organiza seus dados, estrutura sua operação e transforma crescimento em algo previsível.
          </h1>

          <div className="space-y-4">
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Previsibilidade e escala dependem de dados, e esses dados devem estar organizados.
            </p>

            {/* Area pills — arrows absolutely positioned at each wrapper boundary */}
            <div className="flex items-center w-full">
              {areas.map((area, i) => (
                <div key={area} className="relative flex-1 min-w-0">
                  <span className="block w-full bg-white border border-gray-100 text-gray-500 text-[10px] md:text-sm font-medium px-2 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl shadow-sm text-center leading-none">
                    {area}
                  </span>
                  {i < areas.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-[15px] h-[15px] md:w-7 md:h-7 bg-black rounded-full flex items-center justify-center shadow-sm">
                      <ArrowRight size={9} className="text-white md:hidden" />
                      <ArrowRight size={12} className="text-white hidden md:block" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#pilares" className="bg-black text-white text-base font-medium pl-6 pr-2 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all transform hover:scale-105">
              <span>Saiba mais</span>
              <div className="bg-white text-black rounded-full p-1.5">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Visuals (Overlapping Cards) */}
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:justify-end perspective-1000">

          {/* Container to hold the relative positioning context */}
          <div className="relative w-full max-w-[550px] h-full">

            {/* Card 1: Back Card (Top Right) */}
            <div className="absolute top-0 right-0 md:right-4 w-[85%] h-[65%] bg-white p-3 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              {/* Header of the "Card" */}
              <div className="flex justify-between items-center px-2 mb-2">
                <span className="text-sm font-semibold text-gray-700">Dashboard</span>
                <span className="text-xs text-gray-400">Tempo Real</span>
              </div>
              {/* Image representing graphs */}
              <div className="w-full h-[calc(100%-24px)] rounded-xl overflow-hidden relative group">
                <img
                  src="/imgs/pexels-asphotography-95916.jpg"
                  alt="Data Dashboard Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Card 2: Front Card (Bottom Left) */}
            <div className="absolute bottom-4 left-0 md:left-4 w-[60%] h-[55%] bg-white p-3 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 transform rotate-3 hover:rotate-1 transition-transform duration-500 z-20 backdrop-blur-sm bg-opacity-95">
               {/* Header of the "Card" */}
               <div className="px-2 mb-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Lucratividade</div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-gray-900">+22%</span>
                  <span className="text-xs text-emerald-600 font-medium mb-1.5">este mês</span>
                </div>
              </div>

              {/* Image representing detailed chart */}
              <div className="w-full h-[calc(100%-60px)] rounded-xl overflow-hidden relative">
                 <img
                  src="/imgs/pexels-mikhail-nilov-7988082.jpg"
                  alt="Financial Graph Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
