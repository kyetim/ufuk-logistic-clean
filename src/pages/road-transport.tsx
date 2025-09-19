import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function RoadTransportPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('road.services.ftl.title'),
            description: t('road.services.ftl.description'),
            features: [
                t('road.services.ftl.features.1'),
                t('road.services.ftl.features.2'),
                t('road.services.ftl.features.3'),
                t('road.services.ftl.features.4')
            ],
            icon: "🚛",
            gradient: "from-blue-500 to-cyan-500",
            image: "images/services/ftl-transport.jpg"
        },
        {
            title: t('road.services.container.title'),
            description: t('road.services.container.description'),
            features: [
                t('road.services.container.features.1'),
                t('road.services.container.features.2'),
                t('road.services.container.features.3'),
                t('road.services.container.features.4')
            ],
            icon: "📦",
            gradient: "from-green-500 to-emerald-500",
            image: "images/services/container-transport.jpg"
        },
        {
            title: t('road.services.heavy.title'),
            description: t('road.services.heavy.description'),
            features: [
                t('road.services.heavy.features.1'),
                t('road.services.heavy.features.2'),
                t('road.services.heavy.features.3'),
                t('road.services.heavy.features.4')
            ],
            icon: "🏗️",
            gradient: "from-purple-500 to-pink-500",
            image: "images/services/heavy-transport.jpg"
        },
        {
            title: t('road.services.international.title'),
            description: t('road.services.international.description'),
            features: [
                t('road.services.international.features.1'),
                t('road.services.international.features.2'),
                t('road.services.international.features.3'),
                t('road.services.international.features.4')
            ],
            icon: "🌍",
            gradient: "from-orange-500 to-red-500",
            image: "images/services/international-transport.jpg"
        }
    ];

    const advantages = [
        {
            title: t('road.advantages.1.title'),
            description: t('road.advantages.1.description'),
            icon: "⭐"
        },
        {
            title: t('road.advantages.2.title'),
            description: t('road.advantages.2.description'),
            icon: "🛡️"
        },
        {
            title: t('road.advantages.3.title'),
            description: t('road.advantages.3.description'),
            icon: "🚚"
        },
        {
            title: t('road.advantages.4.title'),
            description: t('road.advantages.4.description'),
            icon: "📞"
        }
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
                                    {t('road.title').split(' ')[0]}
                                </span>
                                <br />
                                <span className="text-white">{t('road.title').split(' ')[1]}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('road.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">{t('road.getQuote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm card-hover-soft"
                                asChild
                            >
                                <Link to="/tracking">{t('road.trackCargo')}</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/services/road-transport-hero.jpg"
                                    alt="Kara Yolu Taşımacılığı"
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
                                {t('road.services.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('road.services.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Service Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={`/${service.image}`}
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
                                            <h4 className="font-semibold text-gray-900">{t('road.services.features')}</h4>
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
                                            <Link to={index === 0 ? "/services/road/ftl" : index === 1 ? "/services/road/container" : index === 2 ? "/services/road/heavy" : "/services/road/international"}>{t('road.services.details')}</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Risk Insurance Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                        {t('road.insurance.title').split(' ')[0]} {t('road.insurance.title').split(' ')[1]}
                                    </span>
                                    <br />
                                    <span className="text-gray-900">{t('road.insurance.title').split(' ')[2]}</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {t('road.insurance.description')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: t('road.insurance.features.1.title'), desc: t('road.insurance.features.1.desc') },
                                    { title: t('road.insurance.features.2.title'), desc: t('road.insurance.features.2.desc') },
                                    { title: t('road.insurance.features.3.title'), desc: t('road.insurance.features.3.desc') },
                                    { title: t('road.insurance.features.4.title'), desc: t('road.insurance.features.4.desc') },
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Insurance Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <img
                                        src="/images/insurance/all-risk-insurance.jpg"
                                        alt="All Risk Sigorta"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('road.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('road.advantages.subtitle')}
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
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 card-hover-smooth rounded-2xl overflow-hidden hover-glow text-center">
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

            {/* Fleet Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                {t('road.fleet.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {t('road.fleet.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: t('road.fleet.truck'), count: "50+", image: "images/fleet/truck-fleet.jpg" },
                            { name: t('road.fleet.trailer'), count: "30+", image: "images/fleet/trailer fleet.jpg" },
                            { name: t('road.fleet.container'), count: "20+", image: "images/services/container-truck.jpg" }
                        ].map((vehicle, index) => (
                            <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 card-hover-smooth hover-glow">
                                    <div className="aspect-video rounded-2xl mb-6 overflow-hidden">
                                        <img
                                            src={`/${vehicle.image}`}
                                            alt={vehicle.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                                        <p className="text-3xl font-bold text-cyan-400 mb-2">{vehicle.count}</p>
                                        <p className="text-gray-300">{t('road.fleet.count')}</p>
                                    </div>
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
                                {t('road.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('road.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">{t('road.cta.getQuote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-blue-300 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/tracking">{t('road.cta.trackCargo')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
