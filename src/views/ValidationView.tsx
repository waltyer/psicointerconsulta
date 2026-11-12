import React from 'react';
import { CheckSquare, ShieldAlert, CheckCircle2, AlertTriangle, Building2 } from 'lucide-react';
import { VALIDATION_CHECKLIST, HOSPITAL_INFO } from '../data/guideData';

export const ValidationView: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Supervisión
          </span>
          <span className="text-xs text-slate-400">Control de calidad y rigor institucional</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          Lista de validación previa al uso institucional
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Verificación de requisitos éticos, técnicos y normativos antes del despliegue en las salas del {HOSPITAL_INFO.institution}.
        </p>
      </div>

      {/* Caution alert box */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 shadow-xs flex items-start gap-3.5">
        <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">
            Acreditación y Aprobación Institucional
          </h3>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Las secciones marcadas con advertencia editorial (como el protocolo oficial de Código Rojo y la incorporación del logotipo institucional) deberán ser contrastadas y firmadas por la coordinación de Psicología y la subdirección científica del hospital antes de su adopción definitiva.
          </p>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-hospital-500" />
          Estado de los puntos de control requeridos por el encargo
        </h2>

        <div className="space-y-3">
          {VALIDATION_CHECKLIST.map((item, idx) => {
            const isCompleted = item.status.includes('Cumplido');
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-hospital-50/50 border border-hospital-100 flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item.text}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 border ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hospital Identity placeholder info */}
      <div className="p-5 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-hospital-800 font-bold text-sm sm:text-base">
          <Building2 className="w-5 h-5 text-hospital-500" />
          <span>Identidad Institucional y Logotipo</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Siguiendo la directriz del documento (<em>«No utilizar el logo oficial del hospital salvo que sea proporcionado o autorizado. Dejar un espacio para incorporarlo»</em>), la aplicación utiliza una tipografía e isotipo sobrios basados en la paleta institucional (#246B57). Tan pronto la oficina de comunicaciones suministre el archivo oficial en formato PNG o SVG, puede ubicarse en el encabezado.
        </p>
      </div>
    </div>
  );
};
