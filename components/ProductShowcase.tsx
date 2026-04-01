import React from 'react';

const features = [
  {
    id: 0,
    number: '01',
    title: 'Crescem sem dominar os próprios números',
    description: 'Decisões baseadas em estimativas, sem acesso a dados reais e atualizados sobre o desempenho do negócio.',
    image: '/imgs/card-analytics.jpg'
  },
  {
    id: 1,
    number: '02',
    title: 'Utilizam CRM sem processos definidos',
    description: 'A ferramenta existe, mas sem processos claros o pipeline vira caos e oportunidades se perdem.',
    image: '/imgs/CARDSINF8/CRM.webp'
  },
  {
    id: 2,
    number: '03',
    title: 'Investem em marketing sem integração com vendas',
    description: 'Campanhas que geram leads que nunca chegam às mãos corretas, desperdiçando orçamento e oportunidades.',
    image: '/imgs/CARDSINF8/MARKETINGVENDAS.jpg'
  },
  {
    id: 3,
    number: '04',
    title: 'Não possuem metas estruturadas',
    description: 'Crescem por inércia, sem objetivos claros por área, tornando impossível avaliar performance real.',
    image: '/imgs/card-goals.jpg'
  },
  {
    id: 4,
    number: '05',
    title: 'Não automatizam processos operacionais',
    description: 'Equipes sobrecarregadas com tarefas manuais que consomem tempo e geram retrabalho constante.',
    image: '/imgs/CARDSINF8/AUTOMATIZAR.webp'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-3 md:px-6">

      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight max-w-3xl">
          80% das empresas crescem sem uma estrutura clara de gestão.
        </h2>
        <p className="text-sm md:text-xl text-gray-500 mt-4 max-w-xl">Isso acontece porque:</p>
      </div>

      {/* Feature Cards Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`
              bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden group
              ${index === 4 ? 'lg:col-span-2' : ''}
            `}
          >
            <div className="flex flex-col lg:flex-row h-full">

              {/* Text Column */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-gray-400 text-lg font-medium mb-4">
                  {feature.number}
                </div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Image Column */}
              <div className="w-full lg:w-1/2 min-h-[250px] lg:min-h-0 relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductShowcase;
