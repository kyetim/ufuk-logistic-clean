import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { QuoteFormModal } from '../components/forms/QuoteFormModal';
import { useLanguage } from '../contexts/LanguageContext';

export function ServicesPage() {
    const { t } = useLanguage();
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string>('');

    const handleQuoteRequest = (serviceType?: string) => {
        setSelectedService(serviceType || '');
        setIsQuoteModalOpen(true);
    };

    const services = [
        {
            title: t('services.road.title'),
            description: t('services.road.description'),
            features: [
                t('services.road.features.1'),
                t('services.road.features.2'),
                t('services.road.features.3'),
                t('services.road.features.4')
            ],
            icon: "🚛",
            gradient: "from-blue-500 to-cyan-500",
            image: "/images/services/road-transport-hero.jpg",
            href: "/services/road",
            color: "blue"
        },
        {
            title: t('services.sea.title'),
            description: t('services.sea.description'),
            features: [
                t('services.sea.features.1'),
                t('services.sea.features.2'),
                t('services.sea.features.3'),
                t('services.sea.features.4')
            ],
            icon: "🚢",
            gradient: "from-teal-500 to-blue-500",
            image: "/sea-transport/sea-transport-hero.jpg",
            href: "/services/sea",
            color: "teal"
        },
        {
            title: t('services.air.title'),
            description: t('services.air.description'),
            features: [
                t('services.air.features.1'),
                t('services.air.features.2'),
                t('services.air.features.3'),
                t('services.air.features.4')
            ],
            icon: "✈️",
            gradient: "from-sky-500 to-blue-500",
            image: "/air-transport/air-transport-hero.jpg",
            href: "/services/air",
            color: "sky"
        },
        {
            title: t('services.warehouse.title'),
            description: t('services.warehouse.description'),
            features: [
                t('services.warehouse.features.1'),
                t('services.warehouse.features.2'),
                t('services.warehouse.features.3'),
                t('services.warehouse.features.4')
            ],
            icon: "🏭",
            gradient: "from-orange-500 to-red-500",
            image: "/warehouse-services/warehouse-hero.jpg",
            href: "/services/warehouse",
            color: "orange"
        },
        {
            title: t('services.container.title'),
            description: t('services.container.description'),
            features: [
                t('services.container.features.1'),
                t('services.container.features.2'),
                t('services.container.features.3'),
                t('services.container.features.4')
            ],
            icon: "📦",
            gradient: "from-indigo-500 to-purple-500",
            image: "/container-sales/container-sales-hero.jpg",
            href: "/services/container",
            color: "indigo"
        },
        {
            title: t('services.ship.title'),
            description: t('services.ship.description'),
            features: [
                t('services.ship.features.1'),
                t('services.ship.features.2'),
                t('services.ship.features.3'),
                t('services.ship.features.4')
            ],
            icon: "⚓",
            gradient: "from-cyan-500 to-teal-500",
            image: "/images/services/container-transport.jpg",
            href: "/services/ship",
            color: "cyan"
        }
    ];

    const advantages = [
        {
            title: t('services.advantage1.title'),
            description: t('services.advantage1.description'),
            icon: "⭐"
        },
        {
            title: t('services.advantage2.title'),
            description: t('services.advantage2.description'),
            icon: "🛡️"
        },
        {
            title: t('services.advantage3.title'),
            description: t('services.advantage3.description'),
            icon: "🌐"
        },
        {
            title: t('services.advantage4.title'),
            description: t('services.advantage4.description'),
            icon: "📞"
        }
    ];

    const stats = [
        { number: "100+", label: t('services.stats.vehicles'), icon: "🚛" },
        { number: "35+", label: t('services.stats.ships'), icon: "🚢" },
        { number: "50+", label: t('services.stats.planes'), icon: "✈️" },
        { number: "100.000+", label: t('services.stats.warehouse'), icon: "🏭" }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                                    {t('services.title')}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('services.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                onClick={() => handleQuoteRequest()}
                            >
                                {t('services.getQuote')}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm card-hover-soft"
                                asChild
                            >
                                <Link to="/tracking">{t('services.trackCargo')}</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
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

            {/* Services Overview Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('services.range.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('services.range.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Service Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-4xl">{service.icon}</div>
                                            <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {service.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">{t('services.scope')}</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button
                                                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                                asChild
                                            >
                                                <Link to={service.href}>{t('services.details')}</Link>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="px-4 sm:px-6 py-3 rounded-xl font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                                                onClick={() => handleQuoteRequest(service.title)}
                                            >
                                                {t('services.getQuote')}
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
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('services.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('services.advantages.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow text-center">
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

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('services.process.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('services.process.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: t('services.process.step1.title'),
                                description: t('services.process.step1.description'),
                                icon: "📋"
                            },
                            {
                                step: "2",
                                title: t('services.process.step2.title'),
                                description: t('services.process.step2.description'),
                                icon: "💰"
                            },
                            {
                                step: "3",
                                title: t('services.process.step3.title'),
                                description: t('services.process.step3.description'),
                                icon: "🗺️"
                            },
                            {
                                step: "4",
                                title: t('services.process.step4.title'),
                                description: t('services.process.step4.description'),
                                icon: "🎯"
                            }
                        ].map((step, index) => (
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

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('services.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('services.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                onClick={() => handleQuoteRequest()}
                            >
                                🚀 {t('services.getQuote')}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">📱 {t('services.trackCargo')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form Modal */}
            <QuoteFormModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                serviceType={selectedService}
            />
        </div>
    );
}
