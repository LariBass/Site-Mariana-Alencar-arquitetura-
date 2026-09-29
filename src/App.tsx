/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Differentials } from './components/Differentials';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaFinal } from './components/CtaFinal';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/officeConfig';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#20201E] flex flex-col relative selection:bg-[#A56A4F]/20 selection:text-[#20201E]">
      {/* Header Fixo / Sticky com transição no scroll */}
      <Header onNavigate={scrollToSection} />

      {/* Conteúdo Principal com Fluxo Editorial Arquitetônico */}
      <main className="flex-1">
        {/* 1. Hero: Visualização do Projeto & Proposta de Valor */}
        <Hero onExploreProjects={() => scrollToSection('projetos')} />

        {/* 2. Sobre: Conhecimento do Arquiteto & Filosofia */}
        <About onContactClick={() => scrollToSection('contato')} />

        {/* 3. Serviços: Soluções de Arquitetura em Formato Editorial */}
        <Services />

        {/* 4. Portfólio: Projetos Selecionados & Grid Assimétrico */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Diferenciais: Metodologia e Valores Práticos */}
        <Differentials />

        {/* 6. Processo: Timeline do Primeiro Contato à Entrega */}
        <Process />

        {/* 7. Prova Social: Depoimentos de Clientes (Fundo Grafite) */}
        <Testimonials />

        {/* 8. FAQ: Dúvidas Frequentes em Accordion */}
        <Faq />

        {/* 9. CTA Final: Fotografia Panorâmica em Tela Cheia */}
        <CtaFinal />

        {/* 10. Localização & Contatos */}
        <LocationSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer onNavigate={scrollToSection} />

      {/* Canais Fixos e Flutuantes de WhatsApp (Desktop + Mobile) */}
      <WhatsAppFloating />

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
