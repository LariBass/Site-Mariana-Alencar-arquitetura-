import React, { useState, useEffect } from 'react';
import { OFFICE_CONFIG } from '../data/officeConfig';

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
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
    }
  };

  const whatsappMessageUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(OFFICE_CONFIG.messages.hero)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D8D0C3]/60 py-4 shadow-[0_2px_12px_rgba(32,32,30,0.03)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Zone - Single Wordmark per Top Bar Contract */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group text-left"
        >
          <span className="font-display text-2xl sm:text-[26px] tracking-tight font-medium text-[#20201E] group-hover:text-[#A56A4F] transition-colors">
            {OFFICE_CONFIG.architectName}
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs tracking-widest uppercase font-sans text-[#9B9184] font-medium">
            Arquitetura
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-sans font-medium text-[#20201E]/80 hover:text-[#20201E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A56A4F] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappMessageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xs text-xs font-semibold uppercase tracking-wider text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 text-[#25D366]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#20201E] hover:text-[#A56A4F] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#20201E] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${
                mobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${
                mobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-full bg-[#F5F3EE] border-b border-[#D8D0C3] shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-sans font-medium text-[#20201E] py-2 border-b border-[#D8D0C3]/30 hover:text-[#A56A4F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xs text-sm font-semibold uppercase tracking-wider text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors"
            >
              <svg
                className="w-4 h-4 text-[#25D366]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
