import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, gostaria de organizar minha empresa.%0A*Nome:* ${encodeURIComponent(nome)}%0A*Email:* ${encodeURIComponent(email)}`;
    window.open(`https://wa.me/5511912345678?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Form Panel */}
      <div
        className={`fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#25D366] to-[#1aab52] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2 text-white">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg leading-none">Entrar em contato</h3>
                <p className="text-white/75 text-xs mt-1">Responderemos em instantes</p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="px-6 py-6 space-y-4">
            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/10 rounded-2xl px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition-all text-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Corporativo</label>
              <input
                type="email"
                placeholder="nome@empresa.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/10 rounded-2xl px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition-all text-sm"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={!nome || !email}
              className="w-full bg-[#25D366] hover:bg-[#1aab52] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-3 transition-all group mt-2 shadow-[0_4px_14px_rgba(37,211,102,0.35)]"
            >
              <span>Enviar no WhatsApp</span>
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fechar formulário' : 'Abrir WhatsApp'}
        className={`fixed bottom-5 right-4 md:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen
            ? 'bg-[#128C3E] shadow-[0_4px_20px_rgba(18,140,62,0.4)] rotate-0'
            : 'bg-[#25D366] hover:bg-[#1aab52]'
        }`}
      >
        <span
          className={`absolute transition-all duration-300 ${
            isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
          }`}
        >
          <X size={24} className="text-white" strokeWidth={2.5} />
        </span>
        <span
          className={`absolute transition-all duration-300 text-white ${
            isOpen ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`}
        >
          <WhatsAppIcon size={28} />
        </span>
      </button>
    </>
  );
};

export default WhatsAppButton;
