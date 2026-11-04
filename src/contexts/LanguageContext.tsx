import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Çeviri verileri
const translations = {
  tr: {
    // Navigation
    "nav.corporate": "Kurumsal",
    "nav.about": "Hakkımızda",
    "nav.visionMission": "Vizyon & Misyon",
    "nav.kvk": "KVK Kanunu",
    "nav.sustainability": "Sürdürülebilirlik",
    "nav.catalog": "Katalog",
    "nav.services": "Hizmetlerimiz",
    "nav.roadTransport": "Kara Yolu Taşımacılığı",
    "nav.seaTransport": "Deniz Yolu Taşımacılığı",
    "nav.airTransport": "Hava Yolu Taşımacılığı",
    "nav.warehouseServices": "Depo Hizmetleri",
    "nav.containerSales": "Konteyner Satış",
    "nav.shipUnloading": "Açık Gemi Tahliyesi",

    // Open Ship Discharge Page
    "shipDischarge.title": "AÇIK GEMİ TAHLİYESİ",
    "shipDischarge.subtitle":
      "Açık gemi tahliyesi taşımacılık hizmetimizle güçlü finansal yapısı ve işlerin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürmekteyiz. Acentelerle yapmış olduğumuz senelik anlaşmalarımızla siz değerli müşterilerimize rekabetçi fiyatlar ve kaliteli hizmet verebilmekteyiz.",
    "shipDischarge.serviceTitle": "HİZMETİMİZ",
    "shipDischarge.serviceSubtitle":
      "Açık gemi tahliyesi konusunda sunduğumuz kapsamlı hizmet",
    "shipDischarge.serviceDescription":
      "Açık gemi tahliyesi taşımacılık hizmetimizle güçlü finansal yapısı ve işlerin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürmekteyiz.",
    "shipDischarge.features.1": "Güçlü finansal yapı ile güvenilir hizmet",
    "shipDischarge.features.2": "Uzman partner ağı",
    "shipDischarge.features.3": "Acentelerle senelik anlaşmalar",
    "shipDischarge.features.4": "Rekabetçi fiyatlar ve kaliteli hizmet",
    "shipDischarge.features.5": "7/24 müşteri desteği",
    "shipDischarge.cargoTypes.title": "YÜK TİPLERİ",
    "shipDischarge.cargoTypes.subtitle":
      "Açık gemi tahliyesi hizmetimizle taşıdığımız yük tipleri",
    "shipDischarge.cargoTypes.bulk.name": "Dökme Yükler",
    "shipDischarge.cargoTypes.bulk.desc":
      "Kömür, demir cevheri, tahıl gibi dökme yüklerin tahliyesi",
    "shipDischarge.cargoTypes.container.name": "Konteyner Yükleri",
    "shipDischarge.cargoTypes.container.desc":
      "20', 40' ve 40' High Cube konteynerlerin tahliyesi",
    "shipDischarge.cargoTypes.project.name": "Proje Yükleri",
    "shipDischarge.cargoTypes.project.desc":
      "Ağır ve hacimli proje yüklerinin tahliyesi",
    "shipDischarge.cargoTypes.hazardous.name": "Tehlikeli Maddeler",
    "shipDischarge.cargoTypes.hazardous.desc":
      "Tehlikeli maddelerin güvenli tahliyesi",
    "shipDischarge.advantages.title": "AVANTAJLARIMIZ",
    "shipDischarge.advantages.subtitle":
      "Açık gemi tahliyesi hizmetlerinde bizi farklı kılan özellikler",
    "shipDischarge.advantages.financial.title": "Güçlü Finansal Yapı",
    "shipDischarge.advantages.financial.desc":
      "Büyük projeler için güçlü finansal altyapımızla güvenilir hizmet sunuyoruz.",
    "shipDischarge.advantages.partners.title": "Uzman Partner Ağı",
    "shipDischarge.advantages.partners.desc":
      "Açık gemi tahliyesi konusunda uzman partnerlerimizle lojistik faaliyetler.",
    "shipDischarge.advantages.prices.title": "Rekabetçi Fiyatlar",
    "shipDischarge.advantages.prices.desc":
      "Acentelerle yapılan senelik anlaşmalarla rekabetçi fiyatlar sunuyoruz.",
    "shipDischarge.advantages.quality.title": "Kaliteli Hizmet",
    "shipDischarge.advantages.quality.desc":
      "Açık gemi tahliyesi hizmetlerinde kaliteli ve güvenilir hizmet garantisi.",
    "shipDischarge.process.title": "ÇALIŞMA SÜRECİMİZ",
    "shipDischarge.process.subtitle":
      "Açık gemi tahliyesi hizmetimizde izlediğimiz adım adım süreç",
    "shipDischarge.process.step1.title": "Talep Değerlendirmesi",
    "shipDischarge.process.step1.desc":
      "Açık gemi tahliyesi talebini detaylı olarak değerlendiriyoruz.",
    "shipDischarge.process.step2.title": "Gemi ve Rota Planlaması",
    "shipDischarge.process.step2.desc":
      "En uygun gemi ve rota planlaması yapıyoruz.",
    "shipDischarge.process.step3.title": "Terminal Hazırlığı",
    "shipDischarge.process.step3.desc":
      "Tahliye için gerekli terminal hazırlıklarını organize ediyoruz.",
    "shipDischarge.process.step4.title": "Gümrük İşlemleri",
    "shipDischarge.process.step4.desc":
      "Çıkış ve giriş gümrük işlemlerini organize ediyoruz.",
    "shipDischarge.process.step5.title": "Açık Gemi Tahliyesi",
    "shipDischarge.process.step5.desc":
      "Güvenli açık gemi tahliye işlemi gerçekleştiriyoruz.",
    "shipDischarge.process.step6.title": "Teslimat",
    "shipDischarge.process.step6.desc":
      "Hedef noktaya güvenli teslimat yapıyoruz.",
    "shipDischarge.cta.title": "HEMEN BAŞLAYIN",
    "shipDischarge.cta.subtitle":
      "Açık gemi tahliyesi ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",
    "shipDischarge.buttons.getQuote": "Teklif Al",
    "shipDischarge.buttons.trackCargo": "Kargo Takip",
    "shipDischarge.buttons.details": "Detaylı Bilgi",
    "nav.workMethod": "Çalışma Şeklimiz",
    "nav.press": "Basın Odası",
    "nav.pressNews": "Basında Biz",
    "nav.events": "Etkinlikler",
    "nav.careers": "Kariyer",
    "nav.humanResources": "İnsan Kaynakları",
    "nav.contact": "İletişim",
    "nav.customerLogin": "Müşteri Girişi",

    // Corporate Page
    "corporate.title": "Kurumsal",
    "corporate.subtitle":
      "42 yıllık deneyimimizle lojistik sektöründe güvenilir partneriniz. Kurumsal değerlerimiz, vizyonumuz ve hizmet anlayışımız hakkında detaylı bilgi alın.",
    "corporate.overview.title": "Kurumsal Kimliğimiz",
    "corporate.overview.subtitle":
      "Ufuk Lojistik olarak, müşteri memnuniyetini ön planda tutan, sürekli gelişim ve yenilikçilik anlayışıyla hareket eden bir kurumsal kimliğe sahibiz.",
    "corporate.sections.title": "Kurumsal Bilgilerimiz",
    "corporate.sections.subtitle":
      "Şirketimiz hakkında detaylı bilgi almak için aşağıdaki bölümleri inceleyebilirsiniz.",
    "corporate.values.title": "Kurumsal Değerlerimiz",
    "corporate.values.subtitle":
      "Çalışma prensiplerimizi ve değerlerimizi oluşturan temel unsurlar.",
    "corporate.technology.title": "Teknoloji & İnovasyon",
    "corporate.technology.subtitle":
      "Modern teknoloji altyapımız ve sürekli gelişim anlayışımızla, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.",
    "corporate.cta.title": "Bizimle İletişime Geçin",
    "corporate.cta.subtitle":
      "Kurumsal bilgilerimiz hakkında daha detaylı bilgi almak veya hizmetlerimiz hakkında görüşmek için bizimle iletişime geçin.",
    "corporate.sections.about.desc":
      "42 yıllık deneyimimizle lojistik sektöründe güvenilir partneriniz",
    "corporate.sections.vision.desc":
      "Vizyonumuz ve misyonumuz doğrultusunda sürekli gelişim",
    "corporate.sections.kvk.desc":
      "Kişisel verilerinizin korunması konusundaki taahhüdümüz",
    "corporate.sections.sustainability.desc":
      "Çevreye saygılı ve sürdürülebilir lojistik çözümleri",
    "corporate.sections.catalog.desc": "Hizmet kataloğumuz ve detaylı bilgiler",
    "corporate.achievements.experience.label": "Yıllık Deneyim",
    "corporate.achievements.experience.desc":
      "Lojistik sektöründe uzun yılların getirdiği tecrübe",
    "corporate.achievements.employees.label": "Çalışan",
    "corporate.achievements.employees.desc": "Uzman kadromuzla 7/24 hizmet",
    "corporate.achievements.terminal.label": "m² Terminal",
    "corporate.achievements.terminal.desc":
      "Modern altyapımızla geniş depolama kapasitesi",
    "corporate.achievements.vehicles.label": "Çekici",
    "corporate.achievements.vehicles.desc": "Son teknoloji araç filomuz",
    "corporate.values.reliability.title": "Güvenilirlik",
    "corporate.values.reliability.desc":
      "Müşterilerimizin güvenini kazanmak için sürekli çalışıyoruz",
    "corporate.values.quality.title": "Kalite",
    "corporate.values.quality.desc":
      "En yüksek kalite standartlarında hizmet sunuyoruz",
    "corporate.values.innovation.title": "İnovasyon",
    "corporate.values.innovation.desc":
      "Teknolojik gelişmeleri yakından takip ediyoruz",
    "corporate.values.sustainability.title": "Sürdürülebilirlik",
    "corporate.values.sustainability.desc":
      "Çevreye saygılı ve sürdürülebilir çözümler üretiyoruz",
    "corporate.technology.desc2":
      "ERP sistemimiz, gerçek zamanlı takip teknolojimiz ve dijital platformlarımızla lojistik süreçlerinizi optimize ediyoruz.",
    "corporate.technology.feature1": "Merkezi ERP Sistemi",
    "corporate.technology.feature2": "Gerçek Zamanlı Takip",
    "corporate.technology.feature3": "Dijital Platform Entegrasyonu",
    "corporate.technology.digital.title": "Dijital Dönüşüm",
    "corporate.technology.digital.desc":
      "Teknolojik altyapımızla lojistik süreçlerinizi dijitalleştiriyor, verimliliğinizi artırıyoruz.",
    "corporate.buttons.details": "Detayları İncele",
    "corporate.buttons.contact": "İletişime Geçin",
    "corporate.buttons.exploreServices": "Hizmetlerimizi İnceleyin",

    // Contact Page
    "contact.title": "İletişim",
    "contact.subtitle":
      "42 yıllık deneyimimizle size en iyi hizmeti sunmak için buradayız. Sorularınız için bizimle iletişime geçin.",
    "contact.form.title": "İletişim Formu",
    "contact.form.subtitle":
      "Size en kısa sürede dönüş yapabilmemiz için formu doldurun",
    "contact.form.name": "Ad Soyad",
    "contact.form.company": "Firma Adı",
    "contact.form.phone": "Telefon",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Konu",
    "contact.form.message": "Mesaj",
    "contact.form.submit": "Mesajı Gönder",
    "contact.form.submitting": "Gönderiliyor...",
    "contact.form.success.title": "Mesajınız başarıyla gönderildi!",
    "contact.form.success.message": "En kısa sürede size dönüş yapacağız.",
    "contact.form.error.title": "Bir hata oluştu!",
    "contact.form.error.message":
      "Lütfen tekrar deneyin veya telefon ile iletişime geçin.",
    "contact.info.title": "İletişim Bilgileri",
    "contact.info.phone": "Telefon",
    "contact.info.phone.desc": "7/24 Müşteri Hizmetleri",
    "contact.info.fax": "Faks",
    "contact.info.fax.desc": "Belge Gönderimi",
    "contact.info.email": "E-Mail",
    "contact.info.email.desc": "Genel Bilgi ve Destek",
    "contact.info.address": "Adres",
    "contact.info.address.desc": "Akdeniz / MERSİN",
    "contact.quick.title": "Hızlı İşlemler",
    "contact.quick.survey.title": "Müşteri Memnuniyet Anketi",
    "contact.quick.survey.desc": "Hizmet kalitemizi değerlendirin",
    "contact.quick.survey.action": "Anketi Doldur",
    "contact.quick.emergency.title": "Acil Durum Hattı",
    "contact.quick.emergency.desc": "7/24 Acil Destek",
    "contact.quick.emergency.action": "Ara: 444 70 33",
    "contact.quick.tracking.title": "Online Takip",
    "contact.quick.tracking.desc": "Kargonuzu takip edin",
    "contact.quick.tracking.action": "Takip Et",
    "contact.map.title": "Konum",
    "contact.map.loading": "Harita Yükleniyor...",
    "contact.map.location": "Mersin, Akdeniz",
    "contact.support.title": "7/24 Müşteri Desteği",
    "contact.support.subtitle":
      "Acil durumlarınız için 7/24 hizmetinizdeyiz. 444 70 33 numaralı telefonumuzdan bize ulaşabilirsiniz.",
    "contact.support.call": "Hemen Ara",
    "contact.support.whatsapp": "WhatsApp Destek",

    // Home Page
    "home.hero.title": "42 Yıllık Lojistik Deneyimi",
    "home.hero.subtitle":
      "1982'den beri kara, hava ve deniz yolu taşımacılığında güvenilir çözümler sunuyoruz.",
    "home.hero.track": "🚀 Kargo Takip Et",
    "home.hero.explore": "✨ Hizmetleri Keşfet",

    // Stats
    "stats.experience": "Yıllık Deneyim",
    "stats.employees": "Çalışan",
    "stats.terminal": "m² Terminal",
    "stats.vehicles": "Çekici",

    // Services
    "services.road": "Kara Yolu Taşımacılığı",
    "services.air": "Hava Yolu Taşımacılığı",
    "services.sea": "Deniz Yolu Taşımacılığı",
    "services.warehouse": "Forwarding & Depolama",

    // About Page
    "about.title": "Hakkımızda",
    "about.subtitle":
      "1982 yılından bu yana lojistik sektöründe faaliyet gösteren Ufuk Lojistik, güvenilir ve profesyonel hizmet anlayışıyla müşterilerine en iyi çözümleri sunmaktadır.",
    "about.experience": "42 Yıllık Deneyim",
    "about.terminal": "Terminal ve Ekipmanlarımız",
    "about.technology": "Teknoloji ve Yazılım",
    "about.insurance": "Sigorta ve Güvenlik",
    "about.fleet": "Çevre Dostu Filo",

    // Home Page Additional
    "home.why.title": "Neden Ufuk Lojistik?",
    "home.why.subtitle":
      "Yapay zeka ve blockchain teknolojisi ile güçlendirilmiş akıllı lojistik çözümleri",
    "home.why.smart": "akıllı lojistik",
    "home.why.solutions": "çözümleri",

    // Services Descriptions
    "services.road.desc":
      "100+ çekici ile güvenli ve hızlı kara yolu taşımacılığı hizmeti.",
    "services.air.desc":
      "Hızlı ve güvenli hava yolu taşımacılığı ile acil teslimatlar.",
    "services.sea.desc":
      "Konteyner taşımacılığı ve deniz yolu lojistik çözümleri.",
    "services.warehouse.desc":
      "180.000 m² terminal sahasında depolama ve elleçleme hizmetleri.",

    // Home Page Additional Sections
    "home.logistics.experience": "Lojistik Deneyimi",
    "home.reliable.solutions": "güvenilir çözümler",
    "home.since.1982": "1982'den beri kara, hava ve deniz yolu taşımacılığında",
    "home.since.1982.end": "sunuyoruz.",

    // About Page Additional
    "about.company.story": "42 Yıllık Deneyim",
    "about.company.desc1":
      "1982 yılından bu yana lojistik sektöründe faaliyet gösteren Ufuk Lojistik, 350'den fazla çalışanıyla kara yolu, hava yolu, deniz yolu taşımacılığı, forwarding ve depolama hizmetleri sunmaktadır.",
    "about.company.desc2":
      "Mersin'in yanı sıra Gaziantep ve İskenderun'da şubesi bulunan şirketimiz, geniş hizmet ağı ile müşterilerine ulaşmaktadır.",
    "about.explore.services": "Hizmetlerimizi Keşfedin",

    // Terminal Section
    "about.terminal.desc":
      "180.000 m² terminal sahasında 100'ü aşkın çekici ve 200'e yakın ekipmanla konteyner depolama, yükleme-boşaltma ve elleçleme hizmetleri vermekteyiz.",
    "about.terminal.area":
      "Terminal sahası ile geniş depolama ve elleçleme imkanları",
    "about.vehicles": "Modern ve güvenilir araç filosu ile hızlı taşımacılık",
    "about.equipment": "Yükleme-boşaltma ve elleçleme için modern ekipmanlar",

    // Technology Section
    "about.technology.desc1":
      "Ufuk Lojistik, kendi lojistik yazılımına sahip ender şirketlerden biridir. ERP yazılım sistemi ile tüm lojistik süreçler tek bir merkezden yönetilerek zaman ve maliyetten tasarruf edilir.",
    "about.technology.desc2":
      "Tüm birimlerde aktif olarak kullanılan bu yazılım sistemi sayesinde müşterilere hızlı ve şeffaf bilgi sağlanır.",
    "about.erp.title": "ERP Yazılım Sistemi",
    "about.erp.desc":
      "Kendi lojistik yazılımımızla tüm süreçleri tek merkezden yönetiyoruz",
    "about.tech.features.central": "Merkezi yönetim sistemi",
    "about.tech.features.savings": "Zaman ve maliyet tasarrufu",
    "about.tech.features.transparency": "Hızlı ve şeffaf bilgi akışı",

    // Insurance Section
    "about.insurance.desc":
      '"All Risk Taşıma Sigortası" ve "Ferdi Kaza Sigortaları" ile lojistik süreçlerde oluşabilecek risklere karşı yükünüzü güvenle taşırız.',
    "about.all.risk.title": "All Risk Taşıma Sigortası",
    "about.all.risk.desc":
      "Yüklerinizin her türlü riskine karşı kapsamlı sigorta koruması",
    "about.individual.accident.title": "Ferdi Kaza Sigortaları",
    "about.individual.accident.desc":
      "Çalışanlarımızın güvenliği için kapsamlı kaza sigortası koruması",

    // Fleet Section
    "about.fleet.desc1":
      "Euro-6 araçlardan oluşan geniş ve çevre dostu filosu, uzman ekibi ve iştirak şirketleri ile tedarik zincirinin her aşamasında yanınızda yer alır.",
    "about.fleet.desc2":
      "Her geçen gün büyümeye, yeni yatırımlar yapmaya ve istihdam yaratmaya devam eden Ufuk Lojistik, Türkiye'nin ve Mersin'in önemli lojistik şirketleri arasında yer alır.",
    "about.environmentally.friendly": "Çevre Dostu",
    "about.environmentally.friendly.desc":
      "Euro-6 standartlarında araçlarla çevreye saygılı taşımacılık",
    "about.fleet.features.euro6": "Euro-6 çevre dostu araçlar",
    "about.fleet.features.expert": "Uzman ekip ve iştirak şirketleri",
    "about.fleet.features.growth": "Sürekli büyüme ve yatırım",

    // CTA Section
    "about.cta.title": "Bizimle Çalışmaya Hazır mısınız?",
    "about.cta.desc":
      "42 yıllık deneyimimiz ve modern teknolojimizle lojistik ihtiyaçlarınızı en iyi şekilde karşılamaya hazırız.",
    "about.cta.explore": "Hizmetlerimizi İnceleyin",
    "about.cta.contact": "İletişime Geçin",

    // Footer
    "footer.description":
      "1982'den beri kara, hava ve deniz yolu taşımacılığında güvenilir çözümler sunan, 350+ çalışanıyla lojistik sektörünün öncü şirketlerinden biriyiz.",
    "footer.quickLinks": "Hızlı Linkler",
    "footer.contact": "İletişim",
    "footer.phone": "+90 (324) 555 0123",
    "footer.email": "info@ufuklojistik.com",
    "footer.address": "Mersin, Türkiye",
    "footer.branches": "Gaziantep & İskenderun Şubeleri",
    "footer.copyright": "© 2024 Ufuk Lojistik. Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",

    // Tracking
    "tracking.live.title": "Canlı Kargo Takibi",
    "tracking.live.subtitle": "Gerçek zamanlı güncellemeler",
    "tracking.cargoNumber": "Kargo No",
    "tracking.status": "Durum",
    "tracking.delivered": "Teslim Edildi",
    "tracking.estimatedTime": "Tahmini Süre",
    "tracking.time": "2 saat 15 dk",
    "tracking.detailed": "Detaylı Takip",

    // Auth Page
    "auth.welcomeBack": "Tekrar Hoş Geldiniz",
    "auth.createAccount": "Hesap Oluşturun",
    "auth.loginDescription": "Hesabınıza giriş yapın",
    "auth.registerDescription": "Yeni hesap oluşturun",
    "auth.login": "Giriş Yap",
    "auth.register": "Kayıt Ol",
    "auth.fullName": "Ad Soyad",
    "auth.fullNamePlaceholder": "Adınızı ve soyadınızı girin",
    "auth.email": "E-posta",
    "auth.emailPlaceholder": "ornek@email.com",
    "auth.username": "Kullanıcı Adı",
    "auth.usernamePlaceholder": "Kullanıcı adınızı girin",
    "auth.password": "Şifre",
    "auth.passwordPlaceholder": "Şifrenizi girin",
    "auth.confirmPassword": "Şifre Tekrar",
    "auth.confirmPasswordPlaceholder": "Şifrenizi tekrar girin",
    "auth.rememberMe": "Beni Hatırla",
    "auth.forgotPassword": "Şifremi Unuttum",
    "auth.processing": "İşleniyor...",
    "auth.loginButton": "Giriş Yap",
    "auth.registerButton": "Kayıt Ol",
    "auth.or": "veya",
    "auth.continueWithGoogle": "Google ile Devam Et",
    "auth.termsText": "Kayıt olarak",
    "auth.terms": "Kullanım Şartları",
    "auth.and": "ve",
    "auth.privacy": "Gizlilik Politikası",
    "auth.backToHome": "Ana Sayfaya Dön",

    // Vision & Mission
    "vision.title": "Misyon & Vizyon",
    "vision.subtitle":
      "Ufuk Lojistik olarak, müşteri memnuniyetini ön planda tutarak, güvenilir ve kaliteli hizmet anlayışımızla lojistik sektöründe öncü olmaya devam ediyoruz.",
    "vision.ourValues": "Değerlerimiz",
    "vision.valuesDescription":
      "Şirketimizin temelini oluşturan değerlerimiz, tüm faaliyetlerimizde rehberimizdir.",
    "vision.values.achievement": "Başarma Azmi",
    "vision.values.achievementDesc":
      "Her projede mükemmellik arayışı ve sürekli gelişim anlayışı.",
    "vision.values.customerFocus": "Müşteri Odaklılık",
    "vision.values.customerFocusDesc":
      "Müşteri ihtiyaçlarını anlama ve en iyi çözümleri sunma odaklı yaklaşım.",
    "vision.values.initiative": "Bireysel İnisiyatif ve Sorumluluk",
    "vision.values.initiativeDesc":
      "Takım çalışması içinde bireysel sorumluluk ve inisiyatif alma.",
    "vision.values.reliability": "Güvenilirlik",
    "vision.values.reliabilityDesc":
      "Söz verdiğimiz hizmetleri zamanında ve kaliteli şekilde teslim etme.",
    "vision.values.contribution": "Topluma Katkı",
    "vision.values.contributionDesc":
      "Sosyal sorumluluk bilinci ile topluma değer katma anlayışı.",
    "vision.customerPolicyTitle": "Müşteri Politikamız",
    "vision.customerPolicyDescription":
      "Müşteri memnuniyetini artırmak için uyguladığımız temel prensiplerimiz.",
    "vision.customerPolicy.1":
      "Müşterilerimizin memnuniyetini, gereksinimler ve hizmet standartlarımızın gelişimine paralel sürekli artırırız.",
    "vision.customerPolicy.2":
      "Müşteri geri bildirimlerini etkin bir şekilde yönetir ve müşteri memnuniyetini sürekli geliştiririz.",
    "vision.customerPolicy.3":
      "Müşteri geri bildirimleri doğrultusunda süreçlerimizi iyileştiririz.",
    "vision.customerPolicy.4":
      "Müşterilerimizle ilişkilerimizde iş ahlâkı ve adalet esaslarını dikkate alırız.",
    "vision.customerPolicy.5":
      "Müşterilerimizle uzun süreli ilişkiler kurmaya, yeni müşteri kazanmak kadar önem veririz.",
    "vision.companyPolicyTitle": "Şirketimizde",
    "vision.companyPolicyDescription":
      "Şirket içi değerlerimiz ve çalışma prensiplerimiz.",
    "vision.companyPolicy.1":
      "Şirket değerlerimizi her zaman ön planda tutarız.",
    "vision.companyPolicy.2":
      "Şirketimizin performansının gelişiminde hepimiz payımıza düşeni yaparız.",
    "vision.companyPolicy.3":
      "Kişisel çıkarlarımızla şirket çıkarlarını asla birbirine karıştırmayız.",
    "vision.companyPolicy.4":
      "Şirketimizin varlıklarını, tesislerini ve hizmetlerini düzgün ve yasalara uygun kullanırız.",
    "vision.companyPolicy.5":
      "Paydaşlarımıza ait bilgileri hassasiyetle koruruz.",
    "vision.ctaTitle": "Bizimle Çalışmaya Hazır mısınız?",
    "vision.ctaDescription":
      "Değerlerimiz ve prensiplerimiz doğrultusunda size en iyi hizmeti sunmaya hazırız.",
    "vision.learnMore": "Daha Fazla Bilgi",
    "vision.contactUs": "İletişime Geçin",

    // Interactive Features Section
    "home.interactive.title": "Akıllı Teknoloji",
    "home.interactive.subtitle": "Güçlendirilmiş Hizmet",
    "home.interactive.description":
      "Yapay zeka algoritmaları ve IoT sensörleri ile kargo süreçlerinizi",
    "home.interactive.realtime": "gerçek zamanlı",
    "home.interactive.descriptionEnd": "optimize ediyoruz.",
    "home.interactive.feature1.title": "AI Destekli Rota Optimizasyonu",
    "home.interactive.feature1.desc":
      "Makine öğrenmesi ile en hızlı ve ekonomik rotalar",
    "home.interactive.feature2.title": "Blockchain Takip Sistemi",
    "home.interactive.feature2.desc": "Şeffaf ve güvenli kargo takip altyapısı",
    "home.interactive.feature3.title": "IoT Sensör Ağı",
    "home.interactive.feature3.desc": "Gerçek zamanlı konum ve durum izleme",

    // CTA Section
    "home.cta.title1": "Geleceği Birlikte",
    "home.cta.title2": "Şekillendirelim",
    "home.cta.description":
      "Lojistik dünyasında devrim yaratmaya hazır mısınız?",
    "home.cta.startToday": "Bugün başlayın",
    "home.cta.descriptionEnd": "ve farkı hissedin.",
    "home.cta.startButton": "Hemen Başla",
    "home.cta.pricingButton": "Fiyatları Gör",

    // KVK Page
    "kvk.title": "Kişisel Verilerin Korunması Kanunu",
    "kvk.subtitle":
      "UFUK İNTERMODAL LOJİSTİK A.Ş. olarak kişisel verilerinizin korunmasına ve güvenliğine azami özen göstermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu hakkında bilgilendirme metni.",
    "kvk.introduction.title": "Aydınlatma Metni",
    "kvk.introduction.content":
      'UFUK İNTERMODAL LOJİSTİK A.Ş. ("Şirketimiz") olarak kişisel verilerinizin korunmasına ve güvenliğine azami özen göstermekteyiz. Bu kapsamda, başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verilerin korunması amacıyla düzenlenen 6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") hakkında kişisel verilerinizin toplanma şekilleri, işlenme amaçları, işlemenin hukuki nedenleri ve haklarınız konularında Veri Sorumlusu olarak sizleri en şeffaf şekilde aydınlatmak ve bilgilendirmek isteriz.',
    "kvk.introduction.note":
      "Şirketimiz tarafından kişisel verilerinizin hukuka aykırı olarak işlenmesinin ve verilerinize hukuka aykırı olarak erişilmesinin önlenmesi ve kişisel verilerinizin güvenli bir şekilde muhafaza edilmesi amacıyla her türlü gerekli teknik ve idari tedbir alınmıştır.",
    "kvk.sections.title": "Kişisel Veri İşleme Süreçleri",
    "kvk.sections.subtitle":
      "Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında detaylı bilgiler",
    "kvk.section1.title": "Kişisel Verilerinizin İşlenme Amacı",
    "kvk.section1.content":
      "Kişisel verilerinizin işlenmesi amaçları tahdidi olmamak üzere: Şirketimiz tarafından gerekli operasyonel faaliyetlerin yürütülmesi, insan kaynağı yönetiminin gerçekleştirilmesi, şirketimiz tarafından ticari kararların verilmesi, uygulanması ve gerçekleştirilmesi konusunda gerekli adımların atılması, iş ilişkisi kurulan gerçek kişiler ile şirketimiz iş ortaklarının bu ilişkilerden kaynaklı hukuki ve ticari güvenliğinin sağlanması, İşe alım süreçlerinin yürütülmesi, Güvenlik süreçlerinin temini, güvenlik amacıyla görüntü kayıt süreçlerinin, tesis içine girişlerde kimlik ve izin süreçlerinin yürütülmesi, İSG faaliyetlerinin yürütülmesi, eğitimlerinin koordinasyonu ve iş kaza kayıtlarının tutulması, ziyaretçi prosedürü ile acil durum operasyonlarının koordinasyonu, sağlık süreçlerinin yürütülmesi, misafir internet kullanım kayıtları, iletişim formunun alınması amaçlarıyla Kanun'un 5 ve 6. maddeleri uyarınca kişisel verilerin işlenmesine ilişkin şartlara uygun olarak işlenmektedir.",
    "kvk.section2.title": "Kişisel Verilerinizin Paylaşılması",
    "kvk.section2.content":
      "Kişisel verileriniz, Şirketimizin hissedarlarıyla, iş ortaklarıyla, tedarikçileriyle, dış hizmet sağlayıcılarıyla ve kanunen yetkili kamu kurum ve kuruluşları ile Kanun'un 8 ve 9 numaralı maddelerinde belirtilen şartlara uygun olarak paylaşılabilecektir. Kişisel verilerinizin paylaşım amaçları tahdidi olmamak üzere: Şirketimizin ticari faaliyetlerinin sürdürülmesi ile Şirketimizin insan kaynakları süreçlerinin ve istihdam politikalarının yönetilmesidir. Kişisel verilerinizin paylaşılması halinde gerekli güvenlik önlemleri alınmaktadır.",
    "kvk.section3.title":
      "Kişisel Verilerinizin Toplanma Yöntemleri ve Bunların Hukuki Sebepleri",
    "kvk.section3.content":
      "Kişisel verileriniz, Şirketimiz tarafından işbu Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni'nde belirtilen amaçlarla kullanılmak üzere her türlü yazılı, sözlü, elektronik ortamlardan otomatik olan ya da olmayan yöntemlerle toplanabilmektedir. Kişisel verileriniz Kanun'un 5. ve 6. Maddelerinde belirtilen kişisel veri işleme şartları ve amaçları ile işbu Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni'nde belirtilen amaçlarla işlenebilmekte ve aktarılabilmektedir.",
    "kvk.section4.title": "Kişisel Verilerinizin Saklanma Süresi",
    "kvk.section4.content":
      "Şirketimiz, kişisel verileri işbu Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni'nde belirtilen amaçların gerektirdiği süre boyunca saklayacaktır. Buna ek olarak, Şirketimiz, veri sahibi ile arasında doğabilecek herhangi bir uyuşmazlık durumunda, uyuşmazlık kapsamında gerekli savunmaların gerçekleştirilebilmesi amacıyla sınırlı olmak üzere ve ilgili mevzuat uyarınca belirlenen zamanaşımı süreleri boyunca kişisel verileri saklayabilecektir.",
    "kvk.section5.title": "Veri Güvenliğine İlişkin Önlem ve Taahhütler",
    "kvk.section5.content":
      "Şirketimiz, kişisel verilerin hukuka aykırı olarak işlenmemesini, kişisel verilere hukuka aykırı olarak erişilmemesini ve kişisel verilerin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli teknik ve idari tedbirleri almayı, gerekli denetimleri yaptırmayı taahhüt eder. Şirketimiz elde ettiği kişisel verileri işbu Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni ile ilgili yasal mevzuata aykırı olarak başkasına açıklamayacak ve işleme amacı dışında kullanmayacaktır.",
    "kvk.rights.title": "Kanun'dan Doğan Haklarınız",
    "kvk.rights.subtitle":
      "Kişisel verilerinize ilişkin olarak aşağıdaki haklara sahipsiniz. Bu haklarınızı kullanmak için aşağıda belirtilen iletişim bilgilerinden bizimle iletişime geçebilirsiniz.",
    "kvk.right1": "Kişisel veri işlenip işlenmediğini öğrenme",
    "kvk.right2": "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
    "kvk.right3":
      "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
    "kvk.right4":
      "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
    "kvk.right5":
      "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
    "kvk.right6":
      "İşlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme",
    "kvk.right7":
      "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme",
    "kvk.right8":
      "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme",
    "kvk.rights.use.title": "Haklarınızı Kullanın",
    "kvk.rights.use.subtitle":
      "Taleplerinizi 30 gün içerisinde değerlendirerek sonuçlandırıyoruz.",
    "kvk.rights.use.button": "İletişime Geç",
    "kvk.contact.title": "İletişim Bilgileri",
    "kvk.contact.subtitle":
      "KVK haklarınızı kullanmak için aşağıdaki iletişim bilgilerinden bizimle iletişime geçebilirsiniz",
    "kvk.contact.address.title": "Posta Adresi",
    "kvk.contact.address.content":
      "Kültür Mah. 4316 Sok. No:2<br />Şıhman Apt. Kat:1 No:1<br />Akdeniz / MERSİN",
    "kvk.contact.email.title": "E-posta Adresleri",
    "kvk.contact.email.content":
      "<strong>KEP:</strong> ufukintermodal@hs01.kep.tr<br /><strong>Genel:</strong> info@ufuklojistik.com",
    "kvk.contact.response.title": "Yanıt Süresi",
    "kvk.contact.response.content":
      "Talepleriniz 30 (otuz) gün içerisinde değerlendirilerek sonuçlandırılacaktır.",
    "kvk.notes.title": "Önemli Notlar",
    "kvk.notes.conditions.title": "Başvuru Koşulları:",
    "kvk.notes.conditions.content":
      "Veri sahibi tarafından iletilen taleplerde, veri sahibinin adı, soyadı, başvuru yazılı ise imzası, TC kimlik numarası ya da yabancı ise uyruğu, pasaport numarası veya varsa kimlik numarası, tebligata esas yerleşim yeri veya iş adresi, varsa bildirime esas elektronik posta adresi, telefon ve faks numarası ve talep konusu bulunması zorunludur.",
    "kvk.notes.pricing.title": "Ücretlendirme:",
    "kvk.notes.pricing.content":
      "Taleplere ilişkin olarak yazılı şekilde yanıt verilecek olması halinde yanıtlar için mevzuatın öngördüğü ücret tarifesi üzerinden ücret talep etme hakkı saklıdır. Başvuruya verilecek yanıtın CD, flash bellek gibi bir kayıt ortamında verilmesi halinde ise Şirketimiz, talepte bulunan veri sahibinden kayıt ortamının maliyeti tutarında ücret talep edebilir.",
    "kvk.notes.changes.title": "Değişiklikler:",
    "kvk.notes.changes.content":
      "Şirketimiz, işbu Metin'de yer alan hükümleri dilediği zaman yayımlamak suretiyle değiştirebilir. Şirketimizin değişiklik yaptığı hükümler yayınlandığı tarihte yürürlük kazanır.",
    "kvk.cta.title": "Sorularınız mı var?",
    "kvk.cta.subtitle":
      "Kişisel verilerinizin korunması hakkında daha fazla bilgi almak veya haklarınızı kullanmak için bizimle iletişime geçin.",
    "kvk.cta.contact": "İletişime Geç",
    "kvk.cta.more": "Daha Fazla Bilgi",
    "kvk.secure.title": "Güvenli Veri İşleme",
    "kvk.secure.subtitle":
      "Tüm kişisel verileriniz 6698 sayılı KVK Kanunu'na uygun olarak işlenmekte ve korunmaktadır.",

    // Catalog Page
    "catalog.title": "Dijital Katalog",
    "catalog.subtitle": "Şirketimizin hizmetlerini ve değerlerini keşfedin",
    "catalog.instructions.drag": "Sürükleyerek 3D döndürün",
    "catalog.instructions.click": "Tıklayarak sayfa çevirin",
    "catalog.instructions.arrows": "Ok tuşları ile gezinin",
    "catalog.navigation.first": "İlk Sayfa",
    "catalog.navigation.previous": "Önceki Sayfa",
    "catalog.navigation.next": "Sonraki Sayfa",
    "catalog.navigation.last": "Son Sayfa",
    "catalog.navigation.zoomIn": "Yakınlaştır",
    "catalog.navigation.zoomOut": "Uzaklaştır",
    "catalog.navigation.fullscreen": "Tam Ekran",
    "catalog.navigation.print": "Yazdır",
    "catalog.navigation.shortcuts": "Klavye Kısayolları",
    "catalog.navigation.navigate": "sayfa gezin",
    "catalog.navigation.flip": "sayfa çevir",

    // Sustainability Page
    "sustainability.title": "Sürdürülebilirlik",
    "sustainability.subtitle":
      "Çevreye ve topluma karşı sorumluluğumuzun bilinciyle, sürdürülebilir lojistik çözümleri sunuyoruz.",
    "sustainability.ourCommitment": "Sürdürülebilirlik Taahhüdümüz",
    "sustainability.commitmentDesc":
      "Ufuk Lojistik olarak, çevresel, sosyal ve ekonomik sürdürülebilirlik ilkelerini benimser, tüm faaliyetlerimizde bu değerleri ön planda tutarız.",
    "sustainability.certificates": "ISO Sertifikalarımız",
    "sustainability.certificatesDesc":
      "Uluslararası standartlara uygunluk gösteren sertifikalarımız, kalite, çevre, iş sağlığı ve güvenliği ile müşteri memnuniyeti konularındaki taahhüdümüzü kanıtlamaktadır.",
    "sustainability.viewCertificate": "Sertifikayı İncele",
    "sustainability.close": "Kapat",
    "sustainability.iso9001": "ISO 9001:2015",
    "sustainability.iso9001Title": "Kalite Yönetim Sistemi",
    "sustainability.iso9001Desc":
      "Müşteri memnuniyetini artırmak ve sürekli iyileştirme sağlamak için kalite yönetim sistemi standartları.",
    "sustainability.iso10002": "ISO 10002:2018",
    "sustainability.iso10002Title":
      "Müşteri Yönetimi ve Şikayet Yönetim Sistemi",
    "sustainability.iso10002Desc":
      "Müşteri memnuniyetini artırmak ve etkin şikayet yönetimi sağlamak için müşteri yönetim sistemi.",
    "sustainability.iso14001": "ISO 14001:2015",
    "sustainability.iso14001Title": "Çevre Yönetim Sistemi",
    "sustainability.iso14001Desc":
      "Çevresel etkileri minimize etmek ve sürdürülebilir çevre yönetimi sağlamak için çevre yönetim sistemi.",
    "sustainability.iso45001": "ISO 45001:2018",
    "sustainability.iso45001Title": "İş Sağlığı ve Güvenliği Yönetim Sistemi",
    "sustainability.iso45001Desc":
      "Çalışanların sağlık ve güvenliğini korumak için iş sağlığı ve güvenliği yönetim sistemi.",
    "sustainability.environmental": "Çevresel Sürdürülebilirlik",
    "sustainability.environmentalDesc":
      "Euro-6 standartlarında araçlarımız ve çevre dostu uygulamalarımızla karbon ayak izimizi minimize ediyoruz.",
    "sustainability.social": "Sosyal Sorumluluk",
    "sustainability.socialDesc":
      "Topluma katkı sağlamak ve sosyal sorumluluk projelerimizle değer yaratıyoruz.",
    "sustainability.economic": "Ekonomik Sürdürülebilirlik",
    "sustainability.economicDesc":
      "Uzun vadeli ekonomik büyüme ve istikrar için sürdürülebilir iş modelleri geliştiriyoruz.",

    // Air Transport Page
    "air.hero.title": "Hava Yolu Taşımacılığı",
    "air.hero.subtitle":
      "Hava yolu taşımacılığı hizmetimizle değerli yüklerinizi en hızlı ve güvenli şekilde dünya çapında hedef noktaya ulaştırıyoruz. Modern hava yolu ağımız ve uzman ekibimizle size en kaliteli hizmeti sunuyoruz.",
    "air.services.title": "Hizmetlerimiz",
    "air.services.subtitle":
      "Hava yolu taşımacılığında sunduğumuz kapsamlı hizmet yelpazesi",
    "air.service1.title": "Kargo Taşımacılığı",
    "air.service1.desc":
      "Hızlı ve güvenli hava yolu kargo taşımacılığı hizmeti ile değerli yüklerinizi en kısa sürede hedef noktaya ulaştırıyoruz.",
    "air.service1.feature1": "Express kargo hizmeti",
    "air.service1.feature2": "Güvenli paketleme",
    "air.service1.feature3": "Gerçek zamanlı takip",
    "air.service1.feature4": "All Risk sigorta güvencesi",
    "air.service2.title": "Doküman Taşımacılığı",
    "air.service2.desc":
      "Önemli belgeler ve dokümanlar için özel hava yolu taşımacılığı hizmeti sunuyoruz.",
    "air.service2.feature1": "Hızlı doküman teslimatı",
    "air.service2.feature2": "Güvenli taşıma",
    "air.service2.feature3": "Özel paketleme",
    "air.service2.feature4": "24 saat teslimat",
    "air.service3.title": "Değerli Yük Taşımacılığı",
    "air.service3.desc":
      "Altın, mücevher, elektronik eşya gibi değerli yükler için özel güvenlik önlemleri ile hava yolu taşımacılığı.",
    "air.service3.feature1": "Özel güvenlik önlemleri",
    "air.service3.feature2": "Sigortalı taşıma",
    "air.service3.feature3": "Uzman personel",
    "air.service3.feature4": "Gizli taşıma",
    "air.service4.title": "Acil Taşımacılık",
    "air.service4.desc":
      "Acil durumlar için 7/24 hizmet veren hava yolu taşımacılığı çözümleri sunuyoruz.",
    "air.service4.feature1": "7/24 acil hizmet",
    "air.service4.feature2": "Hızlı müdahale",
    "air.service4.feature3": "Özel charter uçak",
    "air.service4.feature4": "Anında teslimat",
    "air.advantages.title": "Avantajlarımız",
    "air.advantages.subtitle":
      "Hava yolu taşımacılığında bizi farklı kılan özellikler",
    "air.advantage1.title": "Hızlı Teslimat",
    "air.advantage1.desc": "Hava yolu ile en hızlı teslimat süreleri",
    "air.advantage2.title": "Güvenli Taşıma",
    "air.advantage2.desc": "En yüksek güvenlik standartları ile taşıma",
    "air.advantage3.title": "Global Ağ",
    "air.advantage3.desc": "Dünya çapında geniş hava yolu ağı",
    "air.advantage4.title": "7/24 Takip",
    "air.advantage4.desc": "Kesintisiz kargo takip sistemi",
    "air.routes.title": "Güzergahlarımız",
    "air.routes.subtitle":
      "Düzenli olarak hizmet verdiğimiz hava yolu güzergahları",
    "air.route1.title": "Avrupa Hattı",
    "air.route1.airports": "İstanbul → Frankfurt, Amsterdam, Paris, Londra",
    "air.route1.duration": "2-4 saat",
    "air.route1.frequency": "Günlük",
    "air.route2.title": "Amerika Hattı",
    "air.route2.airports": "İstanbul → New York, Los Angeles, Miami",
    "air.route2.duration": "10-12 saat",
    "air.route2.frequency": "Günlük",
    "air.route3.title": "Asya Hattı",
    "air.route3.airports": "İstanbul → Dubai, Singapur, Tokyo, Hong Kong",
    "air.route3.duration": "6-10 saat",
    "air.route3.frequency": "Günlük",
    "air.route4.title": "Afrika Hattı",
    "air.route4.airports": "İstanbul → Kahire, Lagos, Johannesburg",
    "air.route4.duration": "4-8 saat",
    "air.route4.frequency": "Haftalık",
    "air.process.title": "Çalışma Sürecimiz",
    "air.process.subtitle":
      "Hava yolu taşımacılığında izlediğimiz adım adım süreç",
    "air.process1.title": "Talep Alımı",
    "air.process1.desc":
      "Hava yolu taşıma talebinizi detaylı olarak değerlendiriyoruz.",
    "air.process2.title": "Uçuş Planlaması",
    "air.process2.desc": "En uygun uçuş ve rota planlaması yapıyoruz.",
    "air.process3.title": "Paketleme",
    "air.process3.desc":
      "Yükünüzü hava yolu standartlarına uygun paketliyoruz.",
    "air.process4.title": "Gümrük İşlemleri",
    "air.process4.desc": "Çıkış ve giriş gümrük işlemlerini organize ediyoruz.",
    "air.process5.title": "Hava Yolu Taşıma",
    "air.process5.desc": "Güvenli hava yolu taşıma sürecini başlatıyoruz.",
    "air.process6.title": "Teslimat",
    "air.process6.desc": "Hedef havaalanına güvenli teslimat yapıyoruz.",
    "air.fleet.title": "Hava Yolu Ağımız",
    "air.fleet.subtitle":
      "Modern ve güvenilir hava yolu partnerlerimizle her türlü hava yolu taşıma ihtiyacınızı karşılıyoruz",
    "air.aircraft1.name": "Kargo Uçağı",
    "air.aircraft1.count": "25+",
    "air.aircraft2.name": "Yolcu Uçağı",
    "air.aircraft2.count": "50+",
    "air.aircraft3.name": "Özel Charter",
    "air.aircraft3.count": "15+",
    "air.aircraft.count.desc": "Uçak Sayısı",
    "air.cta.title": "Hemen Başlayın",
    "air.cta.subtitle":
      "Hava yolu taşımacılığı ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",
    "air.cta.quote": "Teklif Al",
    "air.cta.track": "Kargo Takip",
    "air.features.title": "Özellikler:",
    "air.duration": "Süre:",
    "air.frequency": "Sıklık:",
    "air.detailed.info": "Detaylı Bilgi",

    // Warehouse Services Page
    "warehouse.hero.title": "Depo Hizmetleri",
    "warehouse.hero.subtitle":
      "100.000 m² depolama alanımız, modern makine parkımız ve uzman ekibimizle konteyner depolama, elleçleme, tamir bakım ve bağlama çözme hizmetlerinde güvenilir çözümler sunuyoruz.",
    "warehouse.services.title": "Hizmetlerimiz",
    "warehouse.services.subtitle":
      "Depo hizmetlerinde sunduğumuz kapsamlı hizmet yelpazesi",
    "warehouse.service1.title": "Konteyner Depolama",
    "warehouse.service1.desc":
      "Mersin bölgesinde 2 adet açık serbest depo, İskenderun'da 1 adet açık serbest depo olmak üzere toplam 100.000 m² açık depolama sahamız ile 3 dolu istif makinamız, 3 boş istif makinamız ve diğer makine parkurumuzla siz değerli müşterilerimize hizmet vermekteyiz.",
    "warehouse.service1.feature1": "100.000 m² açık depolama sahası",
    "warehouse.service1.feature2": "3 dolu istif makinesi",
    "warehouse.service1.feature3": "3 boş istif makinesi",
    "warehouse.service1.feature4": "Modern makine parkı",
    "warehouse.service1.feature5": "ERP sistem entegrasyonu",
    "warehouse.service2.title": "Elleçleme Hizmetleri",
    "warehouse.service2.desc":
      "Tüm emtialarınızı depolarımızda yükleme veya boşaltma faaliyetlerini kendi ekibimiz ve iş makinelerimizle en kaliteli şekilde yapmaktayız.",
    "warehouse.service2.feature1": "Profesyonel yükleme-boşaltma",
    "warehouse.service2.feature2": "Uzman ekip ve iş makineleri",
    "warehouse.service2.feature3": "Kaliteli hizmet garantisi",
    "warehouse.service2.feature4": "Tüm emtia türleri",
    "warehouse.service2.feature5": "Güvenli operasyon",
    "warehouse.service3.title": "Konteyner Tamir Bakım Hizmetleri",
    "warehouse.service3.desc":
      "Konteyner depolarımızda gelen talepler doğrultusunda hasarlı olan konteynerlerinizin tüm tamir bakım işlemlerini profesyonel kadromuzla gerçekleştirmekteyiz.",
    "warehouse.service3.feature1": "Profesyonel tamir ekibi",
    "warehouse.service3.feature2": "Tüm konteyner türleri",
    "warehouse.service3.feature3": "Hızlı müdahale",
    "warehouse.service3.feature4": "Kaliteli malzeme kullanımı",
    "warehouse.service3.feature5": "Bakım hizmetleri",
    "warehouse.service4.title": "Bağlama Çözme Hizmetleri",
    "warehouse.service4.desc":
      "Firmamız bünyesinde bulunan deneyimli saha ekiplerimizce uzun yıllardır konteyner lashing, araç üstü lashing ve demir yolu lashing hizmetlerini vermekteyiz.",
    "warehouse.service4.feature1": "Konteyner lashing",
    "warehouse.service4.feature2": "Araç üstü lashing",
    "warehouse.service4.feature3": "Demir yolu lashing",
    "warehouse.service4.feature4": "Deneyimli saha ekibi",
    "warehouse.service4.feature5": "Güvenli bağlama çözümleri",
    "warehouse.advantages.title": "Avantajlarımız",
    "warehouse.advantages.subtitle":
      "Depo hizmetlerinde bizi farklı kılan özellikler",
    "warehouse.advantage1.title": "100.000 m² Depolama",
    "warehouse.advantage1.desc":
      "Geniş depolama alanımızla her türlü ihtiyacınızı karşılıyoruz",
    "warehouse.advantage2.title": "Modern Makine Parkı",
    "warehouse.advantage2.desc":
      "En son teknoloji iş makineleri ile hızlı ve güvenli hizmet",
    "warehouse.advantage3.title": "ERP Entegrasyonu",
    "warehouse.advantage3.desc":
      "Müşteri sistemlerinizle direkt entegrasyon imkanı",
    "warehouse.advantage4.title": "Uzman Ekip",
    "warehouse.advantage4.desc": "Deneyimli ve profesyonel çalışan kadromuz",
    "warehouse.locations.title": "Depo Lokasyonlarımız",
    "warehouse.locations.subtitle":
      "Stratejik konumlarda bulunan depo tesislerimiz",
    "warehouse.process.title": "Çalışma Sürecimiz",
    "warehouse.process.subtitle":
      "Depo hizmetlerinde izlediğimiz adım adım süreç",
    "warehouse.process1.title": "Talep Alımı",
    "warehouse.process1.desc":
      "Depo hizmeti talebinizi detaylı olarak değerlendiriyoruz.",
    "warehouse.process2.title": "Alan Planlaması",
    "warehouse.process2.desc": "En uygun depolama alanını planlıyoruz.",
    "warehouse.process3.title": "Yükleme/Boşaltma",
    "warehouse.process3.desc":
      "Profesyonel ekibimizle güvenli operasyon gerçekleştiriyoruz.",
    "warehouse.process4.title": "Depolama",
    "warehouse.process4.desc":
      "Güvenli ve organize depolama hizmeti sunuyoruz.",
    "warehouse.process5.title": "Takip & Raporlama",
    "warehouse.process5.desc": "ERP entegrasyonu ile sürekli takip sağlıyoruz.",
    "warehouse.process6.title": "Teslimat",
    "warehouse.process6.desc": "İhtiyaç halinde hızlı teslimat yapıyoruz.",
    "warehouse.cta.title": "Hemen Başlayın",
    "warehouse.cta.subtitle":
      "Depo hizmetleri ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",
    "warehouse.cta.quote": "Teklif Al",
    "warehouse.cta.track": "Depo Takip",
    "warehouse.features.title": "Özellikler:",
    "warehouse.partners.title": "Partner Firmalar:",
    "warehouse.depot.count": "Depo Sayısı:",
    "warehouse.depot.type": "Tip:",
    "warehouse.depot.area": "Alan:",
    "warehouse.detailed.info": "Detaylı Bilgi",

    // Human Resources Page
    "hr.title": "İnsan Kaynakları",
    "hr.subtitle":
      "Ufuk Lojistik ailesine katılın ve kariyerinizde yeni ufuklara açılın",
    "hr.sendCV": "CV Gönder",
    "hr.viewPositions": "Açık Pozisyonları Görüntüle",
    "hr.contactUs": "İletişime Geç",
    "hr.whyUs": "Neden Ufuk Lojistik?",
    "hr.whyUsDesc":
      "Lojistik sektöründe öncü bir şirket olarak, çalışanlarımıza en iyi çalışma ortamını sunuyoruz.",
    "hr.strongTeam": "Güçlü Ekip",
    "hr.strongTeamDesc": "Deneyimli ve uzman kadromuzla birlikte çalışın",
    "hr.fastGrowth": "Hızlı Büyüme",
    "hr.fastGrowthDesc": "Sürekli gelişen şirketimizde kariyerinizi ilerletin",
    "hr.training": "Eğitim & Gelişim",
    "hr.trainingDesc": "Sürekli öğrenme ve gelişim fırsatları",
    "hr.workLifeBalance": "İş- Yaşam Dengesi",
    "hr.workLifeBalanceDesc": "Esnek çalışma saatleri ve sosyal haklar",
    "hr.openPositions": "Açık Pozisyonlar",
    "hr.openPositionsDesc":
      "Şu anda açık olan pozisyonlarımızı inceleyin ve kariyerinizde yeni bir adım atın.",
    "hr.allDepartments": "Tüm Departmanlar",
    "hr.allLocations": "Tüm Lokasyonlar",
    "hr.viewDetails": "Detayları Gör",
    "hr.apply": "Başvur",
    "hr.urgent": "Acil",
    "hr.experience": "Deneyim",
    "hr.salary": "Maaş",
    "hr.noPositions": "Aradığınız kriterlere uygun pozisyon bulunamadı",
    "hr.noPositionsDesc":
      "Filtreleri değiştirerek tekrar deneyin veya CV'nizi göndererek gelecekteki fırsatlar için kayıt olun.",
    "hr.applicationProcess": "Başvuru Süreci",
    "hr.applicationProcessDesc":
      "Başvuru sürecimiz basit ve şeffaftır. İşte adım adım süreç:",
    "hr.step1": "Başvuru",
    "hr.step1Desc": "CV'nizi ve ön yazınızı gönderin",
    "hr.step2": "Değerlendirme",
    "hr.step2Desc": "Başvurunuzu değerlendiriyoruz",
    "hr.step3": "Mülakat",
    "hr.step3Desc": "Sizinle tanışmak için görüşme yapıyoruz",
    "hr.step4": "Karar",
    "hr.step4Desc": "Sonuç hakkında bilgilendiriliyorsunuz",
    "hr.applyNow": "Hemen Başvurun!",
    "hr.applyNowDesc":
      "Size uygun pozisyon bulamadınız mı? CV'nizi gönderin, uygun pozisyon açıldığında sizinle iletişime geçelim.",
    "hr.cvForm.title": "CV Gönder",
    "hr.cvForm.subtitle":
      "CV'nizi ve ön yazınızı gönderin, size uygun pozisyon açıldığında sizinle iletişime geçelim.",
    "hr.cvForm.fullName": "Ad Soyad",
    "hr.cvForm.email": "E-posta",
    "hr.cvForm.phone": "Telefon",
    "hr.cvForm.position": "İlgilendiğiniz Pozisyon",
    "hr.cvForm.experience": "Deneyim Seviyesi",
    "hr.cvForm.location": "Tercih Edilen Lokasyon",
    "hr.cvForm.coverLetter": "Ön Yazı",
    "hr.cvForm.cvFile": "CV Dosyası",
    "hr.cvForm.submit": "CV Gönder",
    "hr.cvForm.submitting": "Gönderiliyor...",
    "hr.cvForm.success": "CV'niz başarıyla gönderildi!",
    "hr.cvForm.successDesc": "En kısa sürede size dönüş yapacağız.",
    "hr.cvForm.close": "Kapat",
    "hr.contactForm.title": "İletişim Formu",
    "hr.contactForm.subtitle": "Sorularınız için bizimle iletişime geçin",
    "hr.contactForm.name": "Ad Soyad",
    "hr.contactForm.email": "E-posta",
    "hr.contactForm.phone": "Telefon",
    "hr.contactForm.subject": "Konu",
    "hr.contactForm.message": "Mesaj",
    "hr.contactForm.submit": "Mesaj Gönder",
    "hr.contactForm.submitting": "Gönderiliyor...",
    "hr.contactForm.success": "Mesajınız başarıyla gönderildi!",
    "hr.contactForm.successDesc": "En kısa sürede size dönüş yapacağız.",

    // Container Sales Page
    "container.hero.title": "Konteyner Satış",
    "container.hero.subtitle":
      "Kaliteli ve uygun fiyatlı konteynerlerimizle işinizi büyütün. Yeni ve ikinci el konteyner seçenekleriyle her ihtiyacınıza uygun çözümler sunuyoruz.",
    "container.types.title": "Konteyner Türleri",
    "container.types.subtitle":
      "Farklı ihtiyaçlarınız için çeşitli konteyner türleri",
    "container.type1.title": "Dry Container",
    "container.type1.desc":
      "Genel kargo taşımacılığı için ideal olan standart konteynerler. Kuru yükler için tasarlanmış, hava geçirmez yapıya sahiptir.",
    "container.type1.feature1": "Hava geçirmez yapı",
    "container.type1.feature2": "Genel kargo için ideal",
    "container.type1.feature3": "20' ve 40' boyutları",
    "container.type1.feature4": "Yeni ve ikinci el seçenekleri",
    "container.type1.price": "Fiyat İste",
    "container.type1.condition": "Yeni/İkinci El",
    "container.type2.title": "Reefer Container",
    "container.type2.desc":
      "Soğutmalı konteynerler. Gıda, ilaç ve diğer sıcaklık kontrollü ürünler için özel olarak tasarlanmıştır.",
    "container.type2.feature1": "Sıcaklık kontrolü",
    "container.type2.feature2": "Gıda ve ilaç için ideal",
    "container.type2.feature3": "Enerji verimli sistem",
    "container.type2.feature4": "Uzun mesafe taşımacılık",
    "container.type2.price": "Fiyat İste",
    "container.type2.condition": "Yeni/İkinci El",
    "container.type3.title": "Flat Rack Container",
    "container.type3.desc":
      "Ağır ve büyük yükler için tasarlanmış açık üst konteynerler. Makine, araç ve proje yükleri için idealdir.",
    "container.type3.feature1": "Açık üst yapı",
    "container.type3.feature2": "Ağır yükler için ideal",
    "container.type3.feature3": "Yan duvarlar çıkarılabilir",
    "container.type3.feature4": "Proje yükleri için uygun",
    "container.type3.price": "Fiyat İste",
    "container.type3.condition": "Yeni/İkinci El",
    "container.type4.title": "Tank Container",
    "container.type4.desc":
      "Sıvı ve gaz taşımacılığı için özel olarak tasarlanmış tank konteynerler. Kimyasal ve gıda endüstrisi için güvenli çözümler.",
    "container.type4.feature1": "Sıvı ve gaz taşıma",
    "container.type4.feature2": "Güvenli tank sistemi",
    "container.type4.feature3": "Kimyasal dayanıklı",
    "container.type4.feature4": "Uluslararası standartlar",
    "container.type4.price": "Fiyat İste",
    "container.type4.condition": "Yeni/İkinci El",
    "container.advantages.title": "Avantajlarımız",
    "container.advantages.subtitle":
      "Konteyner satışında bizi farklı kılan özellikler",
    "container.advantage1.title": "Uygun Fiyatlar",
    "container.advantage1.desc": "Piyasa koşullarına uygun rekabetçi fiyatlar",
    "container.advantage2.title": "Kalite Garantisi",
    "container.advantage2.desc":
      "Tüm konteynerlerimiz kalite kontrolünden geçer",
    "container.advantage3.title": "Hızlı Teslimat",
    "container.advantage3.desc": "Geniş lojistik ağımızla hızlı teslimat",
    "container.advantage4.title": "Teknik Destek",
    "container.advantage4.desc":
      "Satış sonrası teknik destek ve bakım hizmetleri",
    "container.sizes.title": "Konteyner Boyutları",
    "container.sizes.subtitle":
      "Farklı ihtiyaçlarınız için çeşitli boyut seçenekleri",
    "container.dimensions": "Boyutlar",
    "container.volume": "Hacim",
    "container.weight": "Ağırlık",
    "container.process.title": "Satış Süreci",
    "container.process.subtitle":
      "Konteyner satışında izlediğimiz adım adım süreç",
    "container.process1.title": "İletişim",
    "container.process1.desc": "İhtiyaçlarınızı dinliyoruz",
    "container.process2.title": "Seçim",
    "container.process2.desc": "Size uygun konteyneri belirliyoruz",
    "container.process3.title": "Teklif",
    "container.process3.desc": "Detaylı fiyat teklifi hazırlıyoruz",
    "container.process4.title": "Teslimat",
    "container.process4.desc": "Konteyneri güvenle teslim ediyoruz",
    "container.process5.title": "Destek",
    "container.process5.desc": "Satış sonrası destek sağlıyoruz",
    "container.cta.title": "Hemen Başlayın",
    "container.cta.subtitle":
      "Konteyner ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",
    "container.cta.quote": "Fiyat Al",
    "container.cta.catalog": "Katalog",
    "container.features.title": "Özellikler:",
    "container.price": "Fiyat",
    "container.condition": "Durum",
    "container.detailed.info": "Detaylı Bilgi",

    // Press Room Page
    "press.hero.title": "BASIN ODASI",
    "press.hero.subtitle":
      "Medyada yer alan haberlerimiz, katıldığımız etkinlikler ve şirketimizin kamuoyundaki yansımaları",
    "press.hero.mediaNews": "Medya Haberi",
    "press.hero.events": "Etkinlik",
    "press.hero.tvInterviews": "TV Röportajı",
    "press.sections.title": "Basın Odası İçerikleri",
    "press.sections.subtitle":
      "Medyada yer alan haberlerimizi ve katıldığımız etkinlikleri keşfedin",
    "press.news.title": "BASINDA BİZ",
    "press.news.description":
      "Medyada yer alan haberlerimiz, başarılarımız ve sektördeki gelişmelerdeki rolümüz",
    "press.news.stats": "150+ Haber",
    "press.news.features.media": "Medya haberleri",
    "press.news.features.tv": "TV röportajları",
    "press.news.features.radio": "Radyo programları",
    "press.news.features.digital": "Dijital içerikler",
    "press.events.title": "ETKİNLİKLER",
    "press.events.description":
      "Şirketimizin katıldığı etkinlikler, konferanslar ve sosyal sorumluluk projeleri",
    "press.events.stats": "50+ Etkinlik",
    "press.events.features.conferences": "Konferanslar",
    "press.events.features.seminars": "Seminarlar",
    "press.events.features.social": "Sosyal etkinlikler",
    "press.events.features.awards": "Ödül törenleri",
    "press.explore": "Keşfet",
    "press.highlights.title": "Son Güncellemeler",
    "press.highlights.subtitle":
      "En son haberlerimiz ve etkinliklerimizden öne çıkanlar",
    "press.highlights.news": "Haber",
    "press.highlights.event": "Etkinlik",
    "press.highlights.detail": "Detay",
    "press.contact.title": "Basın İletişimi",
    "press.contact.subtitle":
      "Basın açıklamaları, röportaj talepleri ve medya iletişimi için bizimle iletişime geçin",
    "press.contact.contact": "İletişime Geç",
    "press.contact.about": "Hakkımızda",

    // Press News Page
    "pressNews.hero.title": "BASINDA BİZ",
    "pressNews.hero.subtitle":
      "Medyada yer alan haberlerimiz, başarılarımız ve sektördeki gelişmelerdeki rolümüz",
    "pressNews.categories.all": "Tümü",
    "pressNews.categories.corporate": "Kurumsal",
    "pressNews.categories.politics": "Politika",
    "pressNews.categories.international": "Uluslararası",
    "pressNews.categories.regional": "Bölgesel",
    "pressNews.categories.technology": "Teknoloji",
    "pressNews.categories.sustainability": "Sürdürülebilirlik",
    "pressNews.grid.title": "Medyada Yer Alan Haberlerimiz",
    "pressNews.grid.subtitle":
      "Lojistik sektöründeki gelişmeler, başarılarımız ve projelerimiz hakkında medyada çıkan haberler",
    "pressNews.readMore": "Devamını Oku",
    "pressNews.loadMore": "Daha Fazla Haber Yükle",
    "pressNews.stats.title": "Medya İstatistiklerimiz",
    "pressNews.stats.mediaNews": "Medya Haberi",
    "pressNews.stats.tvInterviews": "TV Röportajı",
    "pressNews.stats.radioPrograms": "Radyo Programı",
    "pressNews.stats.digitalContent": "Dijital İçerik",
    "pressNews.cta.title": "Basın İletişimi",
    "pressNews.cta.subtitle":
      "Basın açıklamaları, röportaj talepleri ve medya iletişimi için bizimle iletişime geçin",
    "pressNews.cta.contact": "İletişime Geç",
    "pressNews.cta.about": "Hakkımızda",

    // Press News Detail Page
    "pressNewsDetail.notFound.title": "Haber Bulunamadı",
    "pressNewsDetail.notFound.message":
      "Aradığınız haber bulunamadı veya kaldırılmış olabilir.",
    "pressNewsDetail.notFound.back": "Haberlere Dön",
    "pressNewsDetail.back": "Haberlere Dön",
    "pressNewsDetail.author": "Yazar:",
    "pressNewsDetail.tags": "Etiketler",
    "pressNewsDetail.share": "Paylaş",
    "pressNewsDetail.relatedNews": "İlgili Haberler",
    "pressNewsDetail.pressContact": "Basın İletişimi",
    "pressNewsDetail.pressContactDesc":
      "Basın açıklamaları ve röportaj talepleri için bizimle iletişime geçin.",
    "pressNewsDetail.pressContactAction": "İletişime Geç",
    "pressNewsDetail.backToAll": "Tüm Haberlere Dön",
    "pressNewsDetail.likeQuestion": "Bu haberi beğendiniz mi?",
    "pressNewsDetail.like": "👍 Beğen",
    "pressNewsDetail.dislike": "👎 Beğenme",

    // Events Page
    "events.hero.title": "ETKİNLİKLER",
    "events.hero.subtitle":
      "Şirketimizin katıldığı etkinlikler, konferanslar ve sosyal sorumluluk projeleri",
    "events.categories.all": "Tümü",
    "events.categories.corporate": "Kurumsal",
    "events.categories.social": "Sosyal Sorumluluk",
    "events.categories.education": "Eğitim",
    "events.categories.conference": "Konferans",
    "events.types.all": "Tümü",
    "events.types.award": "Ödül Töreni",
    "events.types.corporate": "Şirket Etkinliği",
    "events.types.celebration": "Kutlama",
    "events.types.exhibition": "Sergi",
    "events.types.professional": "Profesyonel",
    "events.types.seminar": "Seminer",
    "events.grid.title": "Etkinliklerimiz",
    "events.grid.subtitle":
      "Katıldığımız etkinlikler, düzenlediğimiz organizasyonlar ve sosyal sorumluluk projelerimiz",
    "events.viewDetails": "Detayları Gör",
    "events.loadMore": "Daha Fazla Etkinlik Yükle",
    "events.stats.title": "Etkinlik İstatistiklerimiz",
    "events.stats.events": "Etkinlik",
    "events.stats.participants": "Katılımcı",
    "events.stats.socialProjects": "Sosyal Sorumluluk Projesi",
    "events.stats.conferences": "Konferans",
    "events.cta.title": "Etkinlik İşbirliği",
    "events.cta.subtitle":
      "Etkinlik işbirliği, sponsorluk talepleri ve organizasyon desteği için bizimle iletişime geçin",
    "events.cta.cooperation": "🤝 İşbirliği Teklifi",
    "events.cta.pressRoom": "📰 Basın Odası",

    // Event Detail Page
    "eventDetail.notFound.title": "Etkinlik Bulunamadı",
    "eventDetail.notFound.message":
      "Aradığınız etkinlik bulunamadı veya kaldırılmış olabilir.",
    "eventDetail.notFound.back": "Etkinliklere Dön",
    "eventDetail.back": "Etkinliklere Dön",
    "eventDetail.eventType": "Etkinlik Türü:",
    "eventDetail.tags": "Etiketler",
    "eventDetail.share": "Paylaş",
    "eventDetail.eventInfo": "Etkinlik Bilgileri",
    "eventDetail.date": "Tarih",
    "eventDetail.location": "Konum",
    "eventDetail.participant": "Katılımcı",
    "eventDetail.duration": "Süre",
    "eventDetail.organizer": "Organizatör",
    "eventDetail.eventCooperation": "Etkinlik İşbirliği",
    "eventDetail.eventCooperationDesc":
      "Etkinlik işbirliği ve sponsorluk talepleri için bizimle iletişime geçin.",
    "eventDetail.eventCooperationAction": "İletişime Geç",
    "eventDetail.backToAll": "Tüm Etkinliklere Dön",
    "eventDetail.likeQuestion": "Bu etkinliği beğendiniz mi?",
    "eventDetail.like": "👍 Beğen",
    "eventDetail.dislike": "👎 Beğenme",

    // Services Page
    "services.title": "HİZMETLERİMİZ",
    "services.subtitle":
      "40 yıllık tecrübemizle kara, deniz ve hava yolu taşımacılığında kapsamlı lojistik çözümler sunuyoruz. Modern filomuz, güçlü partner ağımız ve uzman ekibimizle güvenilir hizmet garantisi veriyoruz.",
    "services.getQuote": "Teklif Al",
    "services.trackCargo": "Kargo Takip",
    "services.details": "Detaylı Bilgi",
    "services.scope": "Hizmet Kapsamı",
    "services.range.title": "HİZMET YELPAZEMİZ",
    "services.range.subtitle":
      "Sunduğumuz kapsamlı lojistik hizmetleri ve her birinin detayları",
    "services.road.title": "KARAYOLU TAŞIMACILIĞI",
    "services.road.description":
      "40 yıllık tecrübemiz, tedarikçi ağımız, yaygın ve esnek kullanıma uygun araç filomuz lojistik merkezlerde bulunan ofislerimiz ile spot piyasada gidiş dönüş aynı araçlar ile gerçekleştirdiğimiz organizasyonlarla All Risk Sigortalı, eksiksiz, hasarsız ekonomik teslimatları sağlıyoruz.",
    "services.road.features.1": "FTL Taşımacılığı",
    "services.road.features.2": "Konteyner Kara Taşımacılığı",
    "services.road.features.3": "Proje ve Ağır Yük Taşımacılığı",
    "services.road.features.4": "Uluslararası Karayolu Taşımacılığı",
    "services.sea.title": "DENİZ YOLU TAŞIMACILIĞI",
    "services.sea.description":
      "Deniz yolu taşımacılığında güçlü partner ağımız ve modern gemi filomuzla uluslararası ticaretinizin güvenilir ortağıyız. Konteyner, dökme yük ve proje kargo taşımacılığında uzman hizmet sunuyoruz.",
    "services.sea.features.1": "Konteyner Taşımacılığı",
    "services.sea.features.2": "Dökme Yük Taşımacılığı",
    "services.sea.features.3": "Proje Kargo Taşımacılığı",
    "services.sea.features.4": "Uluslararası Deniz Taşımacılığı",
    "services.air.title": "HAVA YOLU TAŞIMACILIĞI",
    "services.air.description":
      "Hava yolu taşımacılığında hızlı ve güvenilir çözümler sunuyoruz. Acil kargo, değerli eşya ve zaman kritik taşımalarınız için 7/24 hizmet veriyoruz.",
    "services.air.features.1": "Acil Kargo Taşımacılığı",
    "services.air.features.2": "Değerli Eşya Taşımacılığı",
    "services.air.features.3": "Doküman Taşımacılığı",
    "services.air.features.4": "Charter Uçak Hizmetleri",
    "services.warehouse.title": "DEPO HİZMETLERİ",
    "services.warehouse.description":
      "Modern depo tesislerimizde konteyner depolama, tamir, lashing ve elleçleme hizmetleri sunuyoruz. Güvenli ve kontrollü ortamda kargo yönetimi sağlıyoruz.",
    "services.warehouse.features.1": "Konteyner Depolama",
    "services.warehouse.features.2": "Konteyner Tamiri",
    "services.warehouse.features.3": "Lashing Hizmetleri",
    "services.warehouse.features.4": "Elleçleme Hizmetleri",
    "services.container.title": "KONTEYNER SATIŞI",
    "services.container.description":
      "Yeni ve ikinci el konteyner satışında güvenilir partneriniz. Dry, reefer, tank ve flat-rack konteyner çeşitlerinde uygun fiyatlı çözümler sunuyoruz.",
    "services.container.features.1": "Dry Konteyner",
    "services.container.features.2": "Reefer Konteyner",
    "services.container.features.3": "Tank Konteyner",
    "services.container.features.4": "Flat-Rack Konteyner",
    "services.ship.title": "AÇIK GEMİ BOŞALTMA",
    "services.ship.description":
      "Açık gemi boşaltma hizmetlerimizle dökme yük, konteyner ve proje kargo boşaltma işlemlerinizi profesyonel ekip ve modern ekipmanlarla gerçekleştiriyoruz.",
    "services.ship.features.1": "Dökme Yük Boşaltma",
    "services.ship.features.2": "Konteyner Boşaltma",
    "services.ship.features.3": "Proje Kargo Boşaltma",
    "services.ship.features.4": "Tehlikeli Madde Boşaltma",
    "services.advantages.title": "AVANTAJLARIMIZ",
    "services.advantages.subtitle":
      "Lojistik hizmetlerimizde bizi farklı kılan özellikler",
    "services.advantage1.title": "40+ Yıllık Tecrübe",
    "services.advantage1.description":
      "Sektördeki uzun yıllarımızın getirdiği deneyim ve güvenilirlik",
    "services.advantage2.title": "All Risk Sigorta",
    "services.advantage2.description":
      "Tüm taşımalarımızda kapsamlı sigorta güvencesi",
    "services.advantage3.title": "Geniş Hizmet Ağı",
    "services.advantage3.description":
      "Kara, deniz ve hava yolu ile kapsamlı lojistik çözümler",
    "services.advantage4.title": "7/24 Destek",
    "services.advantage4.description":
      "Kesintisiz müşteri hizmetleri ve takip sistemi",
    "services.stats.vehicles": "Araç Filosu",
    "services.stats.ships": "Gemi Filosu",
    "services.stats.planes": "Uçak Partneri",
    "services.stats.warehouse": "m² Depo Alanı",
    "services.process.title": "ÇALIŞMA SÜRECİMİZ",
    "services.process.subtitle":
      "Hizmet talebinizden teslimatınıza kadar izlediğimiz adımlar",
    "services.process.step1.title": "Talep Değerlendirmesi",
    "services.process.step1.description":
      "Hizmet talebinizi detaylı olarak değerlendiriyoruz",
    "services.process.step2.title": "Fiyat Teklifi",
    "services.process.step2.description":
      "Size en uygun fiyat teklifini hazırlıyoruz",
    "services.process.step3.title": "Planlama",
    "services.process.step3.description":
      "Taşıma planınızı detaylı olarak hazırlıyoruz",
    "services.process.step4.title": "Teslimat",
    "services.process.step4.description":
      "Güvenli ve zamanında teslimat gerçekleştiriyoruz",
    "services.cta.title": "HEMEN BAŞLAYIN",
    "services.cta.subtitle":
      "Lojistik ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",

    // Tracking Page
    "tracking.title": "Kargo Takibi",
    "tracking.subtitle": "Kargonuzun anlık konumunu ve durumunu takip edin",
    "tracking.enterNumber": "Takip Numarası Girin",
    "tracking.enterNumberDesc": "Kargo takip numaranızı aşağıdaki alana girin",
    "tracking.placeholder": "Örn: UF2024-001 veya demo",
    "tracking.search": "🔍 Takip Et",
    "tracking.searching": "Aranıyor...",
    "tracking.demoInfo": "Demo için:",
    "tracking.demoText": '"UF2024-001" veya "demo" yazın',
    "tracking.cargoStatus": "Kargo Durumu",
    "tracking.trackingNumber": "Takip Numarası:",
    "tracking.currentStatus": "Mevcut Durum:",
    "tracking.currentLocation": "Mevcut Konum:",
    "tracking.estimatedDelivery": "Tahmini Teslimat:",
    "tracking.history": "Takip Geçmişi",
    "tracking.historyDesc": "Kargonuzun tüm hareket geçmişi",
    "tracking.realtime": "Gerçek Zamanlı Takip",
    "tracking.realtimeDesc": "Kargonuzun anlık konumunu ve durumunu takip edin",
    "tracking.mobile": "Mobil Uyumlu",
    "tracking.mobileDesc": "Her cihazdan kolayca takip yapabilirsiniz",
    "tracking.notifications": "Bildirimler",
    "tracking.notificationsDesc":
      "Önemli güncellemeler için anında bildirim alın",
    "tracking.error.enterNumber": "Lütfen takip numarası girin",
    "tracking.error.notFound":
      "Takip numarası bulunamadı. Lütfen doğru numarayı girin.",

    // Quote Form Modal
    "quote.title": "🚀 Teklif Talebi",
    "quote.subtitle": "Lojistik ihtiyaçlarınız için detaylı teklif alın",
    "quote.success.title": "✅ Teklif Talebiniz Alındı!",
    "quote.success.message":
      "En kısa sürede size özel teklifimizi hazırlayıp iletişime geçeceğiz.",
    "quote.personalInfo": "👤 Kişisel Bilgiler",
    "quote.fullName": "Ad Soyad *",
    "quote.email": "E-posta *",
    "quote.phone": "Telefon *",
    "quote.company": "Şirket",
    "quote.serviceInfo": "🚛 Hizmet Bilgileri",
    "quote.serviceType": "Hizmet Türü *",
    "quote.selectService": "Hizmet türünü seçin",
    "quote.cargoType": "Kargo Türü *",
    "quote.selectCargo": "Kargo türünü seçin",
    "quote.routeInfo": "🗺️ Rota Bilgileri",
    "quote.origin": "Yükleme Yeri *",
    "quote.originPlaceholder": "Örn: İstanbul, Türkiye",
    "quote.destination": "Teslimat Yeri *",
    "quote.destinationPlaceholder": "Örn: Hamburg, Almanya",
    "quote.cargoDetails": "📦 Kargo Detayları",
    "quote.weight": "Ağırlık (kg)",
    "quote.weightPlaceholder": "Örn: 1000",
    "quote.volume": "Hacim (m³)",
    "quote.volumePlaceholder": "Örn: 5.5",
    "quote.dateInfo": "📅 Tarih Bilgileri",
    "quote.pickupDate": "Yükleme Tarihi",
    "quote.deliveryDate": "Teslimat Tarihi",
    "quote.specialRequirements": "⚙️ Özel Gereksinimler",
    "quote.specialRequirementsLabel": "Özel Gereksinimler",
    "quote.specialRequirementsPlaceholder": "Özel gereksinimlerinizi yazın...",
    "quote.additionalMessage": "Ek Mesaj",
    "quote.additionalMessagePlaceholder": "Ek bilgilerinizi yazın...",
    "quote.cancel": "İptal",
    "quote.submit": "🚀 Teklif Talebi Gönder",
    "quote.submitting": "Gönderiliyor...",
    "quote.serviceTypes.road": "Karayolu Taşımacılığı",
    "quote.serviceTypes.sea": "Deniz Yolu Taşımacılığı",
    "quote.serviceTypes.air": "Hava Yolu Taşımacılığı",
    "quote.serviceTypes.warehouse": "Depo Hizmetleri",
    "quote.serviceTypes.container": "Konteyner Satışı",
    "quote.serviceTypes.ship": "Açık Gemi Boşaltma",
    "quote.cargoTypes.general": "Genel Kargo",
    "quote.cargoTypes.container": "Konteyner",
    "quote.cargoTypes.bulk": "Dökme Yük",
    "quote.cargoTypes.project": "Proje Kargo",
    "quote.cargoTypes.hazardous": "Tehlikeli Madde",
    "quote.cargoTypes.cold": "Soğuk Zincir",
    "quote.cargoTypes.valuable": "Değerli Eşya",
    "quote.cargoTypes.other": "Diğer",

    // Road Transport Page
    "road.title": "KARAYOLU TAŞIMACILIĞI",
    "road.subtitle":
      "Filomuzda bulunan araçlarımızın yanı sıra, firmamız bünyesinde sözleşmeli olarak çalışan tedarikçi altyapımızla yurt içi ve yurt dışı taşıma hizmetlerinde müşterilerimizin ihtiyaçlarına göre tüm taşıma modellerini en kaliteli şekilde sağlıyoruz.",
    "road.getQuote": "Teklif Al",
    "road.trackCargo": "Kargo Takip",
    "road.services.title": "HİZMETLERİMİZ",
    "road.services.subtitle":
      "Karayolu taşımacılığında sunduğumuz kapsamlı hizmet yelpazesi",
    "road.services.ftl.title": "FTL TAŞIMACILIĞI",
    "road.services.ftl.description":
      "40 yıllık tecrübemiz, tedarikçi ağımız, yaygın ve esnek kullanıma uygun araç filomuz lojistik merkezlerde bulunan ofislerimiz ile spot piyasada gidiş dönüş aynı araçlar ile gerçekleştirdiğimiz organizasyonlarla All Risk Sigortalı, eksiksiz, hasarsız ekonomik teslimatları sağlıyoruz.",
    "road.services.ftl.features.1": "All Risk Sigortalı teslimatlar",
    "road.services.ftl.features.2": "Günlük üretim programına göre planlama",
    "road.services.ftl.features.3": "Türkiye genelinde sefer organizasyonu",
    "road.services.ftl.features.4": "Eksiksiz ve hasarsız teslimat",
    "road.services.container.title": "KONTEYNER KARA TAŞIMACILIĞI",
    "road.services.container.description":
      "Yurtiçi konteyner taşımacılığı servisimizle filomuza ait araçlarla ihracat ve ithalat konteyner taşımalarınızı All Risk Sigorta güvencesiyle hızlı ve güvenilir bir şekilde taşıyoruz.",
    "road.services.container.features.1":
      "İhracat ve ithalat konteyner taşımaları",
    "road.services.container.features.2": "All Risk Sigorta güvencesi",
    "road.services.container.features.3": "Hızlı ve güvenilir teslimat",
    "road.services.container.features.4": "Filomuza ait özel araçlar",
    "road.services.heavy.title": "PROJE VE AĞIR YÜK TAŞIMACILIĞI",
    "road.services.heavy.description":
      "Ağır Nakliye ve Geniş Taşımacılık hizmetimizle standartlara göre taşınmasında zorluk çıkan yüklerin profesyonel bir şekilde taşıyabilmesine ve istenilen adrese ulaştırılabilmesine olanak sağlıyoruz.",
    "road.services.heavy.features.1": "Ağır ve geniş yük taşımacılığı",
    "road.services.heavy.features.2": "Profesyonel taşıma çözümleri",
    "road.services.heavy.features.3": "Güçlü finansal yapı",
    "road.services.heavy.features.4": "Uzman partner ağı",
    "road.services.international.title": "ULUSLARARASI KARAYOLU TAŞIMACILIK",
    "road.services.international.description":
      "Uluslararası taşımacılık hizmetimizle güçlü finansal yapısı ve işlerinin uzmanı partnerlerimizle lojistik faaliyetlerimizi sürdürmekteyiz. Yoğun taşımalarımız sayesinde rekabetçi navlunlar verebilmekteyiz.",
    "road.services.international.features.1": "Uluslararası taşımacılık",
    "road.services.international.features.2": "Güçlü finansal yapı",
    "road.services.international.features.3": "Uzman partner ağı",
    "road.services.international.features.4": "Rekabetçi navlun fiyatları",
    "road.services.features": "Özellikler:",
    "road.services.details": "Detaylı Bilgi",
    "road.insurance.title": "ALL RİSK SİGORTA GÜVENCESİ",
    "road.insurance.description":
      "Herhangi bir yükün, onu taşımaya uygun karayolu vasıtalarıyla bir yerden bir yere taşınması esnasında uğrayabileceği her türlü hasar ve kayıpları (Hırsızlık, yanma, ıslanma, vb.) poliçede belirlenmiş Nakliyat Sigortası Genel Şartlar ve Özel Şartlar kapsamında güvence altına alan sigorta türüdür.",
    "road.insurance.features.1.title": "Kapsamlı Güvence",
    "road.insurance.features.1.desc": "Tüm risklere karşı koruma",
    "road.insurance.features.2.title": "Hızlı Tazminat",
    "road.insurance.features.2.desc": "Hasar durumunda hızlı çözüm",
    "road.insurance.features.3.title": "Uzman Ekip",
    "road.insurance.features.3.desc": "Sigorta konusunda deneyimli personel",
    "road.insurance.features.4.title": "7/24 Destek",
    "road.insurance.features.4.desc": "Kesintisiz sigorta desteği",
    "road.advantages.title": "AVANTAJLARIMIZ",
    "road.advantages.subtitle":
      "Karayolu taşımacılığında bizi farklı kılan özellikler",
    "road.advantages.1.title": "40+ Yıllık Tecrübe",
    "road.advantages.1.description":
      "Sektördeki uzun yıllarımızın getirdiği deneyim ve güvenilirlik",
    "road.advantages.2.title": "All Risk Sigorta",
    "road.advantages.2.description":
      "Tüm taşımalarımızda kapsamlı sigorta güvencesi",
    "road.advantages.3.title": "Geniş Araç Filosu",
    "road.advantages.3.description":
      "Her türlü yük için uygun araç seçenekleri",
    "road.advantages.4.title": "7/24 Destek",
    "road.advantages.4.description":
      "Kesintisiz müşteri hizmetleri ve takip sistemi",
    "road.fleet.title": "ARAÇ FİLOMUZ",
    "road.fleet.subtitle":
      "Modern ve güvenilir araçlarımızla her türlü taşıma ihtiyacınızı karşılıyoruz",
    "road.fleet.truck": "Kamyon",
    "road.fleet.trailer": "Tır",
    "road.fleet.container": "Konteyner Aracı",
    "road.fleet.count": "Araç Sayısı",
    "road.cta.title": "HEMEN BAŞLAYIN",
    "road.cta.subtitle":
      "Karayolu taşımacılığı ihtiyaçlarınız için uzman ekibimizle iletişime geçin ve size özel çözümler alın.",
    "road.cta.getQuote": "🚀 Teklif Al",
    "road.cta.trackCargo": "📱 Kargo Takip",
  },
  en: {
    // Navigation
    "nav.corporate": "Corporate",
    "nav.about": "About Us",
    "nav.visionMission": "Vision & Mission",
    "nav.kvk": "GDPR Law",
    "nav.sustainability": "Sustainability",
    "nav.catalog": "Catalog",
    "nav.services": "Services",
    "nav.roadTransport": "Road Transportation",
    "nav.seaTransport": "Sea Transportation",
    "nav.airTransport": "Air Transportation",
    "nav.warehouseServices": "Warehouse Services",
    "nav.containerSales": "Container Sales",
    "nav.shipUnloading": "Ship Unloading",

    // Open Ship Discharge Page
    "shipDischarge.title": "OPEN SHIP DISCHARGE",
    "shipDischarge.subtitle":
      "With our open ship discharge transportation service, we continue our logistics activities with our strong financial structure and expert partners in the business. Through our annual agreements with agents, we can provide competitive prices and quality service to our valued customers.",
    "shipDischarge.serviceTitle": "OUR SERVICE",
    "shipDischarge.serviceSubtitle":
      "Comprehensive service we offer in open ship discharge",
    "shipDischarge.serviceDescription":
      "With our open ship discharge transportation service, we continue our logistics activities with our strong financial structure and expert partners in the business.",
    "shipDischarge.features.1":
      "Reliable service with strong financial structure",
    "shipDischarge.features.2": "Expert partner network",
    "shipDischarge.features.3": "Annual agreements with agents",
    "shipDischarge.features.4": "Competitive prices and quality service",
    "shipDischarge.features.5": "24/7 customer support",
    "shipDischarge.cargoTypes.title": "CARGO TYPES",
    "shipDischarge.cargoTypes.subtitle":
      "Cargo types we transport with our open ship discharge service",
    "shipDischarge.cargoTypes.bulk.name": "Bulk Cargo",
    "shipDischarge.cargoTypes.bulk.desc":
      "Discharge of bulk cargo such as coal, iron ore, grain",
    "shipDischarge.cargoTypes.container.name": "Container Cargo",
    "shipDischarge.cargoTypes.container.desc":
      "Discharge of 20', 40' and 40' High Cube containers",
    "shipDischarge.cargoTypes.project.name": "Project Cargo",
    "shipDischarge.cargoTypes.project.desc":
      "Discharge of heavy and voluminous project cargo",
    "shipDischarge.cargoTypes.hazardous.name": "Hazardous Materials",
    "shipDischarge.cargoTypes.hazardous.desc":
      "Safe discharge of hazardous materials",
    "shipDischarge.advantages.title": "OUR ADVANTAGES",
    "shipDischarge.advantages.subtitle":
      "Features that make us different in open ship discharge services",
    "shipDischarge.advantages.financial.title": "Strong Financial Structure",
    "shipDischarge.advantages.financial.desc":
      "We provide reliable service with our strong financial infrastructure for large projects.",
    "shipDischarge.advantages.partners.title": "Expert Partner Network",
    "shipDischarge.advantages.partners.desc":
      "Logistics activities with our expert partners in open ship discharge.",
    "shipDischarge.advantages.prices.title": "Competitive Prices",
    "shipDischarge.advantages.prices.desc":
      "We offer competitive prices through annual agreements with agents.",
    "shipDischarge.advantages.quality.title": "Quality Service",
    "shipDischarge.advantages.quality.desc":
      "Quality and reliable service guarantee in open ship discharge services.",
    "shipDischarge.process.title": "OUR PROCESS",
    "shipDischarge.process.subtitle":
      "Step-by-step process we follow in our open ship discharge service",
    "shipDischarge.process.step1.title": "Request Evaluation",
    "shipDischarge.process.step1.desc":
      "We evaluate the open ship discharge request in detail.",
    "shipDischarge.process.step2.title": "Ship and Route Planning",
    "shipDischarge.process.step2.desc":
      "We make the most suitable ship and route planning.",
    "shipDischarge.process.step3.title": "Terminal Preparation",
    "shipDischarge.process.step3.desc":
      "We organize the necessary terminal preparations for discharge.",
    "shipDischarge.process.step4.title": "Customs Procedures",
    "shipDischarge.process.step4.desc":
      "We organize export and import customs procedures.",
    "shipDischarge.process.step5.title": "Open Ship Discharge",
    "shipDischarge.process.step5.desc":
      "We perform safe open ship discharge operations.",
    "shipDischarge.process.step6.title": "Delivery",
    "shipDischarge.process.step6.desc":
      "We make safe delivery to the target point.",
    "shipDischarge.cta.title": "GET STARTED",
    "shipDischarge.cta.subtitle":
      "Contact our expert team for your open ship discharge needs and get customized solutions.",
    "shipDischarge.buttons.getQuote": "Get Quote",
    "shipDischarge.buttons.trackCargo": "Track Cargo",
    "shipDischarge.buttons.details": "Detailed Information",
    "nav.workMethod": "Our Work Method",
    "nav.press": "Press Room",
    "nav.pressNews": "Press About Us",
    "nav.events": "Events",
    "nav.careers": "Careers",
    "nav.humanResources": "Human Resources",
    "nav.contact": "Contact",
    "nav.customerLogin": "Customer Login",

    // Corporate Page
    "corporate.title": "Corporate",
    "corporate.subtitle":
      "Your reliable partner in the logistics sector with 42 years of experience. Learn detailed information about our corporate values, vision and service approach.",
    "corporate.overview.title": "Our Corporate Identity",
    "corporate.overview.subtitle":
      "As Ufuk Logistics, we have a corporate identity that prioritizes customer satisfaction and acts with continuous development and innovation understanding.",
    "corporate.sections.title": "Our Corporate Information",
    "corporate.sections.subtitle":
      "You can examine the sections below to get detailed information about our company.",
    "corporate.values.title": "Our Corporate Values",
    "corporate.values.subtitle":
      "The fundamental elements that form our working principles and values.",
    "corporate.technology.title": "Technology & Innovation",
    "corporate.technology.subtitle":
      "With our modern technology infrastructure and continuous development approach, we work to provide the best service to our customers.",
    "corporate.cta.title": "Contact Us",
    "corporate.cta.subtitle":
      "Contact us to get more detailed information about our corporate information or to discuss our services.",
    "corporate.sections.about.desc":
      "Your reliable partner in the logistics sector with 42 years of experience",
    "corporate.sections.vision.desc":
      "Continuous development in line with our vision and mission",
    "corporate.sections.kvk.desc":
      "Our commitment to the protection of your personal data",
    "corporate.sections.sustainability.desc":
      "Environmentally friendly and sustainable logistics solutions",
    "corporate.sections.catalog.desc":
      "Our service catalog and detailed information",
    "corporate.achievements.experience.label": "Years of Experience",
    "corporate.achievements.experience.desc":
      "Experience brought by many years in the logistics sector",
    "corporate.achievements.employees.label": "Employees",
    "corporate.achievements.employees.desc":
      "24/7 service with our expert staff",
    "corporate.achievements.terminal.label": "m² Terminal",
    "corporate.achievements.terminal.desc":
      "Extensive storage capacity with our modern infrastructure",
    "corporate.achievements.vehicles.label": "Trucks",
    "corporate.achievements.vehicles.desc":
      "Our state-of-the-art vehicle fleet",
    "corporate.values.reliability.title": "Reliability",
    "corporate.values.reliability.desc":
      "We constantly work to gain the trust of our customers",
    "corporate.values.quality.title": "Quality",
    "corporate.values.quality.desc":
      "We provide service at the highest quality standards",
    "corporate.values.innovation.title": "Innovation",
    "corporate.values.innovation.desc":
      "We closely follow technological developments",
    "corporate.values.sustainability.title": "Sustainability",
    "corporate.values.sustainability.desc":
      "We produce environmentally friendly and sustainable solutions",
    "corporate.technology.desc2":
      "We optimize your logistics processes with our ERP system, real-time tracking technology and digital platforms.",
    "corporate.technology.feature1": "Central ERP System",
    "corporate.technology.feature2": "Real-time Tracking",
    "corporate.technology.feature3": "Digital Platform Integration",
    "corporate.technology.digital.title": "Digital Transformation",
    "corporate.technology.digital.desc":
      "We digitize your logistics processes with our technological infrastructure and increase your efficiency.",
    "corporate.buttons.details": "View Details",
    "corporate.buttons.contact": "Contact Us",
    "corporate.buttons.exploreServices": "Explore Our Services",

    // Contact Page
    "contact.title": "Contact",
    "contact.subtitle":
      "We are here to provide you with the best service with our 42 years of experience. Contact us for your questions.",
    "contact.form.title": "Contact Form",
    "contact.form.subtitle":
      "Fill out the form so we can get back to you as soon as possible",
    "contact.form.name": "Full Name",
    "contact.form.company": "Company Name",
    "contact.form.phone": "Phone",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success.title": "Your message has been sent successfully!",
    "contact.form.success.message":
      "We will get back to you as soon as possible.",
    "contact.form.error.title": "An error occurred!",
    "contact.form.error.message": "Please try again or contact us by phone.",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.phone.desc": "24/7 Customer Service",
    "contact.info.fax": "Fax",
    "contact.info.fax.desc": "Document Submission",
    "contact.info.email": "E-Mail",
    "contact.info.email.desc": "General Information and Support",
    "contact.info.address": "Address",
    "contact.info.address.desc": "Mediterranean / MERSIN",
    "contact.quick.title": "Quick Actions",
    "contact.quick.survey.title": "Customer Satisfaction Survey",
    "contact.quick.survey.desc": "Evaluate our service quality",
    "contact.quick.survey.action": "Fill Survey",
    "contact.quick.emergency.title": "Emergency Line",
    "contact.quick.emergency.desc": "24/7 Emergency Support",
    "contact.quick.emergency.action": "Call: 444 70 33",
    "contact.quick.tracking.title": "Online Tracking",
    "contact.quick.tracking.desc": "Track your cargo",
    "contact.quick.tracking.action": "Track",
    "contact.map.title": "Location",
    "contact.map.loading": "Loading Map...",
    "contact.map.location": "Mersin, Mediterranean",
    "contact.support.title": "24/7 Customer Support",
    "contact.support.subtitle":
      "We are at your service 24/7 for your emergencies. You can reach us at 444 70 33.",
    "contact.support.call": "Call Now",
    "contact.support.whatsapp": "WhatsApp Support",

    // Home Page
    "home.hero.title": "42 Years of Logistics Experience",
    "home.hero.subtitle":
      "Since 1982, we have been providing reliable solutions in road, air and sea transportation.",
    "home.hero.track": "🚀 Track Cargo",
    "home.hero.explore": "✨ Explore Services",

    // Stats
    "stats.experience": "Years Experience",
    "stats.employees": "Employees",
    "stats.terminal": "m² Terminal",
    "stats.vehicles": "Vehicles",

    // Services
    "services.road": "Road Transportation",
    "services.air": "Air Transportation",
    "services.sea": "Sea Transportation",
    "services.warehouse": "Forwarding & Storage",

    // About Page
    "about.title": "About Us",
    "about.subtitle":
      "Ufuk Logistics, which has been operating in the logistics sector since 1982, provides the best solutions to its customers with a reliable and professional service approach.",
    "about.experience": "42 Years of Experience",
    "about.terminal": "Our Terminal and Equipment",
    "about.technology": "Technology and Software",
    "about.insurance": "Insurance and Security",
    "about.fleet": "Environmentally Friendly Fleet",

    // Home Page Additional
    "home.why.title": "Why Ufuk Logistics?",
    "home.why.subtitle":
      "Smart logistics solutions powered by artificial intelligence and blockchain technology",
    "home.why.smart": "smart logistics",
    "home.why.solutions": "solutions",

    // Services Descriptions
    "services.road.desc":
      "Safe and fast road transportation service with 100+ vehicles.",
    "services.air.desc":
      "Fast and safe air transportation for urgent deliveries.",
    "services.sea.desc":
      "Container transportation and sea logistics solutions.",
    "services.warehouse.desc":
      "Storage and handling services in 180,000 m² terminal area.",

    // Home Page Additional Sections
    "home.logistics.experience": "Logistics Experience",
    "home.reliable.solutions": "reliable solutions",
    "home.since.1982": "Since 1982, we have been providing",
    "home.since.1982.end": "in road, air and sea transportation.",

    // About Page Additional
    "about.company.story": "42 Years of Experience",
    "about.company.desc1":
      "Ufuk Logistics, which has been operating in the logistics sector since 1982, provides road, air, sea transportation, forwarding and storage services with more than 350 employees.",
    "about.company.desc2":
      "Our company, which has branches in Gaziantep and İskenderun as well as Mersin, reaches its customers with its wide service network.",
    "about.explore.services": "Explore Our Services",

    // Terminal Section
    "about.terminal.desc":
      "We provide container storage, loading-unloading and handling services with more than 100 vehicles and nearly 200 equipment in our 180,000 m² terminal area.",
    "about.terminal.area":
      "Wide storage and handling facilities with terminal area",
    "about.vehicles":
      "Fast transportation with modern and reliable vehicle fleet",
    "about.equipment": "Modern equipment for loading-unloading and handling",

    // Technology Section
    "about.technology.desc1":
      "Ufuk Logistics is one of the rare companies with its own logistics software. All logistics processes are managed from a single center with the ERP software system, saving time and cost.",
    "about.technology.desc2":
      "Thanks to this software system actively used in all units, fast and transparent information is provided to customers.",
    "about.erp.title": "ERP Software System",
    "about.erp.desc":
      "We manage all processes from a single center with our own logistics software",
    "about.tech.features.central": "Central management system",
    "about.tech.features.savings": "Time and cost savings",
    "about.tech.features.transparency": "Fast and transparent information flow",

    // Insurance Section
    "about.insurance.desc":
      'We safely carry your cargo against risks that may arise in logistics processes with "All Risk Transportation Insurance" and "Individual Accident Insurance".',
    "about.all.risk.title": "All Risk Transportation Insurance",
    "about.all.risk.desc":
      "Comprehensive insurance protection against all kinds of risks for your cargo",
    "about.individual.accident.title": "Individual Accident Insurance",
    "about.individual.accident.desc":
      "Comprehensive accident insurance protection for the safety of our employees",

    // Fleet Section
    "about.fleet.desc1":
      "With its wide and environmentally friendly fleet consisting of Euro-6 vehicles, expert team and subsidiary companies, it is with you at every stage of the supply chain.",
    "about.fleet.desc2":
      "Ufuk Logistics, which continues to grow, make new investments and create employment every day, is among the important logistics companies of Turkey and Mersin.",
    "about.environmentally.friendly": "Environmentally Friendly",
    "about.environmentally.friendly.desc":
      "Environmentally friendly transportation with Euro-6 standard vehicles",
    "about.fleet.features.euro6": "Euro-6 environmentally friendly vehicles",
    "about.fleet.features.expert": "Expert team and subsidiary companies",
    "about.fleet.features.growth": "Continuous growth and investment",

    // CTA Section
    "about.cta.title": "Ready to Work with Us?",
    "about.cta.desc":
      "We are ready to meet your logistics needs in the best way with our 42 years of experience and modern technology.",
    "about.cta.explore": "Explore Our Services",
    "about.cta.contact": "Contact Us",

    // Footer
    "footer.description":
      "Since 1982, we have been one of the leading companies in the logistics sector with 350+ employees, providing reliable solutions in road, air and sea transportation.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.phone": "+90 (324) 555 0123",
    "footer.email": "info@ufuklojistik.com",
    "footer.address": "Mersin, Turkey",
    "footer.branches": "Gaziantep & İskenderun Branches",
    "footer.copyright": "© 2024 Ufuk Logistics. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

    // Tracking
    "tracking.live.title": "Live Cargo Tracking",
    "tracking.live.subtitle": "Real-time updates",
    "tracking.cargoNumber": "Cargo No",
    "tracking.status": "Status",
    "tracking.delivered": "Delivered",
    "tracking.estimatedTime": "Estimated Time",
    "tracking.time": "2 hours 15 min",
    "tracking.detailed": "Detailed Tracking",

    // Auth Page
    "auth.welcomeBack": "Welcome Back",
    "auth.createAccount": "Create Account",
    "auth.loginDescription": "Sign in to your account",
    "auth.registerDescription": "Create a new account",
    "auth.login": "Login",
    "auth.register": "Register",
    "auth.fullName": "Full Name",
    "auth.fullNamePlaceholder": "Enter your full name",
    "auth.email": "Email",
    "auth.emailPlaceholder": "example@email.com",
    "auth.username": "Username",
    "auth.usernamePlaceholder": "Enter your username",
    "auth.password": "Password",
    "auth.passwordPlaceholder": "Enter your password",
    "auth.confirmPassword": "Confirm Password",
    "auth.confirmPasswordPlaceholder": "Confirm your password",
    "auth.rememberMe": "Remember Me",
    "auth.forgotPassword": "Forgot Password",
    "auth.processing": "Processing...",
    "auth.loginButton": "Sign In",
    "auth.registerButton": "Sign Up",
    "auth.or": "or",
    "auth.continueWithGoogle": "Continue with Google",
    "auth.termsText": "By registering, you agree to our",
    "auth.terms": "Terms of Service",
    "auth.and": "and",
    "auth.privacy": "Privacy Policy",
    "auth.backToHome": "Back to Home",

    // Vision & Mission
    "vision.title": "Vision & Mission",
    "vision.subtitle":
      "As Ufuk Logistics, we continue to be a pioneer in the logistics sector with our reliable and quality service approach, keeping customer satisfaction at the forefront.",
    "vision.ourValues": "Our Values",
    "vision.valuesDescription":
      "Our values that form the foundation of our company are our guide in all our activities.",
    "vision.values.achievement": "Achievement Ambition",
    "vision.values.achievementDesc":
      "Pursuit of excellence in every project and continuous improvement approach.",
    "vision.values.customerFocus": "Customer Focus",
    "vision.values.customerFocusDesc":
      "Understanding customer needs and solution-oriented approach.",
    "vision.values.initiative": "Individual Initiative and Responsibility",
    "vision.values.initiativeDesc":
      "Individual responsibility and initiative within teamwork.",
    "vision.values.reliability": "Reliability",
    "vision.values.reliabilityDesc":
      "Delivering promised services on time and with quality.",
    "vision.values.contribution": "Contribution to Society",
    "vision.values.contributionDesc":
      "Adding value to society with social responsibility awareness.",
    "vision.customerPolicyTitle": "Our Customer Policy",
    "vision.customerPolicyDescription":
      "Our basic principles we apply to increase customer satisfaction.",
    "vision.customerPolicy.1":
      "We continuously increase our customers' satisfaction in parallel with the development of requirements and our service standards.",
    "vision.customerPolicy.2":
      "We effectively manage customer feedback and continuously improve customer satisfaction.",
    "vision.customerPolicy.3":
      "We improve our processes based on customer feedback.",
    "vision.customerPolicy.4":
      "We consider business ethics and justice principles in our relationships with our customers.",
    "vision.customerPolicy.5":
      "We attach as much importance to establishing long-term relationships with our customers as to gaining new customers.",
    "vision.companyPolicyTitle": "In Our Company",
    "vision.companyPolicyDescription":
      "Our internal values and working principles.",
    "vision.companyPolicy.1":
      "We always keep our company values in the foreground.",
    "vision.companyPolicy.2":
      "We all do our part in the development of our company's performance.",
    "vision.companyPolicy.3":
      "We never mix our personal interests with company interests.",
    "vision.companyPolicy.4":
      "We use our company's assets, facilities and services properly and in accordance with the law.",
    "vision.companyPolicy.5":
      "We carefully protect the information of our stakeholders.",
    "vision.ctaTitle": "Ready to Work with Us?",
    "vision.ctaDescription":
      "We are ready to provide you with the best service in line with our values and principles.",
    "vision.learnMore": "Learn More",
    "vision.contactUs": "Contact Us",

    // Interactive Features Section
    "home.interactive.title": "Smart Technology",
    "home.interactive.subtitle": "Enhanced Service",
    "home.interactive.description":
      "We optimize your cargo processes with artificial intelligence algorithms and IoT sensors",
    "home.interactive.realtime": "in real-time",
    "home.interactive.descriptionEnd": ".",
    "home.interactive.feature1.title": "AI-Powered Route Optimization",
    "home.interactive.feature1.desc":
      "Fastest and most economical routes with machine learning",
    "home.interactive.feature2.title": "Blockchain Tracking System",
    "home.interactive.feature2.desc":
      "Transparent and secure cargo tracking infrastructure",
    "home.interactive.feature3.title": "IoT Sensor Network",
    "home.interactive.feature3.desc":
      "Real-time location and status monitoring",

    // CTA Section
    "home.cta.title1": "Let's Shape the Future",
    "home.cta.title2": "Together",
    "home.cta.description": "Ready to revolutionize the logistics world?",
    "home.cta.startToday": "Start today",
    "home.cta.descriptionEnd": "and feel the difference.",
    "home.cta.startButton": "Get Started",
    "home.cta.pricingButton": "View Pricing",

    // Sustainability Page
    "sustainability.title": "Sustainability",
    "sustainability.subtitle":
      "With awareness of our responsibility towards the environment and society, we provide sustainable logistics solutions.",
    "sustainability.ourCommitment": "Our Sustainability Commitment",
    "sustainability.commitmentDesc":
      "As Ufuk Logistics, we embrace environmental, social and economic sustainability principles and prioritize these values in all our activities.",
    "sustainability.certificates": "Our ISO Certificates",
    "sustainability.certificatesDesc":
      "Our certificates demonstrating compliance with international standards prove our commitment to quality, environment, occupational health and safety, and customer satisfaction.",
    "sustainability.viewCertificate": "View Certificate",
    "sustainability.close": "Close",
    "sustainability.iso9001": "ISO 9001:2015",
    "sustainability.iso9001Title": "Quality Management System",
    "sustainability.iso9001Desc":
      "Quality management system standards to increase customer satisfaction and ensure continuous improvement.",
    "sustainability.iso10002": "ISO 10002:2018",
    "sustainability.iso10002Title":
      "Customer Management and Complaint Management System",
    "sustainability.iso10002Desc":
      "Customer management system to increase customer satisfaction and ensure effective complaint management.",
    "sustainability.iso14001": "ISO 14001:2015",
    "sustainability.iso14001Title": "Environmental Management System",
    "sustainability.iso14001Desc":
      "Environmental management system to minimize environmental impacts and ensure sustainable environmental management.",
    "sustainability.iso45001": "ISO 45001:2018",
    "sustainability.iso45001Title":
      "Occupational Health and Safety Management System",
    "sustainability.iso45001Desc":
      "Occupational health and safety management system to protect the health and safety of employees.",
    "sustainability.environmental": "Environmental Sustainability",
    "sustainability.environmentalDesc":
      "We minimize our carbon footprint with our Euro-6 standard vehicles and environmentally friendly practices.",
    "sustainability.social": "Social Responsibility",
    "sustainability.socialDesc":
      "We contribute to society and create value with our social responsibility projects.",
    "sustainability.economic": "Economic Sustainability",
    "sustainability.economicDesc":
      "We develop sustainable business models for long-term economic growth and stability.",

    // KVK Page
    "kvk.title": "Personal Data Protection Law",
    "kvk.subtitle":
      "As UFUK INTERMODAL LOGISTICS A.Ş., we pay maximum attention to the protection and security of your personal data. Information text about the Personal Data Protection Law No. 6698.",
    "kvk.introduction.title": "Information Text",
    "kvk.introduction.content":
      'As UFUK INTERMODAL LOGISTICS A.Ş. ("Our Company"), we pay maximum attention to the protection and security of your personal data. In this context, we want to inform and enlighten you in the most transparent way as the Data Controller regarding the collection methods of your personal data, processing purposes, legal reasons for processing and your rights regarding the Personal Data Protection Law No. 6698 ("Law") enacted to protect the fundamental rights and freedoms of individuals, especially the privacy of private life, and to protect personal data.',
    "kvk.introduction.note":
      "All necessary technical and administrative measures have been taken by our Company to prevent the unlawful processing of your personal data and unlawful access to your data, and to ensure the secure storage of your personal data.",
    "kvk.sections.title": "Personal Data Processing Processes",
    "kvk.sections.subtitle":
      "Detailed information about how your personal data is collected, processed and protected",
    "kvk.section1.title": "Purpose of Processing Your Personal Data",
    "kvk.section1.content":
      "The purposes of processing your personal data include, but are not limited to: carrying out necessary operational activities by our Company, performing human resources management, taking necessary steps regarding the making, implementation and realization of commercial decisions by our Company, ensuring the legal and commercial security of real persons with whom business relationships are established and our Company's business partners arising from these relationships, conducting recruitment processes, ensuring security processes, conducting image recording processes for security purposes, identity and permission processes at facility entrances, conducting OHS activities, coordinating training and keeping work accident records, coordinating visitor procedures and emergency operations, conducting health processes, guest internet usage records, and communication form collection purposes, in accordance with the conditions specified in Articles 5 and 6 of the Law regarding the processing of personal data.",
    "kvk.section2.title": "Sharing of Your Personal Data",
    "kvk.section2.content":
      "Your personal data may be shared with our Company's shareholders, business partners, suppliers, external service providers and legally authorized public institutions and organizations in accordance with the conditions specified in Articles 8 and 9 of the Law. The purposes of sharing your personal data include, but are not limited to: maintaining our Company's commercial activities and managing our Company's human resources processes and employment policies. When your personal data is shared, necessary security measures are taken.",
    "kvk.section3.title":
      "Collection Methods of Your Personal Data and Their Legal Reasons",
    "kvk.section3.content":
      "Your personal data can be collected by our Company through all kinds of written, verbal, electronic media, automatic or non-automatic methods, to be used for the purposes specified in this Personal Data Processing Information Text. Your personal data can be processed and transferred in accordance with the personal data processing conditions and purposes specified in Articles 5 and 6 of the Law and for the purposes specified in this Personal Data Processing Information Text.",
    "kvk.section4.title": "Retention Period of Your Personal Data",
    "kvk.section4.content":
      "Our Company will store personal data for the period required by the purposes specified in this Personal Data Processing Information Text. In addition, our Company may store personal data for the statute of limitations periods determined in accordance with the relevant legislation, limited to the purpose of being able to carry out the necessary defenses in case of any dispute that may arise between the data subject and our Company.",
    "kvk.section5.title": "Measures and Commitments Regarding Data Security",
    "kvk.section5.content":
      "Our Company undertakes to take the necessary technical and administrative measures and to conduct the necessary audits to ensure the appropriate security level in order to prevent the unlawful processing of personal data, prevent unlawful access to personal data, and ensure the preservation of personal data. Our Company will not disclose the personal data it has obtained to others in violation of the relevant legal regulations and will not use it for purposes other than processing.",
    "kvk.rights.title": "Your Rights Arising from the Law",
    "kvk.rights.subtitle":
      "You have the following rights regarding your personal data. You can contact us through the contact information specified below to use these rights.",
    "kvk.right1": "Learning whether personal data is processed",
    "kvk.right2": "Requesting information if personal data has been processed",
    "kvk.right3":
      "Learning the purpose of processing personal data and whether they are used appropriately for their purpose",
    "kvk.right4":
      "Knowing the third parties to whom personal data is transferred domestically or abroad",
    "kvk.right5":
      "Requesting correction of personal data if they are incomplete or incorrectly processed",
    "kvk.right6":
      "Requesting deletion or destruction of personal data if the reasons requiring processing are eliminated",
    "kvk.right7":
      "Objecting to the emergence of a result against the person by analyzing the processed data exclusively through automatic systems",
    "kvk.right8":
      "Requesting compensation for damages if damage is suffered due to unlawful processing of personal data",
    "kvk.rights.use.title": "Use Your Rights",
    "kvk.rights.use.subtitle":
      "We evaluate and finalize your requests within 30 days.",
    "kvk.rights.use.button": "Contact Us",
    "kvk.contact.title": "Contact Information",
    "kvk.contact.subtitle":
      "You can contact us through the contact information below to use your GDPR rights",
    "kvk.contact.address.title": "Postal Address",
    "kvk.contact.address.content":
      "Kültür Mah. 4316 Sok. No:2<br />Şıhman Apt. Kat:1 No:1<br />Akdeniz / MERSİN",
    "kvk.contact.email.title": "Email Addresses",
    "kvk.contact.email.content":
      "<strong>KEP:</strong> ufukintermodal@hs01.kep.tr<br /><strong>General:</strong> info@ufuklojistik.com",
    "kvk.contact.response.title": "Response Time",
    "kvk.contact.response.content":
      "Your requests will be evaluated and finalized within 30 (thirty) days.",
    "kvk.notes.title": "Important Notes",
    "kvk.notes.conditions.title": "Application Conditions:",
    "kvk.notes.conditions.content":
      "In requests submitted by the data subject, the data subject's name, surname, signature if the application is written, Turkish ID number or nationality if foreign, passport number or ID number if available, residence or business address for notification, email address for notification if available, phone and fax number and subject of the request must be included.",
    "kvk.notes.pricing.title": "Pricing:",
    "kvk.notes.pricing.content":
      "The right to request a fee at the tariff rate specified in the legislation for responses is reserved if written responses are to be given to requests. If the response to the application is to be given on a recording medium such as CD, flash memory, our Company may request a fee from the data subject making the request in the amount of the cost of the recording medium.",
    "kvk.notes.changes.title": "Changes:",
    "kvk.notes.changes.content":
      "Our Company may change the provisions in this Text at any time by publishing them. The provisions changed by our Company come into effect on the date of publication.",
    "kvk.cta.title": "Do you have questions?",
    "kvk.cta.subtitle":
      "Contact us to learn more about the protection of your personal data or to use your rights.",
    "kvk.cta.contact": "Contact Us",
    "kvk.cta.more": "Learn More",
    "kvk.secure.title": "Secure Data Processing",
    "kvk.secure.subtitle":
      "All your personal data is processed and protected in accordance with the Personal Data Protection Law No. 6698.",

    // Catalog Page
    "catalog.title": "Digital Catalog",
    "catalog.subtitle": "Discover our company's services and values",
    "catalog.instructions.drag": "Drag to rotate in 3D",
    "catalog.instructions.click": "Click to flip pages",
    "catalog.instructions.arrows": "Navigate with arrow keys",
    "catalog.navigation.first": "First Page",
    "catalog.navigation.previous": "Previous Page",
    "catalog.navigation.next": "Next Page",
    "catalog.navigation.last": "Last Page",
    "catalog.navigation.zoomIn": "Zoom In",
    "catalog.navigation.zoomOut": "Zoom Out",
    "catalog.navigation.fullscreen": "Fullscreen",
    "catalog.navigation.print": "Print",
    "catalog.navigation.shortcuts": "Keyboard Shortcuts",
    "catalog.navigation.navigate": "navigate pages",
    "catalog.navigation.flip": "flip page",

    // Air Transport Page
    "air.hero.title": "Air Transportation",
    "air.hero.subtitle":
      "With our air transportation service, we deliver your valuable cargo to the target point worldwide in the fastest and safest way. We provide you with the highest quality service with our modern air network and expert team.",
    "air.services.title": "Our Services",
    "air.services.subtitle":
      "Comprehensive range of services we offer in air transportation",
    "air.service1.title": "Cargo Transportation",
    "air.service1.desc":
      "We deliver your valuable cargo to the target point in the shortest time with fast and secure air cargo transportation service.",
    "air.service1.feature1": "Express cargo service",
    "air.service1.feature2": "Secure packaging",
    "air.service1.feature3": "Real-time tracking",
    "air.service1.feature4": "All Risk insurance guarantee",
    "air.service2.title": "Document Transportation",
    "air.service2.desc":
      "We provide special air transportation service for important documents and papers.",
    "air.service2.feature1": "Fast document delivery",
    "air.service2.feature2": "Secure transportation",
    "air.service2.feature3": "Special packaging",
    "air.service2.feature4": "24-hour delivery",
    "air.service3.title": "Valuable Cargo Transportation",
    "air.service3.desc":
      "Air transportation with special security measures for valuable cargo such as gold, jewelry, electronic goods.",
    "air.service3.feature1": "Special security measures",
    "air.service3.feature2": "Insured transportation",
    "air.service3.feature3": "Expert personnel",
    "air.service3.feature4": "Confidential transportation",
    "air.service4.title": "Emergency Transportation",
    "air.service4.desc":
      "We provide 24/7 air transportation solutions for emergency situations.",
    "air.service4.feature1": "24/7 emergency service",
    "air.service4.feature2": "Rapid response",
    "air.service4.feature3": "Special charter aircraft",
    "air.service4.feature4": "Instant delivery",
    "air.advantages.title": "Our Advantages",
    "air.advantages.subtitle":
      "Features that make us different in air transportation",
    "air.advantage1.title": "Fast Delivery",
    "air.advantage1.desc": "Fastest delivery times by air",
    "air.advantage2.title": "Secure Transportation",
    "air.advantage2.desc": "Transportation with highest security standards",
    "air.advantage3.title": "Global Network",
    "air.advantage3.desc": "Wide air network worldwide",
    "air.advantage4.title": "24/7 Tracking",
    "air.advantage4.desc": "Continuous cargo tracking system",
    "air.routes.title": "Our Routes",
    "air.routes.subtitle": "Air routes we serve regularly",
    "air.route1.title": "Europe Route",
    "air.route1.airports": "Istanbul → Frankfurt, Amsterdam, Paris, London",
    "air.route1.duration": "2-4 hours",
    "air.route1.frequency": "Daily",
    "air.route2.title": "America Route",
    "air.route2.airports": "Istanbul → New York, Los Angeles, Miami",
    "air.route2.duration": "10-12 hours",
    "air.route2.frequency": "Daily",
    "air.route3.title": "Asia Route",
    "air.route3.airports": "Istanbul → Dubai, Singapore, Tokyo, Hong Kong",
    "air.route3.duration": "6-10 hours",
    "air.route3.frequency": "Daily",
    "air.route4.title": "Africa Route",
    "air.route4.airports": "Istanbul → Cairo, Lagos, Johannesburg",
    "air.route4.duration": "4-8 hours",
    "air.route4.frequency": "Weekly",
    "air.process.title": "Our Work Process",
    "air.process.subtitle":
      "Step-by-step process we follow in air transportation",
    "air.process1.title": "Request Receipt",
    "air.process1.desc":
      "We evaluate your air transportation request in detail.",
    "air.process2.title": "Flight Planning",
    "air.process2.desc": "We make the most suitable flight and route planning.",
    "air.process3.title": "Packaging",
    "air.process3.desc": "We package your cargo according to air standards.",
    "air.process4.title": "Customs Procedures",
    "air.process4.desc": "We organize exit and entry customs procedures.",
    "air.process5.title": "Air Transportation",
    "air.process5.desc": "We start the secure air transportation process.",
    "air.process6.title": "Delivery",
    "air.process6.desc": "We make secure delivery to the target airport.",
    "air.fleet.title": "Our Air Network",
    "air.fleet.subtitle":
      "We meet all your air transportation needs with our modern and reliable air partners",
    "air.aircraft1.name": "Cargo Aircraft",
    "air.aircraft1.count": "25+",
    "air.aircraft2.name": "Passenger Aircraft",
    "air.aircraft2.count": "50+",
    "air.aircraft3.name": "Special Charter",
    "air.aircraft3.count": "15+",
    "air.aircraft.count.desc": "Aircraft Count",
    "air.cta.title": "Get Started Now",
    "air.cta.subtitle":
      "Contact our expert team for your air transportation needs and get customized solutions.",
    "air.cta.quote": "Get Quote",
    "air.cta.track": "Track Cargo",
    "air.features.title": "Features:",
    "air.duration": "Duration:",
    "air.frequency": "Frequency:",
    "air.detailed.info": "Detailed Information",

    // Warehouse Services Page
    "warehouse.hero.title": "Warehouse Services",
    "warehouse.hero.subtitle":
      "We provide reliable solutions in container storage, handling, repair maintenance and lashing services with our 100,000 m² storage area, modern machine park and expert team.",
    "warehouse.services.title": "Our Services",
    "warehouse.services.subtitle":
      "Comprehensive range of services we offer in warehouse services",
    "warehouse.service1.title": "Container Storage",
    "warehouse.service1.desc":
      "We serve our valuable customers with our total 100,000 m² open storage area with 2 open free warehouses in Mersin region and 1 open free warehouse in İskenderun, 3 full stacking machines, 3 empty stacking machines and our other machine park.",
    "warehouse.service1.feature1": "100,000 m² open storage area",
    "warehouse.service1.feature2": "3 full stacking machines",
    "warehouse.service1.feature3": "3 empty stacking machines",
    "warehouse.service1.feature4": "Modern machine park",
    "warehouse.service1.feature5": "ERP system integration",
    "warehouse.service2.title": "Handling Services",
    "warehouse.service2.desc":
      "We perform loading or unloading activities of all your goods in our warehouses with our own team and work machines in the highest quality.",
    "warehouse.service2.feature1": "Professional loading-unloading",
    "warehouse.service2.feature2": "Expert team and work machines",
    "warehouse.service2.feature3": "Quality service guarantee",
    "warehouse.service2.feature4": "All commodity types",
    "warehouse.service2.feature5": "Safe operation",
    "warehouse.service3.title": "Container Repair Maintenance Services",
    "warehouse.service3.desc":
      "We perform all repair and maintenance operations of your damaged containers in our container warehouses with our professional staff according to incoming requests.",
    "warehouse.service3.feature1": "Professional repair team",
    "warehouse.service3.feature2": "All container types",
    "warehouse.service3.feature3": "Rapid intervention",
    "warehouse.service3.feature4": "Quality material usage",
    "warehouse.service3.feature5": "Maintenance services",
    "warehouse.service4.title": "Lashing & Unlashing Services",
    "warehouse.service4.desc":
      "We have been providing container lashing, vehicle lashing and railway lashing services for many years with our experienced field teams within our company.",
    "warehouse.service4.feature1": "Container lashing",
    "warehouse.service4.feature2": "Vehicle lashing",
    "warehouse.service4.feature3": "Railway lashing",
    "warehouse.service4.feature4": "Experienced field team",
    "warehouse.service4.feature5": "Safe lashing solutions",
    "warehouse.advantages.title": "Our Advantages",
    "warehouse.advantages.subtitle":
      "Features that make us different in warehouse services",
    "warehouse.advantage1.title": "100,000 m² Storage",
    "warehouse.advantage1.desc":
      "We meet all your needs with our wide storage area",
    "warehouse.advantage2.title": "Modern Machine Park",
    "warehouse.advantage2.desc":
      "Fast and safe service with latest technology work machines",
    "warehouse.advantage3.title": "ERP Integration",
    "warehouse.advantage3.desc":
      "Direct integration opportunity with your systems",
    "warehouse.advantage4.title": "Expert Team",
    "warehouse.advantage4.desc": "Our experienced and professional staff",
    "warehouse.locations.title": "Our Warehouse Locations",
    "warehouse.locations.subtitle":
      "Our warehouse facilities located in strategic positions",
    "warehouse.process.title": "Our Work Process",
    "warehouse.process.subtitle":
      "Step-by-step process we follow in warehouse services",
    "warehouse.process1.title": "Request Receipt",
    "warehouse.process1.desc":
      "We evaluate your warehouse service request in detail.",
    "warehouse.process2.title": "Area Planning",
    "warehouse.process2.desc": "We plan the most suitable storage area.",
    "warehouse.process3.title": "Loading/Unloading",
    "warehouse.process3.desc":
      "We perform safe operations with our professional team.",
    "warehouse.process4.title": "Storage",
    "warehouse.process4.desc": "We provide safe and organized storage service.",
    "warehouse.process5.title": "Tracking & Reporting",
    "warehouse.process5.desc":
      "We provide continuous tracking with ERP integration.",
    "warehouse.process6.title": "Delivery",
    "warehouse.process6.desc": "We make fast delivery when needed.",
    "warehouse.cta.title": "Get Started Now",
    "warehouse.cta.subtitle":
      "Contact our expert team for your warehouse service needs and get customized solutions.",
    "warehouse.cta.quote": "Get Quote",
    "warehouse.cta.track": "Track Warehouse",
    "warehouse.features.title": "Features:",
    "warehouse.partners.title": "Partner Companies:",
    "warehouse.depot.count": "Depot Count:",
    "warehouse.depot.type": "Type:",
    "warehouse.depot.area": "Area:",
    "warehouse.detailed.info": "Detailed Information",

    // Human Resources Page
    "hr.title": "Human Resources",
    "hr.subtitle":
      "Join the Ufuk Logistics family and open new horizons in your career",
    "hr.sendCV": "Send CV",
    "hr.viewPositions": "View Open Positions",
    "hr.contactUs": "Contact Us",
    "hr.whyUs": "Why Ufuk Logistics?",
    "hr.whyUsDesc":
      "As a leading company in the logistics sector, we provide the best working environment for our employees.",
    "hr.strongTeam": "Strong Team",
    "hr.strongTeamDesc": "Work with our experienced and expert staff",
    "hr.fastGrowth": "Fast Growth",
    "hr.fastGrowthDesc":
      "Advance your career in our continuously developing company",
    "hr.training": "Training & Development",
    "hr.trainingDesc": "Continuous learning and development opportunities",
    "hr.workLifeBalance": "Work-Life Balance",
    "hr.workLifeBalanceDesc": "Flexible working hours and social benefits",
    "hr.openPositions": "Open Positions",
    "hr.openPositionsDesc":
      "Review our currently open positions and take a new step in your career.",
    "hr.allDepartments": "All Departments",
    "hr.allLocations": "All Locations",
    "hr.viewDetails": "View Details",
    "hr.apply": "Apply",
    "hr.urgent": "Urgent",
    "hr.experience": "Experience",
    "hr.salary": "Salary",
    "hr.noPositions": "No positions found matching your criteria",
    "hr.noPositionsDesc":
      "Try changing the filters or send your CV to register for future opportunities.",
    "hr.applicationProcess": "Application Process",
    "hr.applicationProcessDesc":
      "Our application process is simple and transparent. Here is the step-by-step process:",
    "hr.step1": "Application",
    "hr.step1Desc": "Send your CV and cover letter",
    "hr.step2": "Evaluation",
    "hr.step2Desc": "We evaluate your application",
    "hr.step3": "Interview",
    "hr.step3Desc": "We conduct an interview to meet you",
    "hr.step4": "Decision",
    "hr.step4Desc": "You are informed about the result",
    "hr.applyNow": "Apply Now!",
    "hr.applyNowDesc":
      "Couldn't find a suitable position? Send your CV, we will contact you when a suitable position opens.",
    "hr.cvForm.title": "Send CV",
    "hr.cvForm.subtitle":
      "Send your CV and cover letter, we will contact you when a suitable position opens.",
    "hr.cvForm.fullName": "Full Name",
    "hr.cvForm.email": "Email",
    "hr.cvForm.phone": "Phone",
    "hr.cvForm.position": "Position of Interest",
    "hr.cvForm.experience": "Experience Level",
    "hr.cvForm.location": "Preferred Location",
    "hr.cvForm.coverLetter": "Cover Letter",
    "hr.cvForm.cvFile": "CV File",
    "hr.cvForm.submit": "Send CV",
    "hr.cvForm.submitting": "Sending...",
    "hr.cvForm.success": "Your CV has been sent successfully!",
    "hr.cvForm.successDesc": "We will get back to you as soon as possible.",
    "hr.cvForm.close": "Close",
    "hr.contactForm.title": "Contact Form",
    "hr.contactForm.subtitle": "Contact us for your questions",
    "hr.contactForm.name": "Full Name",
    "hr.contactForm.email": "Email",
    "hr.contactForm.phone": "Phone",
    "hr.contactForm.subject": "Subject",
    "hr.contactForm.message": "Message",
    "hr.contactForm.submit": "Send Message",
    "hr.contactForm.submitting": "Sending...",
    "hr.contactForm.success": "Your message has been sent successfully!",
    "hr.contactForm.successDesc":
      "We will get back to you as soon as possible.",

    // Press Room Page
    "press.hero.title": "PRESS ROOM",
    "press.hero.subtitle":
      "Our news in the media, events we participate in and our company's reflections in public opinion",
    "press.hero.mediaNews": "Media News",
    "press.hero.events": "Events",
    "press.hero.tvInterviews": "TV Interviews",
    "press.sections.title": "Press Room Contents",
    "press.sections.subtitle":
      "Discover our news in the media and events we participate in",
    "press.news.title": "PRESS ABOUT US",
    "press.news.description":
      "Our news in the media, our achievements and our role in sector developments",
    "press.news.stats": "150+ News",
    "press.news.features.media": "Media news",
    "press.news.features.tv": "TV interviews",
    "press.news.features.radio": "Radio programs",
    "press.news.features.digital": "Digital content",
    "press.events.title": "EVENTS",
    "press.events.description":
      "Events our company participates in, conferences and social responsibility projects",
    "press.events.stats": "50+ Events",
    "press.events.features.conferences": "Conferences",
    "press.events.features.seminars": "Seminars",
    "press.events.features.social": "Social events",
    "press.events.features.awards": "Award ceremonies",
    "press.explore": "Explore",
    "press.highlights.title": "Latest Updates",
    "press.highlights.subtitle": "Highlights from our latest news and events",
    "press.highlights.news": "News",
    "press.highlights.event": "Event",
    "press.highlights.detail": "Detail",
    "press.contact.title": "Press Communication",
    "press.contact.subtitle":
      "Contact us for press releases, interview requests and media communication",
    "press.contact.contact": "Contact Us",
    "press.contact.about": "About Us",

    // Press News Page
    "pressNews.hero.title": "PRESS ABOUT US",
    "pressNews.hero.subtitle":
      "Our news in the media, our achievements and our role in sector developments",
    "pressNews.categories.all": "All",
    "pressNews.categories.corporate": "Corporate",
    "pressNews.categories.politics": "Politics",
    "pressNews.categories.international": "International",
    "pressNews.categories.regional": "Regional",
    "pressNews.categories.technology": "Technology",
    "pressNews.categories.sustainability": "Sustainability",
    "pressNews.grid.title": "Our News in the Media",
    "pressNews.grid.subtitle":
      "News in the media about developments in the logistics sector, our achievements and projects",
    "pressNews.readMore": "Read More",
    "pressNews.loadMore": "Load More News",
    "pressNews.stats.title": "Our Media Statistics",
    "pressNews.stats.mediaNews": "Media News",
    "pressNews.stats.tvInterviews": "TV Interviews",
    "pressNews.stats.radioPrograms": "Radio Programs",
    "pressNews.stats.digitalContent": "Digital Content",
    "pressNews.cta.title": "Press Communication",
    "pressNews.cta.subtitle":
      "Contact us for press releases, interview requests and media communication",
    "pressNews.cta.contact": "Contact Us",
    "pressNews.cta.about": "About Us",

    // Press News Detail Page
    "pressNewsDetail.notFound.title": "News Not Found",
    "pressNewsDetail.notFound.message":
      "The news you are looking for could not be found or may have been removed.",
    "pressNewsDetail.notFound.back": "Back to News",
    "pressNewsDetail.back": "Back to News",
    "pressNewsDetail.author": "Author:",
    "pressNewsDetail.tags": "Tags",
    "pressNewsDetail.share": "Share",
    "pressNewsDetail.relatedNews": "Related News",
    "pressNewsDetail.pressContact": "Press Communication",
    "pressNewsDetail.pressContactDesc":
      "Contact us for press releases and interview requests.",
    "pressNewsDetail.pressContactAction": "Contact Us",
    "pressNewsDetail.backToAll": "Back to All News",
    "pressNewsDetail.likeQuestion": "Did you like this news?",
    "pressNewsDetail.like": "👍 Like",
    "pressNewsDetail.dislike": "👎 Dislike",

    // Events Page
    "events.hero.title": "EVENTS",
    "events.hero.subtitle":
      "Events our company participates in, conferences and social responsibility projects",
    "events.categories.all": "All",
    "events.categories.corporate": "Corporate",
    "events.categories.social": "Social Responsibility",
    "events.categories.education": "Education",
    "events.categories.conference": "Conference",
    "events.types.all": "All",
    "events.types.award": "Award Ceremony",
    "events.types.corporate": "Corporate Event",
    "events.types.celebration": "Celebration",
    "events.types.exhibition": "Exhibition",
    "events.types.professional": "Professional",
    "events.types.seminar": "Seminar",
    "events.grid.title": "Our Events",
    "events.grid.subtitle":
      "Events we participate in, organizations we organize and our social responsibility projects",
    "events.viewDetails": "View Details",
    "events.loadMore": "Load More Events",
    "events.stats.title": "Our Event Statistics",
    "events.stats.events": "Events",
    "events.stats.participants": "Participants",
    "events.stats.socialProjects": "Social Responsibility Projects",
    "events.stats.conferences": "Conferences",
    "events.cta.title": "Event Cooperation",
    "events.cta.subtitle":
      "Contact us for event cooperation, sponsorship requests and organization support",
    "events.cta.cooperation": "🤝 Cooperation Proposal",
    "events.cta.pressRoom": "📰 Press Room",

    // Event Detail Page
    "eventDetail.notFound.title": "Event Not Found",
    "eventDetail.notFound.message":
      "The event you are looking for could not be found or may have been removed.",
    "eventDetail.notFound.back": "Back to Events",
    "eventDetail.back": "Back to Events",
    "eventDetail.eventType": "Event Type:",
    "eventDetail.tags": "Tags",
    "eventDetail.share": "Share",
    "eventDetail.eventInfo": "Event Information",
    "eventDetail.date": "Date",
    "eventDetail.location": "Location",
    "eventDetail.participant": "Participant",
    "eventDetail.duration": "Duration",
    "eventDetail.organizer": "Organizer",
    "eventDetail.eventCooperation": "Event Cooperation",
    "eventDetail.eventCooperationDesc":
      "Contact us for event cooperation and sponsorship requests.",
    "eventDetail.eventCooperationAction": "Contact Us",
    "eventDetail.backToAll": "Back to All Events",
    "eventDetail.likeQuestion": "Did you like this event?",
    "eventDetail.like": "👍 Like",
    "eventDetail.dislike": "👎 Dislike",

    // Container Sales Page
    "container.hero.title": "Container Sales",
    "container.hero.subtitle":
      "Grow your business with our quality and affordable containers. We offer solutions suitable for all your needs with new and used container options.",
    "container.types.title": "Container Types",
    "container.types.subtitle":
      "Various container types for your different needs",
    "container.type1.title": "Dry Container",
    "container.type1.desc":
      "Standard containers ideal for general cargo transportation. Designed for dry cargo, with airtight structure.",
    "container.type1.feature1": "Airtight structure",
    "container.type1.feature2": "Ideal for general cargo",
    "container.type1.feature3": "20' and 40' sizes",
    "container.type1.feature4": "New and used options",
    "container.type1.price": "Request Price",
    "container.type1.condition": "New/Used",
    "container.type2.title": "Reefer Container",
    "container.type2.desc":
      "Refrigerated containers. Specially designed for food, medicine and other temperature-controlled products.",
    "container.type2.feature1": "Temperature control",
    "container.type2.feature2": "Ideal for food and medicine",
    "container.type2.feature3": "Energy efficient system",
    "container.type2.feature4": "Long distance transportation",
    "container.type2.price": "Request Price",
    "container.type2.condition": "New/Used",
    "container.type3.title": "Flat Rack Container",
    "container.type3.desc":
      "Open-top containers designed for heavy and large loads. Ideal for machinery, vehicles and project cargo.",
    "container.type3.feature1": "Open-top structure",
    "container.type3.feature2": "Ideal for heavy loads",
    "container.type3.feature3": "Removable side walls",
    "container.type3.feature4": "Suitable for project cargo",
    "container.type3.price": "Request Price",
    "container.type3.condition": "New/Used",
    "container.type4.title": "Tank Container",
    "container.type4.desc":
      "Tank containers specially designed for liquid and gas transportation. Safe solutions for chemical and food industry.",
    "container.type4.feature1": "Liquid and gas transport",
    "container.type4.feature2": "Safe tank system",
    "container.type4.feature3": "Chemical resistant",
    "container.type4.feature4": "International standards",
    "container.type4.price": "Request Price",
    "container.type4.condition": "New/Used",
    "container.advantages.title": "Our Advantages",
    "container.advantages.subtitle":
      "Features that make us different in container sales",
    "container.advantage1.title": "Competitive Prices",
    "container.advantage1.desc":
      "Competitive prices suitable for market conditions",
    "container.advantage2.title": "Quality Guarantee",
    "container.advantage2.desc": "All our containers pass quality control",
    "container.advantage3.title": "Fast Delivery",
    "container.advantage3.desc":
      "Fast delivery with our extensive logistics network",
    "container.advantage4.title": "Technical Support",
    "container.advantage4.desc":
      "Post-sales technical support and maintenance services",
    "container.sizes.title": "Container Sizes",
    "container.sizes.subtitle": "Various size options for your different needs",
    "container.dimensions": "Dimensions",
    "container.volume": "Volume",
    "container.weight": "Weight",
    "container.process.title": "Sales Process",
    "container.process.subtitle":
      "Step-by-step process we follow in container sales",
    "container.process1.title": "Communication",
    "container.process1.desc": "We listen to your needs",
    "container.process2.title": "Selection",
    "container.process2.desc": "We determine the container suitable for you",
    "container.process3.title": "Quote",
    "container.process3.desc": "We prepare detailed price quote",
    "container.process4.title": "Delivery",
    "container.process4.desc": "We deliver the container safely",
    "container.process5.title": "Support",
    "container.process5.desc": "We provide post-sales support",
    "container.cta.title": "Get Started Now",
    "container.cta.subtitle":
      "Contact our expert team for your container needs and get customized solutions.",
    "container.cta.quote": "Get Quote",
    "container.cta.catalog": "Catalog",
    "container.features.title": "Features:",
    "container.price": "Price",
    "container.condition": "Condition",
    "container.detailed.info": "Detailed Information",

    // Quote Form
    "quote.title": "🚀 Quote Request",
    "quote.subtitle": "Get detailed quotes for your logistics needs",
    "quote.success.title": "✅ Your Quote Request Received!",
    "quote.success.message":
      "We will prepare your personalized quote and contact you as soon as possible.",
    "quote.personalInfo": "👤 Personal Information",
    "quote.fullName": "Full Name *",
    "quote.email": "Email *",
    "quote.phone": "Phone *",
    "quote.company": "Company",
    "quote.serviceInfo": "🚛 Service Information",
    "quote.serviceType": "Service Type *",
    "quote.selectService": "Select service type",
    "quote.cargoType": "Cargo Type *",
    "quote.selectCargo": "Select cargo type",
    "quote.routeInfo": "🗺️ Route Information",
    "quote.origin": "Origin *",
    "quote.originPlaceholder": "E.g: Istanbul, Turkey",
    "quote.destination": "Destination *",
    "quote.destinationPlaceholder": "E.g: Hamburg, Germany",
    "quote.cargoDetails": "📦 Cargo Details",
    "quote.weight": "Weight (kg)",
    "quote.weightPlaceholder": "E.g: 1000",
    "quote.volume": "Volume (m³)",
    "quote.volumePlaceholder": "E.g: 5.5",
    "quote.dateInfo": "📅 Date Information",
    "quote.pickupDate": "Pickup Date",
    "quote.deliveryDate": "Delivery Date",
    "quote.specialRequirements": "⚙️ Special Requirements",
    "quote.specialRequirementsLabel": "Special Requirements",
    "quote.specialRequirementsPlaceholder":
      "Write your special requirements...",
    "quote.additionalMessage": "Additional Message",
    "quote.additionalMessagePlaceholder": "Write additional information...",
    "quote.cancel": "Cancel",
    "quote.submit": "🚀 Submit Quote Request",
    "quote.submitting": "Submitting...",
    "quote.serviceTypes.road": "Road Transportation",
    "quote.serviceTypes.sea": "Sea Transportation",
    "quote.serviceTypes.air": "Air Transportation",
    "quote.serviceTypes.warehouse": "Warehouse Services",
    "quote.serviceTypes.container": "Container Sales",
    "quote.serviceTypes.ship": "Open Ship Discharge",
    "quote.cargoTypes.general": "General Cargo",
    "quote.cargoTypes.container": "Container",
    "quote.cargoTypes.bulk": "Bulk Cargo",
    "quote.cargoTypes.project": "Project Cargo",
    "quote.cargoTypes.hazardous": "Hazardous Materials",
    "quote.cargoTypes.cold": "Cold Chain",
    "quote.cargoTypes.valuable": "Valuable Goods",
    "quote.cargoTypes.other": "Other",

    // Road Transport Page
    "road.title": "ROAD TRANSPORTATION",
    "road.subtitle":
      "In addition to the vehicles in our fleet, we provide all transportation models in the highest quality according to the needs of our customers in domestic and international transportation services with our contracted supplier infrastructure within our company.",
    "road.getQuote": "Get Quote",
    "road.trackCargo": "Track Cargo",
    "road.services.title": "OUR SERVICES",
    "road.services.subtitle":
      "Comprehensive service range we offer in road transportation",
    "road.services.ftl.title": "FTL TRANSPORTATION",
    "road.services.ftl.description":
      "With our 40 years of experience, supplier network, widespread and flexible vehicle fleet suitable for use, our offices in logistics centers and our organizations with the same vehicles going and returning in the spot market, we provide All Risk Insured, complete, damage-free economic deliveries.",
    "road.services.ftl.features.1": "All Risk Insured deliveries",
    "road.services.ftl.features.2":
      "Planning according to daily production program",
    "road.services.ftl.features.3": "Expedition organization throughout Turkey",
    "road.services.ftl.features.4": "Complete and damage-free delivery",
    "road.services.container.title": "CONTAINER ROAD TRANSPORTATION",
    "road.services.container.description":
      "With our domestic container transportation service, we transport your export and import container shipments with our fleet vehicles quickly and reliably with All Risk Insurance guarantee.",
    "road.services.container.features.1":
      "Export and import container shipments",
    "road.services.container.features.2": "All Risk Insurance guarantee",
    "road.services.container.features.3": "Fast and reliable delivery",
    "road.services.container.features.4":
      "Special vehicles belonging to our fleet",
    "road.services.heavy.title": "PROJECT AND HEAVY CARGO TRANSPORTATION",
    "road.services.heavy.description":
      "With our Heavy Transportation and Wide Transportation service, we enable loads that are difficult to transport according to standards to be transported professionally and delivered to the desired address.",
    "road.services.heavy.features.1": "Heavy and wide load transportation",
    "road.services.heavy.features.2": "Professional transportation solutions",
    "road.services.heavy.features.3": "Strong financial structure",
    "road.services.heavy.features.4": "Expert partner network",
    "road.services.international.title": "INTERNATIONAL ROAD TRANSPORTATION",
    "road.services.international.description":
      "With our international transportation service, we continue our logistics activities with our strong financial structure and expert partners. Thanks to our intensive shipments, we can offer competitive freight rates.",
    "road.services.international.features.1": "International transportation",
    "road.services.international.features.2": "Strong financial structure",
    "road.services.international.features.3": "Expert partner network",
    "road.services.international.features.4": "Competitive freight prices",
    "road.services.features": "Features:",
    "road.services.details": "Detailed Information",
    "road.insurance.title": "ALL RISK INSURANCE GUARANTEE",
    "road.insurance.description":
      "It is a type of insurance that covers all kinds of damages and losses (theft, burning, wetting, etc.) that any cargo may suffer during transportation from one place to another by road vehicles suitable for carrying it, within the scope of the General and Special Conditions of Transportation Insurance determined in the policy.",
    "road.insurance.features.1.title": "Comprehensive Guarantee",
    "road.insurance.features.1.desc": "Protection against all risks",
    "road.insurance.features.2.title": "Fast Compensation",
    "road.insurance.features.2.desc": "Quick solution in case of damage",
    "road.insurance.features.3.title": "Expert Team",
    "road.insurance.features.3.desc": "Personnel experienced in insurance",
    "road.insurance.features.4.title": "24/7 Support",
    "road.insurance.features.4.desc": "Uninterrupted insurance support",
    "road.advantages.title": "OUR ADVANTAGES",
    "road.advantages.subtitle":
      "Features that make us different in road transportation",
    "road.advantages.1.title": "40+ Years of Experience",
    "road.advantages.1.description":
      "Experience and reliability brought by our long years in the sector",
    "road.advantages.2.title": "All Risk Insurance",
    "road.advantages.2.description":
      "Comprehensive insurance guarantee in all our shipments",
    "road.advantages.3.title": "Wide Vehicle Fleet",
    "road.advantages.3.description":
      "Suitable vehicle options for all types of cargo",
    "road.advantages.4.title": "24/7 Support",
    "road.advantages.4.description":
      "Uninterrupted customer services and tracking system",
    "road.fleet.title": "OUR VEHICLE FLEET",
    "road.fleet.subtitle":
      "We meet all your transportation needs with our modern and reliable vehicles",
    "road.fleet.truck": "Truck",
    "road.fleet.trailer": "Trailer",
    "road.fleet.container": "Container Vehicle",
    "road.fleet.count": "Number of Vehicles",
    "road.cta.title": "GET STARTED NOW",
    "road.cta.subtitle":
      "Contact our expert team for your road transportation needs and get customized solutions.",
    "road.cta.getQuote": "🚀 Get Quote",
    "road.cta.trackCargo": "📱 Track Cargo",

    // Services Page
    "services.title": "OUR SERVICES",
    "services.subtitle":
      "With our 40 years of experience, we provide comprehensive logistics solutions in road, sea and air transportation. We provide reliable service guarantee with our modern fleet, strong partner network and expert team.",
    "services.getQuote": "Get Quote",
    "services.trackCargo": "Track Cargo",
    "services.details": "Detailed Information",
    "services.scope": "Service Scope",
    "services.range.title": "OUR SERVICE RANGE",
    "services.range.subtitle":
      "Comprehensive logistics services we offer and details of each",
    "services.road.title": "ROAD TRANSPORTATION",
    "services.road.description":
      "With our 40 years of experience, supplier network, widespread and flexible vehicle fleet suitable for use, our offices in logistics centers and our organizations with the same vehicles going and returning in the spot market, we provide All Risk Insured, complete, damage-free economic deliveries.",
    "services.road.features.1": "FTL Transportation",
    "services.road.features.2": "Container Road Transportation",
    "services.road.features.3": "Project and Heavy Cargo Transportation",
    "services.road.features.4": "International Road Transportation",
    "services.sea.title": "SEA TRANSPORTATION",
    "services.sea.description":
      "In sea transportation, we are your reliable partner in international trade with our strong partner network and modern ship fleet. We provide expert service in container, bulk cargo and project cargo transportation.",
    "services.sea.features.1": "Container Transportation",
    "services.sea.features.2": "Bulk Cargo Transportation",
    "services.sea.features.3": "Project Cargo Transportation",
    "services.sea.features.4": "International Sea Transportation",
    "services.air.title": "AIR TRANSPORTATION",
    "services.air.description":
      "We provide fast and reliable solutions in air transportation. We provide 24/7 service for your urgent cargo, valuable goods and time-critical shipments.",
    "services.air.features.1": "Urgent Cargo Transportation",
    "services.air.features.2": "Valuable Goods Transportation",
    "services.air.features.3": "Document Transportation",
    "services.air.features.4": "Charter Aircraft Services",
    "services.warehouse.title": "WAREHOUSE SERVICES",
    "services.warehouse.description":
      "We provide container storage, repair, lashing and handling services in our modern warehouse facilities. We provide cargo management in a safe and controlled environment.",
    "services.warehouse.features.1": "Container Storage",
    "services.warehouse.features.2": "Container Repair",
    "services.warehouse.features.3": "Lashing Services",
    "services.warehouse.features.4": "Handling Services",
    "services.container.title": "CONTAINER SALES",
    "services.container.description":
      "We are your reliable partner in new and used container sales. We offer affordable solutions in dry, reefer, tank and flat-rack container varieties.",
    "services.container.features.1": "Dry Container",
    "services.container.features.2": "Reefer Container",
    "services.container.features.3": "Tank Container",
    "services.container.features.4": "Flat-Rack Container",
    "services.ship.title": "OPEN SHIP DISCHARGE",
    "services.ship.description":
      "With our open ship discharge services, we carry out your bulk cargo, container and project cargo discharge operations with professional team and modern equipment.",
    "services.ship.features.1": "Bulk Cargo Discharge",
    "services.ship.features.2": "Container Discharge",
    "services.ship.features.3": "Project Cargo Discharge",
    "services.ship.features.4": "Hazardous Material Discharge",
    "services.advantages.title": "OUR ADVANTAGES",
    "services.advantages.subtitle":
      "Features that make us different in our logistics services",
    "services.advantage1.title": "40+ Years of Experience",
    "services.advantage1.description":
      "Experience and reliability brought by our long years in the sector",
    "services.advantage2.title": "All Risk Insurance",
    "services.advantage2.description":
      "Comprehensive insurance guarantee in all our shipments",
    "services.advantage3.title": "Wide Service Network",
    "services.advantage3.description":
      "Comprehensive logistics solutions with road, sea and air transportation",
    "services.advantage4.title": "24/7 Support",
    "services.advantage4.description":
      "Uninterrupted customer services and tracking system",
    "services.process.title": "OUR WORK PROCESS",
    "services.process.subtitle":
      "Steps we follow from your service request to delivery",
    "services.process.step1.title": "Request Evaluation",
    "services.process.step1.description":
      "We evaluate your service request in detail",
    "services.process.step2.title": "Price Quote",
    "services.process.step2.description":
      "We prepare the most suitable price quote for you",
    "services.process.step3.title": "Planning",
    "services.process.step3.description":
      "We prepare your transportation plan in detail",
    "services.process.step4.title": "Delivery",
    "services.process.step4.description": "We make safe and timely delivery",
    "services.stats.vehicles": "Vehicle Fleet",
    "services.stats.ships": "Ship Fleet",
    "services.stats.planes": "Aircraft Partners",
    "services.stats.warehouse": "m² Warehouse Area",
    "services.cta.title": "GET STARTED NOW",
    "services.cta.subtitle":
      "Contact our expert team for your logistics needs and get customized solutions.",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("tr");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
