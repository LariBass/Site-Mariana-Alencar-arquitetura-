import React from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

export const CtaFinal: React.FC = () => {
  const whatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto de arquitetura.'
  )}`;

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#20201E] text-white overflow-hidden">
      {/* Imagem de Fundo em Tela Cheia */}
      <div className="absolute inset-0 z-0">
        <img
          src={OFFICE_CONFIG.images.ctaBackground}
          alt="Residência arquitetônica contemporânea ao entardecer com iluminação intimista e espelho d'água"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Overlay Escuro Sofisticado */}
        <div className="absolute inset-0 bg-[#20201E]/75 backdrop-blur-[1px]" />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Identificador Superior */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-[1px] bg-[#A56A4F]" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D8D0C3]">
            Primeiro Passo
          </span>
          <span className="w-6 h-[1px] bg-[#A56A4F]" />
        </div>

        {/* Título Principal */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1] mb-6 max-w-2xl">
          Vamos conversar sobre o seu projeto?
        </h2>

        {/* Texto de Apoio */}
        <p className="font-sans text-base sm:text-lg text-[#D8D0C3]/90 leading-relaxed max-w-xl mb-10 font-normal">
          Conte um pouco sobre sua ideia e vamos entender suas necessidades e os próximos passos.
        </p>

        {/* Botão de WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4.5 rounded-xs text-xs font-semibold uppercase tracking-widest text-[#20201E] bg-white hover:bg-[#F5F3EE] hover:text-[#A56A4F] transition-all duration-300 shadow-xl group transform hover:-translate-y-0.5"
        >
          <svg
            className="w-5 h-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
          </svg>
          <span>Falar pelo WhatsApp</span>
        </a>

        {/* Nota de rodapé do CTA */}
        <p className="mt-6 text-xs text-[#9B9184] tracking-wide">
          Atendimento ágil de segunda a sexta-feira · Resposta em horário comercial
        </p>
      </div>
    </section>
  );
};
