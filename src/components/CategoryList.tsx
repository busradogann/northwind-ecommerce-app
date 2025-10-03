import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import React, { Component } from "react";
import { CategoryListProps, Category } from "../types";

interface CategoryListState {
  categories: Category[];
}

export default class CategoryList extends Component<CategoryListProps, CategoryListState> {
  state: CategoryListState = {
    categories: []
  };

  getCategories = (): Promise<void> => (
      fetch('http://localhost:3000/categories')
      .then(response => (response.json()))
      .then((data: Category[]) => this.setState({categories: data}))
  )

  componentDidMount() {
      this.getCategories();
  }

  render() {
    return (
      <div>
        <h5 className="mb-3 fw-bold text-primary">
          {this.props.info.title}
        </h5>
        <ListGroup flush>
          {this.state.categories.map(category => (
            <ListGroupItem 
              action
              active={category.categoryName === this.props.currentCategory}
              onClick={() => this.props.changeCategory(category)} 
              key={category.id}
              className="border-0 py-2 cursor-pointer"
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span className={category.categoryName === this.props.currentCategory ? 'fw-bold' : ''}>
                  {category.categoryName}
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
