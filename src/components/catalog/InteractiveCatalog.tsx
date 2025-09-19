import { forwardRef, useState, useRef, useEffect } from 'react';
import { CatalogPage } from './CatalogPage';
import { useLanguage } from '../../contexts/LanguageContext';

interface InteractiveCatalogProps {
    currentPage: number;
    isFlipping: boolean;
    onPageChange: (page: number) => void;
    totalPages: number;
}

export const InteractiveCatalog = forwardRef<HTMLDivElement, InteractiveCatalogProps>(
    ({ currentPage, isFlipping, onPageChange, totalPages }, _ref) => {
        const { t } = useLanguage();
        const [isDragging, setIsDragging] = useState(false);
        const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
        const [rotation, setRotation] = useState({ x: 0, y: 0 });
        const [isHovered, setIsHovered] = useState(false);
        const catalogRef = useRef<HTMLDivElement>(null);

        // Mouse drag handling for 3D rotation
        const handleMouseDown = (e: React.MouseEvent) => {
            setIsDragging(true);
            setDragStart({ x: e.clientX, y: e.clientY });
        };

        const handleMouseMove = (e: React.MouseEvent) => {
            if (!isDragging) return;

            const deltaX = e.clientX - dragStart.x;
            const deltaY = e.clientY - dragStart.y;

            // 3D rotation based on mouse movement
            setRotation({
                x: Math.max(-15, Math.min(15, deltaY * 0.1)),
                y: Math.max(-15, Math.min(15, deltaX * 0.1))
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            // Smooth return to original position
            setRotation({ x: 0, y: 0 });
        };

        // Touch support for mobile devices
        const handleTouchStart = (e: React.TouchEvent) => {
            const touch = e.touches[0];
            setIsDragging(true);
            setDragStart({ x: touch.clientX, y: touch.clientY });
        };

        const handleTouchMove = (e: React.TouchEvent) => {
            if (!isDragging) return;

            const touch = e.touches[0];
            const deltaX = touch.clientX - dragStart.x;
            const deltaY = touch.clientY - dragStart.y;

            setRotation({
                x: Math.max(-15, Math.min(15, deltaY * 0.1)),
                y: Math.max(-15, Math.min(15, deltaX * 0.1))
            });
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
            setRotation({ x: 0, y: 0 });
        };

        // Page flip detection
        const handlePageFlip = (direction: 'left' | 'right') => {
            if (isFlipping) return;

            if (direction === 'left' && currentPage > 0) {
                onPageChange(currentPage - 1);
            } else if (direction === 'right' && currentPage < totalPages - 1) {
                onPageChange(currentPage + 1);
            }
        };

        // Click detection for page flipping
        const handleCatalogClick = (e: React.MouseEvent) => {
            if (isFlipping) return;

            const rect = catalogRef.current?.getBoundingClientRect();
            if (!rect) return;

            const clickX = e.clientX - rect.left;
            const catalogWidth = rect.width;
            const clickPosition = clickX / catalogWidth;

            // Left half for previous page, right half for next page
            if (clickPosition < 0.5) {
                handlePageFlip('left');
            } else {
                handlePageFlip('right');
            }
        };

        // Keyboard navigation
        useEffect(() => {
            const handleKeyPress = (e: KeyboardEvent) => {
                if (isFlipping) return;

                switch (e.key) {
                    case 'ArrowLeft':
                        handlePageFlip('left');
                        break;
                    case 'ArrowRight':
                        handlePageFlip('right');
                        break;
                }
            };

            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }, [currentPage, isFlipping, totalPages]);

        return (
            <div className="flex items-center justify-center min-h-[600px] perspective-1000">
                {/* Left navigation arrow */}
                <div className="absolute left-4 z-20">
                    <button
                        onClick={() => handlePageFlip('left')}
                        disabled={currentPage === 0 || isFlipping}
                        className={`w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${currentPage === 0 || isFlipping
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-white hover:scale-110 hover:shadow-xl'
                            }`}
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Right navigation arrow */}
                <div className="absolute right-4 z-20">
                    <button
                        onClick={() => handlePageFlip('right')}
                        disabled={currentPage === totalPages - 1 || isFlipping}
                        className={`w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${currentPage === totalPages - 1 || isFlipping
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-white hover:scale-110 hover:shadow-xl'
                            }`}
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* 3D Catalog */}
                <div
                    ref={catalogRef}
                    className={`relative cursor-pointer transition-all duration-300 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        } ${isHovered ? 'scale-105' : 'scale-100'}`}
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        transformStyle: 'preserve-3d',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => {
                        handleMouseUp();
                        setIsHovered(false);
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseEnter={() => setIsHovered(true)}
                    onClick={handleCatalogClick}
                >
                    {/* Catalog Shadow */}
                    <div
                        className="absolute inset-0 bg-black/20 rounded-lg blur-xl transition-all duration-300"
                        style={{
                            transform: `translateZ(-20px) translateY(20px) scale(${1 + Math.abs(rotation.x) * 0.01})`,
                            opacity: 0.3 + Math.abs(rotation.x) * 0.02
                        }}
                    />

                    {/* Dynamic Shadow Effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-orange-900/10 to-yellow-900/10 rounded-lg blur-2xl transition-all duration-300"
                        style={{
                            transform: `translateZ(-30px) translateY(30px) scale(${1 + Math.abs(rotation.y) * 0.01})`,
                            opacity: 0.2 + Math.abs(rotation.y) * 0.01
                        }}
                    />

                    {/* Catalog Container */}
                    <div className="relative w-[800px] h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-amber-300 transition-all duration-300">
                        {/* Catalog Pages */}
                        <div className="relative w-full h-full">
                            {/* Current Page */}
                            <div className={`absolute inset-0 transition-all duration-800 ease-in-out ${isFlipping ? 'transform-gpu scale-95 opacity-90 rotateY-5' : 'scale-100 opacity-100 rotateY-0'
                                }`}>
                                <CatalogPage
                                    pageNumber={currentPage}
                                    isActive={true}
                                    isFlipping={isFlipping}
                                />
                            </div>

                            {/* Page Turn Effect */}
                            {isFlipping && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent animate-pulse pointer-events-none z-10" />
                            )}

                            {/* Page Turn Sound Effect (Visual) */}
                            {isFlipping && (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 pointer-events-none z-5" />
                            )}

                            {/* Page Turn Ripple Effect */}
                            {isFlipping && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-15 animate-pulse" />
                            )}
                        </div>

                        {/* Page Corner Fold Effect */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-200/50 to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Hover Glow Effect */}
                    {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-lg blur-xl -z-10 animate-pulse" />
                    )}

                    {/* Ambient Light Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/5 via-orange-200/5 to-yellow-200/5 rounded-lg pointer-events-none" />
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                        <p className="text-sm text-gray-600">
                            {t('catalog.instructions.drag')} • {t('catalog.instructions.click')} • {t('catalog.instructions.arrows')}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
);

InteractiveCatalog.displayName = 'InteractiveCatalog';
