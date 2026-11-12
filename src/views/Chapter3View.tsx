import React, { useState } from 'react';
import {
  ClipboardList,
  AlertTriangle,
  HeartPulse,
  Building2,
  Users,
  ShieldCheck,
  Clock,
  ChevronRight
} from 'lucide-react';
import { CHAPTER_3_VALUATION, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter3ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter3View: React.FC<Chapter3ViewProps> = ({ onSelectTab }) => {
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'valoracion')?.quote || '';

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'Building2': return Building2;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      case 'Clock': return Clock;
      default: return ClipboardList;
    }
  };

  const filteredAreas = selectedArea === 'all'
    ? CHAPTER_3_VALUATION.areas
    : CHAPTER_3_VALUATION.areas.filter(a => a.id === selectedArea);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 3
          </span>
          <span className="text-xs text-slate-400">Preguntas orientadoras</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_3_VALUATION.title}
        </h1>
        <div className="p-4 rounded-xl bg-white border border-hospital-200 text-sm text-slate-700 leading-relaxed font-medium">
          {CHAPTER_3_VALUATION.guideline}
        </div>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Alerta de Seguridad y Riesgo */}
      <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3.5 shadow-2xs">
        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-red-800 uppercase tracking-wide">
            Protocolo de Seguridad ante Señales de Riesgo
          </h3>
          <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-medium">
            {CHAPTER_3_VALUATION.riskAlert}
          </p>
        </div>
      </div>

      {/* Filter Tabs by Area */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedArea('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
            selectedArea === 'all'
              ? 'bg-hospital-500 text-white shadow-2xs'
              : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
          }`}
        >
          Todas las áreas (5)
        </button>
        {CHAPTER_3_VALUATION.areas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelectedArea(area.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              selectedArea === area.id
                ? 'bg-hospital-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
            }`}
          >
            {area.name}
          </button>
        ))}
      </div>

      {/* Questions by Area Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredAreas.map((area) => {
          const Icon = getAreaIcon(area.icon);
          return (
            <div
              key={area.id}
              id={`val-${area.id}`}
              className="rounded-2xl bg-white border border-hospital-200 p-5 shadow-xs space-y-4 hover:border-hospital-300 transition-colors"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-hospital-100">
                <div className="p-2 rounded-xl bg-hospital-100 text-hospital-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-hospital-800 text-sm sm:text-base">
                  {area.name}
                </h3>
              </div>

              <div className="space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Preguntas orientadoras sugeridas:
                </p>
                {area.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-hospital-50/70 border border-hospital-100 text-xs sm:text-sm text-hospital-900 font-medium italic flex items-start gap-2"
                  >
                    <span className="text-hospital-500 font-bold shrink-0">💬</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation to Chapter 4 */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">¿Identificaste un motivo específico?</h3>
          <p className="text-xs text-slate-600">Revisa las fichas clínicas de actuación en el Capítulo 4 (Crisis, IVE, Desregulación, etc.).</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-4')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 4. Rutas de orientación</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

