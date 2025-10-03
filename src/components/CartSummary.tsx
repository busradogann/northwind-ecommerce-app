import React, { Component, JSX } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartListProps } from "../types";

export default class CartSummary extends Component<CartListProps> {
  renderSummary = (): JSX.Element => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
            <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to='cart'>Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  renderEmptyCart = (): JSX.Element => {
    return (
      <span className="nav-link">Empty Cart</span>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
