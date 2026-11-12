import React from 'react';
import {
  Home,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Compass,
  Wrench,
  DoorClosed,
  FileText,
  Building,
  ShieldAlert,
  BookOpen,
  BookmarkCheck,
  CheckSquare,
  X
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/guideData';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
  favoritesCount: number;
}

interface MenuItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  isOpen,
  onClose,
  favoritesCount
}) => {
  const menuItems: MenuItem[] = [
    { id: 'inicio', label: 'Inicio', sublabel: 'Bienvenida y guía', icon: Home },
    { id: 'cap-1', label: '1. Antes de iniciar', sublabel: 'Preparación previa', icon: CheckCircle2 },
    { id: 'cap-2', label: '2. Abordaje inicial', sublabel: 'Presentación y encuadre', icon: MessageSquare },
    { id: 'cap-3', label: '3. Valoración psicológica', sublabel: '5 áreas y preguntas', icon: ClipboardList },
    { id: 'cap-4', label: '4. Rutas de orientación', sublabel: 'Fichas de situaciones', icon: Compass, badge: '5 fichas' },
    { id: 'cap-5', label: '5. Herramientas de intervención', sublabel: 'Técnicas paso a paso', icon: Wrench, badge: '6 técnicas' },
    { id: 'cap-6', label: '6. Cierre de la atención', sublabel: 'Síntesis y continuidad', icon: DoorClosed },
    { id: 'cap-7', label: '7. Registro de interconsulta', sublabel: 'Estructura y redacción', icon: FileText },
    { id: 'cap-8', label: '8. Servicios y contextos', sublabel: 'Urgencias, Gineco, Hosp.', icon: Building },
    { id: 'cap-9', label: '9. Ética y límites del rol', sublabel: 'Principios y seguridad', icon: ShieldAlert },
    { id: 'glosario', label: 'Glosario de términos', sublabel: 'Definiciones clínicas', icon: BookOpen },
    { id: 'favoritos', label: 'Mis Fichas Guardadas', sublabel: 'Marcadores locales', icon: BookmarkCheck, badge: favoritesCount > 0 ? `${favoritesCount}` : undefined },
    { id: 'validacion', label: 'Validación Institucional', sublabel: 'Checklist oficial HFPS', icon: CheckSquare }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-16 z-50 lg:z-10 h-screen lg:h-[calc(100vh-4rem)] w-72 shrink-0 bg-white border-r border-hospital-200/80 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile Header inside drawer */}
        <div className="p-4 border-b border-hospital-200 lg:hidden flex items-center justify-between bg-hospital-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-hospital-500 text-white flex items-center justify-center font-bold text-sm">
              Ψ
            </div>
            <div>
              <span className="font-bold text-hospital-700 text-sm">{HOSPITAL_INFO.name}</span>
              <p className="text-[10px] text-slate-500">{HOSPITAL_INFO.institution}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-hospital-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section title */}
        <div className="px-4 py-3 border-b border-hospital-100/60 hidden lg:block">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Manual de Bolsillo
          </p>
          <p className="text-xs font-semibold text-hospital-700">Índice de Capítulos</p>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all text-xs md:text-sm font-medium ${
                  isActive
                    ? 'bg-hospital-500 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:bg-hospital-100/70 hover:text-hospital-800'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-hospital-600'}`} />
                  <div className="truncate">
                    <div className="truncate">{item.label}</div>
                    {item.sublabel && (
                      <div className={`text-[10px] truncate ${isActive ? 'text-hospital-100' : 'text-slate-400'}`}>
                        {item.sublabel}
                      </div>
                    )}
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full shrink-0 font-medium ${
                      isActive
                        ? 'bg-hospital-600 text-white'
                        : 'bg-hospital-100 text-hospital-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Hospital Disclaimer Box */}
        <div className="p-3 border-t border-hospital-200/80 bg-hospital-50/70">
          <div className="p-2.5 rounded-lg bg-white border border-hospital-200 text-[11px] leading-relaxed text-slate-500">
            <p className="font-semibold text-hospital-800 mb-0.5">HFPS Santander de Quilichao</p>
            <p className="text-[10px] text-slate-500 leading-tight">
              Recurso académico y orientador. No reemplaza la supervisión clínica institucional.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

