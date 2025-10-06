# 🛒 Northwind E-Commerce App

Modern React teknolojileri ile geliştirilmiş, tam özellikli bir e-ticaret uygulaması. Ürün listeleme, kategori filtreleme, arama, sepet yönetimi ve responsive tasarım özelliklerine sahiptir.

## 🚀 Özellikler

- ✅ **Ürün Listeleme** - Pagination ile ürün görüntüleme
- ✅ **Kategori Filtreleme** - Kategoriye göre ürün filtreleme
- ✅ **Arama Özelliği** - Ürün adına göre real-time arama
- ✅ **Sepet Yönetimi** - Ürün ekleme, çıkarma ve sepet temizleme
- ✅ **LocalStorage** - Sepet verilerinin kalıcı saklanması
- ✅ **Responsive Tasarım** - Desktop ve mobil uyumlu
- ✅ **Modern UI** - Reactstrap ile modern arayüz
- ✅ **TypeScript** - Tip güvenliği ve daha iyi geliştirici deneyimi

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **React 17.0.1** - UI framework
- **TypeScript 4.9.5** - Tip güvenliği
- **Reactstrap 8.8.1** - Bootstrap React components
- **React Router DOM 5.2.0** - Sayfa yönlendirme
- **Bootstrap 4.5.3** - CSS framework

### Backend & Tools
- **JSON Server** - Mock API server
- **Alertify.js** - Notification system
- **Web Vitals** - Performance monitoring

### Development Tools
- **Create React App** - Project scaffolding
- **ESLint** - Code linting
- **Jest** - Testing framework
- **Testing Library** - Component testing

## 📋 Sistem Gereksinimleri

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Kurulum ve Çalıştırma

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd northwind-ecommerce-app
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Mock API Server'ı Başlatın
```bash
# Terminal 1 - JSON Server (Port 3000)
npx json-server --watch db.json --port 3000
```

### 4. React Uygulamasını Başlatın
```bash
# Terminal 2 - React App (Port 3001)
npm start
```

### 5. Uygulamayı Açın
Tarayıcınızda `http://localhost:3001` adresine gidin.

## 📁 Proje Yapısı

```
src/
├── components/           # React bileşenleri
│   ├── navbar.tsx       # Navigasyon çubuğu
│   ├── categories.tsx   # Kategori listesi
│   ├── products.tsx     # Ürün listesi
│   ├── cart-list.tsx    # Sepet sayfası
│   ├── cart.tsx         # Sepet özeti (dropdown)
│   ├── form-demo-1.tsx  # Form demo sayfası 1
│   ├── form-demo-2.tsx  # Form demo sayfası 2
│   └── not-found.tsx    # 404 sayfası
├── types/               # TypeScript tip tanımları
│   └── models.ts        # Veri modelleri
├── App.tsx             # Ana uygulama bileşeni
├── App.css             # Ana CSS stilleri
├── index.tsx           # Uygulama giriş noktası
└── index.css           # Global CSS stilleri

db.json                 # Mock API verileri
package.json            # Proje bağımlılıkları
tsconfig.json           # TypeScript konfigürasyonu
```

## 🔧 API Endpoints

JSON Server tarafından sağlanan API endpoints:

- `GET /products` - Tüm ürünleri getir
- `GET /products?categoryId=1` - Kategoriye göre ürünleri filtrele
- `GET /categories` - Tüm kategorileri getir

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- **Bootstrap Grid System** kullanımı
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🎨 UI/UX Özellikleri

- **Modern Card Design** - Ürünler ve kategoriler için
- **Interactive Elements** - Hover efektleri ve animasyonlar
- **Badge System** - Stok durumu ve ürün sayısı göstergeleri
- **Color Coding** - Stok seviyelerine göre renk kodlaması
- **Loading States** - Kullanıcı geri bildirimi

## 💾 LocalStorage Entegrasyonu

Sepet verileri otomatik olarak localStorage'a kaydedilir:
- Ürün eklendiğinde/çıkarıldığında
- Sayfa yenilendiğinde veriler korunur
- Browser kapatılıp açıldığında sepet korunur

## 🧪 Test Etme

```bash
# Testleri çalıştır
npm test

# Test coverage raporu
npm run test -- --coverage
```

## 📦 Production Build

```bash
# Production build oluştur
npm run build

# Build dosyalarını kontrol et
ls -la build/
```

## 🚀 Deployment

### Netlify
```bash
npm run build
# build/ klasörünü Netlify'a drag & drop
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🐛 Bilinen Sorunlar

- JSON Server yeniden başlatıldığında veriler sıfırlanır
- IE11 desteği yoktur (modern browser gerekli)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Büşra Doğan**
- Portfolio: [GitHub](https://github.com/busradogan)
- LinkedIn: [Profil](https://linkedin.com/in/busradogan)

## 🙏 Teşekkürler

- [React](https://reactjs.org/) - UI framework
- [Reactstrap](https://reactstrap.github.io/) - Bootstrap components
- [JSON Server](https://github.com/typicode/json-server) - Mock API
- [Bootstrap](https://getbootstrap.com/) - CSS framework

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!