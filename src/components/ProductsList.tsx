import React, { Component } from "react";
import { Table, Button, Pagination, PaginationItem, PaginationLink, Badge, Input, InputGroup, InputGroupText } from "reactstrap";
import { ProductsListProps } from "../types";

export default class ProductsList extends Component<ProductsListProps> {

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
    const { currentPage, totalPages, searchTerm, onSearch } = this.props;
    
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">
            {this.props.info.title}
            {this.props.currentCategory && (
              <Badge color="secondary" className="mx-2">
                {this.props.currentCategory}
              </Badge>
            )}
          </h4>
          <small className="text-muted">
            {this.props.products.length} products found
          </small>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <InputGroup>
            <InputGroupText>
              🔍
            </InputGroupText>
            <Input
              type="text"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              className="border-0"
            />
          </InputGroup>
        </div>
        
        <div className="table-responsive">
          <Table hover striped className="align-middle">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "25%" }}>Product Name</th>
                <th style={{ width: "20%" }} className="d-none d-md-table-cell">Quantity Per Unit</th>
                <th style={{ width: "15%" }}>Unit Price</th>
                <th style={{ width: "15%" }} className="d-none d-sm-table-cell">Stock</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product => (
                <tr key={product.id}>
                  <th scope="row" className="fw-normal">{product.id}</th>
                  <td>
                    <div className="fw-semibold">{product.productName}</div>
                    <div className="d-md-none text-muted small mt-1">
                      {product.quantityPerUnit}
                    </div>
                  </td>
                  <td className="d-none d-md-table-cell">{product.quantityPerUnit}</td>
                  <td>
                    <span className="fw-bold text-success">${product.unitPrice}</span>
                  </td>
                  <td className="d-none d-sm-table-cell">
                    <Badge 
                      color={product.unitsInStock > 10 ? "success" : product.unitsInStock > 0 ? "warning" : "danger"}
                    >
                      {product.unitsInStock}
                    </Badge>
                  </td>
                  <td>
                    <Button 
                      onClick={()=>this.props.addToCart(product)} 
                      color="primary" 
                      size="sm"
                      className="rounded-pill px-3"
                    >
                      Add to Cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination className="mb-0">
              {this.renderPaginationItems()}
            </Pagination>
          </div>
        )}
        
        <div className="text-center mt-3">
          <small className="text-muted">
            Showing page {currentPage} of {totalPages}
          </small>
        </div>
      </div>
    );
  }
}
