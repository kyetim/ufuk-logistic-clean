import { useLanguage } from '../../contexts/LanguageContext';

interface CatalogNavigationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
    onFirst: () => void;
    onLast: () => void;
    disabled: boolean;
}

export function CatalogNavigation({
    currentPage,
    totalPages,
    onNext,
    onPrev,
    onFirst,
    onLast,
    disabled
}: CatalogNavigationProps) {
    const { t } = useLanguage();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200">
                {/* Page Indicator */}
                <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-amber-900 mb-2">
                        {currentPage + 1} / {totalPages}
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center space-x-4">
                    {/* First Page Button */}
                    <button
                        onClick={onFirst}
                        disabled={currentPage === 0 || disabled}
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${currentPage === 0 || disabled
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-110 shadow-lg hover:shadow-xl'
                            }`}
                        title={t('catalog.navigation.first')}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Previous Page Button */}
                    <button
                        onClick={onPrev}
                        disabled={currentPage === 0 || disabled}
                        className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${currentPage === 0 || disabled
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 shadow-lg hover:shadow-xl'
                            }`}
                        title={t('catalog.navigation.previous')}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center space-x-2 mx-4">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i;
                            } else if (currentPage < 2) {
                                pageNum = i;
                            } else if (currentPage > totalPages - 3) {
                                pageNum = totalPages - 5 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => {
                                        if (!disabled) {
                                            // This would need to be passed as a prop
                                            // For now, we'll use the existing navigation
                                        }
                                    }}
                                    className={`w-10 h-10 rounded-full transition-all duration-300 ${pageNum === currentPage
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:scale-110'
                                        } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                    {pageNum + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* Next Page Button */}
                    <button
                        onClick={onNext}
                        disabled={currentPage === totalPages - 1 || disabled}
                        className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${currentPage === totalPages - 1 || disabled
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 shadow-lg hover:shadow-xl'
                            }`}
                        title={t('catalog.navigation.next')}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Last Page Button */}
                    <button
                        onClick={onLast}
                        disabled={currentPage === totalPages - 1 || disabled}
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${currentPage === totalPages - 1 || disabled
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-110 shadow-lg hover:shadow-xl'
                            }`}
                        title={t('catalog.navigation.last')}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Additional Controls */}
                <div className="flex items-center justify-center mt-4 space-x-4">
                    {/* Zoom Controls */}
                    <div className="flex items-center space-x-2">
                        <button
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            title={t('catalog.navigation.zoomOut')}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>
                        <span className="text-sm text-gray-600 font-medium">100%</span>
                        <button
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            title={t('catalog.navigation.zoomIn')}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    {/* Fullscreen Toggle */}
                    <button
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title={t('catalog.navigation.fullscreen')}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>

                    {/* Print Button */}
                    <button
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title={t('catalog.navigation.print')}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                    </button>
                </div>

                {/* Keyboard Shortcuts Info */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        {t('catalog.navigation.shortcuts')}: ← → {t('catalog.navigation.navigate')} • Space {t('catalog.navigation.flip')}
                    </p>
                </div>
            </div>
        </div>
    );
}
