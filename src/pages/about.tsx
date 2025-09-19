import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/images/logo/ufuk-loj-logo.svg"
                alt="Ufuk Lojistik Logo"
                className="w-24 h-24"
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
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
                {t('about.company.story')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.company.desc1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.company.desc2')}
              </p>
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-400 hover:from-primary-600 hover:to-secondary-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                {t('about.explore.services')}
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
              {t('about.terminal')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.terminal.desc')}
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
                  {t('about.terminal.area')}
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
                  {t('about.vehicles')}
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
                  {t('about.equipment')}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.erp.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.erp.desc')}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('about.technology')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.technology.desc1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.technology.desc2')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.tech.features.central')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.tech.features.savings')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.tech.features.transparency')}</span>
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
              {t('about.insurance')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.insurance.desc')}
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
                <CardTitle className="text-2xl text-gray-900">{t('about.all.risk.title')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('about.all.risk.desc')}
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
                <CardTitle className="text-2xl text-gray-900">{t('about.individual.accident.title')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('about.individual.accident.desc')}
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
                {t('about.fleet')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.fleet.desc1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.fleet.desc2')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.fleet.features.euro6')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.fleet.features.expert')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('about.fleet.features.growth')}</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.environmentally.friendly')}</h3>
                  <p className="text-gray-600">
                    {t('about.environmentally.friendly.desc')}
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
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('about.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/services">Hizmetlerimizi İnceleyin</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link to="/contact">İletişime Geçin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
