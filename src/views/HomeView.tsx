import React, { useState } from 'react';
import {
  Compass,
  Wrench,
  FileText,
  ClipboardList,
  Sparkles,
  Download,
  ShieldCheck,
  ChevronRight,
  Building2,
  HeartHandshake
} from 'lucide-react';
import { HOSPITAL_INFO, PRACTITIONER_MOTIVATIONAL } from '../data/guideData';
import { QuoteBanner } from '../components/QuoteBanner';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  isInstallable: boolean;
  onInstall: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  isInstallable,
  onInstall
}) => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(0);

  const nextQuote = () => {
    setRandomQuoteIndex((prev) => (prev + 1) % PRACTITIONER_MOTIVATIONAL.length);
  };

  const quickAccessCards = [
    {
      id: 'cap-4',
      title: 'Rutas de Orientación',
      desc: 'Fichas para Crisis emocional, IVE, Desregulación y Acompañamiento familiar.',
      badge: '5 fichas',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'cap-3',
      title: 'Preguntas de Valoración',
      desc: 'Preguntas orientadoras organizadas por 5 áreas (emocional, afrontamiento, red).',
      badge: '5 áreas',
      icon: ClipboardList,
      color: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'cap-5',
      title: 'Herramientas Clínicas',
      desc: 'Escucha activa, validación, contención, respiración y psicoeducación paso a paso.',
      badge: '6 técnicas',
      icon: Wrench,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      id: 'cap-7',
      title: 'Registro de Interconsulta',
      desc: 'Estructura recomendada, buenas prácticas de redacción y ejemplo educativo.',
      badge: 'Educativo',
      icon: FileText,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-hospital-500 via-hospital-600 to-hospital-700 text-white p-6 sm:p-8 shadow-md">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
              Manual de Bolsillo Digital
            </span>
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-hospital-800/40 text-hospital-100 flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              {HOSPITAL_INFO.institution}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            Bienvenido(a) a {HOSPITAL_INFO.name}
          </h1>

          <p className="text-sm sm:text-base text-hospital-100 leading-relaxed font-normal">
            Esta guía reúne orientaciones prácticas para acompañar la atención psicológica por interconsulta en el contexto hospitalario. Aquí encontrarás recomendaciones para preparar el abordaje, explorar las necesidades del paciente, formular preguntas, seleccionar estrategias de acompañamiento y organizar el registro de la atención.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onSelectTab('cap-4')}
              className="px-4 py-2.5 rounded-xl bg-white text-hospital-800 hover:bg-hospital-50 font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-hospital-600" />
              Consultar Rutas de Orientación
            </button>

            {isInstallable && (
              <button
                onClick={onInstall}
                className="px-4 py-2.5 rounded-xl bg-hospital-800/60 hover:bg-hospital-800 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-white" />
                Instalar en este celular
              </button>
            )}
          </div>
        </div>

        {/* Background decorative watermark */}
        <div className="absolute -right-8 -bottom-10 text-white/5 font-black text-9xl select-none pointer-events-none">
          Ψ
        </div>
      </div>

      {/* Quote Banner */}
      <QuoteBanner quote="«Detrás de cada interconsulta hay una persona, no solamente una condición de salud.»" />

      {/* ¿Cómo utilizar esta guía? */}
      <div className="p-6 rounded-2xl bg-white border border-hospital-200/80 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-hospital-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-hospital-500" />
          ¿Cómo utilizar esta guía rápida?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-hospital-50 border border-hospital-100 flex flex-col justify-between">
            <span className="w-6 h-6 rounded-full bg-hospital-500 text-white font-bold text-xs flex items-center justify-center mb-2">
              1
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">
              Identifica el motivo de interconsulta y el servicio que solicita la atención.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-hospital-50 border border-hospital-100 flex flex-col justify-between">
            <span className="w-6 h-6 rounded-full bg-hospital-500 text-white font-bold text-xs flex items-center justify-center mb-2">
              2
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">
              Selecciona el capítulo o la ruta que más se relacione con la situación clínica.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-hospital-50 border border-hospital-100 flex flex-col justify-between">
            <span className="w-6 h-6 rounded-full bg-hospital-500 text-white font-bold text-xs flex items-center justify-center mb-2">
              3
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">
              Consulta los aspectos por explorar y las preguntas sugeridas.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-hospital-50 border border-hospital-100 flex flex-col justify-between">
            <span className="w-6 h-6 rounded-full bg-hospital-500 text-white font-bold text-xs flex items-center justify-center mb-2">
              4
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">
              Revisa las estrategias de intervención y las precauciones de seguridad.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-hospital-50 border border-hospital-100 flex flex-col justify-between">
            <span className="w-6 h-6 rounded-full bg-hospital-500 text-white font-bold text-xs flex items-center justify-center mb-2">
              5
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">
              Adapta la orientación a la persona, al contexto y a las indicaciones del equipo tratante.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-hospital-800">
          Accesos directos por temas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => onSelectTab(card.id)}
                className="text-left p-5 rounded-2xl bg-white border border-hospital-200/90 hover:border-hospital-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-hospital-600 transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-hospital-600 group-hover:translate-x-1 transition-transform">
                  <span>Abrir capítulo</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Motivational message for interns */}
      <div className="p-5 rounded-2xl bg-white border border-hospital-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-hospital-100 text-hospital-700 shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Reflexión para el practicante
            </h4>
            <p className="text-sm font-medium text-hospital-900 italic mt-0.5">
              {PRACTITIONER_MOTIVATIONAL[randomQuoteIndex]}
            </p>
          </div>
        </div>
        <button
          onClick={nextQuote}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-hospital-50 hover:bg-hospital-100 text-hospital-700 border border-hospital-200 shrink-0 transition-colors"
        >
          Siguiente frase ↻
        </button>
      </div>

      {/* Institutional Legal Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-600 text-xs flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-hospital-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-800">Aviso institucional permanente:</strong> {HOSPITAL_INFO.disclaimer}
        </p>
      </div>
    </div>
  );
};
