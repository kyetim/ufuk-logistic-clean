import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../utils/cn';

export function AuthPage() {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    fullName: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle success/error here
    }, 2000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/auth/authPage-bg.jpg)',
          filter: 'brightness(1.1) saturate(1.7)'
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-blue-50/70 to-indigo-50/75"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center group">
            <img
              src="/images/logo/ufuk-loj-logo.svg"
              alt="Ufuk Lojistik Logo"
              className="w-12 h-12 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="ml-2 text-xl font-black tracking-wider bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent uppercase">
              UFUK LOJİSTİK
            </span>
          </Link>
        </div>

        {/* Auth Card */}
        <Card className="bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl w-full max-w-md">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? t('auth.welcomeBack') : t('auth.createAccount')}
            </CardTitle>
            <CardDescription className="text-gray-700">
              {isLogin ? t('auth.loginDescription') : t('auth.registerDescription')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 px-6 py-6">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={cn(
                  'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
                  isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('auth.login')}
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={cn(
                  'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
                  !isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('auth.register')}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.fullName')}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.fullNamePlaceholder')}
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.emailPlaceholder')}
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.username')}
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.usernamePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.password')}
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.passwordPlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.confirmPassword')}
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.confirmPasswordPlaceholder')}
                      required={!isLogin}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.username')}
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.usernamePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('auth.password')}
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-sm"
                      placeholder={t('auth.passwordPlaceholder')}
                      required
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{t('auth.rememberMe')}</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    {t('auth.forgotPassword')}
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {t('auth.processing')}
                  </div>
                ) : (
                  isLogin ? t('auth.loginButton') : t('auth.registerButton')
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('auth.or')}</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full py-2.5 border-gray-300 hover:bg-gray-50 transition-colors text-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                {t('auth.continueWithGoogle')}
              </Button>
            </div>

            {/* Terms */}
            {!isLogin && (
              <p className="text-xs text-gray-500 text-center">
                {t('auth.termsText')}{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                  {t('auth.terms')}
                </Link>{' '}
                {t('auth.and')}{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                  {t('auth.privacy')}
                </Link>
              </p>
            )}
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-sm text-gray-800 hover:text-blue-600 transition-colors flex items-center justify-center bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/90"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('auth.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
