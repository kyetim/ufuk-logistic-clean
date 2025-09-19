import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function PressRoomPage() {
    const { t } = useLanguage();

    const pressRoomSections = [
        {
            id: 'news',
            title: t('press.news.title'),
            description: t('press.news.description'),
            icon: '📰',
            href: '/press-room/news',
            gradient: 'from-blue-500 to-cyan-500',
            stats: t('press.news.stats'),
            features: [
                t('press.news.features.media'),
                t('press.news.features.tv'),
                t('press.news.features.radio'),
                t('press.news.features.digital')
            ]
        },
        {
            id: 'events',
            title: t('press.events.title'),
            description: t('press.events.description'),
            icon: '🎉',
            href: '/press-room/events',
            gradient: 'from-purple-500 to-pink-500',
            stats: t('press.events.stats'),
            features: [
                t('press.events.features.conferences'),
                t('press.events.features.seminars'),
                t('press.events.features.social'),
                t('press.events.features.awards')
            ]
        }
    ];

    const recentHighlights = [
        {
            title: "ASCAME Lojistik Komisyonu",
            type: t('press.highlights.news'),
            date: "2024-01-15",
            category: "Kurumsal"
        },
        {
            title: "Resim Yarışması Ödül Töreni",
            type: t('press.highlights.event'),
            date: "2024-01-10",
            category: "Sosyal Sorumluluk"
        },
        {
            title: "Bakan Elvan'dan Mersin'e Olumlu Mesajlar",
            type: t('press.highlights.news'),
            date: "2024-01-10",
            category: "Politika"
        },
        {
            title: "23 Nisan Şirket Etkinliği",
            type: t('press.highlights.event'),
            date: "2024-01-05",
            category: "Kurumsal"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {t('press.hero.title')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {t('press.hero.subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">150+</div>
                                <div className="text-gray-300 text-sm">{t('press.hero.mediaNews')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-300 text-sm">{t('press.hero.events')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">25+</div>
                                <div className="text-gray-300 text-sm">{t('press.hero.tvInterviews')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Sections */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t('press.sections.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('press.sections.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {pressRoomSections.map((section, index) => (
                            <Link
                                key={section.id}
                                to={section.href}
                                className="group animate-fade-in-up card-hover-elegant"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <CardHeader className="text-center pb-6 relative">
                                        <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                            {section.icon}
                                        </div>
                                        <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                                            {section.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg text-gray-600 leading-relaxed">
                                            {section.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        {/* Stats */}
                                        <div className="text-center mb-8">
                                            <div className="text-2xl font-bold text-blue-600 mb-2">
                                                {section.stats}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            {section.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="text-center">
                                            <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                                                <span>{t('press.explore')}</span>
                                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Highlights */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                {t('press.highlights.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('press.highlights.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recentHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="group animate-fade-in-up hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${highlight.type === 'Haber'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-purple-100 text-purple-700'
                                                }`}>
                                                {highlight.type}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {new Date(highlight.date).toLocaleDateString('tr-TR')}
                                            </span>
                                        </div>
                                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                            {highlight.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">{highlight.category}</span>
                                            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300">
                                                <span>{t('press.highlights.detail')}</span>
                                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {t('press.contact.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('press.contact.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">{t('press.contact.contact')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                                asChild
                            >
                                <Link to="/about">{t('press.contact.about')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
