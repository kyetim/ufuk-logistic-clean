import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: '📞',
            title: t('contact.info.phone'),
            content: '444 70 33',
            description: t('contact.info.phone.desc')
        },
        {
            icon: '📠',
            title: t('contact.info.fax'),
            content: '+90 324 238 20 39',
            description: t('contact.info.fax.desc')
        },
        {
            icon: '✉️',
            title: t('contact.info.email'),
            content: 'info@ufuklojistik.com',
            description: t('contact.info.email.desc')
        },
        {
            icon: '📍',
            title: t('contact.info.address'),
            content: 'Kültür Mah. 4316 Sok. No:2 Şıhman Apt. Kat:1 No:1',
            description: t('contact.info.address.desc')
        }
    ];

    const quickActions = [
        {
            title: t('contact.quick.survey.title'),
            description: t('contact.quick.survey.desc'),
            icon: '📊',
            action: t('contact.quick.survey.action')
        },
        {
            title: t('contact.quick.emergency.title'),
            description: t('contact.quick.emergency.desc'),
            icon: '🚨',
            action: t('contact.quick.emergency.action')
        },
        {
            title: t('contact.quick.tracking.title'),
            description: t('contact.quick.tracking.desc'),
            icon: '📦',
            action: t('contact.quick.tracking.action')
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>🚛</div>
                    <div className="absolute top-32 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>✈️</div>
                    <div className="absolute bottom-20 left-1/4 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>🚢</div>
                    <div className="absolute bottom-32 right-1/3 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '3s' }}>📦</div>
                    <div className="absolute top-1/2 left-1/2 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '4s' }}>🏭</div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                                {t('contact.title')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                </div>
            </section >

            {/* Main Content */}
            < section className="py-24" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="glass-neumorphism border-0 shadow-2xl rounded-3xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
                                    <CardTitle className="text-3xl font-bold mb-2">{t('contact.form.title')}</CardTitle>
                                    <CardDescription className="text-blue-100 text-lg">
                                        {t('contact.form.subtitle')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8">
                                    {submitStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                            <div className="flex items-center">
                                                <div className="text-green-500 text-2xl mr-3">✅</div>
                                                <div>
                                                    <h3 className="text-green-800 font-semibold">{t('contact.form.success.title')}</h3>
                                                    <p className="text-green-600">{t('contact.form.success.message')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                            <div className="flex items-center">
                                                <div className="text-red-500 text-2xl mr-3">❌</div>
                                                <div>
                                                    <h3 className="text-red-800 font-semibold">{t('contact.form.error.title')}</h3>
                                                    <p className="text-red-600">{t('contact.form.error.message')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                                                    {t('contact.form.name')} *
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder={t('contact.form.name')}
                                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                                                    {t('contact.form.company')}
                                                </label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder={t('contact.form.company')}
                                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                                                    {t('contact.form.phone')} *
                                                </label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder={t('contact.form.phone')}
                                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                                    {t('contact.form.email')} *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder={t('contact.form.email')}
                                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                                                {t('contact.form.subject')} *
                                            </label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.subject')}
                                                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                                {t('contact.form.message')} *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.message')}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500 resize-none transition-colors duration-200"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center">
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    {t('contact.form.submitting')}
                                                </div>
                                            ) : (
                                                `📤 ${t('contact.form.submit')}`
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details */}
                            <Card className="glass-neumorphism border-0 shadow-xl rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                                    <CardTitle className="text-2xl font-bold">{t('contact.info.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <div key={index} className="group cursor-pointer">
                                                <div className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-white to-blue-50/30 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-500 ease-out transform hover:-translate-y-1">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl">
                                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-500">
                                                            {info.title}
                                                        </h3>
                                                        <p className="text-blue-600 font-semibold text-lg mb-1 group-hover:text-blue-700 transition-colors duration-500">
                                                            {info.content}
                                                        </p>
                                                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-500">
                                                            {info.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card className="glass-neumorphism border-0 shadow-xl rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                                    <CardTitle className="text-2xl font-bold">{t('contact.quick.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {quickActions.map((action, index) => (
                                            <div key={index} className="group cursor-pointer">
                                                <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover-lift">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <span className="text-xl">{action.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors duration-300">
                                                            {action.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-xs mb-2">
                                                            {action.description}
                                                        </p>
                                                        <span className="text-purple-600 text-xs font-semibold">
                                                            {action.action}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>
            </section >

            {/* Map Section - Full Width Below Form */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t('contact.map.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ofisimizi ziyaret etmek için konumumuzu inceleyebilirsiniz
                        </p>
                    </div>

                    <Card className="glass-neumorphism border-0 shadow-2xl rounded-3xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🗺️</div>
                                    <p className="text-gray-600 font-semibold text-xl mb-2">{t('contact.map.loading')}</p>
                                    <p className="text-gray-500 text-lg">{t('contact.map.location')}</p>
                                    <div className="mt-6 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                        <p className="text-gray-700 font-medium">
                                            Kültür Mah. 4316 Sok. No:2 Şıhman Apt. Kat:1 No:1
                                        </p>
                                        <p className="text-gray-600">
                                            Akdeniz / MERSİN
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Additional Info Section */}
            < section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-neumorphism rounded-3xl p-12 border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                                {t('contact.support.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('contact.support.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                            >
                                <span className="text-red-500 text-xl mr-3">📞</span>
                                {t('contact.support.call')}
                            </Button>
                            <Button
                                size="lg"
                                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                            >
                                <span className="text-purple-500 text-xl mr-3">💬</span>
                                {t('contact.support.whatsapp')}
                            </Button>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
