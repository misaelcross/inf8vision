import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Talita Souza',
      role: 'Head de Produto na Forma',
      quote: "A INF8VISION nos ajudou a organizar nossa operação e escalar muito mais rápido do que imaginávamos. A combinação de estratégia e execução é incomparável.",
      // Colorful portrait with hat
      image: '/imgs/cheerful-businessman-smiling.jpg'
    },
    {
      name: 'Jorge Santos',
      role: 'COO na Metricon',
      quote: "Trabalhar com a INF8VISION foi como ter uma extensão do nosso time. Eles entenderam nossos desafios e entregaram resultados reais e mensuráveis.",
      // Artistic/Colorful portrait
      image: '/imgs/businessman-making-presentation-with-his-colleagues-business-strategy-digital-layer-effect-office-as-concept.jpg'
    },
    {
      name: 'Samuel Torres',
      role: 'Fundador na Bloomtech',
      quote: "Desde a primeira reunião, eles trouxeram clareza para nossa estratégia. Vimos uma melhora significativa na performance do time com dados reais.",
      // Teal/Green background portrait
      image: '/imgs/happy-young-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-office.jpg'
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[24px] p-8 transition-all duration-300 hover:bg-white/60 hover:shadow-sm hover:-translate-y-1"
          >
            {/* Quote Icon */}
            <div className="mb-6 opacity-70">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.321 15.5549 14.9825 14.5073C15.1964 14.1687 15.4181 13.8476 15.6202 13.5686C15.068 13.7845 14.375 13.9168 13.5208 13.7126C12.3789 13.4397 11.5306 12.3961 11.5306 11.1613V6.85243C11.5306 5.54784 12.5882 4.49023 13.8928 4.49023H18.6133C19.9179 4.49023 20.9755 5.54784 20.9755 6.85243V11.1613C20.9755 12.9157 20.3705 16.0967 18.5991 18.5273C17.4764 20.0683 15.8926 20.9754 14.108 20.9996L14.017 21ZM4.97549 21L4.97549 18C4.97549 16.8954 5.27951 15.5549 5.94103 14.5073C6.15492 14.1687 6.37664 13.8476 6.57867 13.5686C6.02649 13.7845 5.33347 13.9168 4.47932 13.7126C3.33742 13.4397 2.48911 12.3961 2.48911 11.1613V6.85243C2.48911 5.54784 3.54672 4.49023 4.85131 4.49023H9.57182C10.8764 4.49023 11.934 5.54784 11.934 6.85243V11.1613C11.934 12.9157 11.329 16.0967 9.55762 18.5273C8.43486 20.0683 6.85108 20.9754 5.06653 20.9996L4.97549 21Z" />
                </svg>
            </div>

            {/* Quote Text */}
            <div className="flex-grow mb-8">
              <p className="text-gray-700 text-[1.05rem] leading-relaxed font-medium">
                {item.quote}
              </p>
            </div>

            {/* Profile Section */}
            <div className="flex items-center justify-between pt-0 mt-auto">
              <div className="pr-4">
                <h4 className="text-gray-900 font-bold text-base">{item.name}</h4>
                <p className="text-gray-500 text-sm mt-0.5">{item.role}</p>
              </div>
              
              <div className="w-12 h-14 rounded-xl overflow-hidden shadow-sm shrink-0 border border-white/20">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Subtle Inner Ring for Depth */}
            <div className="absolute inset-0 pointer-events-none rounded-[24px] ring-1 ring-inset ring-white/50"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;