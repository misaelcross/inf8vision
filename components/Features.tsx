import React, { useState } from 'react';
import { BarChart2, TrendingUp, Megaphone, Cpu } from 'lucide-react';

type TabKey = 'dados' | 'comercial' | 'marketing' | 'tecnologia';

const featuresData: Record<TabKey, {
  label: string;
  icon: React.ElementType;
  pilar: string;
  title: string;
  description: string;
  items: string[];
  objective: string;
  image: string;
}> = {
  dados: {
    label: 'Dados e Inteligência',
    icon: BarChart2,
    pilar: 'PILAR 1',
    title: 'Business Intelligence e Controladoria de Dados',
    description: 'Transformamos dados em visão estratégica e decisões mais seguras.',
    items: [
      'Power BI personalizado',
      'Integração com sistemas',
      'Modelagem de metas',
      'Dashboards executivos',
      'Indicadores acionáveis',
    ],
    objective: 'Transformar dados em visão estratégica e decisões mais seguras.',
    image: '/imgs/businessman-making-presentation-with-his-colleagues-business-strategy-digital-layer-effect-office-as-concept.jpg',
  },
  comercial: {
    label: 'Estrutura Comercial',
    icon: TrendingUp,
    pilar: 'PILAR 2',
    title: 'Estrutura Comercial',
    description: 'Criar previsibilidade e controle sobre a geração de receita.',
    items: [
      'Organização e gestão de CRM',
      'Funil comercial estruturado',
      'Playbook de vendas',
      'Planejamento e metas',
      'Rotinas de gestão',
      'Projetos de expansão comercial',
    ],
    objective: 'Criar previsibilidade e controle sobre a geração de receita.',
    image: '/imgs/representation-user-experience-interface-design.jpg',
  },
  marketing: {
    label: 'Marketing e Performance',
    icon: Megaphone,
    pilar: 'PILAR 3',
    title: 'Marketing e Performance',
    description: 'Gerar demanda qualificada de forma estruturada e sustentável.',
    items: [
      'Planejamento estratégico',
      'Social media',
      'Tráfego pago',
      'Campanhas integradas',
      'Posicionamento de marca',
      'Integração marketing + vendas',
    ],
    objective: 'Gerar demanda qualificada de forma estruturada e sustentável.',
    image: '/imgs/pexels-mikhail-nilov-7988082.jpg',
  },
  tecnologia: {
    label: 'Tecnologia e Escala',
    icon: Cpu,
    pilar: 'PILAR 4',
    title: 'Tecnologia e Escala Operacional',
    description: 'Transformamos tecnologia em estrutura de gestão e eficiência operacional.',
    items: [
      'Integração entre sistemas (CRM, ERP, marketing, financeiro)',
      'Automação inteligente de processos',
      'Desenvolvimento de agentes de Inteligência Artificial',
      'Criação de softwares e aplicativos sob medida',
      'Eliminação de retrabalho e gargalos operacionais',
    ],
    objective: 'Ajudar empresas a produzir mais, com menos esforço operacional e de pessoas, permitindo escalar o negócio.',
    image: '/imgs/pexels-ebertduran-5412005.jpg',
  },
};

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('dados');
  const activeFeature = featuresData[activeTab];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
          Essa estrutura se organiza em quatro pilares.
        </h2>
        <p className="text-xl text-gray-500 leading-relaxed">
          Nosso papel é transformar dados, processos e operações em uma visão clara para tomada de decisão.
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
            <div className="self-start mb-4">
              <span className="bg-[#fff9c2] text-[#8a7a00] text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                {activeFeature.pilar}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              {activeFeature.title}
            </h3>

            <ul className="space-y-2.5 mb-8">
              {activeFeature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-base">
                  <span className="text-gray-300 mt-[3px] shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-medium text-gray-500 border-t border-gray-100 pt-5">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold mr-1">Objetivo:</span>
              {activeFeature.objective}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
