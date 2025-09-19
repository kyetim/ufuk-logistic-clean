import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { SoundEffects, HapticFeedback } from '../../utils/soundEffects';

interface FullScreenMagazineProps {
    pages: string[];
    currentPage: number;
    onPageChange: (page: number) => void;
}

export function FullScreenMagazine({
    pages,
    currentPage,
    onPageChange
}: FullScreenMagazineProps) {
    const { t: _t } = useLanguage();
    const [isFlipping, setIsFlipping] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    // Initialize sound effects
    useEffect(() => {
        SoundEffects.init();
    }, []);

    // Realistic page flip animation
    const flipPage = (direction: 'left' | 'right') => {
        console.log('flipPage called:', direction, 'currentPage:', currentPage, 'isFlipping:', isFlipping);
        if (isFlipping) {
            console.log('Already flipping, ignoring');
            return;
        }

        console.log('Starting page flip animation');
        SoundEffects.playPageTurn();
        HapticFeedback.pageTurn();

        setIsFlipping(true);

        const startTime = performance.now();
        const duration = 600; // milliseconds

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Complete the flip
                const newPage = direction === 'left'
                    ? Math.max(0, currentPage - 1)
                    : Math.min(pages.length - 1, currentPage + 1);

                console.log('Page flip complete, changing to page:', newPage);
                onPageChange(newPage);
                setIsFlipping(false);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const handlePrevious = () => {
        console.log('handlePrevious called, currentPage:', currentPage, 'isFlipping:', isFlipping);
        if (currentPage > 0 && !isFlipping) {
            console.log('Going to previous page');
            flipPage('left');
        }
    };

    const handleNext = () => {
        console.log('handleNext called, currentPage:', currentPage, 'isFlipping:', isFlipping);
        if (currentPage < pages.length - 1 && !isFlipping) {
            console.log('Going to next page');
            flipPage('right');
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            console.log('Key pressed:', e.key, 'isFlipping:', isFlipping);
            if (isFlipping) return;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    console.log('ArrowLeft pressed - calling handlePrevious');
                    handlePrevious();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    console.log('ArrowRight pressed - calling handleNext');
                    handleNext();
                    break;
                case ' ':
                    e.preventDefault();
                    console.log('Space pressed - calling handleNext');
                    handleNext();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPage, isFlipping, handlePrevious, handleNext]);

    // Mouse wheel navigation
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            console.log('Mouse wheel:', e.deltaY, 'isFlipping:', isFlipping);
            e.preventDefault();
            if (isFlipping) return;

            if (e.deltaY > 0) {
                // Scroll down - next page
                console.log('Scroll down - calling handleNext');
                handleNext();
            } else if (e.deltaY < 0) {
                // Scroll up - previous page
                console.log('Scroll up - calling handlePrevious');
                handlePrevious();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentPage, isFlipping, handlePrevious, handleNext]);

    // Cleanup animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleIframeLoad = () => {
        console.log('Iframe loaded successfully for page:', currentPage, 'URL:', pages[currentPage]);
        setIsLoading(false);
        setHasError(false);
    };

    const handleIframeError = () => {
        console.error('Iframe failed to load for page:', currentPage, 'URL:', pages[currentPage]);
        setIsLoading(false);
        setHasError(true);
    };

    // Sayfa değiştiğinde loading state'ini sıfırla
    useEffect(() => {
        console.log('Page changed to:', currentPage, 'URL:', pages[currentPage]);
        setIsLoading(true);
        setHasError(false);

        // Timeout ile sayfa yükleme kontrolü
        const timeout = setTimeout(() => {
            if (isLoading) {
                console.warn('Page load timeout for:', pages[currentPage]);
                setHasError(true);
                setIsLoading(false);
            }
        }, 10000); // 10 saniye timeout

        return () => clearTimeout(timeout);
    }, [currentPage, pages, isLoading]);

    return (
        <div className="relative w-full h-full bg-gray-900">
            {/* Full screen iframe */}
            <div className="relative w-full h-full">
                {/* Loading overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
                        <div className="flex flex-col items-center space-y-6">
                            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">Katalog Yükleniyor</h3>
                                <p className="text-gray-300">Sayfa {currentPage + 1} / {pages.length}</p>
                                <div className="mt-4 w-64 bg-gray-700 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Error fallback */}
                {hasError && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
                        <div className="text-center p-8 max-w-md">
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Sayfa Yüklenemedi</h3>
                            <p className="text-gray-300 mb-4">
                                Sayfa {currentPage + 1} şu anda erişilemiyor.
                            </p>
                            <p className="text-gray-400 text-sm mb-6">
                                URL: {pages[currentPage]}
                            </p>
                            <div className="flex space-x-4 justify-center">
                                <button
                                    onClick={() => {
                                        setHasError(false);
                                        setIsLoading(true);
                                        if (iframeRef.current) {
                                            iframeRef.current.src = iframeRef.current.src;
                                        }
                                    }}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                                >
                                    Tekrar Dene
                                </button>
                                <button
                                    onClick={() => {
                                        if (currentPage > 0) {
                                            handlePrevious();
                                        } else if (currentPage < pages.length - 1) {
                                            handleNext();
                                        }
                                    }}
                                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                                >
                                    Başka Sayfa
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Debug info */}
                <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
                    <div>Current Page: {currentPage + 1}</div>
                    <div>URL: {pages[currentPage]}</div>
                    <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
                    <div>Error: {hasError ? 'Yes' : 'No'}</div>
                </div>

                {/* Full screen iframe */}
                <iframe
                    ref={iframeRef}
                    src={pages[currentPage]}
                    className="w-full h-full border-0"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-downloads"
                    title={`Ufuk Lojistik Katalog - Sayfa ${currentPage + 1}`}
                    allow="fullscreen; autoplay; encrypted-media"
                    loading="lazy"
                    style={{ minHeight: '100vh' }}
                />
            </div>

            {/* Minimal navigation - Top overlay */}
            <div className="absolute top-4 left-4 right-4 z-30">
                <div className="flex items-center justify-between">
                    {/* Page indicator */}
                    <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        {currentPage + 1} / {pages.length}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            disabled={currentPage === 0 || isFlipping}
                            className="w-10 h-10 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                            title="Önceki Sayfa"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleNext();
                            }}
                            disabled={currentPage === pages.length - 1 || isFlipping}
                            className="w-10 h-10 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                            title="Sonraki Sayfa"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Page flip indicator */}
            {isFlipping && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-40">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                </div>
            )}

            {/* Instructions - Bottom overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs">
                    ← → Ok tuşları ile gezin • Space ile ilerle • Sayfa tıklayarak geçiş yap
                </div>
            </div>

            {/* Click areas for page turning */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Left side - Previous page */}
                {currentPage > 0 && (
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer pointer-events-auto opacity-0 hover:opacity-100 transition-opacity bg-blue-500/10"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Left click - Previous page');
                            handlePrevious();
                        }}
                        title="Önceki Sayfa"
                    >
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white px-4 py-3 rounded-lg text-lg font-medium shadow-lg">
                            ← Önceki Sayfa
                        </div>
                    </div>
                )}

                {/* Right side - Next page */}
                {currentPage < pages.length - 1 && (
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer pointer-events-auto opacity-0 hover:opacity-100 transition-opacity bg-green-500/10"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Right click - Next page');
                            handleNext();
                        }}
                        title="Sonraki Sayfa"
                    >
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white px-4 py-3 rounded-lg text-lg font-medium shadow-lg">
                            Sonraki Sayfa →
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
