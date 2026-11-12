import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';
import { CHAPTER_6_CLOSURE, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter6ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter6View: React.FC<Chapter6ViewProps> = ({ onSelectTab }) => {
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'cierre')?.quote || '';

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 6
          </span>
          <span className="text-xs text-slate-400">Finalización del encuentro</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_6_CLOSURE.title}
        </h1>
        <div className="p-4 rounded-xl bg-white border border-hospital-200 text-sm text-slate-700 leading-relaxed font-medium">
          <strong className="text-hospital-700">Objetivo del capítulo:</strong> {CHAPTER_6_CLOSURE.objective}
        </div>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Guidelines Grid */}
      <div className="space-y-4">
        {CHAPTER_6_CLOSURE.guidelines.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-hospital-200 shadow-xs flex items-start gap-4 hover:border-hospital-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-hospital-100 text-hospital-700 font-bold text-sm flex items-center justify-center shrink-0 border border-hospital-200">
              {idx + 1}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-hospital-800 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cordial reminder */}
      <div className="p-4 rounded-xl bg-hospital-50 border border-hospital-200 text-hospital-800 text-xs sm:text-sm flex items-start gap-3">
        <Heart className="w-5 h-5 text-hospital-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Recuerda: agradecer la apertura del paciente valida su disposición y fortalece la relación terapéutica para futuros encuentros durante su hospitalización.
        </p>
      </div>

      {/* Navigation to Chapter 7 */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">¿Cómo registrar lo realizado?</h3>
          <p className="text-xs text-slate-600">Revisa la estructura pedagógica de notas de interconsulta en el Capítulo 7.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-7')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 7. Registro de interconsulta</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
