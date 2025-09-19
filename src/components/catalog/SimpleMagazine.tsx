import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { SoundEffects, HapticFeedback } from '../../utils/soundEffects';
import { MagazineControls } from './MagazineControls';

interface SimpleMagazineProps {
    pages: string[];
    currentPage: number;
    onPageChange: (page: number) => void;
    enableSwipe?: boolean;
    enableKeyboard?: boolean;
    showPageNumbers?: boolean;
    enableZoom?: boolean;
    enableFullscreen?: boolean;
}

export function SimpleMagazine({
    pages,
    currentPage,
    onPageChange,
    enableSwipe: _enableSwipe = true,
    enableKeyboard = true,
    showPageNumbers: _showPageNumbers = true,
    enableZoom: _enableZoom = true,
    enableFullscreen: _enableFullscreen = true
}: SimpleMagazineProps) {
    const { t: _t } = useLanguage();
    const [isFlipping, setIsFlipping] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    // Initialize sound effects
    useEffect(() => {
        SoundEffects.init();
    }, []);

    // Fullscreen functionality
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Print functionality
    const handlePrint = () => {
        window.print();
    };

    // Page jump functionality
    const handlePageJump = (page: number) => {
        if (page >= 0 && page < pages.length && !isFlipping) {
            onPageChange(page);
        }
    };

    // Realistic page flip animation
    const flipPage = (direction: 'left' | 'right') => {
        if (isFlipping) return;

        SoundEffects.playPageTurn();
        HapticFeedback.pageTurn();

        setIsFlipping(true);

        const startTime = performance.now();
        const duration = 800; // milliseconds

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for realistic page turn
            // Easing function for realistic page turn
            // const easeProgress = 1 - Math.pow(1 - progress, 3);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Complete the flip
                const newPage = direction === 'left'
                    ? Math.max(0, currentPage - 1)
                    : Math.min(pages.length - 1, currentPage + 1);

                onPageChange(newPage);
                setIsFlipping(false);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            flipPage('left');
        }
    };

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            flipPage('right');
        }
    };

    const handleFirst = () => {
        if (currentPage > 0) {
            onPageChange(0);
        }
    };

    const handleLast = () => {
        if (currentPage < pages.length - 1) {
            onPageChange(pages.length - 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        if (!enableKeyboard) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            if (isFlipping) return;

            switch (e.key) {
                case 'ArrowLeft':
                    handlePrevious();
                    break;
                case 'ArrowRight':
                    handleNext();
                    break;
                case ' ':
                    e.preventDefault();
                    handleNext();
                    break;
                case 'Home':
                    handleFirst();
                    break;
                case 'End':
                    handleLast();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPage, isFlipping, enableKeyboard]);

    // Cleanup animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleIframeLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className={`w-full h-screen ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
            {/* Main content */}
            <div className="relative w-full h-full">
                {/* Page container */}
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                        transform: `scale(${zoom})`,
                        transition: 'transform 0.3s ease'
                    }}
                >
                    {/* Page flip animation container */}
                    <div
                        className={`relative w-4/5 h-5/6 max-w-4xl max-h-5xl ${isFlipping ? 'page-flipping' : ''
                            }`}
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                    >
                        {/* Current page */}
                        <div
                            className={`absolute inset-0 transition-all duration-300 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                        >
                            {/* Loading overlay */}
                            {isLoading && (
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10 rounded-lg">
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                                        <p className="text-gray-600 font-medium">Sayfa yükleniyor...</p>
                                    </div>
                                </div>
                            )}

                            {/* Error fallback */}
                            {hasError && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10 rounded-lg">
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sayfa Yüklenemedi</h3>
                                        <p className="text-gray-600 mb-4">Bu sayfa şu anda erişilemiyor.</p>
                                        <button
                                            onClick={() => {
                                                setHasError(false);
                                                setIsLoading(true);
                                                if (iframeRef.current) {
                                                    iframeRef.current.src = iframeRef.current.src;
                                                }
                                            }}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            Tekrar Dene
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Iframe */}
                            <iframe
                                ref={iframeRef}
                                src={pages[currentPage]}
                                className="w-full h-full border-0 rounded-lg shadow-2xl"
                                onLoad={handleIframeLoad}
                                onError={handleIframeError}
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                title={`Katalog Sayfası ${currentPage + 1}`}
                            />

                            {/* Page number overlay */}
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {currentPage + 1} / {pages.length}
                            </div>

                            {/* Interactive corners */}
                            <div className="absolute inset-0 pointer-events-none">
                                {currentPage > 0 && (
                                    <div
                                        className="absolute top-0 right-0 w-20 h-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity pointer-events-auto"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePrevious();
                                        }}
                                    >
                                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-500/50"></div>
                                    </div>
                                )}
                                {currentPage < pages.length - 1 && (
                                    <div
                                        className="absolute bottom-0 left-0 w-20 h-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity pointer-events-auto"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNext();
                                        }}
                                    >
                                        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-500/50"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <MagazineControls
                        currentPage={currentPage}
                        totalPages={pages.length}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        onFirst={handleFirst}
                        onLast={handleLast}
                        onPageJump={handlePageJump}
                        isFlipping={isFlipping}
                        isFullscreen={isFullscreen}
                        onToggleFullscreen={toggleFullscreen}
                        zoom={zoom}
                        onZoomChange={setZoom}
                        onPrint={handlePrint}
                    />
                </div>
            </div>

            {/* Page flip animation styles */}
            <style>{`
        .page-flipping {
          animation: pageFlip 0.8s ease-in-out;
        }
        
        @keyframes pageFlip {
          0% {
            transform: rotateY(0deg) scale(1);
          }
          50% {
            transform: rotateY(-90deg) scale(1.05);
          }
          100% {
            transform: rotateY(-180deg) scale(1);
          }
        }
      `}</style>
        </div>
    );
}
