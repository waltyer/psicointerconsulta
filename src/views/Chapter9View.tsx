import React from 'react';
import { ShieldCheck, HeartHandshake, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { CHAPTER_9_ETHICS, HOSPITAL_INFO, PRACTITIONER_MOTIVATIONAL, REFLECTIVE_QUOTES } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface Chapter9ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter9View: React.FC<Chapter9ViewProps> = ({ onSelectTab }) => {
  const quote = REFLECTIVE_QUOTES.find(q => q.chapter === 'etica')?.quote || '';

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 9
          </span>
          <span className="text-xs text-slate-400">Marco bioético y normativo</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          {CHAPTER_9_ETHICS.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Principios rectores para salvaguardar la dignidad, la privacidad y la seguridad integral tanto del paciente como del practicante en formación.
        </p>
      </div>

      {quote && <QuoteBanner quote={quote} />}

      {/* Aviso Permanente */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-hospital-50 to-hospital-100/60 border-2 border-hospital-400/80 text-hospital-900 shadow-xs flex items-start gap-3.5">
        <ShieldAlert className="w-6 h-6 text-hospital-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-xs uppercase tracking-wider text-hospital-800">
            Aviso Permanente en la Aplicación
          </h3>
          <p className="text-xs sm:text-sm text-hospital-900 leading-relaxed font-medium">
            {HOSPITAL_INFO.disclaimer}
          </p>
        </div>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHAPTER_9_ETHICS.principles.map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-1.5 hover:border-hospital-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-hospital-800 font-bold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-hospital-500 shrink-0" />
              <span>{item.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mensajes motivacionales para practicantes */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-hospital-100">
          <HeartHandshake className="w-5 h-5 text-hospital-500" />
          <h2 className="text-base font-bold text-hospital-800">
            Mensajes de acompañamiento y autocuidado para el practicante
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Recordatorios humanos para momentos de duda, fatiga o alta exigencia emocional en la práctica clínica:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PRACTITIONER_MOTIVATIONAL.map((msg, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-hospital-50/60 border border-hospital-100 text-xs sm:text-sm text-hospital-900 italic font-medium leading-relaxed flex items-start gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-hospital-500 shrink-0 mt-0.5" />
              <span>{msg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to Glossary */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">Glosario de términos clínicos</h3>
          <p className="text-xs text-slate-600">Consulta definiciones de conceptos utilizados a lo largo de la guía.</p>
        </div>
        <button
          onClick={() => onSelectTab('glosario')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir al Glosario</span>
          <BookOpen className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

