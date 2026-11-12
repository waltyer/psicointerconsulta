import React, { useState } from 'react';
import { Filter, ChevronRight, ShieldAlert } from 'lucide-react';
import { CHAPTER_4_ROUTES, REFLECTIVE_QUOTES } from '../data/guideData';
import { RouteCardItem } from '../components/RouteCardItem';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter4ViewProps {
  onSelectTab: (tab: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export const Chapter4View: React.FC<Chapter4ViewProps> = ({
  onSelectTab,
  isFavorite,
  onToggleFavorite
}) => {
  const [filter, setFilter] = useState<string>('all');
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'rutas')?.quote || '';

  const filteredRoutes = filter === 'all'
    ? CHAPTER_4_ROUTES
    : CHAPTER_4_ROUTES.filter(r => r.id === filter);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 4
          </span>
          <span className="text-xs text-slate-400">Fichas de situaciones frecuentes y de especial cuidado</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          4. Rutas de orientación clínica
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Cada ruta está diseñada como una ficha de consulta rápida. Mantienen la misma estructura para que puedas revisar en menos de dos minutos: descripción, aspectos por explorar, preguntas clave, objetivo de intervención y precauciones.
        </p>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1 text-slate-400 text-xs mr-1 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>Ver ficha:</span>
        </div>
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
            filter === 'all'
              ? 'bg-hospital-500 text-white shadow-2xs'
              : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
          }`}
        >
          Todas las fichas ({CHAPTER_4_ROUTES.length})
        </button>

        {CHAPTER_4_ROUTES.map((route) => (
          <button
            key={route.id}
            onClick={() => setFilter(route.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 ${
              filter === route.id
                ? 'bg-hospital-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
            }`}
          >
            {route.isInstitutionalProtocol && <ShieldAlert className="w-3 h-3 text-red-500" />}
            <span>{route.title}</span>
          </button>
        ))}
      </div>

      {/* Routes List */}
      <div className="space-y-6">
        {filteredRoutes.map((route) => (
          <RouteCardItem
            key={route.id}
            route={route}
            isFavorite={isFavorite(route.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">¿Deseas profundizar en las técnicas?</h3>
          <p className="text-xs text-slate-600">Revisa la explicación paso a paso de las herramientas en el Capítulo 5.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-5')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 5. Herramientas de intervención</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
