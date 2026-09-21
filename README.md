# 🚛 Ufuk Lojistik — Kurumsal Web Sitesi

Bir lojistik firması için geliştirilmiş, iki dilli (TR/EN) kurumsal web sitesi. Kara, deniz ve hava taşımacılığı hizmetlerini, konteyner satışını, insan kaynaklarını ve basın içeriklerini tek bir SPA içinde sunar.

*Bilingual (TR/EN) corporate website for a logistics company — React 19, Vite, TypeScript, Tailwind CSS, three.js.*

## Özellikler

- **İki dil desteği** — Harici kütüphane olmadan, React Context tabanlı TR/EN çeviri altyapısı
- **Hizmet sayfaları** — Kara, deniz, hava, parsiyel/komple (FTL), ağır yük ve uluslararası taşımacılık detay sayfaları
- **İnteraktif katalog** — three.js / React Three Fiber ile 3B dergi görünümlü ürün-hizmet kataloğu
- **Formlar** — İletişim, teklif alma ve CV başvuru form modalları
- **Kargo takip ekranı** — Takip numarasıyla sorgulama arayüzü
- **İK ve basın** — Açık pozisyonlar, iş ilanı detayı, basın odası, haberler ve etkinlikler
- **KVKK sayfası** ve mobil öncelikli responsive tasarım

> **Not:** Bu proje yalnızca frontend'dir. Formlar ve kargo takip ekranı şu an örnek veri ve simüle edilmiş gönderim kullanır; bir backend/API bağlantısı henüz yoktur.

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Arayüz | React 19, TypeScript 5.8 |
| Build | Vite 7 |
| Stil | Tailwind CSS 3, Radix UI primitifleri |
| Yönlendirme | React Router 7 |
| 3B | three.js, React Three Fiber, Drei |
| Kod kalitesi | ESLint, Prettier |

## Kurulum

Gereksinim: Node.js 20+

```bash
git clone https://github.com/kyetim/ufuk-logistic-clean.git
cd ufuk-logistic-clean
npm install
npm run dev
```

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Tip kontrolü + production build |
| `npm run preview` | Build önizleme |
| `npm run lint` / `npm run lint:fix` | Lint kontrolü / otomatik düzeltme |
| `npm run type-check` | Sadece TypeScript kontrolü |
| `npm run format` / `npm run format:check` | Prettier ile biçimlendirme |

## Proje Yapısı

```
src/
├── components/
│   ├── catalog/     # 3B ve interaktif katalog bileşenleri
│   ├── forms/       # İletişim, teklif ve CV form modalları
│   ├── layout/      # Navigasyon, footer, sayfa iskeleti
│   └── ui/          # Buton, kart, input, dil değiştirici vb.
├── contexts/        # LanguageContext (TR/EN)
├── hooks/           # Özel hook'lar
├── pages/           # Sayfalar (hizmet detayları pages/services altında)
├── styles/          # Global ve sayfaya özel stiller
└── utils/           # Yardımcı fonksiyonlar
```

Detaylı notlar için [PROJE_REHBERI.md](./PROJE_REHBERI.md) ve [GELISTIRME_REHBERI.md](./GELISTIRME_REHBERI.md) dosyalarına bakabilirsiniz.

## İletişim

**Kadir Yetim** — [LinkedIn](https://www.linkedin.com/in/kadir-yetim-3069b21b2/) · [GitHub](https://github.com/kyetim)
