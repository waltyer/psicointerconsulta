import React, { useState } from 'react';
import { FileText, Copy, Check, AlertCircle, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { CHAPTER_7_REGISTRY, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter7ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter7View: React.FC<Chapter7ViewProps> = ({ onSelectTab }) => {
  const [copied, setCopied] = useState(false);
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'registro')?.quote || '';

  const copyExample = () => {
    navigator.clipboard.writeText(CHAPTER_7_REGISTRY.fictionalExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 7
          </span>
          <span className="text-xs text-slate-400">Pautas pedagógicas de documentación</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_7_REGISTRY.title}
        </h1>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Notice box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3.5 shadow-2xs">
        <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">
            Aviso de Alcance Educativo
          </h3>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
            {CHAPTER_7_REGISTRY.educationalNotice}
          </p>
        </div>
      </div>

      {/* 1. Estructura estándar del registro */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
          <FileText className="w-5 h-5 text-hospital-500" />
          Estructura habitual de una nota de interconsulta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {CHAPTER_7_REGISTRY.structure.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-hospital-50/70 border border-hospital-100 space-y-1"
            >
              <div className="flex items-center gap-2 text-hospital-800 font-bold text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-hospital-500 text-white text-[11px] flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{item.label}</span>
              </div>
              <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Ejemplo Ficticio Educativo */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-hospital-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide bg-hospital-500 text-white">
              Ejemplo Educativo Ficticio
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">Caso pedagógico simulado</span>
          </div>
          <button
            onClick={copyExample}
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
                <span>Copiar ejemplo</span>
              </>
            )}
          </button>
        </div>

        <blockquote className="p-4 rounded-xl bg-hospital-100/60 border-l-4 border-hospital-500 text-hospital-900 font-mono text-xs sm:text-sm leading-relaxed">
          {CHAPTER_7_REGISTRY.fictionalExample}
        </blockquote>
      </div>

      {/* 3. Recomendaciones de redacción */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-hospital-500" />
          Recomendaciones éticas y técnicas de redacción
        </h2>
        <ul className="space-y-3">
          {CHAPTER_7_REGISTRY.writingTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-hospital-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Footer */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">Contextos hospitalarios específicos</h3>
          <p className="text-xs text-slate-600">Revisa consideraciones para Urgencias, Hospitalización, Ginecología y Consulta Externa en el Capítulo 8.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-8')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 8. Servicios y contextos</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

