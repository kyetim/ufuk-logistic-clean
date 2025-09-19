import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface CatalogPage {
    id: number;
    title: string;
    content: {
        type: 'cover' | 'content' | 'services' | 'about' | 'contact';
        data: any;
    };
    background: string;
}

interface Advanced3DCatalogProps {
    onPageChange?: (page: number) => void;
    onFullscreenChange?: (isFullscreen: boolean) => void;
}

export function Advanced3DCatalog({ onPageChange, onFullscreenChange }: Advanced3DCatalogProps) {
    const { t: _t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const catalogRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    // Katalog sayfaları - Genişletilmiş Ufuk Lojistik içeriği
    const catalogPages: CatalogPage[] = [
        {
            id: 0,
            title: "Kapak",
            background: "from-blue-900 via-purple-900 to-indigo-900",
            content: {
                type: 'cover',
                data: {
                    companyName: "UFUK LOJİSTİK",
                    subtitle: "42 Yıllık Deneyim",
                    year: "1980'den Beri",
                    description: "Güvenilir Lojistik Çözümleri",
                    tagline: "Türkiye'nin Güvenilir Lojistik Partneri"
                }
            }
        },
        {
            id: 1,
            title: "Hakkımızda",
            background: "from-cyan-800 to-blue-900",
            content: {
                type: 'about',
                data: {
                    title: "HAKKIMIZDA",
                    description: "1980 yılından beri lojistik sektöründe faaliyet gösteren Ufuk Lojistik, karayolu, havayolu, denizyolu, kombine taşımacılık, açık kargo ve proje kargo nakliye ile depolama hizmetleri sunmaktadır.",
                    features: [
                        "42 Yıllık Deneyim",
                        "Güçlü Altyapı",
                        "Teknoloji ve Yazılım",
                        "Müşteri Memnuniyeti",
                        "Sürekli Gelişim"
                    ],
                    achievements: [
                        { number: "42", label: "Yıl Deneyim" },
                        { number: "200+", label: "Personel" },
                        { number: "3", label: "Şehir" },
                        { number: "1000+", label: "Mutlu Müşteri" }
                    ]
                }
            }
        },
        {
            id: 2,
            title: "Hizmetlerimiz",
            background: "from-green-800 to-emerald-900",
            content: {
                type: 'services',
                data: {
                    title: "HİZMETLERİMİZ",
                    services: [
                        { name: "Karayolu Taşımacılığı", icon: "🚛", description: "Güvenli ve hızlı karayolu taşımacılığı", details: "70+ modern araç filosu ile tüm Türkiye'ye hizmet" },
                        { name: "Havayolu Taşımacılığı", icon: "✈️", description: "Acil ve değerli kargo taşımacılığı", details: "24/7 acil kargo hizmeti" },
                        { name: "Denizyolu Taşımacılığı", icon: "🚢", description: "Büyük hacimli kargo taşımacılığı", details: "Uluslararası deniz taşımacılığı" },
                        { name: "Kombine Taşımacılık", icon: "🚚", description: "Çok modlu taşımacılık çözümleri", details: "Karayolu + Denizyolu kombinasyonu" },
                        { name: "Depolama Hizmetleri", icon: "🏭", description: "Güvenli depolama ve stok yönetimi", details: "109.000 m² depolama alanı" },
                        { name: "Proje Kargo", icon: "📦", description: "Özel proje kargo taşımacılığı", details: "Büyük projeler için özel çözümler" },
                        { name: "Konteyner Hizmetleri", icon: "📋", description: "Konteyner taşıma ve depolama", details: "3 reachstacker ile profesyonel hizmet" },
                        { name: "Gümrük İşlemleri", icon: "🏛️", description: "Gümrük ve dış ticaret işlemleri", details: "Uzman gümrük danışmanlığı" }
                    ]
                }
            }
        },
        {
            id: 3,
            title: "Tesislerimiz",
            background: "from-orange-800 to-red-900",
            content: {
                type: 'content',
                data: {
                    title: "TESİSLERİMİZ",
                    facilities: [
                        { name: "Toplam Alan", value: "109.000 m²", description: "Açık konteyner sahaları", location: "3 Şehirde" },
                        { name: "Lokasyonlar", value: "3 Şehir", description: "Mersin, Gaziantep, İskenderun", location: "Stratejik Konumlar" },
                        { name: "Çekici Sayısı", value: "70+", description: "Modern araç filosu", location: "Tüm Türkiye" },
                        { name: "Reachstacker", value: "3 Adet", description: "Tam konteyner makineleri", location: "Mersin Limanı" },
                        { name: "Personel", value: "200+", description: "Deneyimli çalışan", location: "Uzman Ekip" },
                        { name: "Depo Kapasitesi", value: "50.000+", description: "Konteyner depolama", location: "Güvenli Alan" }
                    ],
                    locations: [
                        { city: "Mersin", description: "Ana Merkez", features: ["Liman Yakını", "Gümrük Ofisi", "Büyük Depo"] },
                        { city: "Gaziantep", description: "Güneydoğu Merkezi", features: ["Sanayi Bölgesi", "Hızlı Erişim", "Modern Tesis"] },
                        { city: "İskenderun", description: "Akdeniz Limanı", features: ["Deniz Taşımacılığı", "Konteyner Terminali", "Lojistik Merkez"] }
                    ]
                }
            }
        },
        {
            id: 4,
            title: "Değerlerimiz",
            background: "from-purple-800 to-pink-900",
            content: {
                type: 'content',
                data: {
                    title: "DEĞERLERİMİZ",
                    values: [
                        { name: "Başarma Azmi", icon: "🎯", description: "Hedeflerimize ulaşmak için kararlılıkla çalışırız", color: "text-yellow-300" },
                        { name: "Müşteri Odaklılık", icon: "👥", description: "Müşteri ihtiyaçlarını öncelikli tutarız", color: "text-blue-300" },
                        { name: "Güvenilirlik", icon: "🤝", description: "Sözümüzün arkasında dururuz", color: "text-green-300" },
                        { name: "Topluma Katkı", icon: "🌍", description: "Sosyal sorumluluklarımızı yerine getiririz", color: "text-purple-300" },
                        { name: "Sürekli Gelişim", icon: "📈", description: "Kendimizi sürekli geliştiriyoruz", color: "text-orange-300" },
                        { name: "İnovasyon", icon: "💡", description: "Yenilikçi çözümler üretiyoruz", color: "text-cyan-300" }
                    ],
                    mission: "Müşterilerimize en kaliteli lojistik hizmeti sunarak, sektörde öncü konumumuzu sürdürmek",
                    vision: "Türkiye'nin en güvenilir ve yenilikçi lojistik şirketi olmak"
                }
            }
        },
        {
            id: 5,
            title: "Teknoloji",
            background: "from-indigo-800 to-purple-900",
            content: {
                type: 'content',
                data: {
                    title: "TEKNOLOJİ VE YAZILIM",
                    technologies: [
                        { name: "Kendi Yazılımımız", description: "10+ yıldır geliştirdiğimiz lojistik yazılımı", icon: "💻" },
                        { name: "Gerçek Zamanlı Takip", description: "Kargo takibi ve operasyon yönetimi", icon: "📱" },
                        { name: "Müşteri Portalı", description: "Online sipariş ve takip sistemi", icon: "🌐" },
                        { name: "Mobil Uygulama", description: "Android ve iOS uygulamaları", icon: "📲" },
                        { name: "API Entegrasyonu", description: "Müşteri sistemleri ile entegrasyon", icon: "🔗" },
                        { name: "Bulut Teknolojisi", description: "Güvenli veri depolama ve yedekleme", icon: "☁️" }
                    ],
                    benefits: [
                        "Operasyonel Şeffaflık",
                        "Anlık Bilgi Paylaşımı",
                        "Düşük Maliyetli Çözümler",
                        "Özelleştirilmiş Hizmetler"
                    ]
                }
            }
        },
        {
            id: 6,
            title: "Sertifikalar",
            background: "from-emerald-800 to-teal-900",
            content: {
                type: 'content',
                data: {
                    title: "SERTİFİKALAR VE BELGELER",
                    certifications: [
                        { name: "ISO 9001:2015", description: "Kalite Yönetim Sistemi", icon: "🏆" },
                        { name: "ISO 14001:2015", description: "Çevre Yönetim Sistemi", icon: "🌱" },
                        { name: "OHSAS 18001", description: "İş Sağlığı ve Güvenliği", icon: "🛡️" },
                        { name: "TSE Belgesi", description: "Türk Standardları Enstitüsü", icon: "⭐" },
                        { name: "Gümrük Müşavirliği", description: "Gümrük İşlemleri Yetkisi", icon: "🏛️" },
                        { name: "Lojistik Sertifikası", description: "Uluslararası Lojistik", icon: "📋" }
                    ],
                    awards: [
                        "Yılın Lojistik Şirketi 2023",
                        "Müşteri Memnuniyeti Ödülü",
                        "İnovasyon Ödülü",
                        "Sürdürülebilirlik Ödülü"
                    ]
                }
            }
        },
        {
            id: 7,
            title: "İletişim",
            background: "from-indigo-800 to-blue-900",
            content: {
                type: 'contact',
                data: {
                    title: "İLETİŞİM",
                    contact: [
                        { type: "Telefon", value: "+90 (324) 555 0123", icon: "📞", description: "7/24 Destek Hattı" },
                        { type: "E-posta", value: "info@ufuklojistik.com", icon: "📧", description: "Genel Bilgi" },
                        { type: "Satış", value: "satis@ufuklojistik.com", icon: "💼", description: "Satış Departmanı" },
                        { type: "Adres", value: "Mersin, Türkiye", icon: "📍", description: "Ana Merkez" },
                        { type: "Şubeler", value: "Gaziantep & İskenderun", icon: "🏢", description: "Bölge Ofisleri" },
                        { type: "Web Sitesi", value: "www.ufuklojistik.com", icon: "🌐", description: "Online Hizmetler" }
                    ],
                    workingHours: [
                        { day: "Pazartesi - Cuma", hours: "08:00 - 18:00" },
                        { day: "Cumartesi", hours: "09:00 - 15:00" },
                        { day: "Pazar", hours: "Kapalı" },
                        { day: "Acil Durum", hours: "7/24 Hizmet" }
                    ]
                }
            }
        }
    ];

    // Sayfa çevirme animasyonu
    const flipPage = useCallback((direction: 'left' | 'right') => {
        if (isFlipping) return;

        const newPage = direction === 'left'
            ? Math.max(0, currentPage - 1)
            : Math.min(catalogPages.length - 1, currentPage + 1);

        if (newPage === currentPage) return;

        // Sayfa çevirme ses efekti
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
            audio.volume = 0.3;
            audio.play().catch(() => { }); // Ignore errors if audio fails
        } catch (e) {
            // Ignore audio errors
        }

        setIsFlipping(true);
        setFlipDirection(direction);

        // Animasyon süresi
        setTimeout(() => {
            setCurrentPage(newPage);
            setIsFlipping(false);
            setFlipDirection(null);
            onPageChange?.(newPage);
        }, 600);
    }, [currentPage, isFlipping, catalogPages.length, onPageChange]);

    // Mouse takibi - Throttled for performance
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!catalogRef.current) return;

        const rect = catalogRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Throttle mouse updates for better performance
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        animationRef.current = requestAnimationFrame(() => {
            setMousePosition({ x, y });
        });
    }, []);

    // Klavye navigasyonu
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (isFlipping) return;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    flipPage('left');
                    break;
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    flipPage('right');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [flipPage, isFlipping]);

    // Cleanup animation frame on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Tam ekran fonksiyonları
    const toggleFullscreen = useCallback(async () => {
        try {
            if (!document.fullscreenElement) {
                // Tam ekrana geç
                if (catalogRef.current?.requestFullscreen) {
                    await catalogRef.current.requestFullscreen();
                } else if ((catalogRef.current as any)?.webkitRequestFullscreen) {
                    await (catalogRef.current as any).webkitRequestFullscreen();
                } else if ((catalogRef.current as any)?.msRequestFullscreen) {
                    await (catalogRef.current as any).msRequestFullscreen();
                }
                setIsFullscreen(true);
                onFullscreenChange?.(true);
            } else {
                // Tam ekrandan çık
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if ((document as any).webkitExitFullscreen) {
                    await (document as any).webkitExitFullscreen();
                } else if ((document as any).msExitFullscreen) {
                    await (document as any).msExitFullscreen();
                }
                setIsFullscreen(false);
                onFullscreenChange?.(false);
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    }, [onFullscreenChange]);

    // Tam ekran değişikliklerini dinle
    useEffect(() => {
        const handleFullscreenChange = () => {
            const isCurrentlyFullscreen = !!document.fullscreenElement;
            setIsFullscreen(isCurrentlyFullscreen);
            onFullscreenChange?.(isCurrentlyFullscreen);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, [onFullscreenChange]);

    // ESC tuşu ile tam ekrandan çık
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isFullscreen) {
                toggleFullscreen();
            }
        };

        if (isFullscreen) {
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }
    }, [isFullscreen, toggleFullscreen]);

    // Sayfa içeriği render
    const renderPageContent = (page: CatalogPage) => {
        const { content } = page;

        switch (content.type) {
            case 'cover':
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 relative overflow-hidden">
                        {/* Arka plan efektleri */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
                            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse delay-300"></div>
                            <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-white/25 rounded-full animate-pulse delay-700"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce">
                                <span className="text-8xl">🚛</span>
                            </div>

                            <h1 className="text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-wider">
                                {content.data.companyName}
                            </h1>

                            <p className="text-4xl text-blue-200 mb-8 font-light">
                                {content.data.subtitle}
                            </p>

                            <div className="w-40 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-8"></div>

                            <div className="text-2xl text-blue-100 font-medium">
                                <p>{content.data.year}</p>
                                <p className="text-3xl font-bold text-white mt-2">{content.data.description}</p>
                                <p className="text-xl text-blue-300 mt-4 font-medium">{content.data.tagline}</p>
                            </div>
                        </div>
                    </div>
                );

            case 'about':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {content.data.title}
                        </h2>

                        <div className="mb-8">
                            <div className="w-full h-64 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl mb-6">
                                <span className="text-9xl">🏭</span>
                            </div>
                        </div>

                        <p className="text-xl text-cyan-100 leading-relaxed mb-8 text-center">
                            {content.data.description}
                        </p>

                        {/* Başarılar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {content.data.achievements.map((achievement: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                        {achievement.number}
                                    </div>
                                    <div className="text-cyan-200 text-sm font-medium">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {content.data.features.map((feature: string, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                        {feature}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'services':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {content.data.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {content.data.services.map((service: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                                            {service.name}
                                        </h3>
                                    </div>
                                    <p className="text-green-100 text-base leading-relaxed mb-3">
                                        {service.description}
                                    </p>
                                    <p className="text-green-200 text-sm leading-relaxed">
                                        {service.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'contact':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {content.data.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {content.data.contact.map((contact: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl">{contact.icon}</div>
                                        <div>
                                            <div className="text-white font-semibold text-lg">
                                                {contact.value}
                                            </div>
                                            <div className="text-blue-200 text-sm">
                                                {contact.type}
                                            </div>
                                            <div className="text-blue-300 text-xs">
                                                {contact.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Çalışma Saatleri */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Çalışma Saatleri</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {content.data.workingHours.map((schedule: any, index: number) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                                        <div className="text-white font-semibold">{schedule.day}</div>
                                        <div className="text-blue-200 text-sm">{schedule.hours}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    42 Yıllık Deneyim
                                </h3>
                                <p className="text-indigo-100 text-lg">
                                    Lojistik sektöründe güvenilir partner olarak hizmet vermeye devam ediyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {content.data.title}
                        </h2>

                        {/* Tesisler */}
                        {content.data.facilities && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {content.data.facilities.map((facility: any, index: number) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                                            {facility.value}
                                        </div>
                                        <div className="text-orange-200 font-semibold mb-2 text-xl">
                                            {facility.name}
                                        </div>
                                        <div className="text-orange-100 text-base leading-relaxed mb-2">
                                            {facility.description}
                                        </div>
                                        <div className="text-orange-300 text-sm">
                                            {facility.location}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Lokasyonlar */}
                        {content.data.locations && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">Lokasyonlarımız</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {content.data.locations.map((location: any, index: number) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                            <h4 className="text-xl font-bold text-white mb-2">{location.city}</h4>
                                            <p className="text-orange-200 text-sm mb-3">{location.description}</p>
                                            <ul className="space-y-1">
                                                {location.features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="text-orange-100 text-xs">• {feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Değerler */}
                        {content.data.values && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {content.data.values.map((value: any, index: number) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                                {value.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-bold text-white mb-2 group-hover:${value.color} transition-colors duration-300`}>
                                                    {value.name}
                                                </h3>
                                                <p className="text-purple-100 text-base leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Misyon & Vizyon */}
                        {content.data.mission && content.data.vision && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Misyonumuz</h3>
                                    <p className="text-purple-100 leading-relaxed">{content.data.mission}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Vizyonumuz</h3>
                                    <p className="text-purple-100 leading-relaxed">{content.data.vision}</p>
                                </div>
                            </div>
                        )}

                        {/* Teknolojiler */}
                        {content.data.technologies && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {content.data.technologies.map((tech: any, index: number) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                                                    {tech.name}
                                                </h3>
                                                <p className="text-indigo-100 text-sm leading-relaxed">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Faydalar */}
                        {content.data.benefits && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">Faydalar</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {content.data.benefits.map((benefit: string, index: number) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                                            <div className="text-indigo-200 font-medium">{benefit}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sertifikalar */}
                        {content.data.certifications && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {content.data.certifications.map((cert: any, index: number) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                                {cert.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-emerald-100 text-sm leading-relaxed">
                                                    {cert.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Ödüller */}
                        {content.data.awards && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">Ödüllerimiz</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {content.data.awards.map((award: string, index: number) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                                            <div className="text-emerald-200 font-medium">{award}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="w-full h-screen bg-gray-900 perspective-1000 overflow-hidden">
            {/* 3D Katalog Container */}
            <div
                ref={catalogRef}
                className="relative w-full h-full flex items-center justify-center"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    transform: `rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: isHovered ? 'none' : 'transform 0.3s ease'
                }}
            >
                {/* Katalog Gölgesi */}
                <div
                    className="absolute inset-0 bg-black/30 rounded-lg blur-2xl transition-all duration-300"
                    style={{
                        transform: `translateZ(-50px) translateY(50px) scale(${1 + Math.abs(mousePosition.y - 0.5) * 0.1})`,
                        opacity: 0.3 + Math.abs(mousePosition.y - 0.5) * 0.2
                    }}
                />

                {/* Katalog Sayfası */}
                <div
                    className={`relative w-[900px] h-[650px] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-amber-200 transition-all duration-300 ${isFlipping ? 'transform-gpu' : ''
                        }`}
                    style={{
                        transform: isFlipping
                            ? `rotateY(${flipDirection === 'right' ? -15 : 15}deg) scale(0.95)`
                            : 'rotateY(0deg) scale(1)',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* Sayfa İçeriği */}
                    <div className={`w-full h-full bg-gradient-to-br ${catalogPages[currentPage].background} transition-all duration-500`}>
                        {renderPageContent(catalogPages[currentPage])}
                    </div>

                    {/* Sayfa Çevirme Efekti */}
                    {isFlipping && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent animate-pulse pointer-events-none z-10" />
                    )}

                    {/* Sayfa Köşe Efektleri */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-200/50 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-200/50 to-transparent pointer-events-none" />
                </div>

                {/* Hover Glow Efekti */}
                {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur-xl -z-10 animate-pulse" />
                )}
            </div>

            {/* Navigasyon Kontrolleri */}
            <div className="absolute top-4 left-4 right-4 z-30">
                <div className="flex items-center justify-between">
                    {/* Sayfa Göstergesi */}
                    <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        {currentPage + 1} / {catalogPages.length}
                    </div>

                    {/* Navigasyon Butonları */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => flipPage('left')}
                            disabled={currentPage === 0 || isFlipping}
                            className="w-12 h-12 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center hover:scale-110"
                            title="Önceki Sayfa"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => flipPage('right')}
                            disabled={currentPage === catalogPages.length - 1 || isFlipping}
                            className="w-12 h-12 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center hover:scale-110"
                            title="Sonraki Sayfa"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Tam Ekran Butonu */}
                        <button
                            onClick={toggleFullscreen}
                            className="w-12 h-12 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-all duration-300 flex items-center justify-center hover:scale-110"
                            title={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran"}
                        >
                            {isFullscreen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Tıklama Alanları */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Sol taraf - Önceki sayfa */}
                {currentPage > 0 && (
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer pointer-events-auto opacity-0 hover:opacity-100 transition-opacity bg-blue-500/10"
                        onClick={() => flipPage('left')}
                        title="Önceki Sayfa"
                    >
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white px-4 py-3 rounded-lg text-lg font-medium shadow-lg">
                            ← Önceki Sayfa
                        </div>
                    </div>
                )}

                {/* Sağ taraf - Sonraki sayfa */}
                {currentPage < catalogPages.length - 1 && (
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer pointer-events-auto opacity-0 hover:opacity-100 transition-opacity bg-green-500/10"
                        onClick={() => flipPage('right')}
                        title="Sonraki Sayfa"
                    >
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/70 text-white px-4 py-3 rounded-lg text-lg font-medium shadow-lg">
                            Sonraki Sayfa →
                        </div>
                    </div>
                )}
            </div>

            {/* Talimatlar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs">
                    ← → Ok tuşları • Space • Mouse ile gezin • Sayfa tıklayarak çevir • F11 Tam ekran • ESC Çık
                </div>
            </div>

            {/* Sayfa Çevirme Göstergesi */}
            {isFlipping && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-40">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

