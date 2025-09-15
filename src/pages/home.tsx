import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function HomePage() {
    const services = [
        {
            title: 'Hızlı Kargo',
            description: 'Aynı gün ve ertesi gün teslimat seçenekleri ile hızlı kargo hizmeti.',
            icon: '🚚',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Güvenli Taşıma',
            description: 'Özel ambalajlama ve sigorta ile güvenli taşıma garantisi.',
            icon: '🛡️',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: '7/24 Takip',
            description: 'Kargo durumunuzu 7/24 online olarak takip edebilirsiniz.',
            icon: '📱',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Uygun Fiyat',
            description: 'Rekabetçi fiyatlar ve özel indirimlerle ekonomik çözümler.',
            icon: '💰',
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    const stats = [
        { number: '50K+', label: 'Mutlu Müşteri' },
        { number: '99.9%', label: 'Teslimat Başarısı' },
        { number: '24/7', label: 'Müşteri Desteği' },
        { number: '81', label: 'İl Kapsamı' },
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
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                    Geleceğin
                                </span>
                                <br />
                                <span className="text-white">Lojistik Çözümleri</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                                AI destekli akıllı lojistik platformu ile kargo süreçlerinizi
                                <span className="text-cyan-400 font-semibold"> devrim niteliğinde</span> dönüştürün.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/tracking">🚀 Kargo Takip Et</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/services">✨ Hizmetleri Keşfet</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Neden Ufuk Lojistik?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Yapay zeka ve blockchain teknolojisi ile güçlendirilmiş
                            <span className="text-blue-600 font-semibold"> akıllı lojistik</span> çözümleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative backdrop-blur-sm bg-white/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
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
                                        Akıllı Teknoloji
                                    </span>
                                    <br />
                                    <span className="text-gray-900">Güçlendirilmiş Hizmet</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Yapay zeka algoritmaları ve IoT sensörleri ile kargo süreçlerinizi
                                    <span className="text-purple-600 font-semibold"> gerçek zamanlı</span> optimize ediyoruz.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: 'AI Destekli Rota Optimizasyonu', desc: 'Makine öğrenmesi ile en hızlı ve ekonomik rotalar' },
                                    { title: 'Blockchain Takip Sistemi', desc: 'Şeffaf ve güvenli kargo takip altyapısı' },
                                    { title: 'IoT Sensör Ağı', desc: 'Gerçek zamanlı konum ve durum izleme' },
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Canlı Kargo Takibi</h3>
                                    <p className="text-gray-600">Gerçek zamanlı güncellemeler</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                                        <span className="text-sm font-medium text-gray-700">Kargo No:</span>
                                        <span className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">UF2024-001</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                                        <span className="text-sm font-medium text-gray-700">Durum:</span>
                                        <span className="text-sm text-green-600 font-semibold flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            Teslim Edildi
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                                        <span className="text-sm font-medium text-gray-700">Tahmini Süre:</span>
                                        <span className="text-sm text-purple-600 font-semibold">2 saat 15 dk</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                                    <Link to="/tracking">📱 Detaylı Takip</Link>
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
                                Geleceği Birlikte
                            </span>
                            <br />
                            <span className="text-white">Şekillendirelim</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Lojistik dünyasında devrim yaratmaya hazır mısınız?
                            <span className="text-cyan-400 font-semibold"> Bugün başlayın</span> ve farkı hissedin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">🚀 Hemen Başla</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
                                asChild
                            >
                                <Link to="/pricing">💎 Fiyatları Gör</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}