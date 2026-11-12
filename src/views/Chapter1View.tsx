import React from 'react';
import { CheckCircle2, AlertTriangle, Eye, Compass } from 'lucide-react';
import { CHAPTER_1_PREPARATION, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter1ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter1View: React.FC<Chapter1ViewProps> = ({ onSelectTab }) => {
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'antes')?.quote || '';

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 1
          </span>
          <span className="text-xs text-slate-400">Preparación de la atención</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_1_PREPARATION.title}
        </h1>
        <div className="p-4 rounded-xl bg-white border border-hospital-200 text-sm text-slate-700 leading-relaxed font-medium">
          <strong className="text-hospital-700">Objetivo del capítulo:</strong> {CHAPTER_1_PREPARATION.objective}
        </div>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Grid: ¿Qué debes revisar? vs ¿Qué debes tener presente? */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ¿Qué debes revisar? */}
        <div className="rounded-2xl bg-white border border-hospital-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-hospital-100">
            <div className="p-2 rounded-xl bg-hospital-100 text-hospital-700">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-hospital-800">¿Qué debes revisar?</h2>
              <p className="text-xs text-slate-500">Antes de ingresar al servicio o habitación</p>
            </div>
          </div>

          <ul className="space-y-3">
            {CHAPTER_1_PREPARATION.whatToReview.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-hospital-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ¿Qué debes tener presente? */}
        <div className="rounded-2xl bg-white border border-hospital-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-hospital-100">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-amber-900">¿Qué debes tener presente?</h2>
              <p className="text-xs text-slate-500">Criterio profesional y consideraciones clínicas</p>
            </div>
          </div>

          <ul className="space-y-3">
            {CHAPTER_1_PREPARATION.whatToKeepInMind.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                  !
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Siguiente paso */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">¿Listo(a) para el acercamiento?</h3>
          <p className="text-xs text-slate-600">Revisa las pautas de presentación y encuadre en el Capítulo 2.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-2')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 2. Abordaje inicial</span>
          <Compass className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

