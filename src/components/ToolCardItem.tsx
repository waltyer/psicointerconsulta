import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Bookmark, BookmarkCheck, CheckCircle } from 'lucide-react';
import { ToolCard } from '../data/guideData';

interface ToolCardItemProps {
  tool: ToolCard;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  defaultExpanded?: boolean;
}

export const ToolCardItem: React.FC<ToolCardItemProps> = ({
  tool,
  isFavorite,
  onToggleFavorite,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      id={tool.id}
      className="rounded-2xl bg-white border border-hospital-200/90 hover:border-hospital-300 shadow-xs overflow-hidden transition-all duration-200"
    >
      {/* Header */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-b border-hospital-100/60">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-hospital-800 truncate">
            {tool.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-0.5">
            {tool.purpose}
          </p>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => onToggleFavorite(tool.id)}
            className={`p-2 rounded-xl transition-colors ${
              isFavorite
                ? 'text-hospital-600 bg-hospital-100 hover:bg-hospital-200'
                : 'text-slate-400 hover:text-hospital-600 hover:bg-slate-100'
            }`}
            title={isFavorite ? 'Quitar de guardados' : 'Guardar técnica'}
            aria-label="Marcar como favorita"
          >
            {isFavorite ? (
              <BookmarkCheck className="w-5 h-5 text-hospital-600 fill-hospital-600" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Desplegar contenido"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Body */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-5 bg-hospital-50/20 text-slate-700 text-sm">
          {/* Finalidad */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 mb-1.5">
              Finalidad
            </h4>
            <div className="p-3 rounded-xl bg-white border border-hospital-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {tool.purpose}
            </div>
          </div>

          {/* Pasos ¿Cómo utilizarla? */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 mb-2">
              ¿Cómo utilizarla paso a paso?
            </h4>
            <div className="bg-white p-3.5 rounded-xl border border-hospital-100">
              <ul className="space-y-2.5">
                {tool.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-hospital-500 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Precaución */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-2.5 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="font-medium">{tool.caution}</span>
          </div>
        </div>
      )}
    </div>
  );
};

