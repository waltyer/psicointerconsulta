import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { GLOSSARY } from '../data/guideData';

export const GlossaryView: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredItems = GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(filter.toLowerCase()) ||
    item.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Referencia
          </span>
          <span className="text-xs text-slate-400">Conceptos clave</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          Glosario básico de términos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Definiciones orientadoras para homologar el lenguaje clínico y conceptual en el Hospital Francisco de Paula Santander E.S.E.
        </p>
      </div>

      {/* Search Filter */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar términos (ej. contención, afrontamiento)..."
          className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-hospital-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-hospital-500/20 focus:border-hospital-500 shadow-2xs"
        />
      </div>

      {/* Glossary Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            id={`glossary-${item.term}`}
            className="p-5 rounded-2xl bg-white border border-hospital-200 shadow-xs space-y-2 hover:border-hospital-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-hospital-800 font-bold text-base">
              <BookOpen className="w-4 h-4 text-hospital-500 shrink-0" />
              <span>{item.term}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              {item.definition}
            </p>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-12 text-center text-slate-400 text-sm">
          No se encontraron términos que coincidan con «{filter}».
        </div>
      )}
    </div>
  );
};

