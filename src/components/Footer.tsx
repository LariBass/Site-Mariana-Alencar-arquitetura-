import React from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (targetId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Processo', id: 'processo' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <footer className="bg-[#20201E] text-[#D8D0C3] pt-20 pb-28 md:pb-20 border-t border-[#D8D0C3]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Bloco Superior do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#D8D0C3]/15">
          
          {/* Identidade do Escritório */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl text-white font-medium tracking-tight">
              {OFFICE_CONFIG.architectName} Arquitetura
            </h3>
            <p className="font-sans text-sm text-[#9B9184] leading-relaxed max-w-sm">
              Arquitetura residencial, comercial e interiores. Projetos desenvolvidos com rigor técnico, sensibilidade estética e respeito à vivência de cada espaço.
            </p>
            <div className="pt-2 text-xs text-[#9B9184]">
              <span>Responsável Técnica: </span>
              <span className="text-[#D8D0C3] font-medium">{OFFICE_CONFIG.architectName}</span>
              <span className="mx-2">·</span>
              <span>CAU: </span>
              <span className="text-[#D8D0C3] font-mono tabular-nums">{OFFICE_CONFIG.cau}</span>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="hover:text-white transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dados de Contato */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-4">
              Contato & Localização
            </h4>
            <p className="text-xs text-[#9B9184] uppercase tracking-wider font-semibold">
              Endereço
            </p>
            <p className="text-[#F5F3EE]">
              {OFFICE_CONFIG.address}<br />
              {OFFICE_CONFIG.neighborhood}
            </p>

            <div className="pt-2 space-y-2">
              <p>
                <span className="text-[#9B9184] text-xs block">WhatsApp:</span>
                <a
                  href={OFFICE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#A56A4F] transition-colors"
                >
                  {OFFICE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-[#9B9184] text-xs block">E-mail:</span>
                <a
                  href={`mailto:${OFFICE_CONFIG.email}`}
                  className="text-white hover:text-[#A56A4F] transition-colors"
                >
                  {OFFICE_CONFIG.email}
                </a>
              </p>
              <p>
                <span className="text-[#9B9184] text-xs block">Instagram:</span>
                <a
                  href={OFFICE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#A56A4F] transition-colors"
                >
                  {OFFICE_CONFIG.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Linha Final de Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B9184]">
          <p>© {currentYear} {OFFICE_CONFIG.architectName} Arquitetura. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & Termos</span>
            <span>·</span>
            <span>Registro Profissional CAU {OFFICE_CONFIG.cau}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
