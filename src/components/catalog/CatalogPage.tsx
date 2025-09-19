import { useLanguage } from '../../contexts/LanguageContext';

interface CatalogPageProps {
    pageNumber: number;
    isActive: boolean;
    isFlipping: boolean;
}

export function CatalogPage({ pageNumber, isActive: _isActive, isFlipping }: CatalogPageProps) {
    const { t: _t } = useLanguage();

    // Sayfa içeriklerini tanımla
    const getPageContent = (pageNum: number) => {
        switch (pageNum) {
            case 0:
                return {
                    type: 'cover',
                    title: 'UFUK LOJİSTİK',
                    subtitle: '42 Yıllık Deneyim',
                    background: 'from-blue-900 via-purple-900 to-blue-900',
                    content: null
                };
            case 1:
                return {
                    type: 'content',
                    title: 'MÜŞTERİ POLİTİKAMIZ',
                    background: 'from-blue-800 to-blue-900',
                    content: {
                        sections: [
                            {
                                title: 'Etik ve Adil İlişkiler',
                                text: 'Müşterilerimizle etik ve adil ilişkiler kurarak, uzun vadeli iş birlikleri geliştiriyoruz. Her müşterimizi değerli bir partner olarak görüyoruz.'
                            },
                            {
                                title: 'Müşteri Memnuniyeti',
                                text: 'Sürekli gelişim anlayışımızla müşteri memnuniyetini artırmak için etkili geri bildirim yönetimi yapıyoruz.'
                            },
                            {
                                title: 'Yeni Müşteri Kazanımı',
                                text: 'Yeni müşteri kazanımını değerli buluyor ve mevcut müşterilerimizle aynı kalitede hizmet sunuyoruz.'
                            }
                        ]
                    }
                };
            case 2:
                return {
                    type: 'content',
                    title: 'ŞİRKETİMİZDE',
                    background: 'from-purple-800 to-purple-900',
                    content: {
                        sections: [
                            {
                                title: 'Değerlerimizi Koruma',
                                text: 'Şirket değerlerimizi koruyarak, performans gelişimine katkıda bulunuyoruz.'
                            },
                            {
                                title: 'Kişisel ve Kurumsal Ayrım',
                                text: 'Kişisel çıkarlarımızı şirket çıkarlarından ayırarak, şeffaf bir yönetim anlayışı benimsiyoruz.'
                            },
                            {
                                title: 'Kaynak Kullanımı',
                                text: 'Şirket varlıklarını, tesislerini ve hizmetlerini yasalara uygun şekilde kullanıyoruz.'
                            },
                            {
                                title: 'Bilgi Güvenliği',
                                text: 'Paydaş bilgilerini hassasiyetle koruyarak, güvenilir bir iş ortamı sağlıyoruz.'
                            }
                        ]
                    }
                };
            case 3:
                return {
                    type: 'values',
                    title: 'DEĞERLERİMİZ',
                    background: 'from-green-800 to-green-900',
                    content: {
                        values: [
                            { title: 'Başarma Azmi', icon: '🎯', description: 'Hedeflerimize ulaşmak için kararlılıkla çalışırız.' },
                            { title: 'Müşteri Odaklılık', icon: '👥', description: 'Müşteri ihtiyaçlarını öncelikli tutarız.' },
                            { title: 'Bireysel İnisiyatif', icon: '💡', description: 'Yaratıcı çözümler üretmek için inisiyatif alırız.' },
                            { title: 'Güvenilirlik', icon: '🤝', description: 'Sözümüzün arkasında dururuz.' },
                            { title: 'Topluma Katkı', icon: '🌍', description: 'Sosyal sorumluluklarımızı yerine getiririz.' }
                        ]
                    }
                };
            case 4:
                return {
                    type: 'about',
                    title: 'HAKKIMIZDA',
                    background: 'from-cyan-800 to-cyan-900',
                    content: {
                        image: '/api/placeholder/400/300',
                        sections: [
                            {
                                title: '42 Yıllık Deneyim',
                                text: '1980 yılından beri lojistik sektöründe faaliyet gösteren Ufuk Lojistik, karayolu, havayolu, denizyolu, kombine taşımacılık, açık kargo ve proje kargo nakliye ile depolama hizmetleri sunmaktadır.'
                            },
                            {
                                title: 'Güçlü Altyapı',
                                text: 'Mersin, Gaziantep ve İskenderun\'da ofislerimiz bulunmakta olup, Mersin Prolas ve Merport Lojistik ile işbirliği yaparak 200\'den fazla personel istihdam etmekteyiz.'
                            },
                            {
                                title: 'Teknoloji ve Yazılım',
                                text: 'Kendi lojistik yazılımımıza 10 yıldan fazla süredir yatırım yaparak, sektörde nadir bulunan bu özelliğe sahip lojistik firmalarından biriyiz.'
                            }
                        ]
                    }
                };
            case 5:
                return {
                    type: 'facilities',
                    title: 'TESİSLERİMİZ',
                    background: 'from-orange-800 to-orange-900',
                    content: {
                        facilities: [
                            { title: 'Toplam Alan', value: '109.000 m²', description: 'Açık konteyner sahaları' },
                            { title: 'Lokasyonlar', value: '3 Şehir', description: 'Mersin, Gaziantep, İskenderun' },
                            { title: 'Çekici Sayısı', value: '70+', description: 'Modern araç filosu' },
                            { title: 'Reachstacker', value: '3 Adet', description: 'Tam konteyner makineleri' }
                        ]
                    }
                };
            case 6:
                return {
                    type: 'technology',
                    title: 'TEKNOLOJİ',
                    background: 'from-indigo-800 to-indigo-900',
                    content: {
                        sections: [
                            {
                                title: 'Yazılım Geliştirme',
                                text: '10 yıldan fazla süredir kendi lojistik yazılımımıza yatırım yaparak, sektörde nadir bulunan bu özelliğe sahip lojistik firmalarından biriyiz.'
                            },
                            {
                                title: 'Operasyonel Şeffaflık',
                                text: 'Tüm operasyonel süreçleri tek noktadan takip ederek, bu bilgileri müşterilerimizle şeffaf ve anlık olarak paylaşıyoruz.'
                            },
                            {
                                title: 'Özelleştirilmiş Çözümler',
                                text: 'Nitelikli operasyon ekibimizle müşteri ihtiyaçlarına özel operasyonel çözümler geliştirerek, düşük maliyetli ve kaliteli hizmet sunuyoruz.'
                            }
                        ]
                    }
                };
            case 7:
                return {
                    type: 'contact',
                    title: 'İLETİŞİM',
                    background: 'from-pink-800 to-pink-900',
                    content: {
                        contact: [
                            { type: 'phone', value: '+90 324 123 45 67', icon: '📞' },
                            { type: 'email', value: 'info@ufuklojistik.com', icon: '📧' },
                            { type: 'address', value: 'Mersin, Gaziantep, İskenderun', icon: '📍' },
                            { type: 'website', value: 'www.ufuklojistik.com', icon: '🌐' }
                        ]
                    }
                };
            default:
                return {
                    type: 'blank',
                    title: '',
                    background: 'from-gray-800 to-gray-900',
                    content: null
                };
        }
    };

    const pageContent = getPageContent(pageNumber);

    const renderPageContent = () => {
        switch (pageContent.type) {
            case 'cover':
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                            <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/25 rounded-full"></div>
                            <div className="absolute bottom-10 right-10 w-18 h-18 border-2 border-white/20 rounded-full"></div>
                        </div>

                        <div className="mb-8 relative z-10">
                            <div className="w-40 h-40 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                                <span className="text-6xl">🚛</span>
                            </div>
                        </div>

                        <h1 className="text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-wider">
                            {pageContent.title}
                        </h1>

                        <p className="text-3xl text-blue-200 mb-8 font-light">
                            {pageContent.subtitle}
                        </p>

                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-8"></div>

                        <div className="text-lg text-blue-100 font-medium">
                            <p>1980'den Beri</p>
                            <p className="text-2xl font-bold text-white mt-2">Güvenilir Lojistik Çözümleri</p>
                        </div>
                    </div>
                );

            case 'content':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>
                        <div className="space-y-6">
                            {pageContent.content?.sections?.map((section: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                        {section.title}
                                    </h3>
                                    <p className="text-blue-100 leading-relaxed text-base">
                                        {section.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'values':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {pageContent.content?.values?.map((value: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <div className="flex items-center space-x-6">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                                                {value.title}
                                            </h3>
                                            <p className="text-green-100 text-base leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-white/20">
                                <p className="text-green-100 text-lg font-medium">
                                    Bu değerler, 42 yıllık deneyimimizin temelini oluşturur ve tüm faaliyetlerimizde rehberimizdir.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'about':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>
                        <div className="mb-8">
                            <div className="w-full h-56 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl">
                                <span className="text-8xl">🏭</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {pageContent.content?.sections?.map((section: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                        {section.title}
                                    </h3>
                                    <p className="text-cyan-100 text-base leading-relaxed">
                                        {section.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    42 Yıllık Deneyim
                                </h3>
                                <p className="text-cyan-100 text-lg">
                                    Lojistik sektöründe güvenilir partner olarak hizmet vermeye devam ediyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'facilities':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>
                        <div className="grid grid-cols-2 gap-6">
                            {pageContent.content?.facilities?.map((facility: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                                        {facility.value}
                                    </div>
                                    <div className="text-orange-200 font-semibold mb-2 text-lg">
                                        {facility.title}
                                    </div>
                                    <div className="text-orange-100 text-sm leading-relaxed">
                                        {facility.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Modern Altyapı
                                </h3>
                                <p className="text-orange-100 text-lg">
                                    Tüm tesislerimizde modern ekipmanlar ve güvenli çalışma ortamları ile hizmet veriyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'technology':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>
                        <div className="space-y-6">
                            {pageContent.content?.sections?.map((section: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                                        {section.title}
                                    </h3>
                                    <p className="text-indigo-100 text-base leading-relaxed">
                                        {section.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Teknoloji Liderliği
                                </h3>
                                <p className="text-indigo-100 text-lg">
                                    Kendi yazılımımızla sektörde öncü konumdayız ve sürekli yenilik yapıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'contact':
                return (
                    <div className="p-8 h-full overflow-y-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                            {pageContent.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {pageContent.content?.contact?.map((contact: any, index: number) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl">{contact.icon}</div>
                                        <div>
                                            <div className="text-white font-semibold text-lg">
                                                {contact.value}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Bizimle İletişime Geçin
                                </h3>
                                <p className="text-pink-100 text-lg">
                                    42 yıllık deneyimimizle size en iyi hizmeti sunmaya hazırız.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📄</div>
                            <p className="text-white text-xl">Sayfa {pageNumber + 1}</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div
            className={`w-full h-full bg-gradient-to-br ${pageContent.background} transition-all duration-300 ${isFlipping ? 'transform-gpu' : ''
                }`}
        >
            {renderPageContent()}
        </div>
    );
}
