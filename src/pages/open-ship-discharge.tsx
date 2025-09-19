import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function OpenShipDischargePage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('shipDischarge.title'),
            description: t('shipDischarge.serviceDescription'),
            features: [
                t('shipDischarge.features.1'),
                t('shipDischarge.features.2'),
                t('shipDischarge.features.3'),
                t('shipDischarge.features.4'),
                t('shipDischarge.features.5')
            ],
            icon: "🚢",
            gradient: "from-blue-500 to-cyan-500",
            image: "open-ship-discharge-hero.jpg"
        }
    ];

    const advantages = [
        {
            title: t('shipDischarge.advantages.financial.title'),
            description: t('shipDischarge.advantages.financial.desc'),
            icon: "💰"
        },
        {
            title: t('shipDischarge.advantages.partners.title'),
            description: t('shipDischarge.advantages.partners.desc'),
            icon: "🤝"
        },
        {
            title: t('shipDischarge.advantages.prices.title'),
            description: t('shipDischarge.advantages.prices.desc'),
            icon: "💎"
        },
        {
            title: t('shipDischarge.advantages.quality.title'),
            description: t('shipDischarge.advantages.quality.desc'),
            icon: "⭐"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: t('shipDischarge.process.step1.title'),
            description: t('shipDischarge.process.step1.desc'),
            icon: "📋"
        },
        {
            step: "2",
            title: t('shipDischarge.process.step2.title'),
            description: t('shipDischarge.process.step2.desc'),
            icon: "🗺️"
        },
        {
            step: "3",
            title: t('shipDischarge.process.step3.title'),
            description: t('shipDischarge.process.step3.desc'),
            icon: "🏗️"
        },
        {
            step: "4",
            title: t('shipDischarge.process.step4.title'),
            description: t('shipDischarge.process.step4.desc'),
            icon: "🏛️"
        },
        {
            step: "5",
            title: t('shipDischarge.process.step5.title'),
            description: t('shipDischarge.process.step5.desc'),
            icon: "⚓"
        },
        {
            step: "6",
            title: t('shipDischarge.process.step6.title'),
            description: t('shipDischarge.process.step6.desc'),
            icon: "🎯"
        }
    ];

    const cargoTypes = [
        {
            name: t('shipDischarge.cargoTypes.bulk.name'),
            description: t('shipDischarge.cargoTypes.bulk.desc'),
            icon: "⚡",
            image: "bulk-cargo-discharge.jpg"
        },
        {
            name: t('shipDischarge.cargoTypes.container.name'),
            description: t('shipDischarge.cargoTypes.container.desc'),
            icon: "📦",
            image: "container-discharge.jpg"
        },
        {
            name: t('shipDischarge.cargoTypes.project.name'),
            description: t('shipDischarge.cargoTypes.project.desc'),
            icon: "🏗️",
            image: "project-cargo-discharge.jpg"
        },
        {
            name: t('shipDischarge.cargoTypes.hazardous.name'),
            description: t('shipDischarge.cargoTypes.hazardous.desc'),
            icon: "⚠️",
            image: "hazardous-discharge.jpg"
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
                                    {t('shipDischarge.title')}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('shipDischarge.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">{t('shipDischarge.buttons.getQuote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm card-hover-soft"
                                asChild
                            >
                                <Link to="/tracking">{t('shipDischarge.buttons.trackCargo')}</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/ship-discharge/ship-discharge-hero.jpg"
                                    alt={t('shipDischarge.title')}
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
                                {t('shipDischarge.serviceTitle')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('shipDischarge.serviceSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Service Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src="/ship-discharge/ship-discharge-hero.jpg"
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
                                                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                        <div>{feature}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button
                                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                            asChild
                                        >
                                            <Link to="/contact">{t('shipDischarge.buttons.details')}</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cargo Types Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-teal-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('shipDischarge.cargoTypes.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('shipDischarge.cargoTypes.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cargoTypes.map((cargo, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Cargo Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={`/ship-discharge/${cargo.image}`}
                                            alt={cargo.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="text-center pb-4">
                                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {cargo.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed text-sm">
                                            {cargo.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('shipDischarge.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('shipDischarge.advantages.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow card-hover-smooth text-center">
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
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-teal-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('shipDischarge.process.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('shipDischarge.process.subtitle')}
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

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                {t('shipDischarge.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('shipDischarge.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 {t('shipDischarge.buttons.getQuote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">📱 {t('shipDischarge.buttons.trackCargo')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
