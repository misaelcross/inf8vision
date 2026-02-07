import React from 'react';
import { Hexagon, Box, Triangle, Circle, Layers } from 'lucide-react';

const LogoTicker: React.FC = () => {
  const baseLogos = [
    { name: 'Pluto Inc', icon: Triangle },
    { name: 'VitaHealth', icon: Hexagon },
    { name: 'BoxMedia', icon: Box },
    { name: 'NovaTech', icon: Circle },
    { name: 'LayerSys', icon: Layers },
  ];

  // Create a list long enough to fill wide screens before duplication for the loop
  const logos = [...baseLogos, ...baseLogos];

  return (
    <div className="w-full py-12 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden">
        
        {/* Left Fade - Blending with background color #f3f4f6 */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-20 pointer-events-none"></div>
        
        {/* Right Fade - Blending with background color #f3f4f6 */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex overflow-hidden">
          {/* Inner Track - Moves -50% to create loop */}
          <div className="flex items-center gap-16 md:gap-24 animate-infinite-scroll min-w-max pr-16 md:pr-24">
            
            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div key={`set1-${index}`} className="flex items-center gap-3 select-none opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group">
                <logo.icon className="w-6 h-6 md:w-8 md:h-8 fill-gray-400 stroke-gray-400 group-hover:fill-gray-800 group-hover:stroke-gray-800 transition-colors" />
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-gray-900 tracking-tight transition-colors">{logo.name}</span>
              </div>
            ))}

            {/* Second Set of Logos (Duplicate for Seamless Loop) */}
            {logos.map((logo, index) => (
              <div key={`set2-${index}`} className="flex items-center gap-3 select-none opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group">
                 <logo.icon className="w-6 h-6 md:w-8 md:h-8 fill-gray-400 stroke-gray-400 group-hover:fill-gray-800 group-hover:stroke-gray-800 transition-colors" />
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-gray-900 tracking-tight transition-colors">{logo.name}</span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;