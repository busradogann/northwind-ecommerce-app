import { ListGroup, ListGroupItem } from "reactstrap";
import { Component } from "react";
import { Categories, Category } from "../types/models";

interface CategoryListState {
  categories: Category[];
}

export default class CategoryList extends Component<Categories, CategoryListState> {
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
        <h5 className="mb-3 fw-bold text-info px-2">
          {this.props.info.title}
        </h5>
        <ListGroup flush>
          {this.state.categories.map(category => (
            <ListGroupItem 
              action
              active={category.name === this.props.currentCategory}
              onClick={() => this.props.changeCategory(category)} 
              key={category.id}
              className="border-0 py-2 cursor-pointer"
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span className={category.name === this.props.currentCategory ? 'fw-bold' : ''}>
                  {category.name}
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
