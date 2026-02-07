import React, { useState } from 'react';
import { Monitor, TrendingUp, Layers, Users } from 'lucide-react';

type TabKey = 'portal' | 'kpi' | 'workflow' | 'team';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('portal');

  const featuresData = {
    portal: {
      label: 'Governança',
      icon: Layers,
      title: 'Estruturação e Organização',
      description: 'Realizamos a organização total e integração dos seus sistemas. Garantimos que seus dados tenham integridade e estejam prontos para análise.',
      image: '/imgs/businessman-making-presentation-with-his-colleagues-business-strategy-digital-layer-effect-office-as-concept.jpg'
    },
    kpi: {
      label: 'Dashboards',
      icon: Monitor,
      title: 'Dashboards Executivos',
      description: 'Visão clara para diretores e gerentes. Transformamos números complexos em painéis visuais que permitem decisões rápidas.',
      image: '/imgs/representation-user-experience-interface-design.jpg'
    },
    workflow: {
      label: 'Indicadores',
      icon: TrendingUp,
      title: 'Indicadores por Área',
      description: 'KPIs precisos para Vendas, Financeiro, Operações e Marketing. Cada setor da sua empresa monitorado com a métrica correta.',
      image: '/imgs/pexels-mikhail-nilov-7988082.jpg'
    },
    team: {
      label: 'Evolução',
      icon: Users,
      title: 'Evolução Contínua',
      description: 'Sua inteligência de dados cresce junto com sua empresa. Monitoramento constante e adaptação às novas realidades do seu negócio.',
      image: '/imgs/pexels-ebertduran-5412005.jpg'
    }
  };

  const activeFeature = featuresData[activeTab];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Inteligência transversal</h2>
        <p className="text-xl text-gray-500 leading-relaxed">
          Atuamos de forma profunda em todas as áreas do seu negócio para trazer a clareza que você precisa.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-200/40 p-1.5 rounded-full inline-flex flex-wrap justify-center gap-1 sm:gap-2">
          {(Object.keys(featuresData) as TabKey[]).map((key) => {
            const feature = featuresData[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                <feature.icon size={18} />
                <span>{feature.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Content Card */}
      <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-2 border border-white/50 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-[500px]">
          
          {/* Left Column: Image */}
          <div key={`${activeTab}-img`} className="relative rounded-[20px] overflow-hidden min-h-[300px] lg:min-h-full animate-fade-in group">
             <img 
                 src={activeFeature.image} 
                 alt={activeFeature.label} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>

          {/* Right Column: Text Content */}
          <div key={`${activeTab}-text`} className="flex flex-col justify-center p-8 lg:p-16 animate-slide-up">
            <div className="self-start mb-6">
                <span className="bg-[#fff9c2] text-[#8a7a00] text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                    {activeFeature.label}
                </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              {activeFeature.title}
            </h3>
            
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {activeFeature.description}
            </p>

            {/* Learn More Link */}
            <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700 group">
                Saiba mais sobre {activeFeature.label.toLowerCase()}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;