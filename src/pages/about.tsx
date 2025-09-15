import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/ufuk-lojistik-logo.svg" 
                alt="Ufuk Lojistik Logo" 
                className="w-24 h-24"
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              1982 yılından bu yana lojistik sektöründe faaliyet gösteren Ufuk Lojistik, 
              güvenilir ve profesyonel hizmet anlayışıyla müşterilerine en iyi çözümleri sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                42 Yıllık Deneyim
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                1982 yılından bu yana lojistik sektöründe faaliyet gösteren Ufuk Lojistik, 
                350'den fazla çalışanıyla kara yolu, hava yolu, deniz yolu taşımacılığı, 
                forwarding ve depolama hizmetleri sunmaktadır.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mersin'in yanı sıra Gaziantep ve İskenderun'da şubesi bulunan şirketimiz, 
                geniş hizmet ağı ile müşterilerine ulaşmaktadır.
              </p>
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-400 hover:from-primary-600 hover:to-secondary-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Hizmetlerimizi Keşfedin
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">42+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">350+</div>
                    <div className="text-sm text-gray-600">Çalışan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">180K</div>
                    <div className="text-sm text-gray-600">m² Terminal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                    <div className="text-sm text-gray-600">Çekici</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal & Equipment */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Terminal ve Ekipmanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              180.000 m² terminal sahasında 100'ü aşkın çekici ve 200'e yakın ekipmanla 
              konteyner depolama, yükleme-boşaltma ve elleçleme hizmetleri vermekteyiz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-gray-900">180.000 m²</CardTitle>
                <CardDescription className="text-gray-600">
                  Terminal sahası ile geniş depolama ve elleçleme imkanları
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-gray-900">100+ Çekici</CardTitle>
                <CardDescription className="text-gray-600">
                  Modern ve güvenilir araç filosu ile hızlı taşımacılık
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-gray-900">200+ Ekipman</CardTitle>
                <CardDescription className="text-gray-600">
                  Yükleme-boşaltma ve elleçleme için modern ekipmanlar
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Software */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500/10 to-secondary-400/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ERP Yazılım Sistemi</h3>
                  <p className="text-gray-600">
                    Kendi lojistik yazılımımızla tüm süreçleri tek merkezden yönetiyoruz
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Teknoloji ve Yazılım
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ufuk Lojistik, kendi lojistik yazılımına sahip ender şirketlerden biridir. 
                ERP yazılım sistemi ile tüm lojistik süreçler tek bir merkezden yönetilerek 
                zaman ve maliyetten tasarruf edilir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tüm birimlerde aktif olarak kullanılan bu yazılım sistemi sayesinde 
                müşterilere hızlı ve şeffaf bilgi sağlanır.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Merkezi yönetim sistemi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Zaman ve maliyet tasarrufu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Hızlı ve şeffaf bilgi akışı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Safety */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sigorta ve Güvenlik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "All Risk Taşıma Sigortası" ve "Ferdi Kaza Sigortaları" ile lojistik süreçlerde 
              oluşabilecek risklere karşı yükünüzü güvenle taşırız.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-gray-900">All Risk Taşıma Sigortası</CardTitle>
                <CardDescription className="text-gray-600">
                  Yüklerinizin her türlü riskine karşı kapsamlı sigorta koruması
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-gray-900">Ferdi Kaza Sigortaları</CardTitle>
                <CardDescription className="text-gray-600">
                  Çalışanlarımızın güvenliği için kapsamlı kaza sigortası koruması
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet & Environment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Çevre Dostu Filo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Euro-6 araçlardan oluşan geniş ve çevre dostu filosu, uzman ekibi ve 
                iştirak şirketleri ile tedarik zincirinin her aşamasında yanınızda yer alır.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Her geçen gün büyümeye, yeni yatırımlar yapmaya ve istihdam yaratmaya 
                devam eden Ufuk Lojistik, Türkiye'nin ve Mersin'in önemli lojistik 
                şirketleri arasında yer alır.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Euro-6 çevre dostu araçlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Uzman ekip ve iştirak şirketleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Sürekli büyüme ve yatırım</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-400/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Çevre Dostu</h3>
                  <p className="text-gray-600">
                    Euro-6 standartlarında araçlarla çevreye saygılı taşımacılık
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
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            42 yıllık deneyimimiz ve modern teknolojimizle lojistik ihtiyaçlarınızı 
            en iyi şekilde karşılamaya hazırız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Hizmetlerimizi İnceleyin
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              İletişime Geçin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
