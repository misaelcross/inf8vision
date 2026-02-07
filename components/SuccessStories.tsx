import React from 'react';
import { Box, Circle, Hexagon, Triangle } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      company: 'Gestão Contínua',
      logoIcon: Triangle, 
      logoText: 'Gestão',
      description: 'Não entregamos apenas um projeto pontual. Oferecemos monitoramento constante e acompanhamento da evolução dos seus números.',
      year: '360º',
      // Abstract colorful 3D-like shape
      image: '/imgs/pexels-oguz-kagan-cevik-247212801-30204603.jpg', 
    },
    {
      company: 'Diagnósticos Claros',
      logoIcon: Hexagon,
      logoText: 'Clareza',
      description: 'Entendemos o "porquê" dos números. Identificamos gargalos e oportunidades escondidas nos seus dados.',
      year: 'Insights',
      // Warm plant minimalist
      image: '/imgs/pexels-pixabay-53621.jpg', 
    },
    {
      company: 'Direcionamento',
      logoIcon: Box,
      logoText: 'Ação',
      description: 'Entregamos dados que dizem exatamente o que você deve fazer. Menos relatórios estáticos, mais ação estratégica.',
      year: 'Foco',
      // Pink/Pastel vibe
      image: '/imgs/pexels-mikhail-nilov-7988082.jpg', 
    },
    {
      company: 'Linguagem Acessível',
      logoIcon: Circle,
      logoText: 'Simples',
      description: 'Sem "data difícil". Falamos a língua do dono, traduzindo complexidade técnica em informações de negócio.',
      year: 'Prático',
      // Yellow/Gold minimalist
      image: '/imgs/pexels-ebertduran-5412005.jpg', 
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">O braço estratégico da sua gestão</h2>
        <p className="text-xl text-gray-500 leading-relaxed">
          INF8VISION não entrega apenas dashboards; nós assumimos a responsabilidade pela sua inteligência de negócio.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {stories.map((story, index) => (
          <div 
            key={index} 
            className="group cursor-pointer bg-white/60 backdrop-blur-md border border-white/50 rounded-[24px] p-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-black/5">
               {/* Image */}
               <img 
                 src={story.image} 
                 alt={story.company} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95"
               />
               
               {/* Dark Overlay for Logo Contrast */}
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

               {/* Logo Centered */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-white transform group-hover:scale-105 transition-transform duration-300">
                    <story.logoIcon size={48} strokeWidth={1.5} className="drop-shadow-xl" />
                    <span className="text-2xl font-bold tracking-tight drop-shadow-xl opacity-90">{story.logoText}</span>
                  </div>
               </div>

               {/* Year Badge */}
               <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                 {story.year}
               </div>
            </div>

            {/* Content Content (Below Image) */}
            <div className="px-4 py-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.company}</h3>
              <p className="text-gray-500 leading-relaxed text-base">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center">
        <button className="bg-transparent border border-gray-300 text-gray-900 text-base font-medium px-8 py-3 rounded-full hover:bg-white hover:shadow-sm transition-all hover:border-gray-400">
          Ver como funciona
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;