import "./App.css";

import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";

import { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { AppState, Product, Category, CartItem } from "./types";
import alertify from "alertifyjs";

export default class App extends Component<{}, AppState> {
  state: AppState = {
    currentCategory: "",
    products: [],
    cart: [],
    currentPage: 1,
    productsPerPage: 10,
    searchTerm: ""
  };

  componentDidMount = () => {
    this.getProducts(); //component render edildikten sonra product'lari cekiyor.
  };

  changeCategory = (category: Category) => {
    this.setState({ currentCategory: category.categoryName, currentPage: 1, searchTerm: "" }); //o anki category bilgisini tutuyor.
    this.getProducts(category.id);
  };

  handleSearch = (searchTerm: string) => {
    this.setState({ searchTerm, currentPage: 1 });
  };

  getProducts = (categoryId?: number) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then((data: Product[]) => this.setState({ products: data }));
  };

  addToCart = (product: Product) => {
    let newCart = [...this.state.cart];
    var addedItem = newCart.find(
      cartItem => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!!!", 3);
  };

  removeFromCart = (product: Product) => {
    let newCart = this.state.cart.filter(
      cartItem => cartItem.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed to cart!!!", 3);
  };

  // Pagination methods
  handlePageChange = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  getFilteredProducts = (): Product[] => {
    const { products, searchTerm } = this.state;
    if (!searchTerm.trim()) {
      return products;
    }
    return products.filter(product => 
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  getPaginatedProducts = (): Product[] => {
    const { currentPage, productsPerPage } = this.state;
    const filteredProducts = this.getFilteredProducts();
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  getTotalPages = (): number => {
    const { productsPerPage } = this.state;
    const filteredProducts = this.getFilteredProducts();
    return Math.ceil(filteredProducts.length / productsPerPage);
  };

  render() {
    const categories = { title: "Categories" };
    const products = { title: "Products" };

    return (
      <div className="min-vh-100 bg-light">
        <Container fluid="xl" className="py-3">
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          
          <Row className="g-3">
            {/* Category Column - Hidden on mobile, 3 cols on tablet+, 2 cols on large screens */}
            <Col xs="12" md="3" lg="2" className="d-none d-md-block">
              <Card className="shadow-sm h-100">
                <CardBody className="p-3">
                  <CategoryList
                    currentCategory={this.state.currentCategory}
                    changeCategory={this.changeCategory}
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
                      <ProductsList
                        {...props}
                        products={this.getPaginatedProducts()}
                        addToCart={this.addToCart}
                        currentCategory={this.state.currentCategory}
                        changeCategory={this.changeCategory}
                        info={products}
                        currentPage={this.state.currentPage}
                        totalPages={this.getTotalPages()}
                        onPageChange={this.handlePageChange}
                        searchTerm={this.state.searchTerm}
                        onSearch={this.handleSearch}
                      />
                      )}
                    />
                    <Route
                      exact
                      path="/cart"
                      render={(props: any) => (
                        <CartList
                          {...props}
                          cart={this.state.cart}
                          removeFromCart={this.removeFromCart}
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
  }
}
