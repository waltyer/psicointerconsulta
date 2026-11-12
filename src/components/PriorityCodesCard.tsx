import React, { useState } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  LifeBuoy,
  GraduationCap,
  Eye,
  PhoneCall,
  AlertOctagon,
  Users,
  Sparkles,
  Lock,
  Quote,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Building2
} from 'lucide-react';
import { RouteCard } from '../data/guideData';

interface PriorityCodesCardProps {
  route: RouteCard;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  defaultExpanded?: boolean;
}

export const PriorityCodesCard: React.FC<PriorityCodesCardProps> = ({
  route,
  isFavorite,
  onToggleFavorite,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <article
      id="codigos-prioritarios"
      className="rounded-2xl bg-white border border-hospital-200 shadow-sm overflow-hidden transition-all duration-200"
    >
      {/* Header bar */}
      <div className="p-4 sm:p-5 flex items-start justify-between gap-3 bg-gradient-to-r from-hospital-50/60 via-white to-hospital-50/40 border-b border-hospital-100">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Atención Prioritaria
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-hospital-100 text-hospital-700 border border-hospital-200 flex items-center gap-1">
              <Building2 className="w-3 h-3 text-hospital-600" />
              Hospital Francisco de Paula Santander E.S.E.
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-amber-600" />
              Rol del Practicante
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-hospital-900 leading-snug">
            {route.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
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
            title={isExpanded ? 'Plegar apartado' : 'Desplegar apartado completo'}
            aria-label="Desplegar contenido"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 sm:p-6 lg:p-7 space-y-7 bg-slate-50/40 text-slate-700">
          
          {/* Quick Notice Banner */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">Lineamiento institucional HFPS:</strong> La atención y abordaje de los códigos verde, morado y dorado es responsabilidad directa del equipo profesional del hospital. La participación de los practicantes de Psicología corresponde a espacios de observación supervisados y previamente autorizados como oportunidad de aprendizaje.
            </div>
          </div>

          {/* 1. PRESENTACIÓN DE LOS CÓDIGOS */}
          <section className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-hospital-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-hospital-500 text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-hospital-900">
                  Códigos de atención prioritaria
                </h4>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                Identificación por colores y situaciones institucionales
              </span>
            </div>

            {/* Three independent visual cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-1">
              {/* CÓDIGO VERDE */}
              <div className="rounded-2xl bg-gradient-to-b from-emerald-50/90 to-white border-2 border-emerald-300/80 p-5 shadow-xs flex flex-col justify-between hover:border-emerald-400 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-600 text-white tracking-wider shadow-2xs">
                      CÓDIGO VERDE
                    </span>
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base font-black text-emerald-900 tracking-tight">
                      VIOLENCIA SEXUAL
                    </h5>
                    <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide mt-0.5">
                      Atención Integral y Oportuna
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-emerald-100">
                    Corresponde a situaciones relacionadas con violencia sexual que requieren atención integral, confidencial y oportuna por parte del equipo profesional del hospital.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-100/80 flex items-center gap-2 text-[11px] text-emerald-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Confidencialidad y atención oportuna</span>
                </div>
              </div>

              {/* CÓDIGO MORADO */}
              <div className="rounded-2xl bg-gradient-to-b from-purple-50/90 to-white border-2 border-purple-300/80 p-5 shadow-xs flex flex-col justify-between hover:border-purple-400 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-purple-600 text-white tracking-wider shadow-2xs">
                      CÓDIGO MORADO
                    </span>
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-700 group-hover:scale-105 transition-transform">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base font-black text-purple-900 tracking-tight">
                      VIOLENCIA FÍSICA
                    </h5>
                    <p className="text-[11px] font-semibold text-purple-700 uppercase tracking-wide mt-0.5">
                      Valoración y Activación de Rutas
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-purple-100">
                    Corresponde a situaciones relacionadas con violencia física que requieren valoración, atención y activación de las rutas institucionales correspondientes.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-100/80 flex items-center gap-2 text-[11px] text-purple-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Activación de rutas institucionales</span>
                </div>
              </div>

              {/* CÓDIGO DORADO */}
              <div className="rounded-2xl bg-gradient-to-b from-amber-50/90 to-white border-2 border-amber-300/80 p-5 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-amber-600 text-white tracking-wider shadow-2xs">
                      CÓDIGO DORADO
                    </span>
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-700 group-hover:scale-105 transition-transform">
                      <LifeBuoy className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base font-black text-amber-900 tracking-tight">
                      CONDUCTA SUICIDA
                    </h5>
                    <p className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide mt-0.5">
                      Atención Prioritaria y Valoración
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-amber-100">
                    Corresponde a situaciones relacionadas con conducta suicida, incluyendo ideación o intento suicida, que requieren atención prioritaria y valoración por parte de los profesionales responsables.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100/80 flex items-center gap-2 text-[11px] text-amber-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Ideación o intento • Atención prioritaria</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. ALCANCE DEL ROL DEL PRACTICANTE */}
          <section className="rounded-2xl bg-white border border-hospital-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-hospital-100">
              <div className="p-2 rounded-xl bg-hospital-100 text-hospital-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-hospital-900">
                  2. Alcance del rol del practicante
                </h4>
                <p className="text-xs text-slate-500">
                  Responsabilidad profesional y delimitación ética formativa
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-hospital-50/50 p-4 rounded-xl border border-hospital-100">
              La atención de los códigos verde, morado y dorado es responsabilidad directa de los profesionales del hospital. Como practicantes de Psicología, no debemos asumir su abordaje de manera autónoma. En algunos casos, podremos participar como observadores, bajo supervisión y autorización del profesional responsable, aprovechando estos espacios como oportunidades de aprendizaje.
            </p>

            {/* 3 Callout Cards for Clarity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">No autonomía</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    No asumir el abordaje directo de forma independiente ni autónoma.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-hospital-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Observación autorizada</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    Participación como observador con supervisión y aval del profesional responsable.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Aprendizaje guiado</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    Aprovechar estas instancias como experiencias formativas para fortalecer competencias.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ¿QUÉ DEBEMOS TENER PRESENTE? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-hospital-100">
              <span className="w-6 h-6 rounded-lg bg-hospital-500 text-white font-bold text-xs flex items-center justify-center">
                3
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-hospital-900">
                  ¿Qué debemos tener presente?
                </h4>
                <p className="text-xs text-slate-500">
                  Recomendaciones fundamentales para la práctica de interconsulta
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
              {/* Item 1 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Reconocer e identificar</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reconocer e identificar los códigos de atención prioritaria.
                </p>
              </div>

              {/* Item 2 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Informar oportunamente</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Informar oportunamente al profesional responsable cuando se identifique una situación de esta naturaleza.
                </p>
              </div>

              {/* Item 3 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
                    <AlertOctagon className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Límites del rol</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No realizar intervenciones independientes ni asumir responsabilidades que excedan nuestro rol como practicantes.
                </p>
              </div>

              {/* Item 4 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-hospital-100 text-hospital-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Espacios de observación</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participar en los espacios de observación cuando sean autorizados por el profesional responsable.
                </p>
              </div>

              {/* Item 5 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Oportunidad formativa</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aprovechar estas experiencias como oportunidades de aprendizaje y fortalecimiento de nuestras competencias profesionales.
                </p>
              </div>

              {/* Item 6 */}
              <div className="p-4 rounded-xl bg-white border border-hospital-200/90 shadow-2xs space-y-2 hover:border-hospital-300 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">Confidencialidad</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mantener siempre la confidencialidad y el respeto por la privacidad de los pacientes.
                </p>
              </div>
            </div>
          </section>

          {/* 4. FRASE MOTIVACIONAL PARA LOS PRACTICANTES */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-hospital-600 via-hospital-700 to-hospital-800 text-white p-6 sm:p-7 shadow-sm">
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white/20 text-white">
                  <Quote className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-hospital-100">
                  Para reflexionar en tu práctica
                </span>
              </div>

              <blockquote className="text-sm sm:text-base font-semibold italic leading-relaxed text-white">
                «No tenemos que saberlo todo desde el primer día. También aprendemos observando, escuchando y reconociendo cuándo es necesario acudir a un profesional con mayor experiencia».
              </blockquote>

              <p className="text-xs text-hospital-200 font-normal">
                — Equipo de Psicología • Hospital Francisco de Paula Santander E.S.E.
              </p>
            </div>

            {/* Background decorative element */}
            <div className="absolute -right-6 -bottom-8 text-white/5 font-black text-8xl select-none pointer-events-none">
              Ψ
            </div>
          </section>

        </div>
      )}
    </article>
  );
};
