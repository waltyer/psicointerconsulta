import React from 'react';
import { Home, Compass, Wrench, Search, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onToggleSidebar
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-hospital-200/80 px-2 py-1 shadow-lg pb-[max(0.25rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-5 gap-1">
        <button
          onClick={() => onSelectTab('inicio')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[10px] font-medium transition-colors ${
            currentTab === 'inicio'
              ? 'text-hospital-600 font-semibold'
              : 'text-slate-500 hover:text-hospital-600'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>Inicio</span>
        </button>

        <button
          onClick={() => onSelectTab('cap-4')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[10px] font-medium transition-colors ${
            currentTab === 'cap-4'
              ? 'text-hospital-600 font-semibold'
              : 'text-slate-500 hover:text-hospital-600'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span>Rutas</span>
        </button>

        <button
          onClick={() => onSelectTab('cap-5')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[10px] font-medium transition-colors ${
            currentTab === 'cap-5'
              ? 'text-hospital-600 font-semibold'
              : 'text-slate-500 hover:text-hospital-600'
          }`}
        >
          <Wrench className="w-5 h-5 mb-0.5" />
          <span>Técnicas</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[10px] font-medium text-slate-500 hover:text-hospital-600 transition-colors"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span>Buscar</span>
        </button>

        <button
          onClick={onToggleSidebar}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[10px] font-medium text-slate-500 hover:text-hospital-600 transition-colors"
        >
          <Menu className="w-5 h-5 mb-0.5" />
          <span>Capítulos</span>
        </button>
      </div>
    </nav>
  );
};

