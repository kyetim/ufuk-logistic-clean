import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function PressNewsDetailPage() {
    const { id } = useParams();
    const { t } = useLanguage();

    // Örnek haber verisi - gerçek uygulamada API'den gelecek
    const newsData = {
        1: {
            id: 1,
            title: "ASCAME Lojistik Komisyonu",
            content: `
                <p>ASCAME (Association of Mediterranean Chambers of Commerce and Industry) Lojistik Komisyonu'nun düzenlediği toplantıda, Ufuk Lojistik'in Akdeniz bölgesindeki lojistik ağının genişletilmesi konusunda önemli kararlar alındı.</p>
                
                <p>Toplantıda, şirketimizin 42 yıllık deneyimi ve Mersin limanındaki stratejik konumu ele alındı. Özellikle Çin'in lojistik pazarını dışa açmasıyla birlikte ortaya çıkan fırsatlar değerlendirildi.</p>
                
                <h3>Öne Çıkan Konular</h3>
                <ul>
                    <li>Akdeniz lojistik koridorunun güçlendirilmesi</li>
                    <li>Dijital dönüşüm projeleri</li>
                    <li>Sürdürülebilir lojistik uygulamaları</li>
                    <li>Uluslararası işbirlikleri</li>
                </ul>
                
                <p>Ufuk Lojistik Genel Müdürü, toplantıda yaptığı konuşmada, "42 yıllık deneyimimizle sektörde öncü konumumuzu sürdürüyoruz. ASCAME ile olan işbirliğimiz, bölgesel lojistik ağının güçlendirilmesi açısından kritik önem taşıyor" dedi.</p>
                
                <p>Toplantı sonunda, önümüzdeki dönemde gerçekleştirilecek projeler ve yatırımlar hakkında detaylı bilgiler paylaşıldı. Özellikle teknoloji yatırımları ve çevre dostu lojistik çözümleri öne çıkan konular arasında yer aldı.</p>
            `,
            image: "/events/logistics-conference.jpg",
            date: "2024-01-15",
            source: "MTSO Haber",
            category: "Kurumsal",
            readTime: "3 dk",
            author: "MTSO Haber Editörü",
            tags: ["ASCAME", "Lojistik", "Akdeniz", "İşbirliği"]
        },
        2: {
            id: 2,
            title: "Bakan Elvan'dan Mersin'e Olumlu Mesajlar",
            content: `
                <p>Ticaret Bakanı Ruhsar Pekcan'ın ardından göreve gelen yeni Ticaret Bakanı Mehmet Muş, Mersin'e yaptığı ziyarette lojistik sektörüne verilen destekleri artıracaklarını açıkladı.</p>
                
                <p>Bakan Elvan, Mersin Ticaret ve Sanayi Odası'nda düzenlenen toplantıda, liman kentlerinin Türkiye'nin ihracatında oynadığı kritik rolü vurguladı. Özellikle Mersin Limanı'nın stratejik önemine dikkat çekti.</p>
                
                <h3>Bakanlıktan Gelen Desteğler</h3>
                <ul>
                    <li>Lojistik altyapı yatırımlarına ek destek</li>
                    <li>Dijital dönüşüm projelerine teşvik</li>
                    <li>Çevre dostu teknolojilere yatırım desteği</li>
                    <li>Uluslararası işbirliklerinin desteklenmesi</li>
                </ul>
                
                <p>Ufuk Lojistik Yönetim Kurulu Başkanı, bakanın ziyaretinden duyduğu memnuniyeti dile getirerek, "Mersin'in lojistik merkezi olma yolundaki çabalarımız, bakanlığın desteğiyle daha da güçlenecek" dedi.</p>
                
                <p>Toplantıda ayrıca, önümüzdeki dönemde gerçekleştirilecek yatırımlar ve projeler hakkında detaylı bilgiler paylaşıldı. Özellikle teknoloji yatırımları ve sürdürülebilirlik projeleri öne çıkan konular arasında yer aldı.</p>
            `,
            image: "/events/painting-competition.jpg",
            date: "2024-01-10",
            source: "Yerel Basın",
            category: "Politika",
            readTime: "4 dk",
            author: "Yerel Basın Muhabiri",
            tags: ["Bakan", "Mersin", "Lojistik", "Destek"]
        },
        3: {
            id: 3,
            title: "Çin, 600 Milyar Dolarlık Lojistik Pazarını Dışa Açtı",
            content: `
                <p>Çin'in lojistik pazarını dışa açmasıyla birlikte, dünya genelinde taşımacılar için yeni fırsatlar doğdu. 600 milyar dolarlık bu dev pazar, özellikle Türk lojistik şirketleri için büyük potansiyel barındırıyor.</p>
                
                <p>Ufuk Lojistik, bu gelişmeyi yakından takip ediyor ve Çin pazarına giriş stratejilerini değerlendiriyor. Şirketin 42 yıllık deneyimi ve uluslararası ağı, bu süreçte önemli avantaj sağlıyor.</p>
                
                <h3>Çin Pazarındaki Fırsatlar</h3>
                <ul>
                    <li>Deniz taşımacılığında artan talep</li>
                    <li>Hava kargo sektöründe büyüme</li>
                    <li>Kara taşımacılığında yeni rotalar</li>
                    <li>Depolama ve dağıtım hizmetlerinde genişleme</li>
                </ul>
                
                <p>Ufuk Lojistik Genel Müdürü, "Çin'in lojistik pazarını dışa açması, sektörümüz için tarihi bir fırsat. Mevcut ağımızı ve deneyimimizi kullanarak bu pazarda güçlü bir konum elde etmeyi hedefliyoruz" açıklamasında bulundu.</p>
                
                <p>Şirket, Çin pazarına giriş için gerekli altyapı yatırımlarını değerlendiriyor ve potansiyel iş ortaklarıyla görüşmelerini sürdürüyor. Özellikle teknoloji alanındaki yatırımlar, bu süreçte kritik önem taşıyor.</p>
            `,
            image: "/events/green-logistics-seminar.jpg",
            date: "2024-01-05",
            source: "Dünya Gazetesi",
            category: "Uluslararası",
            readTime: "5 dk",
            author: "Dünya Gazetesi Muhabiri",
            tags: ["Çin", "Lojistik", "Pazar", "Fırsat"]
        },
        4: {
            id: 4,
            title: "Mersin Kaderine Yenilmek İstemiyor",
            content: `
                <p>Mersin, lojistik merkezi olma yolundaki çabalarını sürdürüyor. Kent, coğrafi konumunun avantajını kullanarak bölgesel lojistik üssü olma hedefine odaklanıyor.</p>
                
                <p>Ufuk Lojistik, Mersin'in bu dönüşümünde öncü rol oynuyor. Şirketin 42 yıllık deneyimi ve liman kentindeki güçlü altyapısı, bu süreçte kritik önem taşıyor.</p>
                
                <h3>Mersin'in Lojistik Potansiyeli</h3>
                <ul>
                    <li>Stratejik coğrafi konum</li>
                    <li>Gelişmiş liman altyapısı</li>
                    <li>Uluslararası bağlantılar</li>
                    <li>Yerel işgücü potansiyeli</li>
                </ul>
                
                <p>Ufuk Lojistik Yönetim Kurulu Başkanı, "Mersin'in lojistik merkezi olma yolundaki çabaları, tüm sektör paydaşları için büyük fırsatlar yaratıyor. Biz de bu süreçte üzerimize düşen sorumluluğu yerine getiriyoruz" dedi.</p>
                
                <p>Kent, önümüzdeki dönemde gerçekleştirilecek yatırımlarla lojistik altyapısını güçlendirmeyi planlıyor. Özellikle teknoloji yatırımları ve çevre dostu çözümler öne çıkan konular arasında yer alıyor.</p>
            `,
            image: "/events/logistics-exhibition.jpg",
            date: "2024-01-01",
            source: "Dünya Gazetesi",
            category: "Bölgesel",
            readTime: "6 dk",
            author: "Dünya Gazetesi Muhabiri",
            tags: ["Mersin", "Lojistik", "Gelişim", "Potansiyel"]
        }
    };

    const news = newsData[id as keyof typeof newsData];

    if (!news) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('pressNewsDetail.notFound.title')}</h1>
                    <p className="text-gray-600 mb-8">{t('pressNewsDetail.notFound.message')}</p>
                    <Link
                        to="/press-room/news"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                        {t('pressNewsDetail.notFound.back')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link
                                to="/press-room/news"
                                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                {t('pressNewsDetail.back')}
                            </Link>
                        </div>

                        {/* Category Badge */}
                        <div className="mb-6">
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                {news.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {news.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200 mb-8">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {new Date(news.date).toLocaleDateString('tr-TR')}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                {news.source}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {news.readTime}
                            </div>
                        </div>

                        {/* Author */}
                        <div className="text-gray-300">
                            <span className="font-medium">{t('pressNewsDetail.author')}</span> {news.author}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
                                {/* News Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>

                                <CardContent className="p-8">
                                    {/* Article Content */}
                                    <div
                                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: news.content }}
                                    />

                                    {/* Tags */}
                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('pressNewsDetail.tags')}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {news.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('pressNewsDetail.share')}</h4>
                                        <div className="flex gap-4">
                                            <Button
                                                variant="outline"
                                                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                                Twitter
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                Facebook
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-8">
                                {/* Related News */}
                                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">{t('pressNewsDetail.relatedNews')}</h3>
                                        <div className="space-y-4">
                                            {Object.values(newsData)
                                                .filter(item => item.id !== news.id)
                                                .slice(0, 3)
                                                .map((relatedNews) => (
                                                    <Link
                                                        key={relatedNews.id}
                                                        to={`/press-room/news/${relatedNews.id}`}
                                                        className="block group hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300"
                                                    >
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2">
                                                            {relatedNews.title}
                                                        </h4>
                                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                                            <span>{relatedNews.source}</span>
                                                            <span>{new Date(relatedNews.date).toLocaleDateString('tr-TR')}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Contact CTA */}
                                <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 shadow-xl rounded-2xl">
                                    <CardContent className="p-6 text-white">
                                        <h3 className="text-xl font-bold mb-4">{t('pressNewsDetail.pressContact')}</h3>
                                        <p className="text-blue-100 mb-6">
                                            {t('pressNewsDetail.pressContactDesc')}
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="block w-full text-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-300"
                                        >
                                            {t('pressNewsDetail.pressContactAction')}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-16 bg-gradient-to-br from-gray-100 to-blue-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link
                            to="/press-room/news"
                            className="flex items-center px-6 py-3 bg-white hover:bg-blue-50 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('pressNewsDetail.backToAll')}
                        </Link>

                        <div className="text-center">
                            <p className="text-gray-600 mb-2">{t('pressNewsDetail.likeQuestion')}</p>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="hover:bg-green-50 hover:border-green-300">
                                    {t('pressNewsDetail.like')}
                                </Button>
                                <Button size="sm" variant="outline" className="hover:bg-red-50 hover:border-red-300">
                                    {t('pressNewsDetail.dislike')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
