import React from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const whatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.hero)}`;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identificação Superior */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[1px] bg-[#A56A4F]" />
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#A56A4F]">
                {OFFICE_CONFIG.specialties}
              </p>
            </div>

            {/* Título Principal */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal text-[#20201E] tracking-tight mb-7 text-balance">
              Espaços pensados para a forma como você vive.
            </h1>

            {/* Subtítulo */}
            <p className="font-sans text-base sm:text-lg text-[#20201E]/75 leading-relaxed max-w-xl mb-10 font-normal">
              Projetos residenciais e comerciais desenvolvidos com atenção à funcionalidade, estética e aos detalhes que fazem parte da experiência de cada ambiente.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
              {/* CTA Principal - WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xs text-xs font-semibold uppercase tracking-widest text-white bg-[#20201E] hover:bg-[#A56A4F] transition-all duration-300 shadow-xs group"
              >
                <svg
                  className="w-4 h-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
                </svg>
                <span>Falar pelo WhatsApp</span>
              </a>

              {/* CTA Secundário - Conhecer Projetos */}
              <button
                type="button"
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xs text-xs font-semibold uppercase tracking-widest text-[#20201E] border border-[#20201E]/30 hover:border-[#20201E] hover:bg-[#20201E]/5 transition-all duration-300"
              >
                <span>Conhecer projetos</span>
                <span className="text-[#A56A4F] text-base leading-none">↓</span>
              </button>
            </div>

            {/* Microcredenciais de confiança */}
            <div className="pt-6 border-t border-[#D8D0C3]/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9B9184]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A56A4F]" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <span className="text-[#D8D0C3]">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A56A4F]" />
                <span>Registro CAU Ativo</span>
              </div>
              <span className="text-[#D8D0C3]">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A56A4F]" />
                <span>Projetos Exclusivos</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem Vertical Grande de Arquitetura */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura / Card de Imagem com Borda Refinada */}
              <div className="relative aspect-3/4 overflow-hidden rounded-xs bg-[#D8D0C3]/30 shadow-[0_12px_40px_rgba(32,32,30,0.06)]">
                <img
                  src={OFFICE_CONFIG.images.hero}
                  alt="Arquitetura residencial contemporânea com concreto aparente e brises de madeira"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Legenda Arquitetônica Discreta */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#20201E]/80 backdrop-blur-xs text-white p-3 rounded-xs text-[11px] flex items-center justify-between">
                  <span className="font-display tracking-wide">Casa Horizonte</span>
                  <span className="text-[#D8D0C3]/80">São Paulo · SP</span>
                </div>
              </div>

              {/* Elemento Decorativo Sutil de Linha Arquitetônica */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#D8D0C3] -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#D8D0C3] -z-10" />
            </div>
          </div>

        </div>

        {/* Indicação Visual de Scroll */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#sobre"
            aria-label="Rolar para seção Sobre"
            className="flex flex-col items-center gap-2 group text-[#9B9184] hover:text-[#20201E] transition-colors"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-[#D8D0C3] flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-[#A56A4F] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
