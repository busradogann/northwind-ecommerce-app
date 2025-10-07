import "./App.css";

import Navi from "./components/navbar";
import Categories from "./components/categories";
import Products from "./components/products";
import NotFound from "./components/not-found";
import CartList from "./components/cart-list";
import FormDemo1 from "./components/form-demo-1";
import FormDemo2 from "./components/form-demo-2";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { Product, Category, Cart } from "./types/models";
import { getProducts as fetchProducts } from "./services/product.service";
import alertify from "alertifyjs";

const App: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
    loadCartFromStorage();
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  // LocalStorage functions
  const saveCartToStorage = (cartData: Cart[]) => {
    try {
      localStorage.setItem('northwind-cart', JSON.stringify(cartData));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  };

  const loadCartFromStorage = () => {
    try {
      const savedCart = localStorage.getItem('northwind-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  };

  const changeCategory = (category: Category) => {
    setCurrentCategory(category.name);
    setCurrentPage(1);
    setSearchTerm("");
    fetchProducts(category.id).then(data => setProducts(data));
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };


  const addToCart = (product: Product) => {
    let newCart = [...cart];
    var addedItem = newCart.find(
      cartItem => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(product.productName + " added to cart!!!", 3);
  };

  const removeFromCart = (product: Product) => {
    let newCart = cart.filter(
      cartItem => cartItem.product.id !== product.id
    );
    setCart(newCart);
    alertify.error(product.productName + " removed to cart!!!", 3);
  };

  const clearCart = () => {
    setCart([]);
    alertify.warning("Cart cleared!", 3);
  };

  // Pagination methods
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getFilteredProducts = (): Product[] => {
    if (!searchTerm.trim()) {
      return products;
    }
    return products.filter(product => 
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getPaginatedProducts = (): Product[] => {
    const filteredProducts = getFilteredProducts();
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const getTotalPages = (): number => {
    const filteredProducts = getFilteredProducts();
    return Math.ceil(filteredProducts.length / productsPerPage);
  };

  const categories = { title: "Categories" };
  const productsInfo = { title: "Products" };

  return (
    <div className="min-vh-100 bg-light">
      <Container fluid="xl" className="py-3">
        <Navi cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        
        <Row className="g-3">
          {/* Category Column - Hidden on mobile, 3 cols on tablet+, 2 cols on large screens */}
          <Col xs="12" md="3" lg="2" className="d-none d-md-block">
            <Card className="shadow-sm h-100">
              <CardBody className="p-3">
                <Categories
                  currentCategory={currentCategory}
                  changeCategory={changeCategory}
                  info={categories}
                />
              </CardBody>
            </Card>
          </Col>
          
          {/* Products Column - 12 cols on mobile, 9 cols on tablet+, 10 cols on large screens */}
          <Col xs="12" md="9" lg="10">
            <Card className="shadow-sm">
              <CardBody className="p-4">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props: any) => (
                      <Products
                      {...props}
                      products={getPaginatedProducts()}
                      addToCart={addToCart}
                      currentCategory={currentCategory}
                      changeCategory={changeCategory}
                      info={productsInfo}
                      currentPage={currentPage}
                      totalPages={getTotalPages()}
                      onPageChange={handlePageChange}
                      searchTerm={searchTerm}
                      onSearch={handleSearch}
                    />
                    )}
                  />
                  <Route
                    exact
                    path="/cart"
                    render={(props: any) => (
                      <CartList
                        {...props}
                        cart={cart}
                        removeFromCart={removeFromCart}
                        clearCart={clearCart}
                      />
                    )}
                  />
                  <Route path="/form1" component={FormDemo1} />
                  <Route path="/form2" component={FormDemo2} />
                  <Route component={NotFound} />
                </Switch>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
