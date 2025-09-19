import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MagazineControlsProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
    onFirst: () => void;
    onLast: () => void;
    onPageJump: (page: number) => void;
    isFlipping: boolean;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
    zoom: number;
    onZoomChange: (zoom: number) => void;
    onPrint: () => void;
}

export function MagazineControls({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    onFirst,
    onLast,
    onPageJump,
    isFlipping,
    isFullscreen,
    onToggleFullscreen,
    zoom,
    onZoomChange,
    onPrint
}: MagazineControlsProps) {
    const { t } = useLanguage();
    const [showPageSelector, setShowPageSelector] = useState(false);

    const handleZoomIn = () => {
        onZoomChange(Math.min(zoom + 0.2, 3));
    };

    const handleZoomOut = () => {
        onZoomChange(Math.max(zoom - 0.2, 0.5));
    };

    const handleResetZoom = () => {
        onZoomChange(1);
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 min-w-[500px]">
            {/* Page indicator */}
            <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                    {currentPage + 1} / {totalPages}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                    />
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                    onClick={onFirst}
                    disabled={currentPage === 0 || isFlipping}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                    title={t('catalog.navigation.first')}
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={onPrevious}
                    disabled={currentPage === 0 || isFlipping}
                    className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-white"
                    title={t('catalog.navigation.previous')}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Page selector */}
                <div className="relative">
                    <button
                        onClick={() => setShowPageSelector(!showPageSelector)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 flex items-center space-x-2"
                    >
                        <span className="font-medium">{currentPage + 1}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {showPageSelector && (
                        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 z-50">
                            <div className="grid grid-cols-5 gap-1 max-h-32 overflow-y-auto">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            onPageJump(i);
                                            setShowPageSelector(false);
                                        }}
                                        className={`w-8 h-8 rounded text-sm font-medium transition-all duration-300 ${i === currentPage
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button
                    onClick={onNext}
                    disabled={currentPage === totalPages - 1 || isFlipping}
                    className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-white"
                    title={t('catalog.navigation.next')}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <button
                    onClick={onLast}
                    disabled={currentPage === totalPages - 1 || isFlipping}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                    title={t('catalog.navigation.last')}
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Additional controls */}
            <div className="flex items-center justify-center space-x-4">
                {/* Zoom controls */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleZoomOut}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title={t('catalog.navigation.zoomOut')}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>

                    <span className="text-sm text-gray-600 font-medium min-w-[60px] text-center">
                        {Math.round(zoom * 100)}%
                    </span>

                    <button
                        onClick={handleZoomIn}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title={t('catalog.navigation.zoomIn')}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>

                    <button
                        onClick={handleResetZoom}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title="Zoom Sıfırla"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16M4 20L20 4" />
                        </svg>
                    </button>
                </div>

                {/* Fullscreen toggle */}
                <button
                    onClick={onToggleFullscreen}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={t('catalog.navigation.fullscreen')}
                >
                    {isFullscreen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    )}
                </button>

                {/* Print button */}
                <button
                    onClick={onPrint}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={t('catalog.navigation.print')}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                </button>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                    {t('catalog.navigation.shortcuts')}: ← → {t('catalog.navigation.navigate')} • Space {t('catalog.navigation.flip')}
                </p>
            </div>
        </div>
    );
}
