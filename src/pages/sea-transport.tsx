import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function SeaTransportPage() {
    const { t: _t } = useLanguage();

    const services = [
        {
            title: "KONTEYNER TAŞIMACILIĞI",
            description: "20', 40' ve 40' High Cube konteynerlerle güvenli deniz yolu taşımacılığı hizmeti sunuyoruz.",
            features: [
                "FCL (Full Container Load) hizmeti",
                "LCL (Less than Container Load) hizmeti",
                "Door to Door teslimat",
                "All Risk sigorta güvencesi"
            ],
            icon: "📦",
            gradient: "from-blue-500 to-cyan-500",
            image: "container-shipping.jpg"
        },
        {
            title: "RO-RO TAŞIMACILIĞI",
            description: "Araç ve makine taşımacılığı için özel RO-RO gemileriyle güvenli deniz yolu hizmeti.",
            features: [
                "Araç taşımacılığı",
                "İş makinesi taşımacılığı",
                "Özel ekipman taşımacılığı",
                "Güvenli yükleme-boşaltma"
            ],
            icon: "🚢",
            gradient: "from-teal-500 to-blue-500",
            image: "roro-shipping.jpg"
        },
        {
            title: "BULK CARGO TAŞIMACILIĞI",
            description: "Dökme yük taşımacılığında uzman ekibimizle güvenilir hizmet sunuyoruz.",
            features: [
                "Dökme yük taşımacılığı",
                "Özel gemi charter",
                "Terminal hizmetleri",
                "Kalite kontrol"
            ],
            icon: "⚓",
            gradient: "from-indigo-500 to-purple-500",
            image: "bulk-cargo.jpg"
        },
        {
            title: "PROJE KARGO TAŞIMACILIĞI",
            description: "Büyük projeler için özel deniz yolu taşımacılığı çözümleri sunuyoruz.",
            features: [
                "Ağır yük taşımacılığı",
                "Özel gemi charter",
                "Proje yönetimi",
                "Risk analizi"
            ],
            icon: "🏗️",
            gradient: "from-purple-500 to-pink-500",
            image: "project-cargo.jpg"
        }
    ];

    const advantages = [
        {
            title: "Güçlü Finansal Yapı",
            description: "Büyük projeler için güçlü finansal altyapımızla güvenilir hizmet",
            icon: "💰"
        },
        {
            title: "Uzman Partner Ağı",
            description: "Deniz yolu taşımacılığında uzman partnerlerimizle lojistik faaliyetler",
            icon: "🤝"
        },
        {
            title: "Rekabetçi Fiyatlar",
            description: "Acentelerle yapılan senelik anlaşmalarla rekabetçi fiyatlar",
            icon: "💎"
        },
        {
            title: "Kaliteli Hizmet",
            description: "Deniz yolu taşımacılığında kaliteli ve güvenilir hizmet garantisi",
            icon: "⭐"
        }
    ];

    const routes = [
        {
            route: "Akdeniz Hattı",
            ports: "İstanbul, Mersin, İzmir → İtalya, Fransa, İspanya",
            duration: "3-5 gün",
            frequency: "Haftalık",
            icon: "🌊"
        },
        {
            route: "Karadeniz Hattı",
            ports: "İstanbul, Samsun → Ukrayna, Romanya, Bulgaristan",
            duration: "2-4 gün",
            frequency: "Haftalık",
            icon: "🌊"
        },
        {
            route: "Kızıldeniz Hattı",
            ports: "Mersin, İskenderun → Suudi Arabistan, BAE, Mısır",
            duration: "5-7 gün",
            frequency: "Haftalık",
            icon: "🌊"
        },
        {
            route: "Uzak Doğu Hattı",
            ports: "İstanbul, Mersin → Çin, Singapur, Malezya",
            duration: "15-20 gün",
            frequency: "Aylık",
            icon: "🌊"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Talep Değerlendirmesi",
            description: "Deniz yolu taşıma talebini detaylı olarak değerlendiriyoruz.",
            icon: "📋"
        },
        {
            step: "2",
            title: "Gemi ve Rota Seçimi",
            description: "En uygun gemi ve rota planlaması yapıyoruz.",
            icon: "🗺️"
        },
        {
            step: "3",
            title: "Gümrük İşlemleri",
            description: "Çıkış ve giriş gümrük işlemlerini organize ediyoruz.",
            icon: "🏛️"
        },
        {
            step: "4",
            title: "Yükleme",
            description: "Güvenli yükleme işlemi gerçekleştiriyoruz.",
            icon: "📦"
        },
        {
            step: "5",
            title: "Deniz Yolu Taşıma",
            description: "Güvenli deniz yolu taşıma sürecini başlatıyoruz.",
            icon: "🚢"
        },
        {
            step: "6",
            title: "Teslimat",
            description: "Hedef limana güvenli teslimat yapıyoruz.",
            icon: "🎯"
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section with Ocean Theme */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Ocean Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-teal-600/30"></div>
                </div>

                {/* Animated Ocean Waves */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Wave 1 */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-t-full animate-pulse"></div>
                    {/* Wave 2 */}
                    <div className="absolute bottom-8 left-0 w-full h-24 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-t-full animate-pulse delay-1000"></div>
                    {/* Wave 3 */}
                    <div className="absolute bottom-16 left-0 w-full h-16 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-t-full animate-pulse delay-2000"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                                    DENİZ YOLU
                                </span>
                                <br />
                                <span className="text-white">TAŞIMACILIĞI</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Deniz yolu taşımacılık hizmetimizle güçlü finansal yapısı ve işlerin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürmekteyiz. Acentelerle yapmış olduğumuz senelik anlaşmalarımızla siz değerli müşterilerimize rekabetçi fiyatlar ve kaliteli hizmet verebilmekteyiz.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
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
                                <Link to="/tracking">Kargo Takip</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/sea-transport/sea-transport-hero.jpg"
                                    alt="Deniz Yolu Taşımacılığı"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
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

            {/* Services Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                HİZMETLERİMİZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Deniz yolu taşımacılığında sunduğumuz kapsamlı hizmet yelpazesi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Service Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={`/sea-transport/${service.image}`}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {service.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">Özellikler:</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button
                                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                            asChild
                                        >
                                            <Link to="/contact">Detaylı Bilgi</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-teal-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                AVANTAJLARIMIZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Deniz yolu taşımacılığında bizi farklı kılan özellikler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {advantage.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {advantage.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed">
                                            {advantage.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Routes Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                GÜZERGAHLARIMIZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Düzenli olarak hizmet verdiğimiz deniz yolu güzergahları
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {routes.map((route, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {route.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {route.route}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center space-y-4">
                                        <CardDescription className="text-gray-600 text-base">
                                            {route.ports}
                                        </CardDescription>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-blue-700">Süre: {route.duration}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-cyan-700">Sıklık: {route.frequency}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-teal-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                ÇALIŞMA SÜRECİMİZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Deniz yolu taşımacılığında izlediğimiz adım adım süreç
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
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <span className="text-lg font-bold text-white">{step.step}</span>
                                        </div>
                                        <div className="text-3xl mb-2">{step.icon}</div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
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

            {/* Fleet Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                GEMİ FİLOMUZ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Modern ve güvenilir gemilerimizle her türlü deniz yolu taşıma ihtiyacınızı karşılıyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Konteyner Gemisi", count: "15+", image: "container-ship.jpg" },
                            { name: "RO-RO Gemisi", count: "8+", image: "roro-ship.jpg" },
                            { name: "Bulk Carrier", count: "12+", image: "bulk-carrier.jpg" }
                        ].map((ship, index) => (
                            <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover-glow">
                                    <div className="aspect-video rounded-2xl mb-6 overflow-hidden">
                                        <img
                                            src={`/sea-transport/${ship.image}`}
                                            alt={ship.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">{ship.name}</h3>
                                        <p className="text-3xl font-bold text-cyan-400 mb-2">{ship.count}</p>
                                        <p className="text-gray-300">Gemi Sayısı</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-teal-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                HEMEN BAŞLAYIN
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Deniz yolu taşımacılığı ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 Teklif Al</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-blue-300 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
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
