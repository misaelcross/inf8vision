import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Com que tipo de empresas vocês trabalham?",
      answer: "Trabalhamos com empresas em fase de crescimento, startups e PMEs que utilizam múltiplos sistemas e precisam de clareza nos dados para escalar."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Nossa metodologia gera clareza imediata. Na fase de diagnóstico (primeiras semanas) já entregamos insights acionáveis, com evolução contínua mês a mês."
    },
    {
      question: "A INF8VISION integra com meus sistemas atuais?",
      answer: "Sim. Somos especialistas em integrar dados de CRMs, ERPs, planilhas e plataformas de marketing para criar uma fonte única da verdade."
    },
    {
      question: "Vocês oferecem consultoria pontual ou suporte contínuo?",
      answer: "Nosso foco é a gestão contínua, atuando como seu braço de inteligência. Porém, também realizamos diagnósticos e estruturação inicial dependendo da necessidade."
    },
    {
      question: "Como funciona o início do projeto?",
      answer: "Começamos com uma imersão no seu modelo de negócio para entender seus gargalos, seguida de um mapeamento e limpeza dos seus dados."
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-3 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Header & CTA */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Perguntas<br />
            frequentes
          </h2>
          <p className="text-sm md:text-lg text-gray-500 mb-8 leading-relaxed">
            Tire suas dúvidas sobre como podemos transformar a gestão da sua empresa através dos dados.
          </p>
        </div>

        {/* Right Column: Accordion Container - Matching Features Tabs Container Colors */}
        <div className="lg:col-span-7 bg-gray-200/40 rounded-[24px] p-2 flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`rounded-[20px] px-6 py-5 cursor-pointer transition-all duration-300 group ${
                activeIndex === index 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-gray-200/50'
              }`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-lg font-semibold leading-snug select-none transition-colors duration-300 ${
                  activeIndex === index ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <div className="shrink-0 flex items-center justify-center">
                   <Plus 
                     size={22} 
                     className={`transition-all duration-300 ${
                       activeIndex === index ? 'rotate-45 text-gray-900' : 'text-gray-400 group-hover:text-gray-900'
                     }`} 
                   />
                </div>
              </div>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;