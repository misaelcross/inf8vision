import React from 'react';

const ProductShowcase: React.FC = () => {
  const features = [
    {
      id: 0,
      number: '01',
      title: 'Relatórios Desconectados',
      description: 'Sua empresa sofre com dados espalhados em vários sistemas e planilhas que não batem entre si, gerando confusão.',
      image: '/imgs/pexels-oguz-kagan-cevik-247212801-30204603.jpg'
    },
    {
      id: 1,
      number: '02',
      title: 'Falta de Confiança',
      description: 'Incerteza sobre as informações recebidas e falta de clareza sobre qual deve ser a próxima prioridade do negócio.',
      image: '/imgs/pexels-mikhail-nilov-7988082.jpg'
    },
    {
      id: 2,
      number: '03',
      title: 'O Resultado',
      description: 'Você gasta tempo tentando entender o que aconteceu no passado, em vez de planejar o que vai acontecer no futuro.',
      image: '/imgs/pexels-ebertduran-5412005.jpg'
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Main Feature Image (App Design Dashboard) */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 mb-12 group">
        {/* Fake Browser UI */}
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="bg-gray-200/50 text-gray-400 text-xs px-3 py-1 rounded-md w-64 text-center font-medium">inf8vision.com/diagnostico</div>
            <div className="w-4"></div>
        </div>
        
        {/* Dashboard Image */}
        <div className="aspect-[16/9] w-full relative bg-gray-100 overflow-hidden">
            <img
                src="/imgs/representation-user-experience-interface-design.jpg"
                alt="App Design Dashboard" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
             {/* Overlay Text for context */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-white/50 transform translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-gray-900 font-semibold text-lg">Sua empresa sofre com o "achismo"?</span>
                </div>
             </div>
        </div>
      </div>

      {/* Feature Cards Area - Static Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {features.map((feature, index) => (
            <div 
                key={feature.id}
                className={`
                    bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden group
                    ${index === 2 ? 'lg:col-span-2' : ''}
                `}
            >
                <div className="flex flex-col lg:flex-row h-full">
                    
                    {/* Text Column - 50% width on desktop */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="text-gray-400 text-lg font-medium mb-4">
                            {feature.number}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-base">
                            {feature.description}
                        </p>
                    </div>

                    {/* Image Column - 50% width on desktop */}
                    <div className="w-full lg:w-1/2 min-h-[250px] lg:min-h-0 relative overflow-hidden">
                        <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay */}
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