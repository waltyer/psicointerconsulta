import React, { useState } from 'react';
import { Copy, Check, ChevronRight, UserCheck } from 'lucide-react';
import { CHAPTER_2_INITIAL_APPROACH, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter2ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter2View: React.FC<Chapter2ViewProps> = ({ onSelectTab }) => {
  const [copied, setCopied] = useState(false);
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'abordaje')?.quote || '';

  const copyScript = () => {
    navigator.clipboard.writeText(CHAPTER_2_INITIAL_APPROACH.openingScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 2
          </span>
          <span className="text-xs text-slate-400">Presentación y encuadre</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_2_INITIAL_APPROACH.title}
        </h1>
        <div className="p-4 rounded-xl bg-white border border-hospital-200 text-sm text-slate-700 leading-relaxed font-medium">
          <strong className="text-hospital-700">Objetivo del capítulo:</strong> {CHAPTER_2_INITIAL_APPROACH.objective}
        </div>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Script de Apertura Destacado */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-hospital-50 to-white border-2 border-hospital-300/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide bg-hospital-500 text-white">
              Ejemplo de Apertura
            </span>
            <span className="text-xs text-slate-500">Guion sugerido para el practicante</span>
          </div>
          <button
            onClick={copyScript}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-hospital-700 bg-white border border-hospital-200 hover:bg-hospital-100 transition-colors shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>

        <blockquote className="p-4 rounded-xl bg-hospital-100/60 border-l-4 border-hospital-500 text-hospital-900 font-medium text-sm sm:text-base italic leading-relaxed">
          {CHAPTER_2_INITIAL_APPROACH.openingScript}
        </blockquote>
        <p className="text-xs text-slate-500">
          💡 Puedes sustituir tu nombre y adaptar el saludo de acuerdo a la hora y al estado en que encuentres al paciente.
        </p>
      </div>

      {/* Pasos orientadores */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-hospital-500" />
          Pasos orientadores para el abordaje
        </h2>

        <ol className="space-y-3">
          {CHAPTER_2_INITIAL_APPROACH.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <span className="w-6 h-6 rounded-full bg-hospital-100 text-hospital-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-hospital-200">
                {idx + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Navigation Footer */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">Siguiente paso:</h3>
          <p className="text-xs text-slate-600">Explora las 5 áreas clave de indagación con sus preguntas sugeridas.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-3')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 3. Valoración psicológica</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
