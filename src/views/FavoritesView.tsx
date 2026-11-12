import React from 'react';
import { Bookmark, Compass, Wrench } from 'lucide-react';
import { CHAPTER_4_ROUTES, CHAPTER_5_TOOLS } from '../data/guideData';
import { RouteCardItem } from '../components/RouteCardItem';
import { ToolCardItem } from '../components/ToolCardItem';

interface FavoritesViewProps {
  favorites: string[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onSelectTab: (tab: string) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  isFavorite,
  onToggleFavorite,
  onSelectTab
}) => {
  const favoriteRoutes = CHAPTER_4_ROUTES.filter(r => favorites.includes(r.id));
  const favoriteTools = CHAPTER_5_TOOLS.filter(t => favorites.includes(t.id));

  const totalFavorites = favoriteRoutes.length + favoriteTools.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-hospital-600 px-2.5 py-0.5 rounded-full bg-hospital-100 border border-hospital-200">
            Marcadores
          </span>
          <span className="text-xs text-slate-400">Acceso rápido personal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-hospital-800">
          Mis Fichas Guardadas
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tus temas y herramientas más consultadas se guardan de forma privada en la memoria de este navegador. <strong>No se almacena ningún dato de pacientes.</strong>
        </p>
      </div>

      {totalFavorites === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-white border border-dashed border-hospital-300 p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-hospital-100 text-hospital-600 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-700 text-base">Aún no has guardado ninguna ficha</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Pulsa el icono de marcador (<Bookmark className="w-3.5 h-3.5 inline text-slate-400" />) en cualquier ficha clínica o técnica para tenerla disponible aquí en un solo clic.
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('cap-4')}
              className="px-4 py-2 rounded-xl bg-hospital-500 hover:bg-hospital-600 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar Rutas</span>
            </button>
            <button
              onClick={() => onSelectTab('cap-5')}
              className="px-4 py-2 rounded-xl bg-hospital-100 hover:bg-hospital-200 text-hospital-800 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Wrench className="w-4 h-4" />
              <span>Explorar Técnicas</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Favorite Routes */}
          {favoriteRoutes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
                <Compass className="w-5 h-5 text-hospital-500" />
                Rutas de orientación guardadas ({favoriteRoutes.length})
              </h2>
              <div className="space-y-4">
                {favoriteRoutes.map(route => (
                  <RouteCardItem
                    key={route.id}
                    route={route}
                    isFavorite={isFavorite(route.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Favorite Tools */}
          {favoriteTools.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-hospital-800 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-hospital-500" />
                Herramientas clínicas guardadas ({favoriteTools.length})
              </h2>
              <div className="space-y-4">
                {favoriteTools.map(tool => (
                  <ToolCardItem
                    key={tool.id}
                    tool={tool}
                    isFavorite={isFavorite(tool.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
