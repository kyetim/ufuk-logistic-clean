import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function PressPage() {
    const { t } = useLanguage();

    // Örnek haber verileri - gerçek veriler API'den gelecek
    const newsItems = [
        {
            id: 1,
            title: "ASCAME Lojistik Komisyonu",
            description: "ASCAME Lojistik Komisyonu toplantısında şirketimizin önemli rolü ve lojistik sektöründeki gelişmeler ele alındı.",
            image: "/events/logistics-conference.jpg",
            date: "2024-01-15",
            source: "MTSO Haber",
            category: "Kurumsal",
            readTime: "3 dk"
        },
        {
            id: 2,
            title: "Bakan Elvan'dan Mersin'e Olumlu Mesajlar",
            description: "Ticaret Bakanı Elvan'ın Mersin'e yaptığı ziyarette lojistik sektörüne verilen destekler ve gelecek planları açıklandı.",
            image: "/events/painting-competition.jpg",
            date: "2024-01-10",
            source: "Yerel Basın",
            category: "Politika",
            readTime: "4 dk"
        },
        {
            id: 3,
            title: "Çin, 600 Milyar Dolarlık Lojistik Pazarını Dışa Açtı",
            description: "Çin'in lojistik pazarını dışa açmasıyla birlikte taşımacılara küresel fırsatlar doğdu. Ufuk Lojistik bu süreçteki rolünü değerlendirdi.",
            image: "/events/green-logistics-seminar.jpg",
            date: "2024-01-05",
            source: "Dünya Gazetesi",
            category: "Uluslararası",
            readTime: "5 dk"
        },
        {
            id: 4,
            title: "Mersin Kaderine Yenilmek İstemiyor",
            description: "Mersin'in lojistik merkezi olma yolundaki çabaları ve Ufuk Lojistik'in bu süreçteki katkıları ele alındı.",
            image: "/events/logistics-exhibition.jpg",
            date: "2024-01-01",
            source: "Dünya Gazetesi",
            category: "Bölgesel",
            readTime: "6 dk"
        },
        {
            id: 5,
            title: "Lojistik Sektöründe Dijital Dönüşüm",
            description: "Ufuk Lojistik'in teknoloji yatırımları ve dijital dönüşüm sürecindeki başarıları medyada geniş yer buldu.",
            image: "/events/23-april-event.jpg",
            date: "2023-12-28",
            source: "Teknoloji Haberleri",
            category: "Teknoloji",
            readTime: "4 dk"
        },
        {
            id: 6,
            title: "Sürdürülebilir Lojistik Uygulamaları",
            description: "Çevre dostu lojistik çözümleri ve sürdürülebilirlik projelerimiz hakkında detaylı haber.",
            image: "/events/new-year-2023.jpg",
            date: "2023-12-20",
            source: "Çevre Gazetesi",
            category: "Sürdürülebilirlik",
            readTime: "5 dk"
        }
    ];

    const categories = [
        t('pressNews.categories.all'),
        t('pressNews.categories.corporate'),
        t('pressNews.categories.politics'),
        t('pressNews.categories.international'),
        t('pressNews.categories.regional'),
        t('pressNews.categories.technology'),
        t('pressNews.categories.sustainability')
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
                                {t('pressNews.hero.title')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {t('pressNews.hero.subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            {categories.slice(1).map((category, index) => (
                                <span
                                    key={category}
                                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* News Grid Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t('pressNews.grid.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            {t('pressNews.grid.subtitle')}
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${category === t('pressNews.categories.all')
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                                        }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((news, index) => (
                            <Link
                                key={news.id}
                                to={`/press-room/news/${news.id}`}
                                className="group animate-fade-in-up card-hover-gentle"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow">
                                    {/* News Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                                {news.category}
                                            </span>
                                        </div>
                                        {/* Read Time */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                                                {news.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-blue-600 font-semibold">{news.source}</span>
                                            <span className="text-sm text-gray-500">{new Date(news.date).toLocaleDateString('tr-TR')}</span>
                                        </div>
                                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                            {news.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <CardDescription className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                                            {news.description}
                                        </CardDescription>

                                        {/* Read More Button */}
                                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300">
                                            <span>{t('pressNews.readMore')}</span>
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-16">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            {t('pressNews.loadMore')}
                        </button>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                {t('pressNews.stats.title')}
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { number: "150+", label: t('pressNews.stats.mediaNews'), icon: "📰" },
                            { number: "25+", label: t('pressNews.stats.tvInterviews'), icon: "📺" },
                            { number: "50+", label: t('pressNews.stats.radioPrograms'), icon: "📻" },
                            { number: "200+", label: t('pressNews.stats.digitalContent'), icon: "💻" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center animate-fade-in-up hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="glass-neumorphism rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-4xl mb-4">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
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
                                {t('pressNews.cta.title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('pressNews.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                asChild
                            >
                                <Link to="/contact">{t('pressNews.cta.contact')}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                                asChild
                            >
                                <Link to="/about">{t('pressNews.cta.about')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
