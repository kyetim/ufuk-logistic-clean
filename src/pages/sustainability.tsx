import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface Certificate {
    id: string;
    standard: string;
    title: string;
    description: string;
    image: string;
    color: string;
    icon: string;
}

export function SustainabilityPage() {
    const { t } = useLanguage();
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const certificates: Certificate[] = [
        {
            id: 'iso9001',
            standard: t('sustainability.iso9001'),
            title: t('sustainability.iso9001Title'),
            description: t('sustainability.iso9001Desc'),
            image: '/certificates/iso9001.jpg',
            color: 'from-blue-500 to-cyan-500',
            icon: '🏆'
        },
        {
            id: 'iso10002',
            standard: t('sustainability.iso10002'),
            title: t('sustainability.iso10002Title'),
            description: t('sustainability.iso10002Desc'),
            image: '/certificates/iso10002.jpg',
            color: 'from-green-500 to-emerald-500',
            icon: '👥'
        },
        {
            id: 'iso14001',
            standard: t('sustainability.iso14001'),
            title: t('sustainability.iso14001Title'),
            description: t('sustainability.iso14001Desc'),
            image: '/certificates/iso14001.jpg',
            color: 'from-emerald-500 to-teal-500',
            icon: '🌱'
        },
        {
            id: 'iso45001',
            standard: t('sustainability.iso45001'),
            title: t('sustainability.iso45001Title'),
            description: t('sustainability.iso45001Desc'),
            image: '/certificates/iso45001.jpg',
            color: 'from-orange-500 to-red-500',
            icon: '🛡️'
        }
    ];

    const sustainabilityPillars = [
        {
            title: t('sustainability.environmental'),
            description: t('sustainability.environmentalDesc'),
            icon: '🌍',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: t('sustainability.social'),
            description: t('sustainability.socialDesc'),
            icon: '🤝',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: t('sustainability.economic'),
            description: t('sustainability.economicDesc'),
            icon: '💼',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Glassmorphism Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                                    {t('sustainability.title')}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('sustainability.subtitle')}
                            </p>
                        </div>

                        {/* Sustainability Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {sustainabilityPillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className="text-center animate-fade-in-up hover-lift"
                                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                >
                                    <div className="text-6xl mb-4 animate-bounce">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {pillar.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                {t('sustainability.ourCommitment')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {t('sustainability.commitmentDesc')}
                        </p>
                    </div>

                    {/* Commitment Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sustainabilityPillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden card-hover-elegant">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {pillar.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                            {pillar.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed">
                                            {pillar.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ISO Certificates Section */}
            <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-emerald-100/30 to-teal-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                {t('sustainability.certificates')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {t('sustainability.certificatesDesc')}
                        </p>
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certificates.map((certificate, index) => (
                            <div
                                key={certificate.id}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden card-hover-elegant cursor-pointer"
                                    onClick={() => setSelectedCertificate(certificate)}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Certificate Preview */}
                                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                            {certificate.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <CardHeader className="text-center pb-2">
                                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                            {certificate.standard}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-gray-600 font-medium">
                                            {certificate.title}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center pb-4">
                                        <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {certificate.description}
                                        </CardDescription>
                                        <Button
                                            size="sm"
                                            className={`bg-gradient-to-r ${certificate.color} hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                        >
                                            {t('sustainability.viewCertificate')}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {selectedCertificate.standard}
                                </h3>
                                <p className="text-gray-600">
                                    {selectedCertificate.title}
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSelectedCertificate(null)}
                                className="hover:bg-gray-100 rounded-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                                <div className="text-8xl mb-4">
                                    {selectedCertificate.icon}
                                </div>
                                <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                                <div className="absolute top-4 right-4">
                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {selectedCertificate.description}
                                </p>
                                <Button
                                    className={`bg-gradient-to-r ${selectedCertificate.color} hover:opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                    onClick={() => setSelectedCertificate(null)}
                                >
                                    {t('sustainability.close')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Sürdürülebilir Gelecek
                            </span>
                            <br />
                            <span className="text-white">Birlikte İnşa Edelim</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Çevreye saygılı, sosyal sorumluluk bilinciyle hareket eden ve ekonomik sürdürülebilirliği ön planda tutan bir lojistik partneri olarak yanınızdayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                🌱 Sürdürülebilirlik Raporumuz
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                            >
                                📞 İletişime Geçin
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
