import { useState, useEffect } from 'react';
import { useScrollToTopButton } from '../../hooks/useScrollToTop';

interface ScrollToTopButtonProps {
    className?: string;
}

export function ScrollToTopButton({ className = '' }: ScrollToTopButtonProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollToTop } = useScrollToTopButton();

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`
                        fixed bottom-8 right-8 z-50
                        bg-blue-600 hover:bg-blue-700 
                        text-white rounded-full p-3
                        shadow-lg hover:shadow-xl
                        transition-all duration-300 ease-in-out
                        transform hover:scale-110
                        group
                        ${className}
                    `}
                    aria-label="Başa dön"
                    title="Başa dön"
                >
                    <svg 
                        className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 10l7-7m0 0l7 7m-7-7v18" 
                        />
                    </svg>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* Pulse animation */}
                    <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
                </button>
            )}
        </>
    );
}
