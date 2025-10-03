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
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";


export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
    currentPage: 1,
    productsPerPage: 10
  };

  componentDidMount = () => {
    this.getProducts(); //component render edildikten sonra product'lari cekiyor.
  };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName, currentPage: 1 }); //o anki category bilgisini tutuyor.
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => {
    let newCart = this.state.cart;
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

  removeFromCart = product => {
    let newCart = this.state.cart.filter(
      cartItem => cartItem.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed to cart!!!", 3);
  };

  // Pagination methods
  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  getPaginatedProducts = () => {
    const { products, currentPage, productsPerPage } = this.state;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  getTotalPages = () => {
    const { products, productsPerPage } = this.state;
    return Math.ceil(products.length / productsPerPage);
  };

  render() {
    let categoryList = { title: "Category List" };
    let productList = { title: "Product List" };

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
                  render={props => (
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
                  render={props => (
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
