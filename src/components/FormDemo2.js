import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: ""
  };

  onChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmithandler = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 3);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmithandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
              <Label for="city">City</Label>
              <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
              <option>Istanbul</option>
              <option>Ankara</option>
              <option>Malatya</option>
              <option>Izmir</option>
              </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
