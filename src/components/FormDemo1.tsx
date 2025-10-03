import { Component } from "react";

interface FormDemo1State {
  userName: string;
  city: string;
}

export default class FormDemo1 extends Component<{}, FormDemo1State> {
  state: FormDemo1State = {
    userName: "",
    city: "",
  };

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //this.setState({userName:event.target.value})
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value } as Pick<FormDemo1State, keyof FormDemo1State>);
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h3>User Name is {this.state.userName}</h3>

          <h3>City Name</h3>
          <input
            name="city"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h3>City is {this.state.city}</h3>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
