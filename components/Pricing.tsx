import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState('owners');

  const plans = {
    owners: {
      name: 'Donos',
      tagline: 'Segurança para decidir',
      price: 'Decisão',
      description: 'Ideal para donos de empresa que precisam sair do operacional e ter segurança nos números para tomar decisões estratégicas.',
      features: [
        'Fim do "achismo"',
        'Visão clara do lucro',
        'Previsibilidade de caixa',
        'Segurança na tomada de decisão',
        'Relatórios executivos diretos'
      ]
    },
    managers: {
      name: 'Gestores',
      tagline: 'Metas baseadas na realidade',
      price: 'Metas',
      description: 'Para gestores e lideranças que buscam acompanhar o desempenho de seus times com dados confiáveis e em tempo real.',
      features: [
        'Acompanhamento de KPIs',
        'Gestão de performance',
        'Alinhamento com a diretoria',
        'Dados confiáveis',
        'Foco no que traz resultado'
      ]
    },
    growth: {
      name: 'Empresas',
      tagline: 'Em fase de crescimento',
      price: 'Escala',
      description: 'Empresas que operam com múltiplos sistemas e precisam integrar dados para escalar de forma organizada e sustentável.',
      features: [
        'Integração de múltiplos sistemas',
        'Governança de dados',
        'Processos estruturados',
        'Dashboards integrados',
        'Suporte ao crescimento'
      ]
    }
  };

  const currentPlan = plans[activePlan as keyof typeof plans];

  return (
    <section className="relative w-full py-24" id="pricing">
        
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
          <img
              src="/imgs/pexels-pixabay-53621.jpg"
              alt="Abstract Dark Background" 
              className="w-full h-full object-cover"
          />
          {/* Dark overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 p-0 md:p-8">
          
          {/* Left Column: Header, Tabs, Social Proof */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Para quem é?</h2>
              
              <div className="space-y-4 max-w-md bg-black/20 p-2 rounded-3xl backdrop-blur-sm border border-white/5">
                {(Object.keys(plans) as Array<keyof typeof plans>).map((planKey) => (
                    <button
                        key={planKey}
                        onClick={() => setActivePlan(planKey)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex justify-between items-center group relative overflow-hidden ${
                            activePlan === planKey 
                            ? 'bg-white/10 shadow-lg border border-white/10 translate-x-2' 
                            : 'hover:bg-white/5 border border-transparent opacity-60 hover:opacity-100'
                        }`}
                    >
                        <div className="relative z-10">
                            <div className="font-semibold text-lg text-white">{plans[planKey].name}</div>
                            <div className="text-sm text-gray-300 mt-1">{plans[planKey].tagline}</div>
                        </div>
                        {activePlan === planKey && (
                            <div className="bg-white/20 rounded-full p-1 text-white relative z-10">
                                <ArrowRight size={16} />
                            </div>
                        )}
                    </button>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-4 bg-white/5 p-4 rounded-2xl border border-white/5 inline-flex items-center gap-4 backdrop-blur-sm max-w-fit">
                <div className="flex -space-x-3">
                    <img src="/imgs/cheerful-businessman-smiling.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover" />
                    <img src="/imgs/businessman-making-presentation-with-his-colleagues-business-strategy-digital-layer-effect-office-as-concept.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover" />
                    <img src="/imgs/happy-young-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-office.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover" />
                    <img src="/imgs/pexels-ebertduran-5412005.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover" />
                </div>
                <div>
                    <div className="text-white font-bold text-sm">Empresas Analisadas</div>
                    <div className="text-gray-400 text-xs">+50 projetos entregues</div>
                </div>
            </div>
          </div>

          {/* Right Column: Active Plan Card */}
          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-[24px] p-8 md:p-10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] animate-fade-in duration-500">
                
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-full bg-white/10 text-white border border-white/5">
                        <Sparkles size={18} fill="currentColor" className="text-yellow-200" />
                    </div>
                    <span className="text-2xl font-medium text-white">{currentPlan.name}</span>
                </div>

                {/* Price (Repurposed as Benefit) */}
                <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-5xl font-semibold text-white tracking-tight">{currentPlan.price}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300/80 mb-8 leading-relaxed text-base">
                    {currentPlan.description}
                </p>

                {/* Action Button - Light Yellow */}
                <button className="w-auto bg-[#fef7af] hover:bg-[#eae39e] text-black font-semibold py-3 pl-6 pr-2 rounded-full flex items-center gap-3 transition-all mb-10 group shadow-[0_0_20px_rgba(254,247,175,0.3)]">
                    <span>Falar com consultor</span>
                    <div className="bg-black text-white p-1.5 rounded-full group-hover:rotate-45 transition-transform duration-300">
                        <ArrowRight size={14} />
                    </div>
                </button>

                {/* Features */}
                <div className="space-y-4 border-t border-white/10 pt-8">
                    {currentPlan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300/90">
                            <div className="rounded-full bg-white/10 p-1">
                                <Check size={12} className="text-white shrink-0" strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;