# 🛒 Northwind E-Commerce App

Northwind E-Commerce App, temel ürün listeleme, kategori filtreleme ve sepet yönetimi özelliklerine sahip bir e-ticaret uygulamasıdır.  
Bu proje, React ekosistemiyle modern web arayüzü geliştirme becerilerini göstermek amacıyla hazırlanmıştır.

---

## 🚀 Projeyi Çalıştırma (Kurulum)

### Gerekli Bağımlılıkları Yükle

```bash
npm install
```


### Projeyi Başlat (Çalıştırma)
```bash 
npx json-server --watch db.json --port 3000

npm start
```



### Proje Dizin Yapısı ###
src/
│
├── components/
│   ├── ProductList.jsx
│   ├── CategoryList.jsx
│   ├── CartSummary.jsx
│   └── FormDemo1.jsx / FormDemo2.jsx
│
├── types/
│   └── alertifyjs.d.ts   // Tip tanımı (TypeScript için)
│
├── App.js
├── index.js
├── db.json               // Sahte API verileri
└── README.md
