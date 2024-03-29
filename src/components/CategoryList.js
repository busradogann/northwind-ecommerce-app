import { ListGroup, ListGroupItem } from "reactstrap";
import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  getCategories = () => (
      fetch('http://localhost:3000/categories')
      .then(response => (response.json()))
      .then(data => this.setState({categories:data}))
  )

  componentDidMount() {
      this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {this.state.counter}
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                onClick={() => this.props.changeCategory(category)} 
                key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
