import React from 'react';
import { DIFFERENTIALS_DATA } from '../data/officeConfig';

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F3EE] border-t border-[#D8D0C3]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
              Nossa Abordagem
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-normal text-[#20201E] tracking-tight">
            Um processo próximo, claro e personalizado.
          </h2>
        </div>

        {/* Grid Minimalista dos 5 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {DIFFERENTIALS_DATA.map((item, index) => (
            <div
              key={item.number}
              className={`p-6 sm:p-8 bg-white/60 border border-[#D8D0C3]/70 rounded-xs flex flex-col justify-between transition-all duration-300 hover:border-[#A56A4F]/60 hover:shadow-[0_4px_20px_rgba(32,32,30,0.03)] ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs sm:text-sm font-medium text-[#A56A4F] tabular-nums block mb-4">
                  {item.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#20201E] mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#20201E]/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D0C3]/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A56A4F]" />
                <span className="text-[11px] uppercase tracking-wider text-[#9B9184]">
                  Compromisso arquitetônico
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
