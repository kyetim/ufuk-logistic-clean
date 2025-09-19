import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function ContainerSalesPage() {
    const { t } = useLanguage();

    const containerTypes = [
        {
            title: t('container.type1.title'),
            description: t('container.type1.desc'),
            features: [
                t('container.type1.feature1'),
                t('container.type1.feature2'),
                t('container.type1.feature3'),
                t('container.type1.feature4')
            ],
            icon: "📦",
            gradient: "from-blue-500 to-cyan-500",
            image: "dry-container.jpg",
            price: t('container.type1.price'),
            condition: t('container.type1.condition')
        },
        {
            title: t('container.type2.title'),
            description: t('container.type2.desc'),
            features: [
                t('container.type2.feature1'),
                t('container.type2.feature2'),
                t('container.type2.feature3'),
                t('container.type2.feature4')
            ],
            icon: "🌡️",
            gradient: "from-green-500 to-emerald-500",
            image: "reefer-container.jpg",
            price: t('container.type2.price'),
            condition: t('container.type2.condition')
        },
        {
            title: t('container.type3.title'),
            description: t('container.type3.desc'),
            features: [
                t('container.type3.feature1'),
                t('container.type3.feature2'),
                t('container.type3.feature3'),
                t('container.type3.feature4')
            ],
            icon: "🚛",
            gradient: "from-purple-500 to-pink-500",
            image: "flat-rack-container.jpg",
            price: t('container.type3.price'),
            condition: t('container.type3.condition')
        },
        {
            title: t('container.type4.title'),
            description: t('container.type4.desc'),
            features: [
                t('container.type4.feature1'),
                t('container.type4.feature2'),
                t('container.type4.feature3'),
                t('container.type4.feature4')
            ],
            icon: "🛢️",
            gradient: "from-orange-500 to-red-500",
            image: "tank-container.jpg",
            price: t('container.type4.price'),
            condition: t('container.type4.condition')
        }
    ];

    const advantages = [
        {
            title: t('container.advantage1.title'),
            description: t('container.advantage1.desc'),
            icon: "💰"
        },
        {
            title: t('container.advantage2.title'),
            description: t('container.advantage2.desc'),
            icon: "🔧"
        },
        {
            title: t('container.advantage3.title'),
            description: t('container.advantage3.desc'),
            icon: "🚚"
        },
        {
            title: t('container.advantage4.title'),
            description: t('container.advantage4.desc'),
            icon: "📋"
        }
    ];

    const sizes = [
        {
            size: "20'",
            dimensions: "6.06m x 2.44m x 2.59m",
            volume: "33.2 m³",
            weight: "2,300 kg",
            icon: "📏"
        },
        {
            size: "40'",
            dimensions: "12.19m x 2.44m x 2.59m",
            volume: "67.7 m³",
            weight: "3,800 kg",
            icon: "📐"
        },
        {
            size: "40' HC",
            dimensions: "12.19m x 2.44m x 2.90m",
            volume: "76.4 m³",
            weight: "3,900 kg",
            icon: "📊"
        },
        {
            size: "45' HC",
            dimensions: "13.56m x 2.44m x 2.90m",
            volume: "86.0 m³",
            weight: "4,200 kg",
            icon: "📈"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: t('container.process1.title'),
            description: t('container.process1.desc'),
            icon: "📞"
        },
        {
            step: "2",
            title: t('container.process2.title'),
            description: t('container.process2.desc'),
            icon: "🔍"
        },
        {
            step: "3",
            title: t('container.process3.title'),
            description: t('container.process3.desc'),
            icon: "📝"
        },
        {
            step: "4",
            title: t('container.process4.title'),
            description: t('container.process4.desc'),
            icon: "🚚"
        },
        {
            step: "5",
            title: t('container.process5.title'),
            description: t('container.process5.desc'),
            icon: "✅"
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section with Container Theme */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
                {/* Container Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-blue-600/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                                    {t('container.hero.title').split(' ')[0]}
                                </span>
                                <br />
                                <span className="text-white">{t('container.hero.title').split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('container.hero.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">{t('container.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover-lift"
                                asChild
                            >
                                <Link to="/catalog">{t('container.cta.catalog')}</Link>
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/container-sales/container-sales-hero.jpg"
                                    alt={t('container.hero.title')}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container Types Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('container.types.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('container.types.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {containerTypes.map((container, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up hover-lift flex flex-col"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden hover-glow flex flex-col h-full">
                                    {/* Container Image */}
                                    <div className="aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={`/container-sales/${container.image}`}
                                            alt={container.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {container.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6 flex-1 flex flex-col">
                                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                                            {container.description}
                                        </CardDescription>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">{t('container.features.title')}</h4>
                                            <ul className="space-y-2">
                                                {container.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-blue-700">{t('container.price')}: {container.price}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-cyan-700">{t('container.condition')}: {container.condition}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <Button
                                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                                asChild
                                            >
                                                <Link to="/contact">{t('container.detailed.info')}</Link>
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
                                {t('container.advantages.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('container.advantages.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden hover-glow text-center">
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

            {/* Container Sizes Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('container.sizes.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('container.sizes.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sizes.map((size, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="relative glass-neumorphism border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden hover-glow">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardHeader className="text-center pb-4">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {size.icon}
                                        </div>
                                        <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {size.size}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center space-y-4">
                                        <div className="space-y-3">
                                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-blue-700">{t('container.dimensions')}: {size.dimensions}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-cyan-700">{t('container.volume')}: {size.volume}</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3">
                                                <span className="text-sm font-semibold text-blue-700">{t('container.weight')}: {size.weight}</span>
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
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('container.process.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('container.process.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
            <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                {t('container.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('container.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">📞 {t('container.cta.quote')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-blue-300 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/catalog">📋 {t('container.cta.catalog')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}