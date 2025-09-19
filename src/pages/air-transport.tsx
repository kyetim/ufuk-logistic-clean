import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function AirTransportPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('air.service1.title'),
            description: t('air.service1.desc'),
            features: [
                t('air.service1.feature1'),
                t('air.service1.feature2'),
                t('air.service1.feature3'),
                t('air.service1.feature4')
            ],
            icon: "📦",
            gradient: "from-sky-500 to-blue-500",
            image: "air-cargo-transport.jpg"
        },
        {
            title: t('air.service2.title'),
            description: t('air.service2.desc'),
            features: [
                t('air.service2.feature1'),
                t('air.service2.feature2'),
                t('air.service2.feature3'),
                t('air.service2.feature4')
            ],
            icon: "📄",
            gradient: "from-blue-500 to-indigo-500",
            image: "document-air-transport.jpg"
        },
        {
            title: t('air.service3.title'),
            description: t('air.service3.desc'),
            features: [
                t('air.service3.feature1'),
                t('air.service3.feature2'),
                t('air.service3.feature3'),
                t('air.service3.feature4')
            ],
            icon: "💎",
            gradient: "from-indigo-500 to-purple-500",
            image: "valuable-cargo-transport.jpg"
        },
        {
            title: t('air.service4.title'),
            description: t('air.service4.desc'),
            features: [
                t('air.service4.feature1'),
                t('air.service4.feature2'),
                t('air.service4.feature3'),
                t('air.service4.feature4')
            ],
            icon: "🚨",
            gradient: "from-purple-500 to-pink-500",
            image: "emergency-air-transport.jpg"
        }
    ];

    const advantages = [
        {
            title: t('air.advantage1.title'),
            description: t('air.advantage1.desc'),
            icon: "⚡"
        },
        {
            title: t('air.advantage2.title'),
            description: t('air.advantage2.desc'),
            icon: "🛡️"
        },
        {
            title: t('air.advantage3.title'),
            description: t('air.advantage3.desc'),
            icon: "🌍"
        },
        {
            title: t('air.advantage4.title'),
            description: t('air.advantage4.desc'),
            icon: "📱"
        }
    ];

    const routes = [
        {
            route: t('air.route1.title'),
            airports: t('air.route1.airports'),
            duration: t('air.route1.duration'),
            frequency: t('air.route1.frequency'),
            icon: "✈️"
        },
        {
            route: t('air.route2.title'),
            airports: t('air.route2.airports'),
            duration: t('air.route2.duration'),
            frequency: t('air.route2.frequency'),
            icon: "✈️"
        },
        {
            route: t('air.route3.title'),
            airports: t('air.route3.airports'),
            duration: t('air.route3.duration'),
            frequency: t('air.route3.frequency'),
            icon: "✈️"
        },
        {
            route: t('air.route4.title'),
            airports: t('air.route4.airports'),
            duration: t('air.route4.duration'),
            frequency: t('air.route4.frequency'),
            icon: "✈️"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: t('air.process1.title'),
            description: t('air.process1.desc'),
            icon: "📋"
        },
        {
            step: "2",
            title: t('air.process2.title'),
            description: t('air.process2.desc'),
            icon: "🗺️"
        },
        {
            step: "3",
            title: t('air.process3.title'),
            description: t('air.process3.desc'),
            icon: "📦"
        },
        {
            step: "4",
            title: t('air.process4.title'),
            description: t('air.process4.desc'),
            icon: "🏛️"
        },
        {
            step: "5",
            title: t('air.process5.title'),
            description: t('air.process5.desc'),
            icon: "✈️"
        },
        {
            step: "6",
            title: t('air.process6.title'),
            description: t('air.process6.desc'),
            icon: "🎯"
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section with Sky Theme */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
                {/* Sky Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/30 via-blue-600/30 to-indigo-600/30"></div>
                </div>

                {/* Animated Clouds */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Cloud 1 */}
                    <div className="absolute top-20 left-10 w-32 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute top-16 left-8 w-24 h-12 bg-white/10 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute top-24 left-16 w-20 h-10 bg-white/10 rounded-full blur-sm animate-pulse"></div>

                    {/* Cloud 2 */}
                    <div className="absolute top-40 right-20 w-40 h-20 bg-white/10 rounded-full blur-sm animate-pulse delay-1000"></div>
                    <div className="absolute top-36 right-16 w-32 h-16 bg-white/10 rounded-full blur-sm animate-pulse delay-1000"></div>
                    <div className="absolute top-44 right-24 w-24 h-12 bg-white/10 rounded-full blur-sm animate-pulse delay-1000"></div>

                    {/* Cloud 3 */}
                    <div className="absolute bottom-20 left-1/4 w-36 h-18 bg-white/10 rounded-full blur-sm animate-pulse delay-2000"></div>
                    <div className="absolute bottom-16 left-1/4 w-28 h-14 bg-white/10 rounded-full blur-sm animate-pulse delay-2000"></div>
                    <div className="absolute bottom-24 left-1/4 w-20 h-10 bg-white/10 rounded-full blur-sm animate-pulse delay-2000"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-sky-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-sky-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                                    {t('air.hero.title').split(' ')[0]}
                                </span>
                                <br />
                                <span className="text-white">{t('air.hero.title').split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('air.hero.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">{t('air.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm card-hover-soft"
                                asChild
                            >
                                <Link to="/tracking">{t('air.cta.track')}</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/air-transport/air-transport-hero.jpg"
                                    alt="Hava Yolu Taşımacılığı"
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
                            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                {t('air.services.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('air.services.subtitle')}
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
                                            src={`/air-transport/${service.image}`}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {service.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">{t('air.features.title')}</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button
                                            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                            asChild
                                        >
                                            <Link to="/contact">{t('air.detailed.info')}</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-blue-100/30 to-indigo-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                {t('air.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('air.advantages.subtitle')}
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {advantage.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
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
                            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                {t('air.routes.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('air.routes.subtitle')}
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {route.icon}
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                                            {route.route}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center space-y-4">
                                        <CardDescription className="text-gray-600 text-base">
                                            {route.airports}
                                        </CardDescription>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-sky-700">{t('air.duration')} {route.duration}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-blue-700">{t('air.frequency')} {route.frequency}</span>
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
            <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-blue-100/30 to-indigo-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                {t('air.process.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('air.process.subtitle')}
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
                                        <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <span className="text-lg font-bold text-white">{step.step}</span>
                                        </div>
                                        <div className="text-3xl mb-2">{step.icon}</div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
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
            <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 via-blue-600/20 to-indigo-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                {t('air.fleet.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {t('air.fleet.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: t('air.aircraft1.name'), count: t('air.aircraft1.count'), image: "cargo-aircraft.jpg" },
                            { name: t('air.aircraft2.name'), count: t('air.aircraft2.count'), image: "passenger-aircraft.jpg" },
                            { name: t('air.aircraft3.name'), count: t('air.aircraft3.count'), image: "charter-aircraft.jpg" }
                        ].map((aircraft, index) => (
                            <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover-glow">
                                    <div className="aspect-video rounded-2xl mb-6 overflow-hidden">
                                        <img
                                            src={`/air-transport/${aircraft.image}`}
                                            alt={aircraft.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">{aircraft.name}</h3>
                                        <p className="text-3xl font-bold text-sky-400 mb-2">{aircraft.count}</p>
                                        <p className="text-gray-300">{t('air.aircraft.count.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-blue-100/30 to-indigo-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                {t('air.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('air.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 {t('air.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-sky-300 text-sky-600 hover:bg-sky-50 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">📱 {t('air.cta.track')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
