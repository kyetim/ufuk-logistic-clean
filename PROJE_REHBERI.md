# 🚀 Ufuk Lojistik React Projesi - Proje Rehberi

## 📋 Proje Hakkında

Ufuk Lojistik, modern React teknolojileri kullanılarak geliştirilmiş bir kargo ve lojistik yönetim sistemidir. Proje, kullanıcı dostu arayüzü ve güçlü backend entegrasyonu ile kapsamlı lojistik çözümleri sunar.

## 🛠️ Teknoloji Stack

### Frontend
- **React 19.1.1** - Modern React framework
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.2** - Build tool ve development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **React Router DOM 7.9.1** - Client-side routing

### State Management
- **Zustand 5.0.8** - Lightweight state management
- **React Hook Form 7.62.0** - Form management
- **Zod 4.1.8** - Schema validation

### UI Components
- **Radix UI** - Accessible component primitives
- **Custom Components** - Tailwind CSS ile özelleştirilmiş bileşenler

### Development Tools
- **ESLint 8.57.1** - Code linting
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript linting

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

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum
```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Build'i önizle
npm run preview
```

### Development Komutları
```bash
# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Code formatting
npm run format
npm run format:check
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Lacivert (#0A3D62) - Ana marka rengi
- **Secondary**: Açık Mavi (#60A3D9) - Vurgu rengi
- **Neutral**: Gri tonları - Metin ve arka plan

### Tipografi
- **Font Family**: DejaVu Sans, Inter, system-ui
- **Font Weights**: 300, 400, 500, 600, 700

### Spacing
- **Base Unit**: 0.25rem (4px)
- **Common Spacings**: 1, 2, 4, 6, 8, 12, 16, 20, 24, 32

## 🔧 Geliştirme Standartları

### Kod Stili
- **ESLint**: Airbnb konfigürasyonu
- **Prettier**: Tutarlı kod formatlaması
- **TypeScript**: Strict mode aktif

### Component Standartları
- **Functional Components**: Hook'lar ile
- **TypeScript**: Tüm props ve state'ler tip güvenli
- **Props Interface**: Her component için ayrı interface
- **Default Props**: Uygun varsayılan değerler

### Naming Conventions
- **Components**: PascalCase (örn: `UserProfile`)
- **Files**: camelCase (örn: `userProfile.tsx`)
- **Variables**: camelCase (örn: `userName`)
- **Constants**: UPPER_SNAKE_CASE (örn: `API_BASE_URL`)

## 📱 Responsive Tasarım

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Tüm bileşenler mobile-first yaklaşımı ile tasarlanmış
- Progressive enhancement ile desktop özellikleri eklenmiş

## 🔐 Güvenlik

### Authentication
- **JWT Token**: HttpOnly cookie'ler ile güvenli saklama
- **Protected Routes**: Yetkilendirme kontrolü
- **Role-based Access**: Kullanıcı rolleri (user, admin)

### Data Validation
- **Zod Schemas**: Client-side validation
- **Input Sanitization**: XSS koruması
- **CSRF Protection**: Cross-site request forgery koruması

## 🧪 Test Stratejisi

### Test Türleri
- **Unit Tests**: Bileşen ve utility fonksiyon testleri
- **Integration Tests**: API entegrasyon testleri
- **E2E Tests**: Kullanıcı akış testleri

### Test Coverage
- **Hedef**: %70+ test coverage
- **Tools**: Jest + React Testing Library

## 📊 Performans

### Optimizasyonlar
- **Code Splitting**: Lazy loading ile
- **Bundle Analysis**: Webpack Bundle Analyzer
- **Image Optimization**: WebP format desteği
- **Caching**: Service Worker ile

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Production Build
```bash
npm run build
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

### Environment Variables
```env
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1...
```

## 📚 API Entegrasyonu

### Base URL
- **Development**: http://localhost:8000/api
- **Production**: https://api.ufuklojistik.com

### Authentication
```typescript
// Request interceptor ile otomatik token ekleme
api.interceptors.request.use((config) => {
  const token = getFromStorage('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Error Handling
```typescript
// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired, redirect to login
      logout();
    }
    return Promise.reject(error);
  }
);
```

## 🔄 State Management

### Zustand Store Yapısı
```typescript
interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}
```

### Store Kullanımı
```typescript
const { user, login, logout } = useAuthStore();
```

## 📝 Git Workflow

### Branch Strategy
- **main**: Production branch
- **develop**: Development branch
- **feature/***: Feature branches
- **hotfix/***: Hotfix branches

### Commit Messages
- **feat**: Yeni özellik
- **fix**: Bug düzeltmesi
- **docs**: Dokümantasyon
- **style**: Kod formatlaması
- **refactor**: Kod refactoring
- **test**: Test ekleme/düzeltme
- **chore**: Build, dependency güncellemeleri

## 🆘 Troubleshooting

### Yaygın Sorunlar

#### 1. Tailwind CSS Çalışmıyor
```bash
# Tailwind config dosyasını kontrol et
npx tailwindcss --init
```

#### 2. TypeScript Hataları
```bash
# Type checking
npm run type-check
```

#### 3. ESLint Hataları
```bash
# Lint fix
npm run lint:fix
```

#### 4. Build Hataları
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📞 Destek

### Geliştirici Ekibi
- **Lead Developer**: [İsim]
- **Frontend Developer**: [İsim]
- **UI/UX Designer**: [İsim]

### İletişim
- **Email**: dev@ufuklojistik.com
- **Slack**: #ufuk-lojistik-dev
- **GitHub**: [Repository URL]

---

Bu rehber, Ufuk Lojistik projesinin geliştirilmesi ve sürdürülmesi için gerekli tüm bilgileri içermektedir. Güncellemeler için düzenli olarak kontrol ediniz.
