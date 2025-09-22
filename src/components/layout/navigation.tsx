import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { LanguageSwitcher } from '../ui/language-switcher';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../utils/cn';
import { useState, useEffect } from 'react';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: t('nav.corporate'),
      href: '/corporate',
      hasDropdown: true,
      dropdownItems: [
        { href: '/about', label: t('nav.about') },
        { href: '/vision-mission', label: t('nav.visionMission') },
        { href: '/kvk', label: t('nav.kvk') },
        { href: '/sustainability', label: t('nav.sustainability') },
        { href: '/catalog', label: t('nav.catalog') },
      ]
    },
    {
      label: t('nav.services'),
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { href: '/services', label: 'Hizmetlerimiz' },
        { href: '/services/road', label: t('nav.roadTransport') },
        { href: '/services/sea', label: t('nav.seaTransport') },
        { href: '/services/air', label: t('nav.airTransport') },
        { href: '/services/warehouse', label: t('nav.warehouseServices') },
        { href: '/services/container', label: t('nav.containerSales') },
        { href: '/services/ship', label: t('nav.shipUnloading') },
      ]
    },
    { href: '/work-method', label: t('nav.workMethod') },
    {
      label: t('nav.press'),
      href: '/press-room',
      hasDropdown: true,
      dropdownItems: [
        { href: '/press-room/news', label: t('nav.pressNews') },
        { href: '/press-room/events', label: t('nav.events') },
      ]
    },
    { href: '/human-resources', label: t('nav.humanResources') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={cn(
      'border-b border-white/20 shadow-lg sticky top-0 z-50 animate-slide-in-down transition-all duration-300',
      isScrolled
        ? 'bg-white shadow-xl'
        : 'glass-effect',
      className
    )}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group animate-fade-in-left">
              <img
                src="/images/logo/ufuk-loj-logo.svg"
                alt="Ufuk Lojistik Logo"
                className="w-14 h-14 group-hover:scale-105 transition-all duration-300 hover-rotate"
              />
              <span className="ml-3 text-2xl font-black tracking-wider bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent uppercase">
                UFUK LOJİSTİK
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="ml-8 flex items-center space-x-1 animate-fade-in-right">
              {navItems.map((item, index) => (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 relative whitespace-nowrap hover-lift flex items-center justify-center min-w-fit',
                      location.pathname === item.href
                        ? 'bg-blue-50 text-blue-600 shadow-lg animate-glow'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="block">{item.label}</span>
                    {item.hasDropdown && (
                      <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {location.pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur opacity-50"></div>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-3">
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.href}
                            to={dropdownItem.href}
                            className="block px-5 py-3 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium rounded-lg mx-2"
                            style={{ animationDelay: `${dropdownIndex * 0.05}s` }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Button & Language Switcher */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-8 flex items-center justify-center flex-shrink-0">
                <LanguageSwitcher />
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow whitespace-nowrap w-32 flex items-center justify-center"
                asChild
              >
                <Link to="/auth">{t('nav.customerLogin')}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {navItems.map((item) => (
                <div key={item.href} className="space-y-1">
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                      location.pathname === item.href
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                            location.pathname === dropdownItem.href
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="w-20 h-8 flex items-center justify-center">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-4 py-2 text-sm font-semibold"
                    asChild
                  >
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.customerLogin')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
