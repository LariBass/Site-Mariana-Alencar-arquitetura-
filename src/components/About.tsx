import React from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const whatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Olá Mariana! Li sobre seu processo de trabalho no site e gostaria de conversar sobre um projeto.'
  )}`;

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#F5F3EE] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Fotografia Profissional do Arquiteto (Lado Esquerdo na Desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-3/4 overflow-hidden rounded-xs bg-[#D8D0C3]/30 shadow-xs relative">
                <img
                  src={OFFICE_CONFIG.images.architect}
                  alt={`Fotografia profissional da arquiteta ${OFFICE_CONFIG.architectName} em seu estúdio de arquitetura`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Tag com dados profissionais */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#9B9184] px-1">
                <span>{OFFICE_CONFIG.architectName}</span>
                <span>Arquiteta e Urbanista · CAU {OFFICE_CONFIG.cau}</span>
              </div>
            </div>
          </div>

          {/* Conteúdo Textual (Lado Direito na Desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Pequeno Título */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1px] bg-[#A56A4F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
                Sobre o Escritório
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-[#20201E] tracking-tight mb-8">
              Seu projeto começa com uma boa conversa.
            </h2>

            {/* Texto Descritivo */}
            <div className="space-y-5 text-[#20201E]/80 text-base sm:text-[17px] leading-relaxed font-normal mb-10">
              <p>
                Cada pessoa tem uma necessidade diferente para o espaço que deseja construir, reformar ou transformar.
              </p>
              <p>
                Por isso, nosso trabalho começa entendendo o que você procura, como utiliza o ambiente e quais são suas prioridades.
              </p>
              <p>
                A partir dessas informações, desenvolvemos soluções de arquitetura que consideram funcionalidade, estética e as características de cada projeto.
              </p>
            </div>

            {/* Informações Rápidas (Grid Arquitetônico Minimalista) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#D8D0C3]/60 mb-10">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#9B9184] mb-1">
                  Registro
                </span>
                <span className="font-medium text-[#20201E] text-sm sm:text-base">
                  CAU {OFFICE_CONFIG.cau}
                </span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#9B9184] mb-1">
                  Atuação
                </span>
                <span className="font-medium text-[#20201E] text-sm sm:text-base">
                  Residencial e Comercial
                </span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#9B9184] mb-1">
                  Atendimento
                </span>
                <span className="font-medium text-[#20201E] text-sm sm:text-base">
                  Presencial e Online
                </span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#9B9184] mb-1">
                  Região
                </span>
                <span className="font-medium text-[#20201E] text-sm sm:text-base">
                  {OFFICE_CONFIG.city} / {OFFICE_CONFIG.state}
                </span>
              </div>
            </div>

            {/* CTA da Seção */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xs text-xs font-semibold uppercase tracking-widest text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors duration-200"
              >
                <span>Conheça o escritório</span>
                <span className="text-[#A56A4F] group-hover:text-white transition-colors">→</span>
              </a>

              <button
                type="button"
                onClick={onContactClick}
                className="text-xs uppercase tracking-widest font-semibold text-[#20201E]/75 hover:text-[#20201E] py-3 px-4 transition-colors"
              >
                Ver localização do espaço
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
