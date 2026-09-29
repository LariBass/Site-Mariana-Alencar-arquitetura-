import React, { useState } from 'react';
import { FAQ_DATA, OFFICE_CONFIG } from '../data/officeConfig';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappGeneralUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Estava lendo as dúvidas frequentes no site e gostaria de esclarecer uma questão sobre meu projeto.'
  )}`;

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F5F3EE] border-t border-[#D8D0C3]/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
              Dúvidas Comuns
            </span>
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-[#20201E] tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="font-sans text-sm text-[#20201E]/75 mt-3 font-normal">
            Esclarecimentos práticos sobre as primeiras etapas de contratação e desenvolvimento do projeto.
          </p>
        </div>

        {/* Accordion Minimalista */}
        <div className="border-t border-[#D8D0C3]">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#D8D0C3] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left py-6 sm:py-7 flex items-center justify-between gap-6 group cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#20201E]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-2xl text-[#20201E] font-medium group-hover:text-[#A56A4F] transition-colors">
                    {item.question}
                  </span>
                  
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border border-[#D8D0C3] flex items-center justify-center text-xs transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#20201E] text-white border-[#20201E]' : 'text-[#20201E] group-hover:border-[#20201E]'
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-sm sm:text-base text-[#20201E]/80 leading-relaxed font-normal pr-8 sm:pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de Ajuda / WhatsApp */}
        <div className="mt-12 p-6 bg-white/70 border border-[#D8D0C3] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display text-lg text-[#20201E] font-medium">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#9B9184]">
              Envie uma mensagem pelo WhatsApp para conversar diretamente com nosso escritório.
            </p>
          </div>

          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors shrink-0"
          >
            <span>Tirar dúvidas pelo WhatsApp</span>
            <span className="text-[#25D366]">💬</span>
          </a>
        </div>

      </div>
    </section>
  );
};
