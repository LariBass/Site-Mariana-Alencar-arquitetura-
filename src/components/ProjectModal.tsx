import React, { useEffect, useState } from 'react';
import { ProjectItem, OFFICE_CONFIG } from '../data/officeConfig';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectWhatsappUrl = `${OFFICE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    OFFICE_CONFIG.messages.project(project.title)
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#20201E]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-[#F5F3EE] w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl relative border border-[#D8D0C3] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior de controle */}
        <div className="sticky top-0 z-10 bg-[#F5F3EE]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#D8D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#9B9184]">
            <span className="font-medium text-[#A56A4F] uppercase tracking-wider">{project.category}</span>
            <span>·</span>
            <span>{project.location}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#D8D0C3] flex items-center justify-center text-[#20201E] hover:bg-[#20201E] hover:text-white transition-colors duration-200"
            aria-label="Fechar detalhes do projeto"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Imagem Principal */}
          <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden rounded-xs bg-[#D8D0C3]/30">
            <img
              src={activeImage || project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Galeria de Miniaturas se houver mais de 1 */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-16 sm:w-24 sm:h-18 shrink-0 rounded-xs overflow-hidden border-2 transition-all ${
                    activeImage === imgUrl ? 'border-[#A56A4F] opacity-100 scale-102' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Visualizar foto ${idx + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} foto ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Dados e Conceito do Projeto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#D8D0C3]">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3
                  id="modal-project-title"
                  className="font-display text-3xl sm:text-4xl text-[#20201E] font-medium tracking-tight mb-2"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[#9B9184]">
                  {project.category} · {project.location} · {project.year}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-2">
                  Visão Geral
                </h4>
                <p className="text-sm sm:text-base text-[#20201E]/80 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#A56A4F] font-semibold mb-2">
                  Conceito do Projeto
                </h4>
                <p className="text-sm sm:text-base text-[#20201E]/80 leading-relaxed font-normal">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Coluna Lateral: Metadados Técnicos + CTA WhatsApp */}
            <div className="lg:col-span-5 bg-white/70 p-6 rounded-xs border border-[#D8D0C3] flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-xs sm:text-sm">
                <h4 className="text-xs uppercase tracking-widest text-[#20201E] font-semibold pb-2 border-b border-[#D8D0C3]">
                  Especificações Técnicas
                </h4>
                <div className="flex justify-between py-1 border-b border-[#D8D0C3]/40">
                  <span className="text-[#9B9184]">Categoria:</span>
                  <span className="font-medium text-[#20201E]">{project.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D0C3]/40">
                  <span className="text-[#9B9184]">Localização:</span>
                  <span className="font-medium text-[#20201E]">{project.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D0C3]/40">
                  <span className="text-[#9B9184]">Área construída:</span>
                  <span className="font-medium text-[#20201E] tabular-nums">{project.area}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D8D0C3]/40">
                  <span className="text-[#9B9184]">Ano de conclusão:</span>
                  <span className="font-medium text-[#20201E] tabular-nums">{project.year}</span>
                </div>
              </div>

              {/* Botão WhatsApp Focado no Projeto */}
              <div className="pt-2">
                <p className="text-xs text-[#9B9184] mb-3">
                  Gostou deste estilo? Converse conosco para entender a viabilidade no seu espaço.
                </p>
                <a
                  href={projectWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xs text-xs font-semibold uppercase tracking-widest text-white bg-[#20201E] hover:bg-[#A56A4F] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.834.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm0 10.355h-.004c-.87 0-1.722-.234-2.464-.675l-.176-.105-1.831.48.489-1.785-.115-.183c-.484-.77-.74-1.666-.739-2.586.001-2.535 2.064-4.598 4.603-4.598 2.539 0 4.602 2.063 4.602 4.598 0 2.535-2.062 4.598-4.601 4.598l.236.254z" />
                  </svg>
                  <span>Solicitar projeto semelhante</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
