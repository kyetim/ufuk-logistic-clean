import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function KVKPage() {
    const { t } = useLanguage();

    const kvkSections = [
        {
            title: t('kvk.section1.title'),
            content: t('kvk.section1.content'),
            icon: "🎯"
        },
        {
            title: t('kvk.section2.title'),
            content: t('kvk.section2.content'),
            icon: "🤝"
        },
        {
            title: t('kvk.section3.title'),
            content: t('kvk.section3.content'),
            icon: "📋"
        },
        {
            title: t('kvk.section4.title'),
            content: t('kvk.section4.content'),
            icon: "⏰"
        },
        {
            title: t('kvk.section5.title'),
            content: t('kvk.section5.content'),
            icon: "🛡️"
        }
    ];

    const rights = [
        t('kvk.right1'),
        t('kvk.right2'),
        t('kvk.right3'),
        t('kvk.right4'),
        t('kvk.right5'),
        t('kvk.right6'),
        t('kvk.right7'),
        t('kvk.right8')
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
                            {t('kvk.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {t('kvk.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('kvk.introduction.title')}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t('kvk.introduction.content')}
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                <p className="text-gray-700 font-medium">
                                    {t('kvk.introduction.note')}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('kvk.secure.title')}</h3>
                                    <p className="text-gray-600">
                                        {t('kvk.secure.subtitle')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KVK Sections */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('kvk.sections.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('kvk.sections.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {kvkSections.map((section, index) => (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center text-2xl">
                                            {section.icon}
                                        </div>
                                        <CardTitle className="text-xl text-gray-900">
                                            {section.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rights Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('kvk.rights.title')}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t('kvk.rights.subtitle')}
                            </p>
                            <div className="space-y-4">
                                {rights.map((right, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full flex items-center justify-center mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{right}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 rounded-2xl p-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('kvk.rights.use.title')}</h3>
                                    <p className="text-gray-600 mb-6">
                                        {t('kvk.rights.use.subtitle')}
                                    </p>
                                    <Button className="bg-gradient-to-r from-primary-500 to-secondary-400 hover:from-primary-600 hover:to-secondary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                        {t('kvk.rights.use.button')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('kvk.contact.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('kvk.contact.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-gray-900">{t('kvk.contact.address.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('kvk.contact.address.content') }}>
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-gray-900">{t('kvk.contact.email.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('kvk.contact.email.content') }}>
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-gray-900">{t('kvk.contact.response.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('kvk.contact.response.content')}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Important Notes Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('kvk.notes.title')}</h3>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        <strong>{t('kvk.notes.conditions.title')}</strong> {t('kvk.notes.conditions.content')}
                                    </p>
                                    <p>
                                        <strong>{t('kvk.notes.pricing.title')}</strong> {t('kvk.notes.pricing.content')}
                                    </p>
                                    <p>
                                        <strong>{t('kvk.notes.changes.title')}</strong> {t('kvk.notes.changes.content')}
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
                        {t('kvk.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        {t('kvk.cta.subtitle')}
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
                            variant="outline"
                            size="lg"
                            className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                            asChild
                        >
                            <Link to="/about">Hakkımızda</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
