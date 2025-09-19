import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function WarehouseServicesPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('warehouse.service1.title'),
            description: t('warehouse.service1.desc'),
            features: [
                t('warehouse.service1.feature1'),
                t('warehouse.service1.feature2'),
                t('warehouse.service1.feature3'),
                t('warehouse.service1.feature4'),
                t('warehouse.service1.feature5')
            ],
            icon: "📦",
            gradient: "from-orange-500 to-red-500",
            image: "container-storage.jpg",
            partners: ["ZIM LINE", "TURKON LINE", "CONTAINER SHIP", "CONTAZ LINE"]
        },
        {
            title: t('warehouse.service2.title'),
            description: t('warehouse.service2.desc'),
            features: [
                t('warehouse.service2.feature1'),
                t('warehouse.service2.feature2'),
                t('warehouse.service2.feature3'),
                t('warehouse.service2.feature4'),
                t('warehouse.service2.feature5')
            ],
            icon: "🏗️",
            gradient: "from-green-500 to-emerald-500",
            image: "handling-services.jpg"
        },
        {
            title: t('warehouse.service3.title'),
            description: t('warehouse.service3.desc'),
            features: [
                t('warehouse.service3.feature1'),
                t('warehouse.service3.feature2'),
                t('warehouse.service3.feature3'),
                t('warehouse.service3.feature4'),
                t('warehouse.service3.feature5')
            ],
            icon: "🔧",
            gradient: "from-blue-500 to-indigo-500",
            image: "container-repair.jpg"
        },
        {
            title: t('warehouse.service4.title'),
            description: t('warehouse.service4.desc'),
            features: [
                t('warehouse.service4.feature1'),
                t('warehouse.service4.feature2'),
                t('warehouse.service4.feature3'),
                t('warehouse.service4.feature4'),
                t('warehouse.service4.feature5')
            ],
            icon: "🔗",
            gradient: "from-purple-500 to-pink-500",
            image: "lashing-services.jpg"
        }
    ];

    const advantages = [
        {
            title: t('warehouse.advantage1.title'),
            description: t('warehouse.advantage1.desc'),
            icon: "🏭"
        },
        {
            title: t('warehouse.advantage2.title'),
            description: t('warehouse.advantage2.desc'),
            icon: "⚙️"
        },
        {
            title: t('warehouse.advantage3.title'),
            description: t('warehouse.advantage3.desc'),
            icon: "💻"
        },
        {
            title: t('warehouse.advantage4.title'),
            description: t('warehouse.advantage4.desc'),
            icon: "👥"
        }
    ];

    const locations = [
        {
            city: "Mersin",
            depots: 2,
            type: "Açık Serbest Depo",
            area: "60.000 m²",
            icon: "🏢"
        },
        {
            city: "İskenderun",
            depots: 1,
            type: "Açık Serbest Depo",
            area: "40.000 m²",
            icon: "🏢"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: t('warehouse.process1.title'),
            description: t('warehouse.process1.desc'),
            icon: "📋"
        },
        {
            step: "2",
            title: t('warehouse.process2.title'),
            description: t('warehouse.process2.desc'),
            icon: "🗺️"
        },
        {
            step: "3",
            title: t('warehouse.process3.title'),
            description: t('warehouse.process3.desc'),
            icon: "📦"
        },
        {
            step: "4",
            title: t('warehouse.process4.title'),
            description: t('warehouse.process4.desc'),
            icon: "🏭"
        },
        {
            step: "5",
            title: t('warehouse.process5.title'),
            description: t('warehouse.process5.desc'),
            icon: "📊"
        },
        {
            step: "6",
            title: t('warehouse.process6.title'),
            description: t('warehouse.process6.desc'),
            icon: "🚚"
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section with Warehouse Theme */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
                {/* Warehouse Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/30 to-orange-600/30"></div>
                </div>

                {/* Animated Warehouse Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Warehouse Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-12 gap-4 h-full">
                            {Array.from({ length: 144 }).map((_, i) => (
                                <div key={i} className="border border-orange-400/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-red-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                                    {t('warehouse.hero.title').split(' ')[0]}
                                </span>
                                <br />
                                <span className="text-white">{t('warehouse.hero.title').split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('warehouse.hero.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">{t('warehouse.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover-lift"
                                asChild
                            >
                                <Link to="/tracking">{t('warehouse.cta.track')}</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/warehouse-services/warehouse-hero.jpg"
                                    alt="Depo Hizmetleri"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                {t('warehouse.services.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('warehouse.services.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft flex flex-col"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow flex flex-col h-full">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Service Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={`/warehouse-services/${service.image}`}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6 flex-1 flex flex-col">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {service.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">{t('warehouse.features.title')}</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {service.partners && (
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-gray-900">{t('warehouse.partners.title')}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.partners.map((partner, partnerIndex) => (
                                                        <span key={partnerIndex} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                                            {partner}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-auto">
                                            <Button
                                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                                asChild
                                            >
                                                <Link to="/contact">{t('warehouse.detailed.info')}</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
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
                                {t('warehouse.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('warehouse.advantages.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {advantage.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
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

            {/* Locations Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                {t('warehouse.locations.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('warehouse.locations.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {location.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                            {location.city}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center space-y-4">
                                        <div className="space-y-3">
                                            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-orange-700">{t('warehouse.depot.count')} {location.depots}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-red-700">{t('warehouse.depot.type')} {location.type}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-orange-700">{t('warehouse.depot.area')} {location.area}</span>
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
            <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-red-100/30 to-orange-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                {t('warehouse.process.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('warehouse.process.subtitle')}
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

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-red-100/30 to-orange-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                {t('warehouse.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('warehouse.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 {t('warehouse.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-orange-300 text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">📱 {t('warehouse.cta.track')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
