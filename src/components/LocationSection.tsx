import React from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#A56A4F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
              Contato & Visitas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-[#20201E] tracking-tight">
            Onde estamos
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201E]/80 mt-4 leading-relaxed font-normal">
            Nosso escritório está localizado em {OFFICE_CONFIG.city}/{OFFICE_CONFIG.state}, com atendimento presencial e online para clientes de {OFFICE_CONFIG.regionServed}.
          </p>
        </div>

        {/* Grid de Contato & Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Dados de Contato e Horários */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-white/70 border border-[#D8D0C3] rounded-xs">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-2">
                  Endereço do Escritório
                </h3>
                <p className="text-base text-[#20201E] font-medium leading-relaxed">
                  {OFFICE_CONFIG.address}
                </p>
                <p className="text-sm text-[#9B9184]">
                  {OFFICE_CONFIG.neighborhood} · CEP {OFFICE_CONFIG.postalCode}
                </p>
              </div>

              <div className="border-t border-[#D8D0C3]/60 pt-6">
                <h3 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-3">
                  Canais Diretos
                </h3>
                <ul className="space-y-3 text-sm text-[#20201E]">
                  <li className="flex items-center justify-between">
                    <span className="text-[#9B9184]">WhatsApp:</span>
                    <a
                      href={OFFICE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#20201E] hover:text-[#A56A4F] transition-colors"
                    >
                      {OFFICE_CONFIG.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#9B9184]">E-mail:</span>
                    <a
                      href={`mailto:${OFFICE_CONFIG.email}`}
                      className="font-medium text-[#20201E] hover:text-[#A56A4F] transition-colors"
                    >
                      {OFFICE_CONFIG.email}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#9B9184]">Instagram:</span>
                    <a
                      href={OFFICE_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#20201E] hover:text-[#A56A4F] transition-colors"
                    >
                      {OFFICE_CONFIG.instagram}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#D8D0C3]/60 pt-6">
                <h3 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-sm text-[#20201E]/80">
                  Segunda a Sexta: 09h às 18h
                </p>
                <p className="text-xs text-[#9B9184] mt-1">
                  Reuniões presenciais sob agendamento prévio.
                </p>
              </div>
            </div>

            {/* Botão Como Chegar */}
            <div className="pt-8 border-t border-[#D8D0C3]/60">
              <a
                href={OFFICE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs text-xs font-semibold uppercase tracking-widest text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors"
              >
                <span>Como chegar</span>
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Mapa Visual Arquitetônico */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-[#EAE6DF] border border-[#D8D0C3] rounded-xs overflow-hidden flex flex-col justify-between p-6 sm:p-8">
            
            {/* Fundo Gráfico Arquitetônico de Mapa */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8D0C3" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Linhas de quarteirões estilizados */}
                <path d="M 50 120 L 500 120" stroke="#9B9184" strokeWidth="2.5" />
                <path d="M 280 40 L 280 400" stroke="#9B9184" strokeWidth="2.5" />
                <path d="M 100 240 L 450 240" stroke="#D8D0C3" strokeWidth="1.5" />
                <path d="M 160 50 L 160 350" stroke="#D8D0C3" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Top Badge */}
            <div className="relative z-10 self-start bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-xs text-xs text-[#20201E] border border-[#D8D0C3] font-medium">
              São Paulo · Região dos Jardins
            </div>

            {/* Marcador Central Elegante */}
            <div className="relative z-10 self-center my-auto flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#A56A4F]/20 flex items-center justify-center animate-ping" />
                <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-[#20201E] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-display text-sm font-semibold">M</span>
                </div>
              </div>
              <div className="mt-2 bg-[#20201E] text-white px-3 py-1 rounded-xs text-[11px] font-sans font-medium tracking-wide shadow-md">
                Mariana Alencar Arquitetura
              </div>
            </div>

            {/* Rodapé do Card do Mapa */}
            <div className="relative z-10 bg-white/90 backdrop-blur-xs p-4 rounded-xs border border-[#D8D0C3] flex items-center justify-between">
              <div className="text-xs text-[#20201E]">
                <span className="font-semibold block">{OFFICE_CONFIG.address}</span>
                <span className="text-[#9B9184]">Estacionamento conveniado no local</span>
              </div>
              <a
                href={OFFICE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#A56A4F] hover:text-[#20201E] transition-colors"
              >
                Abrir no Google Maps ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
