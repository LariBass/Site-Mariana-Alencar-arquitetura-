import React, { useState } from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.general)}`;

  return (
    <>
      {/* 1. Botão Flutuante no Desktop (Canto Inferior Direito) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className="relative flex items-center">
          {/* Tooltip de Apoio ao Conversar */}
          {showTooltip && (
            <div className="absolute right-full mr-3.5 bg-[#20201E] text-white text-xs px-3.5 py-2 rounded-xs shadow-lg whitespace-nowrap pointer-events-none animate-fade-in border border-[#D8D0C3]/30">
              <span className="font-medium">Iniciar conversa no WhatsApp</span>
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#20201E] rotate-45 border-r border-t border-[#D8D0C3]/30" />
            </div>
          )}

          {/* Botão Flutuante Circular */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:scale-106 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#20201E]"
            aria-label="Abrir conversa no WhatsApp"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
            </svg>
          </a>
        </div>
      </div>

      {/* 2. Barra Fixa no Mobile (Inferior, Max 15% Viewport Cap) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F5F3EE]/95 backdrop-blur-md border-t border-[#D8D0C3] px-4 py-3 shadow-[0_-4px_16px_rgba(32,32,30,0.06)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xs bg-[#25D366] hover:bg-[#1fb855] text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-200 shadow-xs"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
          </svg>
          <span>Falar sobre meu projeto</span>
        </a>
      </div>
    </>
  );
};
