import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import DOMPurify from 'dompurify';

export function EventDetailPage() {
    const { id } = useParams();
    const { t } = useLanguage();

    // Örnek etkinlik verisi - gerçek uygulamada API'den gelecek
    const eventData = {
        1: {
            id: 1,
            title: "Resim Yarışması Ödül Töreni",
            content: `
                <p>Yenisehir İlçe Milli Eğitim Müdürlüğü ile birlikte düzenlenen resim yarışmasının ödül töreni, 15 Ocak 2024 tarihinde gerçekleştirildi. Bu etkinlik, öğrencilerin yaratıcılığını desteklemek ve lojistik sektörü hakkında farkındalık yaratmak amacıyla organize edildi.</p>
                
                <h3>Etkinlik Detayları</h3>
                <p>Yarışmaya katılan öğrenciler, lojistik temalı resimler çizerek sektörün önemini vurguladılar. Jüri üyeleri arasında sanat öğretmenleri, lojistik uzmanları ve şirket temsilcileri yer aldı.</p>
                
                <h3>Ödüller</h3>
                <ul>
                    <li>Birinci: 5000 TL + Ufuk Lojistik bursu</li>
                    <li>İkinci: 3000 TL + eğitim materyalleri</li>
                    <li>Üçüncü: 2000 TL + sanat malzemeleri</li>
                    <li>Mansiyon: 1000 TL + sertifika</li>
                </ul>
                
                <p>Etkinlik sırasında Ufuk Lojistik Genel Müdürü, "Eğitim ve sanatın birleştiği bu etkinlikte yer almaktan gurur duyuyoruz. Geleceğin lojistik uzmanlarını yetiştirmek için bu tür projeleri desteklemeye devam edeceğiz" açıklamasında bulundu.</p>
                
                <h3>Katılımcılar</h3>
                <p>Etkinliğe 150'den fazla öğrenci, 50 öğretmen ve 30 veli katıldı. Ayrıca yerel basın temsilcileri de töreni takip etti.</p>
            `,
            image: "/events/painting-competition.jpg",
            date: "2024-01-15",
            location: "Yenisehir İlçe Milli Eğitim Müdürlüğü",
            category: "Sosyal Sorumluluk",
            type: "Ödül Töreni",
            participants: "150+ Öğrenci",
            duration: "2 saat",
            organizer: "Ufuk Lojistik & Yenisehir İlçe Milli Eğitim Müdürlüğü",
            tags: ["Eğitim", "Sanat", "Lojistik", "Öğrenci", "Yarışma"]
        },
        2: {
            id: 2,
            title: "23 Nisan Şirket Etkinliği",
            content: `
                <p>23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kapsamında düzenlenen şirket etkinliği, Mezitli Belediyesi işbirliği ile gerçekleştirildi. Bu etkinlik, çocukların bayramını kutlamak ve ailelerle birlikte güzel vakit geçirmek amacıyla organize edildi.</p>
                
                <h3>Etkinlik Programı</h3>
                <ul>
                    <li>10:00 - Açılış ve hoş geldin konuşması</li>
                    <li>10:30 - Çocuk oyunları ve yarışmalar</li>
                    <li>12:00 - Öğle yemeği</li>
                    <li>13:30 - Sanat atölyeleri</li>
                    <li>15:00 - Ödül töreni</li>
                    <li>16:00 - Kapanış</li>
                </ul>
                
                <h3>Etkinlik Aktiviteleri</h3>
                <p>Çocuklar için özel olarak hazırlanan oyun alanları, boyama atölyeleri ve yarışmalar düzenlendi. Ayrıca lojistik temalı eğitici oyunlar da yer aldı.</p>
                
                <p>Mezitli Belediye Başkanı, "Ufuk Lojistik ile birlikte düzenlediğimiz bu etkinlik, çocuklarımızın bayramını daha da güzel hale getirdi. Bu tür sosyal sorumluluk projelerini desteklemeye devam edeceğiz" dedi.</p>
                
                <h3>Katılım</h3>
                <p>Etkinliğe 200'den fazla kişi katıldı. Çocuklar, aileleri ve şirket çalışanları birlikte eğlenceli vakit geçirdi.</p>
            `,
            image: "/events/23-april-event.jpg",
            date: "2024-04-23",
            location: "Mezitli Belediyesi",
            category: "Kurumsal",
            type: "Şirket Etkinliği",
            participants: "200+ Kişi",
            duration: "4 saat",
            organizer: "Ufuk Lojistik & Mezitli Belediyesi",
            tags: ["23 Nisan", "Çocuk", "Bayram", "Aile", "Eğlence"]
        },
        3: {
            id: 3,
            title: "2023 Yeni Yıl Kutlama Yemeği",
            content: `
                <p>2023 yılını geride bırakırken düzenlenen yeni yıl kutlama yemeği, şirket çalışanları ve ailelerinin katılımıyla gerçekleştirildi. Bu etkinlik, yılın başarılarını kutlamak ve yeni yıl hedeflerini paylaşmak amacıyla organize edildi.</p>
                
                <h3>Yılın Başarıları</h3>
                <ul>
                    <li>%25 büyüme oranı</li>
                    <li>50 yeni çalışan</li>
                    <li>5 yeni hizmet alanı</li>
                    <li>Çevre dostu lojistik çözümleri</li>
                </ul>
                
                <h3>2024 Hedefleri</h3>
                <p>Yeni yılda teknoloji yatırımlarına odaklanılacak ve dijital dönüşüm süreci hızlandırılacak. Ayrıca sürdürülebilirlik projeleri genişletilecek.</p>
                
                <p>Ufuk Lojistik Yönetim Kurulu Başkanı, "2023 yılı bizim için çok başarılı bir yıl oldu. 2024'te de aynı başarıyı sürdürmek için çalışmaya devam edeceğiz" açıklamasında bulundu.</p>
                
                <h3>Etkinlik Programı</h3>
                <p>Yemek, müzik, dans ve ödül töreni ile dolu dolu geçen bir akşam yaşandı. Çalışanlar arasında düzenlenen yarışmalar da büyük ilgi gördü.</p>
            `,
            image: "/events/new-year-2023.jpg",
            date: "2023-12-31",
            location: "Ufuk Lojistik Merkez",
            category: "Kurumsal",
            type: "Kutlama",
            participants: "100+ Çalışan",
            duration: "3 saat",
            organizer: "Ufuk Lojistik",
            tags: ["Yeni Yıl", "Kutlama", "Çalışan", "Başarı", "Hedef"]
        },
        4: {
            id: 4,
            title: "2022 Lojistik Temalı Resim Sergisi",
            content: `
                <p>Lojistik sektörünün önemini vurgulamak amacıyla düzenlenen resim sergisi, Mersin Marina'da gerçekleştirildi. Bu etkinlik, öğrencilerin lojistik konusundaki farkındalığını artırmak için organize edildi.</p>
                
                <h3>Sergi İçeriği</h3>
                <p>Sergide, öğrencilerin lojistik temalı resimleri, şirket arşivinden seçilen fotoğraflar ve sektörün gelişimini gösteren infografikler yer aldı.</p>
                
                <h3>Eğitici Aktiviteler</h3>
                <ul>
                    <li>Lojistik oyunları</li>
                    <li>Interaktif sunumlar</li>
                    <li>Uzman söyleşileri</li>
                    <li>Çocuk atölyeleri</li>
                </ul>
                
                <p>Mersin Üniversitesi Lojistik Bölümü Başkanı, "Bu sergi, lojistik sektörünün toplumdaki yerini güçlendirmek açısından çok değerli. Ufuk Lojistik'in bu tür eğitici etkinlikleri desteklemesi takdire şayan" dedi.</p>
                
                <h3>Ziyaretçi İstatistikleri</h3>
                <p>Sergiyi 300'den fazla kişi ziyaret etti. Öğrenciler, öğretmenler, aileler ve sektör temsilcileri sergiyi büyük ilgiyle takip etti.</p>
            `,
            image: "/events/logistics-exhibition.jpg",
            date: "2022-11-15",
            location: "Mersin Marina",
            category: "Eğitim",
            type: "Sergi",
            participants: "300+ Ziyaretçi",
            duration: "1 gün",
            organizer: "Ufuk Lojistik & Mersin Üniversitesi",
            tags: ["Sergi", "Eğitim", "Lojistik", "Marina", "Öğrenci"]
        }
    };

    const event = eventData[id as unknown as keyof typeof eventData];

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('eventDetail.notFound.title')}</h1>
                    <p className="text-gray-600 mb-8">{t('eventDetail.notFound.message')}</p>
                    <Link
                        to="/press-room/events"
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                    >
                        {t('eventDetail.notFound.back')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link
                                to="/press-room/events"
                                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                {t('eventDetail.back')}
                            </Link>
                        </div>

                        {/* Category Badge */}
                        <div className="mb-6">
                            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                {event.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {event.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200 mb-8">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(event.date).toLocaleDateString('tr-TR')}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {event.duration}
                            </div>
                        </div>

                        {/* Event Type */}
                        <div className="text-gray-300">
                            <span className="font-medium">{t('eventDetail.eventType')}</span> {event.type}
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
                                {/* Event Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>

                                <CardContent className="p-8">
                                    {/* Security: Sanitize dynamic HTML content to prevent XSS */}
                                    {/* Article Content */}
                                    <div
                                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.content) }}
                                    />

                                    {/* Tags */}
                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('eventDetail.tags')}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {event.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200 hover:bg-purple-100 transition-colors duration-300"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('eventDetail.share')}</h4>
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
                                {/* Event Info */}
                                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">{t('eventDetail.eventInfo')}</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{t('eventDetail.date')}</div>
                                                    <div className="text-gray-600">{new Date(event.date).toLocaleDateString('tr-TR')}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{t('eventDetail.location')}</div>
                                                    <div className="text-gray-600">{event.location}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                                </svg>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{t('eventDetail.participant')}</div>
                                                    <div className="text-gray-600">{event.participants}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{t('eventDetail.duration')}</div>
                                                    <div className="text-gray-600">{event.duration}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 text-purple-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{t('eventDetail.organizer')}</div>
                                                    <div className="text-gray-600">{event.organizer}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Contact CTA */}
                                <Card className="bg-gradient-to-br from-purple-500 to-blue-600 border-0 shadow-xl rounded-2xl">
                                    <CardContent className="p-6 text-white">
                                        <h3 className="text-xl font-bold mb-4">{t('eventDetail.eventCooperation')}</h3>
                                        <p className="text-purple-100 mb-6">
                                            {t('eventDetail.eventCooperationDesc')}
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="block w-full text-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-300"
                                        >
                                            {t('eventDetail.eventCooperationAction')}
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
                            to="/press-room/events"
                            className="flex items-center px-6 py-3 bg-white hover:bg-purple-50 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('eventDetail.backToAll')}
                        </Link>

                        <div className="text-center">
                            <p className="text-gray-600 mb-2">{t('eventDetail.likeQuestion')}</p>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="hover:bg-green-50 hover:border-green-300">
                                    👍 {t('eventDetail.like')}
                                </Button>
                                <Button size="sm" variant="outline" className="hover:bg-red-50 hover:border-red-300">
                                    👎 {t('eventDetail.dislike')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
