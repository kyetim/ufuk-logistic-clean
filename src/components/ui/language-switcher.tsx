import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className="flex items-center justify-center space-x-2 w-20 h-8 flex-shrink-0">
      <span className={`text-xs font-medium transition-colors duration-200 w-4 text-center flex-shrink-0 ${language === 'tr' ? 'text-blue-600' : 'text-gray-400'}`}>
        TR
      </span>

      {/* Apple Style Toggle */}
      <button
        onClick={toggleLanguage}
        className={`
          relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 flex-shrink-0
          ${language === 'en' ? 'bg-blue-600' : 'bg-gray-300'}
        `}
      >
        <span
          className={`
            inline-block h-3 w-3 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out
            ${language === 'en' ? 'translate-x-5' : 'translate-x-1'}
          `}
        />
      </button>

      <span className={`text-xs font-medium transition-colors duration-200 w-4 text-center flex-shrink-0 ${language === 'en' ? 'text-blue-600' : 'text-gray-400'}`}>
        EN
      </span>
    </div>
  );
}
