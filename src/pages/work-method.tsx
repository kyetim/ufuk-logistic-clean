import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function WorkMethodPage() {

    const workSteps = [
        {
            step: 1,
            title: "Sipariş Entegrasyonu",
            description: "Müşterinin kendi sistemi, bizim sistemimizle entegre ise bizim sistemimizde otomatik olarak sipariş oluşturulur. Entegre değilse, siparişi mail ile bize gönderir, biz sisteme gireriz.",
            icon: "🔄",
            gradient: "from-blue-500 to-cyan-500",
            image: "/order-integration-bg.jpg",
            features: ["Otomatik Sipariş Oluşturma", "Mail Entegrasyonu", "Sistem Entegrasyonu"]
        },
        {
            step: 2,
            title: "Operasyon Analizi",
            description: "Operasyon Yöneticileri siparişi analiz eder, operasyonları belirleyip sorumlularına gönderirler.",
            icon: "📊",
            gradient: "from-purple-500 to-pink-500",
            image: "/operation-analysis-bg.jpg",
            features: ["Sipariş Analizi", "Operasyon Planlama", "Sorumlu Atama"]
        },
        {
            step: 3,
            title: "Araç Belirleme",
            description: "Operasyon sorumluları kendilerine ait siparişlere uygun araç belirleyip yükleme alanlarına yönlendirirler.",
            icon: "🚛",
            gradient: "from-green-500 to-emerald-500",
            image: "/vehicle-selection-bg.jpg",
            features: ["Araç Seçimi", "Yükleme Planlama", "Alan Yönlendirme"]
        },
        {
            step: 4,
            title: "Yükleme Kontrolü",
            description: "Saha görevlileri el terminalleri aracılığıyla sistemden aldıkları bilgiler ışığında, araçların yüklemelerine nezaret eder, araç ve yükle ilgili herhangi bir hasarla ilgili kayıt tutarlar.",
            icon: "📱",
            gradient: "from-orange-500 to-red-500",
            image: "/loading-control-bg.jpg",
            features: ["El Terminali Takibi", "Hasar Kayıt", "Yükleme Kontrolü"]
        },
        {
            step: 5,
            title: "Hasar Yönetimi",
            description: "Şayet herhangi bir hasar kaydı bildirilmişse, bunun sebebi Ufuk Lojistik olsun olmasın müşterinin haklarını korumak amacıyla gerekli yazışmalar ve sigorta gereklilikleri Ufuk Lojistik personeli tarafından yapılır.",
            icon: "🛡️",
            gradient: "from-red-500 to-pink-500",
            image: "/damage-management-bg.jpg",
            features: ["Hasar Tespit", "Sigorta İşlemleri", "Müşteri Hakları"]
        },
        {
            step: 6,
            title: "Evrak İşlemleri",
            description: "Yüklemenin tamamlandığı bilgisi sisteme düştükten hemen sonra Evrak Görevlileri araçların irsaliyelerini basar, navlunlarını ödeyerek aracın yola çıkışına izin verirler.",
            icon: "📋",
            gradient: "from-indigo-500 to-purple-500",
            image: "/document-processing-bg.jpg",
            features: ["İrsaliye Basımı", "Navlun Ödeme", "Çıkış İzni"]
        },
        {
            step: 7,
            title: "Anlık Takip",
            description: "Müşterilerimiz Operasyonun her anında malının nerede ve ne durumda olduğunu kendi ekranlarından anlık olarak takip edebilir ve gerektiğinde müdahalede bulunabilir.",
            icon: "📍",
            gradient: "from-teal-500 to-cyan-500",
            image: "/real-time-tracking-bg.jpg",
            features: ["Anlık Takip", "Müşteri Paneli", "Müdahale İmkanı"]
        },
        {
            step: 8,
            title: "All Risk Sigorta",
            description: "Yapılan yüklemelerin tamamı ALL RİSK SİGORTA kapsamındadır.",
            icon: "🔒",
            gradient: "from-yellow-500 to-orange-500",
            image: "/all-risk-insurance-bg.jpg",
            features: ["Tam Kapsamlı Sigorta", "Risk Koruması", "Güvenli Taşıma"]
        },
        {
            step: 9,
            title: "Güvenlik Takibi",
            description: "Yola çıkan araçlar, araç ve yük takip sistemleriyle düzenli olarak takip edilir ve mal hırsızlığının önüne geçilir.",
            icon: "🛡️",
            gradient: "from-gray-500 to-slate-500",
            image: "/security-tracking-bg.jpg",
            features: ["Araç Takibi", "Yük Takibi", "Hırsızlık Önleme"]
        },
        {
            step: 10,
            title: "Teslimat",
            description: "Mal teslim edildiğinde, alıcı firmadan teslim onayı alınır ve faturası kesilir.",
            icon: "✅",
            gradient: "from-green-600 to-teal-600",
            image: "/delivery-completion-bg.jpg",
            features: ["Teslim Onayı", "Fatura Kesimi", "Süreç Tamamlama"]
        }
    ];

    const facilities = [
        {
            title: "Konteyner Sahaları",
            description: "Mersin, Gaziantep ve İskenderun'da toplam 109.000 m² üzerinde açık konteyner sahası",
            icon: "🏭",
            gradient: "from-blue-600 to-indigo-600",
            image: "/container-areas-bg.jpg",
            stats: "109.000 m²"
        },
        {
            title: "Araç Filosu",
            description: "70'e yakın çekici, 3 adet dolu konteyner makinesi (Reachstackers), çok sayıda yükleme boşaltma aracı ve ekipmanları",
            icon: "🚛",
            gradient: "from-purple-600 to-pink-600",
            image: "/vehicle-fleet-bg.jpg",
            stats: "70+ Araç"
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
                                    ÇALIŞMA ŞEKLİMİZ
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <span className="text-cyan-400 font-semibold">Profesyonel Lojistik Süreçlerimiz</span> ile müşterilerimize en kaliteli hizmeti sunuyoruz
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                                asChild
                            >
                                <Link to="/contact">İletişime Geç</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm card-hover-elegant"
                                asChild
                            >
                                <Link to="/services">Hizmetlerimiz</Link>
                            </Button>
                        </div>

                        {/* Process Overview Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center animate-fade-in-up card-hover-elegant" style={{ animationDelay: '0.6s' }}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce">10</div>
                                <div className="text-gray-300 text-sm md:text-base">Adım Süreç</div>
                            </div>
                            <div className="text-center animate-fade-in-up card-hover-elegant" style={{ animationDelay: '0.7s' }}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce">24/7</div>
                                <div className="text-gray-300 text-sm md:text-base">Takip</div>
                            </div>
                            <div className="text-center animate-fade-in-up card-hover-elegant" style={{ animationDelay: '0.8s' }}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce">%100</div>
                                <div className="text-gray-300 text-sm md:text-base">Güvenlik</div>
                            </div>
                            <div className="text-center animate-fade-in-up card-hover-elegant" style={{ animationDelay: '0.9s' }}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce">42+</div>
                                <div className="text-gray-300 text-sm md:text-base">Yıl Deneyim</div>
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

            {/* Work Process Steps */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Çalışma Süreçlerimiz
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Her adımda mükemmellik arayışımız ve teknolojik altyapımızla müşterilerimize en iyi hizmeti sunuyoruz
                        </p>
                    </div>

                    <div className="space-y-16">
                        {workSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in-up`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl text-white font-bold shadow-lg`}>
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                {step.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-3xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {step.features.map((feature, featureIndex) => (
                                            <span
                                                key={featureIndex}
                                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Placeholder */}
                                <div className="flex-1">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                            <div className="aspect-video rounded-2xl overflow-hidden">
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-cyan-100/30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Altyapımız ve Kapasitemiz
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Modern teknoloji ve geniş altyapımızla her türlü lojistik ihtiyacınızı karşılıyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up card-hover-elegant"
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                                </div>
                                <Card className="relative glass-neumorphism border-0 shadow-xl  transition-all duration-500 rounded-3xl overflow-hidden hover-glow card-hover-smooth">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Image */}
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <CardHeader className="text-center pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {facility.title}
                                        </CardTitle>
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {facility.stats}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardDescription className="text-gray-600 leading-relaxed text-lg">
                                            {facility.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Profesyonel Lojistik Hizmeti
                            </span>
                            <br />
                            <span className="text-white">Almak İster misiniz?</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            <span className="text-cyan-400 font-semibold">42 yıllık deneyimimiz</span> ve modern teknolojimizle
                            lojistik ihtiyaçlarınızı en iyi şekilde karşılıyoruz.
                            <span className="text-cyan-400 font-semibold"> Hemen iletişime geçin!</span>
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
