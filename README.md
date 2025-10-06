# 🛒 Northwind E-Commerce App

A full-featured e-commerce application built with modern React technologies. Features product listing, category filtering, search, cart management, and responsive design.

## 🚀 Features

- ✅ **Product Listing** - Product display with pagination
- ✅ **Category Filtering** - Filter products by category
- ✅ **Search Feature** - Real-time search by product name
- ✅ **Cart Management** - Add, remove items and clear cart
- ✅ **LocalStorage** - Persistent cart data storage
- ✅ **Responsive Design** - Desktop and mobile compatible
- ✅ **Modern UI** - Modern interface with Reactstrap
- ✅ **TypeScript** - Type safety and better developer experience

## 🛠️ Technologies Used

### Frontend
- **React 17.0.1** - UI framework
- **TypeScript 4.9.5** - Type safety
- **Reactstrap 8.8.1** - Bootstrap React components
- **React Router DOM 5.2.0** - Page routing
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

## 📋 System Requirements

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation and Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd northwind-ecommerce-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Mock API Server
```bash
# Terminal 1 - JSON Server (Port 3000)
npx json-server --watch db.json --port 3000
```

### 4. Start React Application
```bash
# Terminal 2 - React App (Port 3001)
npm start
```

### 5. Open the Application
Navigate to `http://localhost:3001` in your browser.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── navbar.tsx       # Navigation bar
│   ├── categories.tsx   # Category list
│   ├── products.tsx     # Product list
│   ├── cart-list.tsx    # Cart page
│   ├── cart.tsx         # Cart summary (dropdown)
│   ├── form-demo-1.tsx  # Form demo page 1
│   ├── form-demo-2.tsx  # Form demo page 2
│   └── not-found.tsx    # 404 page
├── types/               # TypeScript type definitions
│   └── models.ts        # Data models
├── App.tsx             # Main application component
├── App.css             # Main CSS styles
├── index.tsx           # Application entry point
└── index.css           # Global CSS styles

db.json                 # Mock API data
package.json            # Project dependencies
tsconfig.json           # TypeScript configuration
```

## 🔧 API Endpoints

API endpoints provided by JSON Server:

- `GET /products` - Get all products
- `GET /products?categoryId=1` - Filter products by category
- `GET /categories` - Get all categories
