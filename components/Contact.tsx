import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#1a1f26]">
        
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col h-full justify-between space-y-12 py-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                Assuma o controle total dos seus números hoje
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Menos achismo. Mais clareza. Crescimento estruturado com risco reduzido.
              </p>
            </div>

            <div className="space-y-8 mt-auto">
              <div className="space-y-1">
                 <div className="text-gray-400 text-lg font-medium">Fale conosco</div>
                 <div className="text-white text-3xl font-medium tracking-tight hover:text-[#fef7af] transition-colors cursor-pointer">contato@inf8vision.com</div>
              </div>

              {/* Stats/Badge */}
              <div className="inline-flex items-center gap-4 py-3 px-5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                 <div className="flex -space-x-2">
                    <img src="/imgs/man1.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1a1f26] object-cover" />
                    <img src="/imgs/woman1.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1a1f26] object-cover" />
                    <img src="/imgs/man2.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1a1f26] object-cover" />
                 </div>
                 <span className="text-gray-300 text-sm font-medium">Junte-se a empresas líderes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <form className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full bg-black/20 border border-white/10 focus:border-white/30 focus:bg-black/40 rounded-2xl px-5 py-4 text-gray-200 placeholder-gray-600 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email Corporativo</label>
                <input 
                  type="email" 
                  placeholder="nome@empresa.com.br"
                  className="w-full bg-black/20 border border-white/10 focus:border-white/30 focus:bg-black/40 rounded-2xl px-5 py-4 text-gray-200 placeholder-gray-600 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Mensagem</label>
                <textarea 
                  placeholder="Fale um pouco sobre sua empresa..."
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 focus:border-white/30 focus:bg-black/40 rounded-2xl px-5 py-4 text-gray-200 placeholder-gray-600 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Matching Pricing Section */}
              <div className="pt-2">
                <button type="button" className="w-full bg-[#fef7af] hover:bg-[#eae39e] text-black font-semibold py-4 rounded-full flex items-center justify-center gap-3 transition-all group shadow-[0_0_20px_rgba(254,247,175,0.1)]">
                  <span>Falar com um especialista INF8VISION</span>
                  <div className="bg-black text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} strokeWidth={3} />
                  </div>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;