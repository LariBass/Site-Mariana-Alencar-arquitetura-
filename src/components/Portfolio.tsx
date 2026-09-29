import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/officeConfig';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Interiores' | 'Reformas';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('Todos');

  const filters: FilterCategory[] = ['Todos', 'Residencial', 'Comercial', 'Interiores', 'Reformas'];

  const filteredProjects = selectedFilter === 'Todos'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === selectedFilter);

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#A56A4F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#A56A4F]">
                Portfólio
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-normal text-[#20201E] tracking-tight">
              Projetos selecionados
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#20201E]/75 mt-3 max-w-xl font-normal">
              Conheça alguns dos projetos realizados pelo escritório.
            </p>
          </div>

          {/* Filtros Funcionais (Segmented Control per Frontend Design guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#D8D0C3]/30 rounded-xs border border-[#D8D0C3]/60 self-start md:self-end">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#20201E] text-white shadow-xs'
                      : 'text-[#20201E]/70 hover:text-[#20201E] hover:bg-white/40'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Editorial Assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Layout assimétrico deliberado: alternar larguras e alturas
            const isSpan7 = index % 3 === 0 || index === 3;
            const colSpanClass = isSpan7 ? 'lg:col-span-7' : 'lg:col-span-5';
            const aspectClass = isSpan7 ? 'aspect-16/10 sm:aspect-16/11' : 'aspect-4/3 sm:aspect-4/4 lg:aspect-3/4';

            return (
              <div
                key={project.id}
                className={`${colSpanClass} group cursor-pointer`}
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`Ver detalhes do projeto ${project.title}`}
              >
                {/* Imagem do Projeto */}
                <div className={`relative ${aspectClass} overflow-hidden rounded-xs bg-[#D8D0C3]/30 border border-[#D8D0C3]/70 mb-4`}>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} em ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Overlay gradiente suave no hover com botão sutil */}
                  <div className="absolute inset-0 bg-[#20201E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#F5F3EE]/95 text-[#20201E] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-[26px] text-[#20201E] font-medium group-hover:text-[#A56A4F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9B9184] font-normal mt-0.5">
                      {project.category} <span className="mx-1">·</span> {project.location}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#9B9184] font-mono tabular-nums">
                    {project.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mensagem quando nenhum projeto corresponder ao filtro */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-[#D8D0C3] rounded-xs bg-white/40">
            <p className="text-sm text-[#9B9184]">Nenhum projeto encontrado nesta categoria no momento.</p>
            <button
              type="button"
              onClick={() => setSelectedFilter('Todos')}
              className="mt-3 text-xs uppercase tracking-wider font-semibold text-[#A56A4F] hover:underline"
            >
              Ver todos os projetos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
