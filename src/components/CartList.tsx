import React, { Component, JSX } from "react";
import { Table, Button } from "reactstrap";
import { CartListProps } from "../types";

export default class CartList extends Component<CartListProps> {
  renderCart = (): JSX.Element => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category ID</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button>
              </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  };

  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    );
  }
}
