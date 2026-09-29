import React, { useState } from 'react';
import { SERVICES_DATA, OFFICE_CONFIG } from '../data/officeConfig';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getServiceWhatsappUrl = (serviceTitle: string) => {
    return `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.service(serviceTitle))}`;
  };

  const generalWhatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.general)}`;

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-[#F5F3EE] border-t border-[#D8D0C3]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-normal text-[#20201E] tracking-tight">
            Soluções de arquitetura para diferentes necessidades.
          </h2>
        </div>

        {/* Lista Editorial Minimalista */}
        <div className="border-t border-[#D8D0C3]">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className="border-b border-[#D8D0C3] transition-colors duration-200"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(index);
                    }
                  }}
                  className="w-full text-left py-7 sm:py-9 flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-8 group cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#20201E]"
                  aria-expanded={isExpanded}
                >
                  {/* Número e Título */}
                  <div className="flex items-baseline gap-6 sm:gap-10 md:w-5/12">
                    <span className="font-sans text-xs sm:text-sm tracking-widest text-[#9B9184] font-medium tabular-nums">
                      {service.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#20201E] group-hover:text-[#A56A4F] transition-colors font-medium">
                      {service.title}
                    </h3>
                  </div>

                  {/* Descrição e Controle */}
                  <div className="md:w-6/12 flex items-start justify-between gap-6 pl-10 md:pl-0">
                    <p className="font-sans text-sm sm:text-base text-[#20201E]/75 leading-relaxed font-normal">
                      {service.description}
                    </p>
                    
                    {/* Botão com Sinal "+" ou "−" */}
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full border border-[#D8D0C3] flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        isExpanded ? 'bg-[#20201E] text-white border-[#20201E] rotate-45' : 'text-[#20201E] group-hover:border-[#20201E]'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </div>
                  </div>
                </div>

                {/* Detalhes Expansíveis e CTA contextual */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 pb-8 pl-10 md:pl-[calc(41.666%+2.5rem)]' : 'max-h-0'
                  }`}
                >
                  <div className="pt-2 pb-4">
                    <h4 className="text-xs uppercase tracking-wider text-[#9B9184] font-semibold mb-3">
                      Escopo incluído:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#20201E]/80 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#A56A4F]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* WhatsApp CTA contextual */}
                    <a
                      href={getServiceWhatsappUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A56A4F] hover:text-[#20201E] transition-colors py-1 group/btn"
                    >
                      <span>Conversar sobre {service.title} no WhatsApp</span>
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Geral da Seção */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-[#20201E] text-white rounded-xs">
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-normal text-[#F5F3EE] mb-1">
              Tem uma necessidade específica ou projeto sob medida?
            </h4>
            <p className="text-xs sm:text-sm text-[#D8D0C3]/80">
              Podemos orientar sobre as melhores soluções e etapas para o seu espaço.
            </p>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xs text-xs font-semibold uppercase tracking-widest text-[#20201E] bg-[#F5F3EE] hover:bg-white hover:text-[#A56A4F] transition-colors duration-200 shrink-0"
          >
            <svg
              className="w-4 h-4 text-[#25D366]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
            </svg>
            <span>Falar sobre meu projeto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
