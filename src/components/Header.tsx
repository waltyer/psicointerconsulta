import React from 'react';
import { Search, Bookmark, Download, Menu, Sparkles, Building2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/guideData';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  favoritesCount: number;
  onNavigateToFavorites: () => void;
  onNavigateHome: () => void;
  isInstallable: boolean;
  onInstall: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onToggleSidebar,
  favoritesCount,
  onNavigateToFavorites,
  onNavigateHome,
  isInstallable,
  onInstall
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-hospital-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Menu toggle (Mobile) + Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            aria-label="Abrir menú"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-hospital-600 hover:bg-hospital-100 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-hospital-500 text-white flex items-center justify-center shadow-sm group-hover:bg-hospital-600 transition-colors shrink-0">
              <span className="font-bold text-lg tracking-wider">Ψ</span>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-hospital-700 tracking-tight text-base group-hover:text-hospital-800">
                  {HOSPITAL_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-hospital-100 text-hospital-700 border border-hospital-200">
                  Guía Rápida
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1 truncate max-w-[280px]">
                <Building2 className="w-3 h-3 text-hospital-500 shrink-0" />
                {HOSPITAL_INFO.institution}
              </p>
            </div>
            <span className="sm:hidden font-bold text-hospital-700 text-base">
              {HOSPITAL_INFO.name}
            </span>
          </button>
        </div>

        {/* Center: Search button / Quick bar */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 bg-hospital-50 hover:bg-hospital-100/70 border border-hospital-200 rounded-xl transition-all shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-hospital-500" />
              <span>Buscar rutas, crisis, IVE, técnicas...</span>
            </div>
            <kbd className="hidden lg:inline-block px-2 py-0.5 text-[11px] font-semibold text-slate-400 bg-white border border-slate-200 rounded shadow-2xs">
              Ctrl + K
            </kbd>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile search trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Buscar en la guía"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-hospital-600 hover:bg-hospital-100 transition-colors"
          >
            <Search className="w-5 h-5 text-hospital-600" />
          </button>

          {/* Favorites Button */}
          <button
            onClick={onNavigateToFavorites}
            aria-label="Ver marcadores y fichas guardadas"
            className="relative p-2 rounded-lg text-slate-600 hover:text-hospital-600 hover:bg-hospital-100 transition-colors"
            title="Fichas guardadas"
          >
            <Bookmark className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-hospital-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Install PWA Button (mobile & desktop prompt) */}
          {isInstallable ? (
            <button
              onClick={onInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-hospital-500 hover:bg-hospital-600 text-white shadow-sm transition-all"
              title="Instalar en este celular o computador"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instalar App</span>
              <span className="sm:hidden">Instalar</span>
            </button>
          ) : (
            <div className="hidden xl:flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Modo Offline activo</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

