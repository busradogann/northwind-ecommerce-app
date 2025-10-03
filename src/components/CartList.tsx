import React from "react";
import { Table, Button, Card, CardBody, Badge, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { CartListProps } from "../types";

const CartList: React.FC<CartListProps> = ({ cart, removeFromCart }) => {
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.product.unitPrice === 'string' 
        ? parseFloat(item.product.unitPrice) 
        : item.product.unitPrice;
      return total + (price * item.quantity);
    }, 0);
  };

  const renderEmptyCart = () => (
    <div className="text-center py-5">
      <Alert color="info" className="border-0 bg-light">
        <h4 className="text-muted">🛒 Your cart is empty</h4>
        <p className="mb-3">Add some products to your cart to see them here!</p>
        <Button color="primary" tag={Link} to="/" className="rounded-pill px-4">
          Start Shopping
        </Button>
      </Alert>
    </div>
  );

  const renderCartItems = () => (
    <div>
      {/* Cart Summary */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Shopping Cart</h4>
        <div className="d-flex align-items-center gap-3">
          <Badge color="primary" className="fs-6 px-3 py-2">
            {getTotalItems()} items
          </Badge>
          <Badge color="success" className="fs-6 px-3 py-2">
            Total: ${getTotalPrice().toFixed(2)}
          </Badge>
        </div>
      </div>

      {/* Cart Table */}
      <div className="table-responsive">
        <Table hover striped className="align-middle">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "30%" }}>Product Name</th>
              <th style={{ width: "15%" }}>Unit Price</th>
              <th style={{ width: "5%" }}>Stock</th>
              <th style={{ width: "15%" }}>Quantity</th>
              <th style={{ width: "15%" }}>Total</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(cartItem => {
              const price = typeof cartItem.product.unitPrice === 'string' 
                ? parseFloat(cartItem.product.unitPrice) 
                : cartItem.product.unitPrice;
              const itemTotal = price * cartItem.quantity;
              
              return (
                <tr key={cartItem.product.id}>
                  <td>{cartItem.product.id}</td>
                  <td>
                    <div className="fw-semibold">{cartItem.product.productName}</div>
                  </td>
                  <td>
                    <span className="fw-bold text-success">${price.toFixed(2)}</span>
                  </td>
                  <td>
                    <Badge 
                      color={cartItem.product.unitsInStock > 10 ? "success" : 
                             cartItem.product.unitsInStock > 0 ? "warning" : "danger"}
                    >
                      {cartItem.product.unitsInStock}
                    </Badge>
                  </td>
                  <td>
                    <Badge color="info" className="fs-6 px-3 py-2">
                      {cartItem.quantity}
                    </Badge>
                  </td>
                  <td>
                    <span className="fw-bold text-primary">${itemTotal.toFixed(2)}</span>
                  </td>
                  <td>
                    <Button 
                      color="danger" 
                      size="sm"
                      onClick={() => removeFromCart(cartItem.product)}
                      className="rounded-pill px-3"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Checkout Section */}
      <div className="mt-4 p-3 bg-light rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            Total ({getTotalItems()} items): <span className="text-success">${getTotalPrice().toFixed(2)}</span>
          </h5>
          <Button color="success" size="lg" className="rounded-pill px-4">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {cart.length === 0 ? renderEmptyCart() : renderCartItems()}
    </div>
  );
};

export default CartList;
