import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function EventsPage() {
  const { t } = useLanguage();

  // Örnek etkinlik verileri - gerçek veriler API'den gelecek
  const events = [
    {
      id: 1,
      title: "Resim Yarışması Ödül Töreni",
      description:
        "Yenisehir İlçe Milli Eğitim Müdürlüğü ile birlikte düzenlenen resim yarışmasının ödül töreni. Öğrencilerin yaratıcılığını destekleyen bu etkinlikte, lojistik temalı resimler değerlendirildi.",
      image: "/events/painting-competition.jpg",
      date: "2024-01-15",
      location: "Yenisehir İlçe Milli Eğitim Müdürlüğü",
      category: "Sosyal Sorumluluk",
      type: "Ödül Töreni",
      participants: "150+ Öğrenci",
      duration: "2 saat",
    },
    {
      id: 2,
      title: "23 Nisan Şirket Etkinliği",
      description:
        "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kapsamında düzenlenen şirket etkinliği. Mezitli Belediyesi işbirliği ile gerçekleştirilen bu etkinlikte çocuklar ve aileleri eğlenceli vakit geçirdi.",
      image: "/events/23-april-event.jpg",
      date: "2024-04-23",
      location: "Mezitli Belediyesi",
      category: "Kurumsal",
      type: "Şirket Etkinliği",
      participants: "200+ Kişi",
      duration: "4 saat",
    },
    {
      id: 3,
      title: "2023 Yeni Yıl Kutlama Yemeği",
      description:
        "2023 yılını geride bırakırken düzenlenen yeni yıl kutlama yemeği. Şirket çalışanları ve ailelerinin katıldığı bu etkinlikte, yılın başarıları kutlandı ve yeni yıl hedefleri paylaşıldı.",
      image: "/events/new-year-2023.jpg",
      date: "2023-12-31",
      location: "Ufuk Lojistik Merkez",
      category: "Kurumsal",
      type: "Kutlama",
      participants: "100+ Çalışan",
      duration: "3 saat",
    },
    {
      id: 4,
      title: "2022 Lojistik Temalı Resim Sergisi",
      description:
        "Lojistik sektörünün önemini vurgulamak amacıyla düzenlenen resim sergisi. Öğrencilerin lojistik konusundaki farkındalığını artırmak için gerçekleştirilen bu etkinlik büyük ilgi gördü.",
      image: "/events/logistics-exhibition.jpg",
      date: "2022-11-15",
      location: "Mersin Marina",
      category: "Eğitim",
      type: "Sergi",
      participants: "300+ Ziyaretçi",
      duration: "1 gün",
    },
    {
      id: 5,
      title: "Lojistik Sektörü Konferansı",
      description:
        "Lojistik sektöründeki son gelişmeler ve gelecek trendleri hakkında düzenlenen konferans. Sektör uzmanları ve akademisyenlerin katıldığı bu etkinlikte önemli bilgiler paylaşıldı.",
      image: "/events/logistics-conference.jpg",
      date: "2024-02-20",
      location: "Mersin Ticaret ve Sanayi Odası",
      category: "Konferans",
      type: "Profesyonel",
      participants: "250+ Katılımcı",
      duration: "6 saat",
    },
    {
      id: 6,
      title: "Çevre Dostu Lojistik Semineri",
      description:
        "Sürdürülebilir lojistik uygulamaları ve çevre dostu çözümler hakkında düzenlenen seminer. Çevre bilincini artırmak amacıyla gerçekleştirilen bu etkinlik sektörde önemli bir etki yarattı.",
      image: "/events/green-logistics-seminar.jpg",
      date: "2024-03-10",
      location: "Mersin Üniversitesi",
      category: "Eğitim",
      type: "Seminer",
      participants: "180+ Katılımcı",
      duration: "4 saat",
    },
  ];

  const categories = [
    t("events.categories.all"),
    t("events.categories.corporate"),
    t("events.categories.social"),
    t("events.categories.education"),
    t("events.categories.conference"),
  ];
  const eventTypes = [
    t("events.types.all"),
    t("events.types.award"),
    t("events.types.corporate"),
    t("events.types.celebration"),
    t("events.types.exhibition"),
    t("events.types.professional"),
    t("events.types.seminar"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-neumorphism rounded-3xl p-12 animate-scale-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("events.hero.title")}
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("events.hero.subtitle")}
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
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

      {/* Events Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("events.grid.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("events.grid.subtitle")}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    category === t("events.categories.all")
                      ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Event Type Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {eventTypes.map((type, index) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    type === t("events.types.all")
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Link
                key={event.id}
                to={`/press-room/events/${event.id}`}
                className="group animate-fade-in-up card-hover-gentle"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl transition-all duration-500 rounded-2xl overflow-hidden hover-glow">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                        {event.category}
                      </span>
                    </div>
                    {/* Event Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-600 font-semibold">
                        {event.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.duration}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {event.description}
                    </CardDescription>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                        <span>{event.participants}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                      <span>{t("events.viewDetails")}</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {t("events.loadMore")}
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("events.stats.title")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: t("events.stats.events"), icon: "🎉" },
              {
                number: "2000+",
                label: t("events.stats.participants"),
                icon: "👥",
              },
              {
                number: "15+",
                label: t("events.stats.socialProjects"),
                icon: "🤝",
              },
              {
                number: "10+",
                label: t("events.stats.conferences"),
                icon: "🎤",
              },
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
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("events.cta.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("events.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t("events.cta.cooperation")}
              </Link>
              <Link
                to="/press-room"
                className="px-10 py-4 bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {t("events.cta.pressRoom")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
