import React from 'react';
import { PROCESS_DATA, OFFICE_CONFIG } from '../data/officeConfig';

export const Process: React.FC = () => {
  const whatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.process)}`;

  return (
    <section id="processo" className="py-20 lg:py-32 bg-[#F5F3EE] border-t border-[#D8D0C3]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
              Metodologia de Trabalho
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-normal text-[#20201E] tracking-tight">
            Do primeiro contato ao desenvolvimento do projeto.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201E]/75 mt-3 max-w-xl font-normal">
            Cada etapa é estruturada com clareza para que você compreenda e participe ativamente da evolução de cada decisão arquitetônica.
          </p>
        </div>

        {/* Timeline Elegante */}
        <div className="relative">
          {/* Linha Conectora Central/Superior */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-[#D8D0C3] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {PROCESS_DATA.map((step) => (
              <div
                key={step.number}
                className="flex flex-col relative pt-2 group"
              >
                {/* Marcador Numérico */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full border border-[#20201E] bg-[#F5F3EE] group-hover:bg-[#20201E] group-hover:text-white flex items-center justify-center font-mono text-xs font-semibold text-[#20201E] transition-colors duration-300 tabular-nums">
                    {step.number}
                  </span>
                  <div className="lg:hidden h-[1px] flex-1 bg-[#D8D0C3]" />
                </div>

                {/* Conteúdo da Etapa */}
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#20201E] mb-3 group-hover:text-[#A56A4F] transition-colors">
                  {step.title}
                </h3>
                
                <p className="font-sans text-sm text-[#20201E]/80 leading-relaxed font-normal mb-3">
                  {step.description}
                </p>

                <p className="font-sans text-xs text-[#9B9184] leading-relaxed italic border-t border-[#D8D0C3]/40 pt-2 mt-auto">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA do Processo */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#D8D0C3] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#20201E]/80 max-w-lg">
            Gostaria de avaliar seu espaço e entender qual o escopo recomendado para sua necessidade?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xs text-xs font-semibold uppercase tracking-widest text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors duration-200 shrink-0"
          >
            <svg
              className="w-4 h-4 text-[#25D366]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
            </svg>
            <span>Quero conversar sobre meu projeto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
