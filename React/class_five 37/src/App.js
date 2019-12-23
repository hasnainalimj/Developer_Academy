import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Lists from "./Components/Lists";
import InputBox from "./Components/InputBox"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: ["A", "B", "C"]
    };
  }

  renderHeader = () => {
    return <h1>World</h1>;
  };

  renderListItems = item => {
    return <li>{item}</li>;
  };

  sayHi = item => {
    alert("Hi", item);
  };

  render() {
    const { lists } = this.state;
    return (
      <div>
        {/* <h1>Hello</h1>

        {this.renderHeader()}

        <ul>
          {lists.map(val => {
            return this.renderListItems(val);
          })}
        </ul> */}
        <Header title="This Is Header" />
      <InputBox>Hasnain Ali : </InputBox>
        <Lists data={lists} sayHi={this.sayHi} />
        <Footer title="This Is Footer" color="blue" />
      </div>
    );
  }
}
