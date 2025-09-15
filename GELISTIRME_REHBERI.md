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
