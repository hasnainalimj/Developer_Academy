import React from "react";
import "./App.css";

import Input from "./Components/Input";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  handleEmail = text => {
    this.setState({
      email: text
    });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <Input handleInput={this.handleEmail} text={email} />
        <h1>{email}</h1>
      </div>
    );
  }
}
