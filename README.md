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

