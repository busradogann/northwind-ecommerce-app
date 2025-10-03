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
  categoryName: string;
  seoUrl: string;
}

// Cart item type definition
export interface CartItem {
  product: Product;
  quantity: number;
}

// Component props interfaces
export interface CategoryListProps {
  currentCategory: string;
  changeCategory: (category: Category) => void;
  info: {
    title: string;
  };
}

export interface ProductsListProps {
  products: Product[];
  addToCart: (product: Product) => void;
  currentCategory: string;
  changeCategory: (category: Category) => void;
  info: {
    title: string;
  };
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export interface CartListProps {
  cart: CartItem[];
  removeFromCart: (product: Product) => void;
}

export interface NaviProps {
  cart: CartItem[];
  removeFromCart: (product: Product) => void;
}

// App state interface
export interface AppState {
  currentCategory: string;
  products: Product[];
  cart: CartItem[];
  currentPage: number;
  productsPerPage: number;
}
