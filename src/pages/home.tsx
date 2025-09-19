import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function HomePage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('services.road'),
            description: t('services.road.desc'),
            icon: '🚛',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: t('services.air'),
            description: t('services.air.desc'),
            icon: '✈️',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: t('services.sea'),
            description: t('services.sea.desc'),
            icon: '🚢',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: t('services.warehouse'),
            description: t('services.warehouse.desc'),
            icon: '🏭',
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    const stats = [
        { number: '42+', label: t('stats.experience') },
        { number: '350+', label: t('stats.employees') },
        { number: '180K', label: t('stats.terminal') },
        { number: '100+', label: t('stats.vehicles') },
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Modern Hero Section with Animated Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                {/* Glassmorphism Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                    42 {t('stats.experience')}
                                </span>
                                <br />
                                <span className="text-white">{t('home.logistics.experience')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('home.since.1982')} <span className="text-cyan-400 font-semibold">{t('home.reliable.solutions')}</span> {t('home.since.1982.end')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/tracking">{t('home.hero.track')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover-lift"
                                asChild
                            >
                                <Link to="/services">{t('home.hero.explore')}</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center animate-fade-in-up hover-lift"
                                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 text-sm md:text-base">
                                        {stat.label}
                                    </div>
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

            {/* Modern Services Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t('home.why.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('home.why.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-soft"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Features Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-cyan-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        {t('home.interactive.title')}
                                    </span>
                                    <br />
                                    <span className="text-gray-900">{t('home.interactive.subtitle')}</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {t('home.interactive.description')}
                                    <span className="text-purple-600 font-semibold"> {t('home.interactive.realtime')}</span> {t('home.interactive.descriptionEnd')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: t('home.interactive.feature1.title'), desc: t('home.interactive.feature1.desc') },
                                    { title: t('home.interactive.feature2.title'), desc: t('home.interactive.feature2.desc') },
                                    { title: t('home.interactive.feature3.title'), desc: t('home.interactive.feature3.desc') },
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
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

                        {/* Interactive Demo Card */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('tracking.live.title')}</h3>
                                    <p className="text-gray-600">{t('tracking.live.subtitle')}</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                                        <span className="text-sm font-medium text-gray-700">{t('tracking.cargoNumber')}:</span>
                                        <span className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">UF2024-001</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                                        <span className="text-sm font-medium text-gray-700">{t('tracking.status')}:</span>
                                        <span className="text-sm text-green-600 font-semibold flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            {t('tracking.delivered')}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                                        <span className="text-sm font-medium text-gray-700">{t('tracking.estimatedTime')}:</span>
                                        <span className="text-sm text-purple-600 font-semibold">{t('tracking.time')}</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                                    <Link to="/tracking">📱 {t('tracking.detailed')}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {t('home.cta.title1')}
                            </span>
                            <br />
                            <span className="text-white">{t('home.cta.title2')}</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('home.cta.description')}
                            <span className="text-cyan-400 font-semibold"> {t('home.cta.startToday')}</span> {t('home.cta.descriptionEnd')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">İletişime Geç</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                                asChild
                            >
                                <Link to="/services">Hizmetlerimizi İnceleyin</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}