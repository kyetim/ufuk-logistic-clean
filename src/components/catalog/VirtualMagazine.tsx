import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    Text,
    Html,
    Environment,
    PerspectiveCamera,
    OrbitControls,
    useProgress
} from '@react-three/drei';
import { useLanguage } from '../../contexts/LanguageContext';
import { SoundEffects, HapticFeedback } from '../../utils/soundEffects';
import { MagazineControls } from './MagazineControls';
import { IframePage } from './IframePage';
import * as THREE from 'three';

// Loading component
function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Katalog yükleniyor... {Math.round(progress)}%</p>
            </div>
        </Html>
    );
}

// Individual page component with iframe
function MagazinePage({
    pageUrl,
    pageNumber,
    isActive,
    isFlipping,
    flipProgress,
    flipDirection,
    onPageClick
}: {
    pageUrl: string;
    pageNumber: number;
    isActive: boolean;
    isFlipping: boolean;
    flipProgress: number;
    flipDirection: 'left' | 'right' | null;
    onPageClick: () => void;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current && isFlipping && flipDirection) {
            const rotationY = flipDirection === 'left'
                ? -Math.PI * flipProgress
                : Math.PI * flipProgress;

            meshRef.current.rotation.y = rotationY;

            // Add subtle scale effect during flip
            const scale = 1 + Math.sin(flipProgress * Math.PI) * 0.05;
            meshRef.current.scale.setScalar(scale);
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            onClick={onPageClick}
            onPointerOver={() => {
                if (meshRef.current) {
                    meshRef.current.scale.setScalar(1.02);
                }
            }}
            onPointerOut={() => {
                if (meshRef.current && !isFlipping) {
                    meshRef.current.scale.setScalar(1);
                }
            }}
        >
            <planeGeometry args={[8, 10]} />
            <Html
                transform
                occlude
                position={[0, 0, 0.01]}
                style={{
                    width: '800px',
                    height: '1000px',
                    pointerEvents: 'auto'
                }}
            >
                <IframePage
                    pageUrl={pageUrl}
                    pageNumber={pageNumber}
                    isActive={isActive}
                    isFlipping={isFlipping}
                    flipProgress={flipProgress}
                    flipDirection={flipDirection}
                    onPageClick={onPageClick}
                />
            </Html>
        </mesh>
    );
}

// Main magazine component
function Magazine({
    pages,
    currentPage,
    isFlipping,
    flipProgress,
    flipDirection,
    onPageChange
}: {
    pages: string[];
    currentPage: number;
    isFlipping: boolean;
    flipProgress: number;
    flipDirection: 'left' | 'right' | null;
    onPageChange: (page: number) => void;
}) {
    const groupRef = useRef<THREE.Group>(null);
    const { camera } = useThree();

    useFrame(() => {
        if (groupRef.current) {
            // Subtle floating animation
            groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        }
    });

    const handlePageClick = (pageIndex: number) => {
        if (isFlipping) return;

        SoundEffects.playPageClick();
        HapticFeedback.light();
        onPageChange(pageIndex);
    };

    return (
        <group ref={groupRef}>
            {/* Current page */}
            <MagazinePage
                pageUrl={pages[currentPage]}
                pageNumber={currentPage}
                isActive={true}
                isFlipping={isFlipping}
                flipProgress={flipProgress}
                flipDirection={flipDirection}
                onPageClick={() => handlePageClick(currentPage)}
            />

            {/* Next page (for smooth transitions) */}
            {currentPage < pages.length - 1 && (
                <MagazinePage
                    pageUrl={pages[currentPage + 1]}
                    pageNumber={currentPage + 1}
                    isActive={false}
                    isFlipping={false}
                    flipProgress={0}
                    flipDirection={null}
                    onPageClick={() => handlePageClick(currentPage + 1)}
                />
            )}
        </group>
    );
}

// 3D Controls component
function MagazineControls3D({
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
}: {
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
}) {
    return (
        <Html position={[0, -6, 0]} center>
            <MagazineControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevious={onPrevious}
                onNext={onNext}
                onFirst={onFirst}
                onLast={onLast}
                onPageJump={onPageJump}
                isFlipping={isFlipping}
                isFullscreen={isFullscreen}
                onToggleFullscreen={onToggleFullscreen}
                zoom={zoom}
                onZoomChange={onZoomChange}
                onPrint={onPrint}
            />
        </Html>
    );
}

// Main Virtual Magazine Component
interface VirtualMagazineProps {
    pages: string[];
    currentPage: number;
    onPageChange: (page: number) => void;
    enableSwipe?: boolean;
    enableKeyboard?: boolean;
    showPageNumbers?: boolean;
    enableZoom?: boolean;
    enableFullscreen?: boolean;
}

export function VirtualMagazine({
    pages,
    currentPage,
    onPageChange,
    enableSwipe = true,
    enableKeyboard = true,
    showPageNumbers = true,
    enableZoom = true,
    enableFullscreen = true
}: VirtualMagazineProps) {
    const { t } = useLanguage();
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipProgress, setFlipProgress] = useState(0);
    const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoom, setZoom] = useState(1);

    const animationRef = useRef<number>();

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
        setFlipDirection(direction);
        setFlipProgress(0);

        const startTime = performance.now();
        const duration = 1000; // milliseconds

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for realistic page turn
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setFlipProgress(easeProgress);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Complete the flip
                const newPage = direction === 'left'
                    ? Math.max(0, currentPage - 1)
                    : Math.min(pages.length - 1, currentPage + 1);

                onPageChange(newPage);

                setIsFlipping(false);
                setFlipDirection(null);
                setFlipProgress(0);
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

    // Initialize sound effects
    useEffect(() => {
        SoundEffects.init();
    }, []);

    // Cleanup animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className={`w-full h-screen ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
            <Canvas
                camera={{ position: [0, 0, 12], fov: 50 }}
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
                <Suspense fallback={<Loader />}>
                    {/* Lighting */}
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />

                    {/* Environment */}
                    <Environment preset="studio" />

                    {/* Magazine */}
                    <Magazine
                        pages={pages}
                        currentPage={currentPage}
                        isFlipping={isFlipping}
                        flipProgress={flipProgress}
                        flipDirection={flipDirection}
                        onPageChange={onPageChange}
                    />

                    {/* Controls */}
                    <MagazineControls3D
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

                    {/* Orbit Controls for 3D interaction */}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={enableZoom}
                        enableRotate={true}
                        minDistance={8 / zoom}
                        maxDistance={20 / zoom}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI - Math.PI / 6}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
