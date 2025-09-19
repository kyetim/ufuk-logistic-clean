import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function CorporatePage() {
    const { t } = useLanguage();

    const corporateSections = [
        {
            title: t('nav.about'),
            description: t('corporate.sections.about.desc'),
            href: '/about',
            icon: '🏢',
            color: 'from-blue-500 to-cyan-500',
            image: '/images/company/company-values-bg.jpg'
        },
        {
            title: t('nav.visionMission'),
            description: t('corporate.sections.vision.desc'),
            href: '/vision-mission',
            icon: '🎯',
            color: 'from-green-500 to-emerald-500',
            image: '/images/company/vision-hero-bg.jpg'
        },
        {
            title: t('nav.kvk'),
            description: t('corporate.sections.kvk.desc'),
            href: '/kvk',
            icon: '🛡️',
            color: 'from-purple-500 to-indigo-500',
            image: '/images/company/customer-service-bg.jpg'
        },
        {
            title: t('nav.sustainability'),
            description: t('corporate.sections.sustainability.desc'),
            href: '/sustainability',
            icon: '🌱',
            color: 'from-emerald-500 to-teal-500',
            image: '/images/company/company-values-bg.jpg'
        },
        {
            title: t('nav.catalog'),
            description: t('corporate.sections.catalog.desc'),
            href: '/catalog',
            icon: '📋',
            color: 'from-orange-500 to-yellow-500',
            image: '/images/company/customer-service-bg.jpg'
        }
    ];

    const achievements = [
        {
            number: '42+',
            label: t('corporate.achievements.experience.label'),
            description: t('corporate.achievements.experience.desc')
        },
        {
            number: '350+',
            label: t('corporate.achievements.employees.label'),
            description: t('corporate.achievements.employees.desc')
        },
        {
            number: '180K',
            label: t('corporate.achievements.terminal.label'),
            description: t('corporate.achievements.terminal.desc')
        },
        {
            number: '100+',
            label: t('corporate.achievements.vehicles.label'),
            description: t('corporate.achievements.vehicles.desc')
        }
    ];

    const corporateValues = [
        {
            title: t('corporate.values.reliability.title'),
            description: t('corporate.values.reliability.desc'),
            icon: '🤝'
        },
        {
            title: t('corporate.values.quality.title'),
            description: t('corporate.values.quality.desc'),
            icon: '⭐'
        },
        {
            title: t('corporate.values.innovation.title'),
            description: t('corporate.values.innovation.desc'),
            icon: '💡'
        },
        {
            title: t('corporate.values.sustainability.title'),
            description: t('corporate.values.sustainability.desc'),
            icon: '🌍'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-400/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <img
                                src="/images/logo/ufuk-loj-logo.svg"
                                alt="Ufuk Lojistik Logo"
                                className="w-24 h-24"
                            />
                        </div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-6">
                            {t('corporate.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('corporate.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Corporate Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('corporate.overview.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('corporate.overview.subtitle')}
                        </p>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {achievements.map((achievement, index) => (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl  transition-all duration-300 hover:scale-105 text-center">
                                <CardHeader>
                                    <div className="text-4xl font-bold text-primary-600 mb-2">
                                        {achievement.number}
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">
                                        {achievement.label}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 text-sm">
                                        {achievement.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Sections Navigation */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('corporate.sections.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('corporate.sections.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {corporateSections.map((section, index) => (
                            <Card key={index} className="group bg-white/80 backdrop-blur-sm border-white/20 shadow-xl  transition-all duration-500 hover-glow overflow-hidden card-hover-smooth">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                                            {section.icon}
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                        {section.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {section.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                        asChild
                                    >
                                        <Link to={section.href}>
                                            {t('corporate.buttons.details')}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('corporate.values.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('corporate.values.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {corporateValues.map((value, index) => (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl  transition-all duration-300 hover:scale-105 text-center group">
                                <CardHeader>
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                        {value.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {value.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Innovation */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('corporate.technology.title')}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t('corporate.technology.subtitle')}
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t('corporate.technology.desc2')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span className="text-gray-700">{t('corporate.technology.feature1')}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span className="text-gray-700">{t('corporate.technology.feature2')}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span className="text-gray-700">{t('corporate.technology.feature3')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 rounded-2xl p-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('corporate.technology.digital.title')}</h3>
                                    <p className="text-gray-600">
                                        {t('corporate.technology.digital.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {t('corporate.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        {t('corporate.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <Link to="/contact">{t('corporate.buttons.contact')}</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                            asChild
                        >
                            <Link to="/services">{t('corporate.buttons.exploreServices')}</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
