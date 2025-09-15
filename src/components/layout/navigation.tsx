import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/services', label: 'Hizmetlerimiz' },
    { href: '/tracking', label: 'Kargo Takip' },
    { href: '/pricing', label: 'Fiyatlandırma' },
    { href: '/contact', label: 'İletişim' },
  ];

  return (
    <nav className={cn('backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg sticky top-0 z-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img
                src="/ufuk-loj-logo.svg"
                alt="Ufuk Lojistik Logo"
                className="w-12 h-12 group-hover:scale-105 transition-all duration-300"
              />
              <span className="ml-3 text-2xl font-black tracking-wider bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent uppercase">
                UFUK LOJİSTİK
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300 relative group',
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  )}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-full px-6 py-2 text-base font-semibold transition-all duration-300"
              >
                Giriş Yap
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 py-2 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Kayıt Ol
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
