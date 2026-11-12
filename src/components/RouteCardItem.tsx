import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
  AlertTriangle,
  HelpCircle,
  Eye,
  Target,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { RouteCard } from '../data/guideData';
import { PriorityCodesCard } from './PriorityCodesCard';

interface RouteCardItemProps {
  route: RouteCard;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  defaultExpanded?: boolean;
}

export const RouteCardItem: React.FC<RouteCardItemProps> = ({
  route,
  isFavorite,
  onToggleFavorite,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (route.isPriorityCodesSection || route.id === 'codigos-prioritarios') {
    return (
      <PriorityCodesCard
        route={route}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        defaultExpanded={defaultExpanded}
      />
    );
  }

  return (
    <article
      id={route.id}
      className={`rounded-2xl bg-white border transition-all duration-200 shadow-xs overflow-hidden ${
        route.isInstitutionalProtocol
          ? 'border-red-200 ring-1 ring-red-100'
          : 'border-hospital-200/90 hover:border-hospital-300'
      }`}
    >
      {/* Header bar */}
      <div className="p-4 sm:p-5 flex items-start justify-between gap-3 bg-white border-b border-hospital-100/60">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${route.tagColor}`}>
              {route.badge}
            </span>
            {route.isInstitutionalProtocol && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-red-600" />
                Sujeto a validación HFPS
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-hospital-800 leading-snug">
            {route.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {route.subtitle}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => onToggleFavorite(route.id)}
            className={`p-2 rounded-xl transition-colors ${
              isFavorite
                ? 'text-hospital-600 bg-hospital-100 hover:bg-hospital-200'
                : 'text-slate-400 hover:text-hospital-600 hover:bg-slate-100'
            }`}
            title={isFavorite ? 'Quitar de guardados' : 'Guardar en mis fichas'}
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
            title={isExpanded ? 'Plegar ficha' : 'Desplegar ficha completa'}
            aria-label="Desplegar contenido"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Card Content */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6 bg-hospital-50/20 text-slate-700 text-sm">
          {/* 1. ¿En qué consiste? */}
          <section className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-hospital-500" />
              ¿En qué consiste?
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-hospital-100">
              {route.consistsOf}
            </p>
          </section>

          {/* 2. ¿Qué debes explorar? */}
          <section className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-hospital-500" />
              ¿Qué debes explorar?
            </h4>
            <div className="bg-white p-3.5 rounded-xl border border-hospital-100">
              <ul className="space-y-2">
                {route.explore.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-hospital-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Preguntas orientadoras */}
          <section className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-hospital-500" />
              Preguntas orientadoras recomendadas
            </h4>
            <div className="space-y-2">
              {route.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-hospital-100/70 border border-hospital-200/80 text-hospital-900 font-medium text-xs sm:text-sm flex items-start gap-2.5"
                >
                  <span className="text-hospital-600 font-bold shrink-0">💬</span>
                  <span className="italic">{q}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Objetivo de intervención */}
          <section className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-hospital-500" />
              Objetivo de intervención
            </h4>
            <div className="p-3 rounded-xl bg-white border border-hospital-100 text-xs sm:text-sm text-slate-700 font-medium">
              {route.objective}
            </div>
          </section>

          {/* 5. ¿Cómo puedes intervenir? */}
          <section className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hospital-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-hospital-500" />
              ¿Cómo puedes intervenir? (Pasos prácticos)
            </h4>
            <div className="bg-white p-3.5 rounded-xl border border-hospital-100">
              <ol className="space-y-2.5">
                {route.interventions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-hospital-100 text-hospital-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-hospital-200">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 6. Alerta Recuerda / Precaución */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {route.warning}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

