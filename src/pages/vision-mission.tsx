import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

export function VisionMissionPage() {
    const { t } = useLanguage();

    const values = [
        {
            title: t('vision.values.achievement'),
            description: t('vision.values.achievementDesc'),
            icon: '🎯',
            color: 'from-red-500 to-pink-500'
        },
        {
            title: t('vision.values.customerFocus'),
            description: t('vision.values.customerFocusDesc'),
            icon: '👥',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: t('vision.values.initiative'),
            description: t('vision.values.initiativeDesc'),
            icon: '💡',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: t('vision.values.reliability'),
            description: t('vision.values.reliabilityDesc'),
            icon: '🛡️',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            title: t('vision.values.contribution'),
            description: t('vision.values.contributionDesc'),
            icon: '🌍',
            color: 'from-orange-500 to-yellow-500'
        }
    ];

    const customerPolicies = [
        t('vision.customerPolicy.1'),
        t('vision.customerPolicy.2'),
        t('vision.customerPolicy.3'),
        t('vision.customerPolicy.4'),
        t('vision.customerPolicy.5')
    ];

    const companyPolicies = [
        t('vision.companyPolicy.1'),
        t('vision.companyPolicy.2'),
        t('vision.companyPolicy.3'),
        t('vision.companyPolicy.4'),
        t('vision.companyPolicy.5')
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/company/vision-hero-bg.jpg)',
                        filter: 'brightness(0.4)'
                    }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-secondary-400/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <img
                                src="/images/logo/ufuk-loj-logo.svg"
                                alt="Ufuk Lojistik Logo"
                                className="w-24 h-24"
                            />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6">
                            {t('vision.title')}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            {t('vision.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('vision.ourValues')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('vision.valuesDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="glass-neumorphism border-0 shadow-xl  transition-all duration-500 hover-glow card-hover-smooth group">
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300`}>
                                        {value.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {value.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Policy Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('vision.customerPolicyTitle')}
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                {t('vision.customerPolicyDescription')}
                            </p>
                            <ul className="space-y-4">
                                {customerPolicies.map((policy, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{policy}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/company/customer-service-bg.jpg"
                                    alt="Müşteri Hizmetleri"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Policy Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/company/company-values-bg.jpg"
                                    alt="Şirket Değerleri"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('vision.companyPolicyTitle')}
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                {t('vision.companyPolicyDescription')}
                            </p>
                            <ul className="space-y-4">
                                {companyPolicies.map((policy, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{policy}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {t('vision.ctaTitle')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        {t('vision.ctaDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <Link to="/services">Hizmetlerimizi İnceleyin</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                            asChild
                        >
                            <Link to="/contact">İletişime Geçin</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
