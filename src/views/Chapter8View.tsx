import React, { useState } from 'react';
import { Building, AlertCircle, ChevronRight, Bed, Flame, Baby, Users } from 'lucide-react';
import { CHAPTER_8_SERVICES } from '../data/guideData';

interface Chapter8ViewProps {
  onSelectTab: (tab: string) => void;
}

export const Chapter8View: React.FC<Chapter8ViewProps> = ({ onSelectTab }) => {
  const [selectedService, setSelectedService] = useState<string>('all');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'hospitalizacion': return Bed;
      case 'urgencias': return Flame;
      case 'ginecologia': return Baby;
      case 'consulta-externa': return Users;
      default: return Building;
    }
  };

  const filteredServices = selectedService === 'all'
    ? CHAPTER_8_SERVICES
    : CHAPTER_8_SERVICES.filter(s => s.id === selectedService);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Capítulo 8
          </span>
          <span className="text-xs text-slate-400">Contextos asistenciales</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          8. Servicios y contextos de atención hospitalaria
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Cada servicio del Hospital Francisco de Paula Santander E.S.E. presenta dinámicas de tiempo, privacidad, demandas y flujos clínicos particulares.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedService('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
            selectedService === 'all'
              ? 'bg-hospital-500 text-white shadow-2xs'
              : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
          }`}
        >
          Todos los servicios ({CHAPTER_8_SERVICES.length})
        </button>
        {CHAPTER_8_SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedService(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              selectedService === s.id
                ? 'bg-hospital-500 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-hospital-200 hover:bg-hospital-50'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredServices.map((service) => {
          const Icon = getServiceIcon(service.id);
          return (
            <div
              key={service.id}
              id={service.id}
              className="rounded-2xl bg-white border border-hospital-200 p-5 shadow-xs space-y-4 hover:border-hospital-300 transition-colors"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-hospital-100">
                <div className="p-2.5 rounded-xl bg-hospital-100 text-hospital-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-hospital-800 text-base">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Consideraciones para la atención:
                </p>
                <ul className="space-y-2">
                  {service.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-hospital-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Institutional note */}
      <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-600 text-xs flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Aviso institucional:</strong> No atribuir a cada servicio procedimientos o funciones que no hayan sido confirmados previamente por los protocolos del Hospital Francisco de Paula Santander E.S.E.
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="p-5 rounded-2xl bg-hospital-100/60 border border-hospital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-hospital-800 text-sm">Principios bioéticos y límites del rol</h3>
          <p className="text-xs text-slate-600">Revisa la ética profesional, consentimiento y seguridad en el Capítulo 9.</p>
        </div>
        <button
          onClick={() => onSelectTab('cap-9')}
          className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Ir a 9. Ética y recomendaciones</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

