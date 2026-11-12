import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { Chapter1View } from './views/Chapter1View';
import { Chapter2View } from './views/Chapter2View';
import { Chapter3View } from './views/Chapter3View';
import { Chapter4View } from './views/Chapter4View';
import { Chapter5View } from './views/Chapter5View';
import { Chapter6View } from './views/Chapter6View';
import { Chapter7View } from './views/Chapter7View';
import { Chapter8View } from './views/Chapter8View';
import { Chapter9View } from './views/Chapter9View';
import { GlossaryView } from './views/GlossaryView';
import { FavoritesView } from './views/FavoritesView';
import { ValidationView } from './views/ValidationView';
import { usePWA } from './hooks/usePWA';
import { useFavorites } from './hooks/useFavorites';
import { ChevronLeft, Home } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const { isInstallable, installApp } = usePWA();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const handleNavigate = (tab: string, elementId?: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'inicio':
        return (
          <HomeView
            onSelectTab={handleNavigate}
            isInstallable={isInstallable}
            onInstall={installApp}
          />
        );
      case 'cap-1':
        return <Chapter1View onSelectTab={handleNavigate} />;
      case 'cap-2':
        return <Chapter2View onSelectTab={handleNavigate} />;
      case 'cap-3':
        return <Chapter3View onSelectTab={handleNavigate} />;
      case 'cap-4':
        return (
          <Chapter4View
            onSelectTab={handleNavigate}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'cap-5':
        return (
          <Chapter5View
            onSelectTab={handleNavigate}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'cap-6':
        return <Chapter6View onSelectTab={handleNavigate} />;
      case 'cap-7':
        return <Chapter7View onSelectTab={handleNavigate} />;
      case 'cap-8':
        return <Chapter8View onSelectTab={handleNavigate} />;
      case 'cap-9':
        return <Chapter9View onSelectTab={handleNavigate} />;
      case 'glosario':
        return <GlossaryView />;
      case 'favoritos':
        return (
          <FavoritesView
            favorites={favorites}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            onSelectTab={handleNavigate}
          />
        );
      case 'validacion':
        return <ValidationView />;
      default:
        return (
          <HomeView
            onSelectTab={handleNavigate}
            isInstallable={isInstallable}
            onInstall={installApp}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-hospital-50/70 flex flex-col text-slate-800">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        favoritesCount={favorites.length}
        onNavigateToFavorites={() => handleNavigate('favoritos')}
        onNavigateHome={() => handleNavigate('inicio')}
        isInstallable={isInstallable}
        onInstall={installApp}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Desktop Sidebar & Mobile Drawer */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          favoritesCount={favorites.length}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12">
          {/* Breadcrumbs / Back button when not on Home */}
          {currentTab !== 'inicio' && (
            <div className="mb-5 flex items-center justify-between pb-3 border-b border-hospital-200/60 text-xs text-slate-500">
              <button
                onClick={() => handleNavigate('inicio')}
                className="flex items-center gap-1.5 text-hospital-700 hover:text-hospital-800 font-semibold transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Home className="w-3.5 h-3.5" />
                <span>/</span>
                <span className="text-hospital-800 font-medium capitalize">
                  {currentTab.replace('cap-', 'Capítulo ')}
                </span>
              </div>
            </div>
          )}

          {/* Active View */}
          {renderCurrentView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Global Keyword Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
