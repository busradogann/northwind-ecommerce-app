// Product type definition
export interface Product {
  id: number;
  categoryId: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: string | number;
  unitsInStock: number;
}

// Category type definition
export interface Category {
  id: number;
  name: string;
  seoUrl: string;
}

// Cart item type definition
export interface Cart {
  product: Product;
  quantity: number;
}

// Component props interfaces
export interface Categories {
  currentCategory: string;
  changeCategory: (category: Category) => void;
  info: Information;
}

// ProductList component props
export interface Products {
  products: Product[];
  addToCart: (product: Product) => void;
  currentCategory: string;
  changeCategory: (category: Category) => void;
  info: Information;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

// CartList component props
export interface CartListProps {
  cart: Cart[];
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

// Navi component props
export interface NaviProps {
  cart: Cart[];
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

// App state interface
export interface AppState {
  currentCategory: string;
  products: Product[];
  cart: Cart[];
  currentPage: number;
  productsPerPage: number;
  searchTerm: string;
}

interface Information {
  title: string;
}