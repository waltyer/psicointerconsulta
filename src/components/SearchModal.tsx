import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Compass, Wrench, Building, BookOpen, AlertCircle } from 'lucide-react';
import {
  CHAPTER_4_ROUTES,
  CHAPTER_5_TOOLS,
  CHAPTER_8_SERVICES,
  GLOSSARY,
  CHAPTER_3_VALUATION
} from '../data/guideData';

interface SearchResult {
  id: string;
  tab: string;
  category: 'Ruta' | 'Técnica' | 'Servicio' | 'Glosario' | 'Pregunta';
  title: string;
  snippet: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, elementId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const quickKeywords = [
    'Códigos prioritarios',
    'Código verde',
    'Código morado',
    'Código dorado',
    'Conducta suicida',
    'Crisis emocional',
    'IVE',
    'Contención',
    'Urgencias',
    'Ginecología'
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent if needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search indexing
  const results: SearchResult[] = [];
  const q = query.trim().toLowerCase();

  if (q.length >= 2) {
    // 1. Search in Route cards
    CHAPTER_4_ROUTES.forEach((route) => {
      const matchInTitle = route.title.toLowerCase().includes(q);
      const matchInDesc = route.consistsOf.toLowerCase().includes(q);
      const matchInQuestions = route.questions.some(qn => qn.toLowerCase().includes(q));
      const matchInInterventions = route.interventions.some(i => i.toLowerCase().includes(q));
      
      let matchInPriority = false;
      if (route.priorityCodesData) {
        const pd = route.priorityCodesData;
        matchInPriority = 
          (q.includes('verde') || q.includes('morado') || q.includes('dorado') || q.includes('suicid') || q.includes('sexual') || q.includes('físic') || q.includes('fisic')) ||
          pd.codes.some((c: any) => 
            c.name.toLowerCase().includes(q) || 
            c.category.toLowerCase().includes(q) || 
            c.description.toLowerCase().includes(q)
          ) ||
          pd.recommendations.some((r: any) => 
            (typeof r === 'string' ? r : r.description || '').toLowerCase().includes(q)
          ) ||
          pd.internScope.description.toLowerCase().includes(q);
      }

      if (matchInTitle || matchInDesc || matchInQuestions || matchInInterventions || matchInPriority) {
        results.push({
          id: route.id,
          tab: 'cap-4',
          category: 'Ruta',
          title: route.title,
          snippet: route.consistsOf,
          icon: Compass
        });
      }
    });

    // 2. Search in Intervention Tools
    CHAPTER_5_TOOLS.forEach((tool) => {
      const matchInName = tool.name.toLowerCase().includes(q);
      const matchInPurpose = tool.purpose.toLowerCase().includes(q);
      const matchInSteps = tool.steps.some(s => s.toLowerCase().includes(q));

      if (matchInName || matchInPurpose || matchInSteps) {
        results.push({
          id: tool.id,
          tab: 'cap-5',
          category: 'Técnica',
          title: tool.name,
          snippet: tool.purpose,
          icon: Wrench
        });
      }
    });

    // 3. Search in Services
    CHAPTER_8_SERVICES.forEach((srv) => {
      const matchInName = srv.name.toLowerCase().includes(q);
      const matchInDesc = srv.description.toLowerCase().includes(q);
      const matchInTips = srv.tips.some(t => t.toLowerCase().includes(q));

      if (matchInName || matchInDesc || matchInTips) {
        results.push({
          id: srv.id,
          tab: 'cap-8',
          category: 'Servicio',
          title: srv.name,
          snippet: srv.description,
          icon: Building
        });
      }
    });

    // 4. Search in Valuation Questions
    CHAPTER_3_VALUATION.areas.forEach((area) => {
      area.questions.forEach((question) => {
        if (question.toLowerCase().includes(q) || area.name.toLowerCase().includes(q)) {
          results.push({
            id: `val-${area.id}`,
            tab: 'cap-3',
            category: 'Pregunta',
            title: `Pregunta: ${area.name}`,
            snippet: question,
            icon: AlertCircle
          });
        }
      });
    });

    // 5. Search in Glossary
    GLOSSARY.forEach((item) => {
      if (item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q)) {
        results.push({
          id: `glossary-${item.term}`,
          tab: 'glosario',
          category: 'Glosario',
          title: item.term,
          snippet: item.definition,
          icon: BookOpen
        });
      }
    });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-hospital-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-hospital-200 flex items-center gap-3 bg-hospital-50/50">
          <Search className="w-5 h-5 text-hospital-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por palabra clave (ej. crisis, IVE, respiración, registro)..."
            className="w-full bg-transparent text-sm md:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-slate-500 hover:bg-hospital-100 rounded-lg"
          >
            Esc
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="p-3 bg-white border-b border-hospital-100 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none">
          <span className="text-slate-400 font-medium shrink-0 mr-1 text-[11px]">Sugeridos:</span>
          {quickKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2.5 py-1 rounded-full bg-hospital-100/70 hover:bg-hospital-200 text-hospital-800 font-medium shrink-0 transition-colors text-[11px]"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {q.length < 2 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p>Escribe al menos 2 letras o pulsa uno de los temas sugeridos.</p>
              <p className="text-xs text-slate-400 mt-1">
                Encuentra preguntas, rutas de acción, precauciones y protocolos oficiales.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              <p className="font-semibold text-slate-700">No se encontraron resultados para «{query}»</p>
              <p className="text-xs text-slate-400 mt-1">
                Prueba con términos como: crisis, contención, afrontamiento, urgencias o registro.
              </p>
            </div>
          ) : (
            results.map((res, index) => {
              const Icon = res.icon;
              return (
                <button
                  key={`${res.id}-${index}`}
                  onClick={() => {
                    onNavigate(res.tab, res.id);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-hospital-50 border border-slate-100 hover:border-hospital-200 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-hospital-100 text-hospital-700 shrink-0 mt-0.5 group-hover:bg-hospital-500 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {res.category}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-800 truncate group-hover:text-hospital-700">
                        {res.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-hospital-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

