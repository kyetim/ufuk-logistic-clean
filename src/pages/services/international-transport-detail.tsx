import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

export function InternationalTransportDetailPage() {
    const { t: _t } = useLanguage();

    const features = [
        {
            title: "Uluslararası Taşımacılık",
            description: "Avrupa, Orta Doğu ve Asya ülkelerine güvenilir taşımacılık hizmeti sunuyoruz.",
            icon: "🌍"
        },
        {
            title: "Güçlü Finansal Yapı",
            description: "Büyük uluslararası projeler için güçlü finansal altyapımızla güvenilir hizmet.",
            icon: "💰"
        },
        {
            title: "Uzman Partner Ağı",
            description: "İşlerinin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürüyoruz.",
            icon: "🤝"
        },
        {
            title: "Rekabetçi Navlunlar",
            description: "Yoğun taşımalarımız sayesinde rekabetçi navlun fiyatları sunuyoruz.",
            icon: "💎"
        }
    ];

    const routes = [
        {
            route: "Türkiye - Avrupa",
            countries: "Almanya, Fransa, İtalya, Hollanda",
            duration: "3-5 gün",
            icon: "🇪🇺"
        },
        {
            route: "Türkiye - Orta Doğu",
            countries: "Irak, İran, Suudi Arabistan, BAE",
            duration: "5-7 gün",
            icon: "🌍"
        },
        {
            route: "Türkiye - Asya",
            countries: "Çin, Hindistan, Pakistan",
            duration: "10-15 gün",
            icon: "🌏"
        },
        {
            route: "Türkiye - Afrika",
            countries: "Mısır, Libya, Tunus",
            duration: "7-10 gün",
            icon: "🌍"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Talep Değerlendirmesi",
            description: "Uluslararası taşıma talebini detaylı olarak değerlendiriyoruz.",
            icon: "📋"
        },
        {
            step: "2",
            title: "Gümrük İşlemleri",
            description: "Çıkış ve giriş gümrük işlemlerini organize ediyoruz.",
            icon: "🏛️"
        },
        {
            step: "3",
            title: "Rota Optimizasyonu",
            description: "En uygun rota ve zamanlama planlaması yapıyoruz.",
            icon: "🗺️"
        },
        {
            step: "4",
            title: "Dokümantasyon",
            description: "Gerekli tüm uluslararası dokümantasyonu hazırlıyoruz.",
            icon: "📄"
        },
        {
            step: "5",
            title: "Taşıma Süreci",
            description: "Uzman ekiple güvenli uluslararası taşıma gerçekleştiriyoruz.",
            icon: "🚛"
        },
        {
            step: "6",
            title: "Teslimat",
            description: "Hedef ülkedeki partnerimizle koordineli teslimat yapıyoruz.",
            icon: "🎯"
        }
    ];

    const advantages = [
        "Uluslararası partner ağı",
        "Gümrük işlemleri desteği",
        "Çok dilli müşteri hizmetleri",
        "Sigorta güvencesi",
        "7/24 takip sistemi",
        "Rekabetçi fiyatlandırma",
        "Hızlı teslimat",
        "Güvenilir operasyon"
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                                    ULUSLARARASI KARAYOLU TAŞIMACILIĞI
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Uluslararası taşımacılık hizmetimizle güçlü finansal yapısı ve işlerinin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürmekteyiz. Yoğun taşımalarımız sayesinde rekabetçi navlunlar verebilmekteyiz.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">Teklif Al</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm card-hover-soft"
                                asChild
                            >
                                <Link to="/services/road">← Geri Dön</Link>
                            </Button>
                        </div>

                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/services/international-transport.jpg"
                                    alt="Uluslararası Karayolu Taşımacılığı"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                ÖZELLİKLERİMİZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Uluslararası taşımacılıkta sunduğumuz kapsamlı özellikler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Routes Section */}
            <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-red-100/30 to-orange-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                GÜZERGAHLARIMIZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Düzenli olarak hizmet verdiğimiz uluslararası güzergahlar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {routes.map((route, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {route.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                            {route.route}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center space-y-3">
                                        <CardDescription className="text-gray-600 text-base">
                                            {route.countries}
                                        </CardDescription>
                                        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3">
                                            <span className="text-sm font-semibold text-orange-700">
                                                Süre: {route.duration}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                ÇALIŞMA SÜRECİMİZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Uluslararası taşımacılıkta izlediğimiz adım adım süreç
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-center">
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <span className="text-lg font-bold text-white">{step.step}</span>
                                        </div>
                                        <div className="text-3xl mb-2">{step.icon}</div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-red-100/30 to-orange-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                AVANTAJLARIMIZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Uluslararası taşımacılıkta bizi farklı kılan özellikler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-center mb-4">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700 font-medium">{advantage}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                                ULUSLARARASI TAŞIMACILIK
                            </span>
                            <br />
                            <span className="text-white">İÇİN HEMEN BAŞLAYIN</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Uluslararası taşımacılık ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 Teklif Al</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">📱 Kargo Takip</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
