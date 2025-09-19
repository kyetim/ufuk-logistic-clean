import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface IframePageProps {
    pageUrl: string;
    pageNumber: number;
    isActive: boolean;
    isFlipping: boolean;
    flipProgress: number;
    flipDirection: 'left' | 'right' | null;
    onPageClick: () => void;
}

export function IframePage({
    pageUrl,
    pageNumber,
    isActive,
    isFlipping,
    flipProgress,
    flipDirection,
    onPageClick
}: IframePageProps) {
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
    }, [pageUrl]);

    const handleIframeLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    // Calculate transform based on flip state
    const getTransform = () => {
        if (!isFlipping || flipDirection === null) {
            return 'rotateY(0deg) scale(1)';
        }

        const { flipProgress, flipDirection } = { flipProgress, flipDirection };
        let rotationY = 0;
        let scale = 1;

        if (flipDirection === 'right') {
            rotationY = -180 * flipProgress;
            scale = 1 + Math.sin(flipProgress * Math.PI) * 0.05;
        } else if (flipDirection === 'left') {
            rotationY = 180 * flipProgress;
            scale = 1 + Math.sin(flipProgress * Math.PI) * 0.05;
        }

        return `rotateY(${rotationY}deg) scale(${scale})`;
    };

    return (
        <div
            className="relative w-full h-full perspective-1000"
            onClick={onPageClick}
            style={{
                transform: getTransform(),
                transformStyle: 'preserve-3d',
                transition: isFlipping ? 'none' : 'transform 0.3s ease'
            }}
        >
            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        <p className="text-gray-600 font-medium">Sayfa yükleniyor...</p>
                    </div>
                </div>
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
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
                src={pageUrl}
                className="w-full h-full border-0 rounded-lg shadow-lg"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                title={`Katalog Sayfası ${pageNumber + 1}`}
            />

            {/* Page number overlay */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {pageNumber + 1}
            </div>

            {/* Interactive corners */}
            {isActive && (
                <>
                    {pageNumber > 0 && (
                        <div
                            className="absolute top-0 right-0 w-20 h-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Handle left page turn
                            }}
                        >
                            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-500/50"></div>
                        </div>
                    )}
                    {pageNumber < 4 && (
                        <div
                            className="absolute bottom-0 left-0 w-20 h-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Handle right page turn
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-500/50"></div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
