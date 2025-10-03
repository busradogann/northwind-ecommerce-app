import React, { Component } from "react";
import { Table, Button, Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default class ProductsList extends Component {

  renderPaginationItems = () => {
    const { currentPage, totalPages, onPageChange } = this.props;
    const items = [];

    // Previous button
    items.push(
      <PaginationItem key="prev" disabled={currentPage === 1}>
        <PaginationLink previous onClick={() => onPageChange(currentPage - 1)} />
      </PaginationItem>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i} active={i === currentPage}>
          <PaginationLink onClick={() => onPageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Next button
    items.push(
      <PaginationItem key="next" disabled={currentPage === totalPages}>
        <PaginationLink next onClick={() => onPageChange(currentPage + 1)} />
      </PaginationItem>
    );

    return items;
  };

  render() {
    const { currentPage, totalPages } = this.props;
    
    return (
      <div>
        <span>{this.props.info.title}</span> -{" "}
        <span>{this.props.currentCategory}</span>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button>{' '}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              {this.renderPaginationItems()}
            </Pagination>
          </div>
        )}
        
        <div className="text-center mt-2">
          <small className="text-muted">
            Sayfa {currentPage} / {totalPages}
          </small>
        </div>
      </div>
    );
  }
}
