import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CHAPTER_5_TOOLS, REFLECTIVE_QUOTES } from '../data/guideData';
import { ToolCardItem } from '../components/ToolCardItem';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter5ViewProps {
  onSelectTab: (tab: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export const Chapter5View: React.FC<Chapter5ViewProps> = ({
  onSelectTab,
  isFavorite,
  onToggleFavorite
}) => {
  const [selectedTool, setSelectedTool] = useState<string>('all');
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'herramientas')?.quote || '';

  const filteredTools = selectedTool === 'all'
    ? CHAPTER_5_TOOLS
    : CHAPTER_5_TOOLS.filter(t => t.id === selectedTool);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 5
          </span>
          <span className="text-xs text-slate-400">Estrategias psicológicas aplicadas</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          5. Herramientas de intervención psicológica
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Técnicas clínicas explicadas paso a paso con sus indicaciones prácticas y precauciones específicas. Consulta cómo aplicarlas sin forzar al paciente y dentro de los límites del rol de practicante.
        </p>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedTool('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
            selectedTool === 'all'
              ? 'bg-hospital-500 text-white shadow-2xs'
              : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
          }`}
        >
          Todas las técnicas ({CHAPTER_5_TOOLS.length})
        </button>

        {CHAPTER_5_TOOLS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              selectedTool === tool.id
                ? 'bg-hospital-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
            }`}
          >
            {tool.name}
          </button>
        ))}
      </div>

      {/* Tools List */}
      <div className="space-y-5">
        {filteredTools.map((tool) => (
          <ToolCardItem
            key={tool.id}
            tool={tool}
            isFavorite={isFavorite(tool.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">¿Cómo concluir el encuentro?</h3>
          <p className="text-xs text-slate-600">Revisa las pautas de cierre, síntesis y continuidad en el Capítulo 6.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-6')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 6. Cierre de la atención</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
