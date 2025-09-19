import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Advanced3DCatalog } from '../components/catalog/Advanced3DCatalog';
import { ErrorBoundary } from '../components/catalog/ErrorBoundary';

export function CatalogPage() {
    const { t: _t } = useLanguage();
    const [, setCurrentPage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFullscreenChange = (fullscreen: boolean) => {
        setIsFullscreen(fullscreen);
    };

    const handleExternalView = () => {
        window.open('https://ufuklojistik.com/ekatalog2/mobile/index.html', '_blank', 'noopener,noreferrer');
    };

    return (
        <ErrorBoundary>
            <div className={`w-full bg-gray-900 transition-all duration-300 ${isFullscreen ? 'h-screen' : 'h-screen'}`}>
                {/* External Link Button - Sadece tam ekran değilken göster */}
                {!isFullscreen && (
                    <div className="absolute top-4 right-4 z-40">
                        <button
                            onClick={handleExternalView}
                            className="px-4 py-2 bg-blue-500/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                        >
                            Orijinal Katalog
                        </button>
                    </div>
                )}

                {/* 3D Katalog */}
                <Advanced3DCatalog
                    onPageChange={handlePageChange}
                    onFullscreenChange={handleFullscreenChange}
                />
            </div>
        </ErrorBoundary>
    );
}
