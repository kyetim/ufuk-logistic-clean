# 🛠️ Ufuk Lojistik - Geliştirme Rehberi

## 🚀 Hızlı Başlangıç

### 1. Projeyi Klonlayın
```bash
git clone [repository-url]
cd ufuk-logistic-new
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Development Server'ı Başlatın
```bash
npm run dev
```

Proje http://localhost:5173 adresinde çalışacaktır.

## 📋 Geliştirme Adımları

### Aşama 1: Temel Altyapı ✅
- [x] Vite + React + TypeScript kurulumu
- [x] Tailwind CSS konfigürasyonu
- [x] ESLint + Prettier setup
- [x] Proje yapısı oluşturma
- [x] Temel UI bileşenleri

### Aşama 2: Kullanıcı Yönetimi (Şu anda buradayız)
- [ ] Login formu
- [ ] Register formu
- [ ] Protected routes
- [ ] Auth store (Zustand)
- [ ] API entegrasyonu

### Aşama 3: Sipariş Yönetimi
- [ ] Sipariş oluşturma formu
- [ ] Sipariş listesi
- [ ] Sipariş detayları
- [ ] Durum güncellemeleri

### Aşama 4: Kargo Takip
- [ ] Takip numarası girişi
- [ ] Harita entegrasyonu (Mapbox)
- [ ] Durum geçmişi
- [ ] Real-time güncellemeler

### Aşama 5: Ödeme Sistemi
- [ ] Stripe entegrasyonu
- [ ] Ödeme formu
- [ ] Fatura yönetimi
- [ ] Ödeme geçmişi

### Aşama 6: Müşteri Destek
- [ ] Destek ticket sistemi
- [ ] Talep oluşturma
- [ ] Mesajlaşma sistemi
- [ ] Dosya yükleme

### Aşama 7: Yönetici Dashboard
- [ ] Dashboard overview
- [ ] Sipariş yönetimi
- [ ] Kullanıcı yönetimi
- [ ] Analytics ve raporlar

## 🔧 Geliştirme Araçları

### Code Editor Ayarları (VS Code)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### Önerilen VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

## 📝 Kod Standartları

### Component Yapısı
```typescript
// ✅ Doğru
interface UserProfileProps {
  user: User;
  onUpdate: (user: User) => void;
  className?: string;
}

export function UserProfile({ user, onUpdate, className }: UserProfileProps) {
  // Component logic
  return (
    <div className={cn('user-profile', className)}>
      {/* JSX */}
    </div>
  );
}

// ❌ Yanlış
export const UserProfile = ({ user, onUpdate }) => {
  // Component logic
};
```

### Import Sıralaması
```typescript
// 1. React imports
import React from 'react';
import { useState, useEffect } from 'react';

// 2. Third-party imports
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 3. Internal imports
import { Button } from '../ui/button';
import { useAuthStore } from '../../store/auth-store';
import { User } from '../../types';
```

### CSS Class Sıralaması
```typescript
// ✅ Doğru - Tailwind CSS utility sıralaması
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">

// ❌ Yanlış - Karışık sıralama
<div className="bg-white flex p-4 items-center shadow-md rounded-lg justify-between hover:shadow-lg transition-shadow">
```

## 🧪 Test Yazma

### Component Test Örneği
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### API Test Örneği
```typescript
import { authService } from '../services/auth-service';

describe('Auth Service', () => {
  it('should login user successfully', async () => {
    const credentials = {
      email: 'test@example.com',
      password: 'password123'
    };

    const result = await authService.login(credentials);
    expect(result).toHaveProperty('token');
    expect(result).toHaveProperty('user');
  });
});
```

## 🔄 Git Workflow

### Feature Branch Oluşturma
```bash
# Yeni feature branch oluştur
git checkout -b feature/user-authentication

# Değişiklikleri commit et
git add .
git commit -m "feat: add user authentication form"

# Branch'i push et
git push origin feature/user-authentication
```

### Pull Request Oluşturma
1. GitHub'da Pull Request oluştur
2. Template'i doldur
3. Code review için assign et
4. CI/CD kontrollerini bekle
5. Merge et

### Commit Message Formatı
```
type(scope): description

feat(auth): add login form validation
fix(ui): resolve button hover state issue
docs(readme): update installation instructions
```

## 🐛 Debugging

### Console Logging
```typescript
// ✅ Doğru - Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// ❌ Yanlış - Production'da log
console.log('Debug info:', data);
```

### React DevTools
- Component tree inceleme
- Props ve state değerleri
- Performance profiling
- Hook debugging

### Network Debugging
```typescript
// API isteklerini logla
api.interceptors.request.use((config) => {
  console.log('API Request:', config);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
```

## 📊 Performance Monitoring

### Bundle Analysis
```bash
# Bundle boyutunu analiz et
npm run build
npx vite-bundle-analyzer dist
```

### Lighthouse Audit
```bash
# Performance audit
npx lighthouse http://localhost:5173 --output html
```

### React Profiler
```typescript
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  console.log('Render time:', actualDuration);
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

## 🔒 Güvenlik Best Practices

### Input Validation
```typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalı'),
});

// Form validation
const result = userSchema.safeParse(formData);
if (!result.success) {
  setErrors(result.error.flatten().fieldErrors);
}
```

### XSS Koruması
```typescript
import DOMPurify from 'dompurify';

const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};
```

### CSRF Koruması
```typescript
// CSRF token'ı her istekte gönder
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

api.defaults.headers.common['X-CSRF-Token'] = csrfToken;
```

## 📱 Responsive Design

### Mobile-First Approach
```css
/* Mobile first */
.button {
  @apply px-4 py-2 text-sm;
}

/* Tablet */
@media (min-width: 768px) {
  .button {
    @apply px-6 py-3 text-base;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .button {
    @apply px-8 py-4 text-lg;
  }
}
```

### Breakpoint Kullanımı
```typescript
// Tailwind breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

## 🚀 Deployment

### Environment Variables
```env
# .env.local
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1...

# .env.production
VITE_API_URL=https://api.ufuklojistik.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1...
```

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
});
```

## 🌍 Dil Desteği (Internationalization - i18n)

### Dil Desteği Zorunluluğu
**ÖNEMLİ:** Bu projede oluşturulan her yeni bileşen, sayfa veya özellik **mutlaka** dil desteği ile birlikte geliştirilmelidir. Dil desteği bu proje için kritik bir özelliktir ve tüm kullanıcı arayüzü öğeleri dinamik olarak Türkçe-İngilizce arasında geçiş yapabilmelidir.

### Dil Desteği Nasıl Eklenir

#### 1. Yeni Bileşen Oluştururken
```typescript
// ✅ Doğru - Dil desteği ile
import { useLanguage } from '../../contexts/LanguageContext';

export function NewComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('newComponent.title')}</h1>
      <p>{t('newComponent.description')}</p>
      <button>{t('newComponent.button')}</button>
    </div>
  );
}

// ❌ Yanlış - Sabit metinler
export function NewComponent() {
  return (
    <div>
      <h1>Başlık</h1>
      <p>Açıklama</p>
      <button>Buton</button>
    </div>
  );
}
```

#### 2. LanguageContext'e Çeviri Ekleme
```typescript
// src/contexts/LanguageContext.tsx dosyasında
const translations = {
  tr: {
    // Mevcut çeviriler...
    
    // Yeni bileşen çevirileri
    'newComponent.title': 'Yeni Bileşen Başlığı',
    'newComponent.description': 'Yeni bileşen açıklaması',
    'newComponent.button': 'Buton Metni',
  },
  en: {
    // Mevcut çeviriler...
    
    // Yeni bileşen çevirileri
    'newComponent.title': 'New Component Title',
    'newComponent.description': 'New component description',
    'newComponent.button': 'Button Text',
  }
};
```

#### 3. Çeviri Anahtarı (Key) Adlandırma Kuralları
```typescript
// ✅ Doğru adlandırma
'pageName.sectionName.elementName': 'Çeviri metni'

// Örnekler:
'home.hero.title': 'Ana Sayfa Başlığı'
'about.company.story': 'Şirket Hikayesi'
'footer.contact.phone': 'Telefon'
'tracking.live.status': 'Durum'

// ❌ Yanlış adlandırma
'title': 'Başlık' // Çok genel
'homeTitle': 'Ana Sayfa Başlığı' // Camel case
'home_title': 'Ana Sayfa Başlığı' // Snake case
```

#### 4. Dil Desteği Kontrol Listesi
Her yeni özellik geliştirirken şunları kontrol edin:

- [ ] Tüm metinler `t()` fonksiyonu ile sarılmış mı?
- [ ] LanguageContext'e hem TR hem EN çevirileri eklenmiş mi?
- [ ] Çeviri anahtarları doğru adlandırılmış mı?
- [ ] Dil değiştirildiğinde tüm öğeler güncelleniyor mu?
- [ ] Navigation, footer gibi ortak bileşenler güncellenmiş mi?

#### 5. Mevcut Bileşenleri Güncelleme
Eğer mevcut bir bileşende sabit metinler varsa:

```typescript
// Önce mevcut metinleri t() ile sarın
<h1>{t('existingComponent.title')}</h1>

// Sonra LanguageContext'e çevirileri ekleyin
'tr': {
  'existingComponent.title': 'Mevcut Başlık',
},
'en': {
  'existingComponent.title': 'Existing Title',
}
```

#### 6. Dil Desteği Test Etme
```typescript
// Geliştirme sırasında dil değiştirerek test edin
const { language, setLanguage } = useLanguage();

// Test için geçici buton ekleyebilirsiniz
<button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>
  Dil Değiştir
</button>
```

### Dil Desteği Hataları
```typescript
// ❌ Yaygın hatalar
<h1>Sabit Metin</h1> // Sabit metin kullanımı
{t('missing.key')} // Eksik çeviri anahtarı
{t('wrongKey')} // Yanlış anahtar adlandırma

// ✅ Doğru kullanım
<h1>{t('component.title')}</h1> // Doğru çeviri kullanımı
```

### Dil Desteği Best Practices
1. **Tutarlılık:** Aynı anlamdaki metinler için aynı çeviri anahtarını kullanın
2. **Açıklayıcı İsimler:** Çeviri anahtarları açıklayıcı ve anlaşılır olsun
3. **Hiyerarşi:** Sayfa > Bölüm > Öğe hiyerarşisini takip edin
4. **Test:** Her özellik geliştirildikten sonra dil değiştirerek test edin
5. **Güncelleme:** Mevcut bileşenleri de dil desteği ile güncelleyin

## 📸 Fotoğraf Yükleme Sistemi

### Fotoğraf Yükleme Zorunluluğu
**ÖNEMLİ:** Bu projede oluşturulan her yeni sayfa veya bölüm **mutlaka** fotoğraf yükleme sistemi ile birlikte geliştirilmelidir. Fotoğraflar projenin görsel zenginliğini artırır ve kullanıcı deneyimini geliştirir.

### Fotoğraf Yükleme Nasıl Yapılır

#### 1. Fotoğraf Gereksinimleri
```typescript
// ✅ Doğru - Fotoğraf alanları ile
<div className="relative">
  <img
    src="/photo-name.jpg"
    alt="Açıklayıcı alt text"
    className="w-full h-full object-cover"
  />
</div>

// ❌ Yanlış - Fotoğraf alanı olmadan
<div className="bg-gray-200 h-64">
  <!-- Sadece renkli alan -->
</div>
```

#### 2. Fotoğraf Boyutları ve Formatları
- **Format:** JPG, PNG, WebP (JPG önerilen)
- **Boyut:** Minimum 1920x1080 (Full HD)
- **Aspect Ratio:** 16:9 (landscape) veya 4:3 (portrait)
- **Dosya Boyutu:** Maksimum 2MB (optimize edilmiş)
- **Kalite:** Yüksek kalite, net görüntü

#### 3. Fotoğraf Adlandırma Kuralları
```typescript
// ✅ Doğru adlandırma
/page-name-bg.jpg          // Sayfa arka plan fotoğrafı
/section-name-bg.jpg       // Bölüm arka plan fotoğrafı
/feature-name-bg.jpg       // Özellik fotoğrafı
/hero-bg.jpg              // Hero section fotoğrafı

// Örnekler:
/authPage-bg.jpg          // Auth sayfası arka plan
/vision-hero-bg.jpg       // Vision sayfası hero
/customer-service-bg.jpg  // Müşteri hizmetleri
/company-values-bg.jpg    // Şirket değerleri

// ❌ Yanlış adlandırma
/photo1.jpg               // Açıklayıcı değil
/background.jpg           // Çok genel
/IMG_001.jpg             // Sistem adı
```

#### 4. Fotoğraf Yükleme Adımları
1. **Fotoğraf Seçimi:** İnternetten uygun fotoğraf bulun
2. **İndirme:** Fotoğrafı bilgisayarınıza indirin
3. **Adlandırma:** Doğru isimlendirme kurallarına uygun şekilde adlandırın
4. **Yükleme:** `public/` klasörüne yükleyin
5. **Kod Entegrasyonu:** Kodda doğru path ile kullanın

#### 5. Fotoğraf Kullanım Örnekleri
```typescript
// Hero Section Background
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url(/vision-hero-bg.jpg)',
    filter: 'brightness(0.4)'
  }}
></div>

// Card Image
<div className="relative">
  <img
    src="/customer-service-bg.jpg"
    alt="Müşteri Hizmetleri"
    className="w-full h-full object-cover rounded-2xl"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
</div>

// Background with Overlay
<div className="relative">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: 'url(/company-values-bg.jpg)' }}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-secondary-400/90"></div>
</div>
```

#### 6. Fotoğraf Optimizasyonu
```typescript
// CSS ile fotoğraf optimizasyonu
.photo-optimized {
  @apply bg-cover bg-center bg-no-repeat;
  filter: brightness(0.4); // Koyuluk ayarı
  object-fit: cover;       // Oran koruma
  object-position: center; // Merkez hizalama
}

// Responsive fotoğraf kullanımı
<div className="aspect-w-16 aspect-h-12">
  <img
    src="/photo.jpg"
    alt="Description"
    className="w-full h-full object-cover"
  />
</div>
```

#### 7. Fotoğraf Kontrol Listesi
Her yeni sayfa/bölüm geliştirirken şunları kontrol edin:

- [ ] Hero section için arka plan fotoğrafı var mı?
- [ ] İçerik bölümleri için destekleyici fotoğraflar var mı?
- [ ] Fotoğraflar doğru adlandırılmış mı?
- [ ] Alt text'ler açıklayıcı mı?
- [ ] Fotoğraflar responsive mi?
- [ ] Overlay'ler uygun mu?
- [ ] Performance optimizasyonu yapılmış mı?

#### 8. Fotoğraf Kaynak Önerileri
- **Unsplash:** https://unsplash.com (Ücretsiz, yüksek kalite)
- **Pexels:** https://www.pexels.com (Ücretsiz, çeşitli)
- **Pixabay:** https://pixabay.com (Ücretsiz, geniş koleksiyon)
- **Freepik:** https://www.freepik.com (Ücretli, premium)

#### 9. Fotoğraf Kategorileri
```typescript
// Lojistik temalı fotoğraflar
- Kargo ve konteyner
- Liman ve terminal
- Kamyon ve taşımacılık
- Depo ve lojistik merkezi
- Müşteri hizmetleri
- Ekip ve çalışanlar
- Teknoloji ve sistemler
- Çevre ve sürdürülebilirlik
```

#### 10. Fotoğraf Yükleme Hataları
```typescript
// ❌ Yaygın hatalar
<img src="photo.jpg" />                    // Yanlış path
<img src="/photo" />                      // Eksik uzantı
<img src="/photo.jpg" alt="" />           // Boş alt text
<div style={{background: 'url(photo.jpg)'}}> // Yanlış syntax

// ✅ Doğru kullanım
<img src="/photo-name.jpg" alt="Açıklayıcı text" />
<div style={{backgroundImage: 'url(/photo-name.jpg)'}}>
```

### Fotoğraf Yükleme Best Practices
1. **Kalite:** Her zaman yüksek kaliteli fotoğraflar kullanın
2. **Relevance:** Fotoğraflar içerikle ilgili olmalı
3. **Consistency:** Tüm fotoğraflar tutarlı stil ve ton
4. **Optimization:** Dosya boyutlarını optimize edin
5. **Accessibility:** Alt text'leri açıklayıcı yazın
6. **Responsive:** Tüm ekran boyutlarında uyumlu
7. **Performance:** Lazy loading kullanın
8. **Legal:** Telif hakkı olmayan fotoğraflar kullanın

## 📚 Kaynaklar

### Dokümantasyon
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

### Öğrenme Kaynakları
- [React Patterns](https://reactpatterns.com/)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)

### Araçlar
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

---

Bu rehber, Ufuk Lojistik projesinin geliştirilmesi sürecinde size yardımcı olacak tüm bilgileri içermektedir. Sorularınız için geliştirici ekibi ile iletişime geçebilirsiniz.
