# 🚀 Ufuk Lojistik - Modern React Kargo Yönetim Sistemi

Ufuk Lojistik, modern React teknolojileri kullanılarak geliştirilmiş kapsamlı bir kargo ve lojistik yönetim sistemidir. Kullanıcı dostu arayüzü, güçlü backend entegrasyonu ve real-time takip özellikleri ile profesyonel lojistik çözümleri sunar.

## ✨ Özellikler

- 🔐 **Kullanıcı Yönetimi**: Güvenli giriş/kayıt sistemi
- 📦 **Sipariş Yönetimi**: Kapsamlı sipariş oluşturma ve takip
- 🗺️ **Real-time Takip**: Harita entegrasyonu ile anlık konum takibi
- 💳 **Ödeme Sistemi**: Stripe entegrasyonu ile güvenli ödemeler
- 🎧 **Müşteri Destek**: Ticket sistemi ile 7/24 destek
- 👨‍💼 **Admin Dashboard**: Kapsamlı yönetim paneli
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel deneyim

## 🛠️ Teknoloji Stack

### Frontend
- **React 19.1.1** - Modern React framework
- **TypeScript 5.8.3** - Type safety ve geliştirici deneyimi
- **Vite 7.1.2** - Hızlı build tool ve development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **React Router DOM 7.9.1** - Client-side routing

### State Management & Forms
- **Zustand 5.0.8** - Lightweight state management
- **React Hook Form 7.62.0** - Performant form management
- **Zod 4.1.8** - TypeScript-first schema validation

### UI Components
- **Radix UI** - Accessible component primitives
- **Custom Components** - Tailwind CSS ile özelleştirilmiş bileşenler

### Development Tools
- **ESLint 8.57.1** - Code linting ve quality
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum
```bash
# Repository'yi klonlayın
git clone [repository-url]
cd ufuk-logistic-new

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

Proje http://localhost:5173 adresinde çalışacaktır.

## 📁 Proje Yapısı

```
ufuk-logistic-new/
├── public/                 # Static dosyalar
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── ui/            # Temel UI bileşenleri
│   │   ├── layout/        # Layout bileşenleri
│   │   ├── forms/         # Form bileşenleri
│   │   └── common/        # Ortak bileşenler
│   ├── pages/             # Sayfa bileşenleri
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API servisleri
│   ├── store/             # Zustand store'ları
│   ├── types/             # TypeScript type tanımları
│   ├── utils/             # Yardımcı fonksiyonlar
│   ├── styles/            # Global CSS stilleri
│   ├── constants/         # Sabitler
│   ├── App.tsx            # Ana uygulama bileşeni
│   ├── main.tsx           # Uygulama giriş noktası
│   └── index.css          # Global stiller
├── .eslintrc.json         # ESLint konfigürasyonu
├── .prettierrc            # Prettier konfigürasyonu
├── tailwind.config.js     # Tailwind CSS konfigürasyonu
├── postcss.config.js      # PostCSS konfigürasyonu
├── tsconfig.json          # TypeScript konfigürasyonu
├── vite.config.ts         # Vite konfigürasyonu
└── package.json           # Proje bağımlılıkları
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Lacivert (#0A3D62) - Ana marka rengi
- **Secondary**: Açık Mavi (#60A3D9) - Vurgu rengi
- **Neutral**: Gri tonları - Metin ve arka plan

### Tipografi
- **Font Family**: DejaVu Sans, Inter, system-ui
- **Font Weights**: 300, 400, 500, 600, 700

## 🔧 Development Komutları

```bash
# Development server
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Code formatting
npm run format
npm run format:check
```

## 🧪 Test

```bash
# Test çalıştır
npm run test

# Test coverage
npm run test:coverage

# Test watch mode
npm run test:watch
```

## 📱 Responsive Tasarım

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Mobile-first yaklaşımı ile tasarlanmış, tüm cihazlarda mükemmel deneyim sunar.

## 🔐 Güvenlik

- **JWT Authentication**: HttpOnly cookie'ler ile güvenli token saklama
- **Input Validation**: Zod ile client-side validation
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Cross-site request forgery koruması

## 🚀 Deployment

### Environment Variables
```env
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1...
```

### Docker Support
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📚 Dokümantasyon

- [Proje Rehberi](./PROJE_REHBERI.md) - Detaylı proje dokümantasyonu
- [Geliştirme Rehberi](./GELISTIRME_REHBERI.md) - Geliştirme süreçleri ve standartlar

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Email**: info@ufuklojistik.com
- **Website**: https://ufuklojistik.com
- **GitHub**: [Repository URL]

---

**Ufuk Lojistik** - Güvenilir ve hızlı kargo hizmetleri ile yüklerinizi güvenle taşıyoruz.
