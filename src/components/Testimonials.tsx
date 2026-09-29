import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/officeConfig';

/* Substituir por depoimentos reais antes da publicação. */
export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 lg:py-36 bg-[#20201E] text-[#F5F3EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#D8D0C3]">
              Depoimentos
            </span>
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-tight font-normal text-white tracking-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Visualização Desktop: 3 colunas elegantes */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-8 bg-[#2A2A28]/50 border border-[#D8D0C3]/15 rounded-xs hover:border-[#A56A4F]/40 transition-colors duration-300"
            >
              <div>
                <span className="font-display text-4xl text-[#A56A4F] select-none block mb-4 leading-none">
                  “
                </span>
                <p className="font-display text-xl lg:text-2xl text-[#F5F3EE] italic leading-relaxed font-light mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D8D0C3]/15">
                <span className="block text-sm font-medium text-white">
                  — {item.clientType}
                </span>
                <span className="block text-xs text-[#9B9184] mt-1">
                  {item.projectInfo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visualização Mobile: Slider / Carrossel Discreto */}
        <div className="md:hidden">
          <div className="p-7 bg-[#2A2A28]/70 border border-[#D8D0C3]/20 rounded-xs min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="font-display text-4xl text-[#A56A4F] block mb-2 leading-none">
                “
              </span>
              <p className="font-display text-xl text-[#F5F3EE] italic leading-relaxed font-light">
                {TESTIMONIALS_DATA[currentIndex].quote}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8D0C3]/15 flex items-center justify-between">
              <div>
                <span className="block text-sm font-medium text-white">
                  — {TESTIMONIALS_DATA[currentIndex].clientType}
                </span>
                <span className="block text-xs text-[#9B9184]">
                  {TESTIMONIALS_DATA[currentIndex].projectInfo}
                </span>
              </div>

              {/* Botões do slider */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full border border-[#D8D0C3]/30 flex items-center justify-center text-xs text-white hover:bg-white/10"
                  aria-label="Depoimento anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full border border-[#D8D0C3]/30 flex items-center justify-center text-xs text-white hover:bg-white/10"
                  aria-label="Próximo depoimento"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Indicadores de Paginação */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-[#A56A4F]' : 'w-2 bg-[#D8D0C3]/40'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
