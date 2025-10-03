import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

interface FormDemo2State {
  email: string;
  password: string;
  city: string;
  description: string;
}

export default class FormDemo2 extends Component<{}, FormDemo2State> {
  state: FormDemo2State = {
    email: "",
    password: "",
    city: "",
    description: ""
  };

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value } as Pick<FormDemo2State, keyof FormDemo2State>);
  };

  onSubmithandler = (event: React.FormEvent<HTMLFormElement>) => {
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
