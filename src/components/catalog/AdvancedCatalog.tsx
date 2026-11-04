import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { SoundEffects, HapticFeedback } from "../../utils/soundEffects";

interface AdvancedCatalogProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

interface PageState {
  isFlipping: boolean;
  flipDirection: "left" | "right" | null;
  flipProgress: number;
}

export function AdvancedCatalog({
  currentPage,
  onPageChange,
  totalPages,
}: AdvancedCatalogProps) {
  const { t } = useLanguage();
  const [pageState, setPageState] = useState<PageState>({
    isFlipping: false,
    flipDirection: null,
    flipProgress: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const catalogRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Realistic page flip animation
  const flipPage = useCallback(
    (direction: "left" | "right") => {
      if (pageState.isFlipping) return;

      // Play sound and haptic feedback
      SoundEffects.playPageTurn();
      HapticFeedback.pageTurn();

      setPageState({
        isFlipping: true,
        flipDirection: direction,
        flipProgress: 0,
      });

      // Animate the flip
      const startTime = performance.now();
      const duration = 800; // milliseconds

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for realistic page turn
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setPageState((prev) => ({
          ...prev,
          flipProgress: easeProgress,
        }));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Complete the flip
          const newPage =
            direction === "left"
              ? Math.max(0, currentPage - 1)
              : Math.min(totalPages - 1, currentPage + 1);

          onPageChange(newPage);

          setPageState({
            isFlipping: false,
            flipDirection: null,
            flipProgress: 0,
          });
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    },
    [pageState.isFlipping, currentPage, totalPages, onPageChange],
  );

  // Mouse drag for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setRotation({
      x: Math.max(-20, Math.min(20, deltaY * 0.15)),
      y: Math.max(-20, Math.min(20, deltaX * 0.15)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Smooth return to original position
    setRotation({ x: 0, y: 0 });
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStart.x;
    const deltaY = touch.clientY - dragStart.y;

    setRotation({
      x: Math.max(-20, Math.min(20, deltaY * 0.15)),
      y: Math.max(-20, Math.min(20, deltaX * 0.15)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
  };

  // Page corner click handlers
  const handleCornerClick = (direction: "left" | "right") => {
    SoundEffects.playPageClick();
    HapticFeedback.light();
    flipPage(direction);
  };

  // Hover effects
  const handleCornerHover = () => {
    SoundEffects.playPageHover();
    HapticFeedback.light();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (pageState.isFlipping) return;

      switch (e.key) {
        case "ArrowLeft":
          if (currentPage > 0) flipPage("left");
          break;
        case "ArrowRight":
          if (currentPage < totalPages - 1) flipPage("right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, totalPages, pageState.isFlipping, flipPage]);

  // Initialize sound effects
  useEffect(() => {
    SoundEffects.init();
  }, []);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate page transform based on flip state
  const getPageTransform = (pageIndex: number) => {
    if (!pageState.isFlipping || pageState.flipDirection === null) {
      return "rotateY(0deg)";
    }

    const isCurrentPage = pageIndex === currentPage;
    const isNextPage =
      pageIndex ===
      (pageState.flipDirection === "left" ? currentPage - 1 : currentPage + 1);

    if (isCurrentPage) {
      if (pageState.flipDirection === "left") {
        return `rotateY(${-180 * pageState.flipProgress}deg)`;
      } else {
        return `rotateY(${180 * pageState.flipProgress}deg)`;
      }
    }

    if (isNextPage) {
      if (pageState.flipDirection === "left") {
        return `rotateY(${-180 + 180 * pageState.flipProgress}deg)`;
      } else {
        return `rotateY(${180 - 180 * pageState.flipProgress}deg)`;
      }
    }

    return "rotateY(0deg)";
  };

  return (
    <div className="catalog-3d-container flex items-center justify-center min-h-[700px] p-8">
      {/* Left navigation arrow */}
      <div className="absolute left-8 z-20">
        <button
          onClick={() => handleCornerClick("left")}
          disabled={currentPage === 0 || pageState.isFlipping}
          className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center transition-all duration-300 ${
            currentPage === 0 || pageState.isFlipping
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:scale-110 hover:shadow-2xl"
          }`}
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Right navigation arrow */}
      <div className="absolute right-8 z-20">
        <button
          onClick={() => handleCornerClick("right")}
          disabled={currentPage === totalPages - 1 || pageState.isFlipping}
          className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center transition-all duration-300 ${
            currentPage === totalPages - 1 || pageState.isFlipping
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:scale-110 hover:shadow-2xl"
          }`}
        >
          <svg
            className="w-8 h-8 text-gray-700"
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
        </button>
      </div>

      {/* 3D Catalog Book */}
      <div
        ref={catalogRef}
        className={`catalog-book ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          setIsHovered(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
      >
        {/* Book Shadow */}
        <div
          className="absolute inset-0 bg-black/30 rounded-lg blur-2xl transition-all duration-300"
          style={{
            transform: `translateZ(-50px) translateY(30px) scale(${1 + Math.abs(rotation.x) * 0.02})`,
            opacity: 0.4 + Math.abs(rotation.x) * 0.02,
          }}
        />

        {/* Current Page */}
        <div
          className="catalog-page paper-texture realistic-shadow"
          style={{
            transform: getPageTransform(currentPage),
            transformOrigin:
              pageState.flipDirection === "left"
                ? "right center"
                : "left center",
            zIndex: 10,
          }}
        >
          <div className="page-content">
            <MagazinePageContent pageNumber={currentPage} />
          </div>
          <div className="page-number">{currentPage + 1}</div>

          {/* Interactive Page Corners */}
          {currentPage > 0 && (
            <div
              className="page-corner top-right"
              onClick={() => handleCornerClick("left")}
              onMouseEnter={handleCornerHover}
            />
          )}
          {currentPage < totalPages - 1 && (
            <div
              className="page-corner bottom-left"
              onClick={() => handleCornerClick("right")}
              onMouseEnter={handleCornerHover}
            />
          )}
        </div>

        {/* Next Page (for smooth transitions) */}
        {currentPage < totalPages - 1 && (
          <div
            className="catalog-page paper-texture realistic-shadow"
            style={{
              transform: getPageTransform(currentPage + 1),
              transformOrigin: "left center",
              zIndex: 5,
            }}
          >
            <div className="page-content">
              <MagazinePageContent pageNumber={currentPage + 1} />
            </div>
            <div className="page-number">{currentPage + 2}</div>
          </div>
        )}

        {/* Previous Page (for smooth transitions) */}
        {currentPage > 0 && (
          <div
            className="catalog-page paper-texture realistic-shadow"
            style={{
              transform: getPageTransform(currentPage - 1),
              transformOrigin: "right center",
              zIndex: 5,
            }}
          >
            <div className="page-content">
              <MagazinePageContent pageNumber={currentPage - 1} />
            </div>
            <div className="page-number">{currentPage}</div>
          </div>
        )}

        {/* Page Turn Sound Effect */}
        {pageState.isFlipping && <div className="page-turn-sound" />}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-xl border border-gray-200">
          <p className="text-sm text-gray-700 font-medium">
            {t("catalog.instructions.drag")} • {t("catalog.instructions.click")}{" "}
            • {t("catalog.instructions.arrows")}
          </p>
        </div>
      </div>
    </div>
  );
}

// Magazine Page Content Component
function MagazinePageContent({ pageNumber }: { pageNumber: number }) {
  const { t: _t } = useLanguage();

  const getPageContent = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return (
          <div className="text-center">
            <div className="page-header">
              <div className="magazine-image mb-8">
                <span className="text-8xl">🚛</span>
              </div>
              <h1 className="page-title">UFUK LOJİSTİK</h1>
              <p className="page-subtitle">42 Yıllık Deneyim</p>
            </div>

            <div className="content-block">
              <h3>1980'den Beri Güvenilir Partner</h3>
              <p>
                Ufuk Lojistik olarak, 1980 yılından bu yana lojistik sektöründe
                faaliyet gösteren, kara yolu, hava yolu, deniz yolu
                taşımacılığı, forwarding ve depolama hizmetleri sunan güvenilir
                bir şirketiz.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">42+</div>
                <div className="stat-label">Yıllık Deneyim</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">350+</div>
                <div className="stat-label">Çalışan</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">180K</div>
                <div className="stat-label">m² Terminal</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Çekici</div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">MÜŞTERİ POLİTİKAMIZ</h1>
              <p className="page-subtitle">
                Müşteri Memnuniyeti Odaklı Yaklaşım
              </p>
            </div>

            <div className="content-block">
              <h3>Etik ve Adil İlişkiler</h3>
              <p>
                Müşterilerimizle etik ve adil ilişkiler kurarak, uzun vadeli iş
                birlikleri geliştiriyoruz. Her müşterimizi değerli bir partner
                olarak görüyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Müşteri Memnuniyeti</h3>
              <p>
                Sürekli gelişim anlayışımızla müşteri memnuniyetini artırmak
                için etkili geri bildirim yönetimi yapıyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Yeni Müşteri Kazanımı</h3>
              <p>
                Yeni müşteri kazanımını değerli buluyor ve mevcut
                müşterilerimizle aynı kalitede hizmet sunuyoruz.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">ŞİRKETİMİZDE</h1>
              <p className="page-subtitle">İç Değerlerimiz ve Prensiplerimiz</p>
            </div>

            <div className="content-block">
              <h3>Değerlerimizi Koruma</h3>
              <p>
                Şirket değerlerimizi koruyarak, performans gelişimine katkıda
                bulunuyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Kişisel ve Kurumsal Ayrım</h3>
              <p>
                Kişisel çıkarlarımızı şirket çıkarlarından ayırarak, şeffaf bir
                yönetim anlayışı benimsiyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Kaynak Kullanımı</h3>
              <p>
                Şirket varlıklarını, tesislerini ve hizmetlerini yasalara uygun
                şekilde kullanıyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Bilgi Güvenliği</h3>
              <p>
                Paydaş bilgilerini hassasiyetle koruyarak, güvenilir bir iş
                ortamı sağlıyoruz.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">DEĞERLERİMİZ</h1>
              <p className="page-subtitle">
                Şirketimizin Temelini Oluşturan Değerler
              </p>
            </div>

            <div className="content-block">
              <h3>🎯 Başarma Azmi</h3>
              <p>
                Hedeflerimize ulaşmak için kararlılıkla çalışırız. Her projede
                mükemmellik arayışı ve sürekli gelişim anlayışı.
              </p>
            </div>

            <div className="content-block">
              <h3>👥 Müşteri Odaklılık</h3>
              <p>
                Müşteri ihtiyaçlarını öncelikli tutarız. Müşteri ihtiyaçlarını
                anlama ve en iyi çözümleri sunma odaklı yaklaşım.
              </p>
            </div>

            <div className="content-block">
              <h3>💡 Bireysel İnisiyatif</h3>
              <p>
                Yaratıcı çözümler üretmek için inisiyatif alırız. Takım
                çalışması içinde bireysel sorumluluk ve inisiyatif alma.
              </p>
            </div>

            <div className="content-block">
              <h3>🤝 Güvenilirlik</h3>
              <p>
                Sözümüzün arkasında dururuz. Söz verdiğimiz hizmetleri zamanında
                ve kaliteli şekilde teslim etme.
              </p>
            </div>

            <div className="content-block">
              <h3>🌍 Topluma Katkı</h3>
              <p>
                Sosyal sorumluluklarımızı yerine getiririz. Sosyal sorumluluk
                bilinci ile topluma değer katma anlayışı.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">HAKKIMIZDA</h1>
              <p className="page-subtitle">42 Yıllık Lojistik Deneyimi</p>
            </div>

            <div className="magazine-image">
              <span className="text-8xl">🏭</span>
            </div>

            <div className="content-block">
              <h3>42 Yıllık Deneyim</h3>
              <p>
                1980 yılından beri lojistik sektöründe faaliyet gösteren Ufuk
                Lojistik, karayolu, havayolu, denizyolu, kombine taşımacılık,
                açık kargo ve proje kargo nakliye ile depolama hizmetleri
                sunmaktadır.
              </p>
            </div>

            <div className="content-block">
              <h3>Güçlü Altyapı</h3>
              <p>
                Mersin, Gaziantep ve İskenderun'da ofislerimiz bulunmakta olup,
                Mersin Prolas ve Merport Lojistik ile işbirliği yaparak 200'den
                fazla personel istihdam etmekteyiz.
              </p>
            </div>

            <div className="content-block">
              <h3>Teknoloji ve Yazılım</h3>
              <p>
                Kendi lojistik yazılımımıza 10 yıldan fazla süredir yatırım
                yaparak, sektörde nadir bulunan bu özelliğe sahip lojistik
                firmalarından biriyiz.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">TESİSLERİMİZ</h1>
              <p className="page-subtitle">Modern Altyapı ve Ekipmanlar</p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">109K</div>
                <div className="stat-label">m² Toplam Alan</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Şehir</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">70+</div>
                <div className="stat-label">Çekici</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Reachstacker</div>
              </div>
            </div>

            <div className="content-block">
              <h3>Terminal Sahaları</h3>
              <p>
                180.000 m² terminal sahasında 100'ü aşkın çekici ve 200'e yakın
                ekipmanla konteyner depolama, yükleme-boşaltma ve elleçleme
                hizmetleri vermekteyiz.
              </p>
            </div>

            <div className="content-block">
              <h3>Modern Ekipmanlar</h3>
              <p>
                Tüm tesislerimizde modern ekipmanlar ve güvenli çalışma
                ortamları ile hizmet veriyoruz.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">TEKNOLOJİ</h1>
              <p className="page-subtitle">İnovasyon ve Yazılım Liderliği</p>
            </div>

            <div className="content-block">
              <h3>Yazılım Geliştirme</h3>
              <p>
                10 yıldan fazla süredir kendi lojistik yazılımımıza yatırım
                yaparak, sektörde nadir bulunan bu özelliğe sahip lojistik
                firmalarından biriyiz.
              </p>
            </div>

            <div className="content-block">
              <h3>Operasyonel Şeffaflık</h3>
              <p>
                Tüm operasyonel süreçleri tek noktadan takip ederek, bu
                bilgileri müşterilerimizle şeffaf ve anlık olarak paylaşıyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Özelleştirilmiş Çözümler</h3>
              <p>
                Nitelikli operasyon ekibimizle müşteri ihtiyaçlarına özel
                operasyonel çözümler geliştirerek, düşük maliyetli ve kaliteli
                hizmet sunuyoruz.
              </p>
            </div>

            <div className="content-block">
              <h3>Teknoloji Liderliği</h3>
              <p>
                Kendi yazılımımızla sektörde öncü konumdayız ve sürekli yenilik
                yapıyoruz.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">İLETİŞİM</h1>
              <p className="page-subtitle">Bizimle İletişime Geçin</p>
            </div>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">+90 324 123 45 67</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">info@ufuklojistik.com</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  Mersin, Gaziantep, İskenderun
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">www.ufuklojistik.com</div>
              </div>
            </div>

            <div className="content-block">
              <h3>42 Yıllık Deneyim</h3>
              <p>
                42 yıllık deneyimimizle size en iyi hizmeti sunmaya hazırız.
                Lojistik ihtiyaçlarınız için bizimle iletişime geçin.
              </p>
            </div>

            <div className="content-block">
              <h3>Güvenilir Partner</h3>
              <p>
                Lojistik sektöründe güvenilir partner olarak hizmet vermeye
                devam ediyoruz. Müşteri memnuniyeti bizim önceliğimizdir.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <div className="page-header">
              <h1 className="page-title">Sayfa {pageNumber + 1}</h1>
              <p className="page-subtitle">İçerik yükleniyor...</p>
            </div>
          </div>
        );
    }
  };

  return getPageContent(pageNumber);
}
