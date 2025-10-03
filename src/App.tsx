import "./App.css";

import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";

import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { AppState, Product, Category, CartItem } from "./types";
import alertify from "alertifyjs";

export default class App extends Component<{}, AppState> {
  state: AppState = {
    currentCategory: "",
    products: [],
    cart: [],
    currentPage: 1,
    productsPerPage: 10
  };

  componentDidMount = () => {
    this.getProducts(); //component render edildikten sonra product'lari cekiyor.
  };

  changeCategory = (category: Category) => {
    this.setState({ currentCategory: category.categoryName, currentPage: 1 }); //o anki category bilgisini tutuyor.
    this.getProducts(category.id);
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

  getPaginatedProducts = (): Product[] => {
    const { products, currentPage, productsPerPage } = this.state;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  getTotalPages = (): number => {
    const { products, productsPerPage } = this.state;
    return Math.ceil(products.length / productsPerPage);
  };

  render() {
    const categoryList = { title: "Category List" };
    const productList = { title: "Product List" };

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryList}
              />
            </Col>
            <Col xs="9">
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
                      info={productList}
                      currentPage={this.state.currentPage}
                      totalPages={this.getTotalPages()}
                      onPageChange={this.handlePageChange}
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
