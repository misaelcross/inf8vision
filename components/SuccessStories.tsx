import React from 'react';

const phases = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Mapeamos a situação atual da empresa, identificando gargalos e oportunidades em cada área.',
  },
  {
    number: '02',
    title: 'Estrutura',
    description: 'Definimos e organizamos os processos, sistemas e ferramentas que darão base ao crescimento.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Colocamos em prática as mudanças estruturais com acompanhamento próximo e dedicado.',
  },
  {
    number: '04',
    title: 'Controle',
    description: 'Monitoramos indicadores e garantimos que a operação funcione dentro do esperado.',
  },
  {
    number: '05',
    title: 'Expansão',
    description: 'Com a base estabelecida, escalamos resultados de forma sustentável e previsível.',
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-3 md:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">
          Modelo de Atuação
        </span>
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
          Da análise à expansão: como estruturamos o crescimento do seu negócio
        </h2>
        <p className="text-sm md:text-xl text-gray-500 leading-relaxed">
          Não atuamos executando tarefas isoladas. Atuamos organizando a base de gestão que sustenta o crescimento do negócio.
        </p>
      </div>

      {/* Phases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {/* Connector arrow – hidden on last item and on mobile */}
            {index < phases.length - 1 && (
              <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 items-center justify-center bg-black rounded-full shadow-sm">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}

            <div className="text-3xl font-bold text-gray-300 mb-4 group-hover:text-gray-400 transition-colors">
              {phase.number}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {phase.title}
            </h3>

            <p className="text-gray-500 leading-relaxed text-sm flex-grow">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
